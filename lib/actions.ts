'use server';

import { createServiceClient } from './supabaseClient';
import { revalidatePath } from 'next/cache';
import type { AlumniStatus, FinanceType } from '@/types/database';

// ============================================================
// 校友管理 Actions
// ============================================================

/** 添加新校友 */
export async function addAlumni(formData: FormData) {
  const supabase = createServiceClient();

  const name = formData.get('name') as string;
  const major = formData.get('major') as string;
  const graduation_year = parseInt(formData.get('graduation_year') as string);
  const phone = (formData.get('phone') as string) || null;
  const email = (formData.get('email') as string) || null;

  if (!name || !major || !graduation_year) {
    return { error: '姓名、专业和毕业年份为必填项' };
  }

  const { error } = await supabase.from('alumni').insert({
    name,
    major,
    graduation_year,
    phone,
    email,
    status: '普通校友' as AlumniStatus,
  });

  if (error) {
    return { error: `添加失败: ${error.message}` };
  }

  revalidatePath('/admin/alumni');
  revalidatePath('/admin/dashboard');
  return { success: true };
}

export async function submitPublicAlumniRegistration(formData: FormData) {
  const supabase = createServiceClient();

  const honeypot = (formData.get('website') as string) || '';
  if (honeypot) {
    return { success: true };
  }

  const name = (formData.get('name') as string)?.trim();
  const major = (formData.get('major') as string)?.trim();
  const graduationYearRaw = formData.get('graduation_year') as string;
  const graduation_year = parseInt(graduationYearRaw, 10);
  const phone = ((formData.get('phone') as string) || '').trim() || null;
  const email = ((formData.get('email') as string) || '').trim().toLowerCase() || null;

  if (!name || !major || !graduationYearRaw || !email) {
    return { error: '姓名、专业、毕业年份和邮箱为必填项。' };
  }

  const currentYear = new Date().getFullYear() + 1;
  if (Number.isNaN(graduation_year) || graduation_year < 1940 || graduation_year > currentYear) {
    return { error: '请填写有效的毕业年份。' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { error: '请填写有效的邮箱地址。' };
  }

  const { data: existingByEmail } = await supabase
    .from('alumni')
    .select('id')
    .eq('email', email)
    .maybeSingle();

  if (existingByEmail) {
    return { error: '这个邮箱已经登记过了，如需更新资料请联系管理员。' };
  }

  const { data: existingByName } = await supabase
    .from('alumni')
    .select('id')
    .eq('name', name)
    .eq('graduation_year', graduation_year)
    .maybeSingle();

  if (existingByName) {
    return { error: '系统中已存在相同姓名和毕业年份的校友记录，请联系管理员核对。' };
  }

  const { error } = await supabase.from('alumni').insert({
    name,
    major,
    graduation_year,
    phone,
    email,
    status: '普通校友' as AlumniStatus,
  });

  if (error) {
    return { error: `登记失败: ${error.message}` };
  }

  revalidatePath('/');
  revalidatePath('/admin/alumni');
  revalidatePath('/admin/dashboard');
  return { success: true };
}

// ============================================================
// 财务录入 + 会员状态联动 (核心业务逻辑)
// ============================================================

/**
 * 录入缴费记录
 * 核心逻辑：当录入类型为"会费"时，自动将"普通校友"升级为"会员校友"
 *
 * 说明：数据库层已通过 TRIGGER 实现自动升级，
 * 此处在应用层做双重保障，确保状态一致性。
 */
export async function addFinanceRecord(formData: FormData) {
  const supabase = createServiceClient();

  const alumni_id = formData.get('alumni_id') as string;
  const amount = parseFloat(formData.get('amount') as string);
  const type = formData.get('type') as FinanceType;
  const payment_date = formData.get('payment_date') as string;
  const remark = (formData.get('remark') as string) || null;

  // 参数校验
  if (!alumni_id || !amount || !type || !payment_date) {
    return { error: '校友、金额、类型和日期为必填项' };
  }
  if (amount <= 0) {
    return { error: '金额必须大于 0' };
  }
  if (type !== '会费' && type !== '捐款') {
    return { error: '类型必须为"会费"或"捐款"' };
  }

  // Step 1: 插入财务记录
  const { error: financeError } = await supabase.from('finance').insert({
    alumni_id,
    amount,
    type,
    payment_date,
    remark,
  });

  if (financeError) {
    return { error: `录入失败: ${financeError.message}` };
  }

  // Step 2: 如果类型为"会费"，应用层也主动更新校友状态（双重保障）
  if (type === '会费') {
    const { error: updateError } = await supabase
      .from('alumni')
      .update({ status: '会员校友' as AlumniStatus })
      .eq('id', alumni_id)
      .eq('status', '普通校友');

    if (updateError) {
      console.error('状态联动更新失败（数据库 Trigger 应已处理）:', updateError.message);
    }
  }

  revalidatePath('/admin/finance');
  revalidatePath('/admin/dashboard');
  revalidatePath('/admin/alumni');
  return { success: true };
}

// ============================================================
// 数据查询 Actions
// ============================================================

/** 获取 Dashboard 统计数据 */
export async function getDashboardStats() {
  const supabase = createServiceClient();

  const [alumniRes, memberRes, donationRes] = await Promise.all([
    supabase.from('alumni').select('id', { count: 'exact', head: true }),
    supabase.from('alumni').select('id', { count: 'exact', head: true }).eq('status', '会员校友'),
    supabase.from('finance').select('amount').eq('type', '捐款'),
  ]);

  const totalDonation = (donationRes.data || []).reduce(
    (sum, row) => sum + Number(row.amount),
    0
  );

  return {
    totalAlumni: alumniRes.count || 0,
    memberAlumni: memberRes.count || 0,
    totalDonation,
  };
}

/** 搜索校友列表 */
export async function searchAlumni(keyword: string = '') {
  const supabase = createServiceClient();

  let query = supabase
    .from('alumni')
    .select('*')
    .order('created_at', { ascending: false });

  if (keyword.trim()) {
    query = query.ilike('name', `%${keyword.trim()}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('查询校友失败:', error.message);
    return [];
  }
  return data || [];
}

/** 获取所有校友（用于下拉选择） */
export async function getAllAlumni() {
  const supabase = createServiceClient();
  const { data } = await supabase
    .from('alumni')
    .select('id, name, status, major')
    .order('name');
  return data || [];
}

/** 获取财务记录列表 */
export async function getFinanceRecords() {
  const supabase = createServiceClient();
  const { data } = await supabase
    .from('finance')
    .select('*, alumni(name, major, status)')
    .order('payment_date', { ascending: false });
  return data || [];
}
