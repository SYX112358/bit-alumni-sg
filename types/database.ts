// 数据库类型定义

export type AlumniStatus = '普通校友' | '会员校友';
export type FinanceType = '会费' | '捐款';

export interface Alumni {
  id: string;
  name: string;
  major: string;
  graduation_year: number;
  status: AlumniStatus;
  phone: string | null;
  email: string | null;
  created_at: string;
}

export interface Finance {
  id: string;
  alumni_id: string;
  amount: number;
  type: FinanceType;
  payment_date: string;
  remark: string | null;
  created_at: string;
}

// 带关联校友信息的财务记录
export interface FinanceWithAlumni extends Finance {
  alumni: Pick<Alumni, 'name' | 'major' | 'status'>;
}

// Dashboard 统计数据
export interface DashboardStats {
  totalAlumni: number;
  memberAlumni: number;
  totalDonation: number;
}
