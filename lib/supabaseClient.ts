import { createClient } from '@supabase/supabase-js';

// 从环境变量读取 Supabase 配置
// 请在 .env.local 中配置：
//   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
//   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (仅服务端使用)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 客户端实例（用于 C端公开数据读取）
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 服务端实例（用于 B端管理后台写入操作，绕过 RLS）
export function createServiceClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, serviceRoleKey);
}
