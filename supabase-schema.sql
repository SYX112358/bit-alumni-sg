-- ============================================================
-- 北京理工大学新加坡校友会 - Supabase 数据库建表语句
-- 请在 Supabase SQL Editor 中运行此脚本
-- ============================================================

-- 1. 创建自定义枚举类型
CREATE TYPE alumni_status AS ENUM ('普通校友', '会员校友');
CREATE TYPE finance_type AS ENUM ('会费', '捐款');

-- 2. 创建校友表 (alumni)
CREATE TABLE alumni (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  major TEXT NOT NULL,
  graduation_year INTEGER NOT NULL CHECK (graduation_year >= 1940 AND graduation_year <= 2100),
  status alumni_status NOT NULL DEFAULT '普通校友',
  phone TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. 创建财务表 (finance)
CREATE TABLE finance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  alumni_id UUID NOT NULL REFERENCES alumni(id) ON DELETE CASCADE,
  amount DECIMAL(12, 2) NOT NULL CHECK (amount > 0),
  type finance_type NOT NULL,
  payment_date DATE NOT NULL DEFAULT CURRENT_DATE,
  remark TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. 创建索引以优化查询性能
CREATE INDEX idx_alumni_name ON alumni(name);
CREATE INDEX idx_alumni_status ON alumni(status);
CREATE INDEX idx_finance_alumni_id ON finance(alumni_id);
CREATE INDEX idx_finance_type ON finance(type);

-- 5. 创建触发器函数：录入"会费"时自动升级校友状态
CREATE OR REPLACE FUNCTION upgrade_alumni_on_membership_fee()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.type = '会费' THEN
    UPDATE alumni
    SET status = '会员校友'
    WHERE id = NEW.alumni_id AND status = '普通校友';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_upgrade_alumni_status
  AFTER INSERT ON finance
  FOR EACH ROW
  EXECUTE FUNCTION upgrade_alumni_on_membership_fee();

-- 6. 启用 Row Level Security（按需开启，管理后台可使用 service_role key 绕过）
ALTER TABLE alumni ENABLE ROW LEVEL SECURITY;
ALTER TABLE finance ENABLE ROW LEVEL SECURITY;

-- 公开读取策略（C端展示用）
CREATE POLICY "Allow public read alumni" ON alumni
  FOR SELECT USING (true);

CREATE POLICY "Allow public read finance" ON finance
  FOR SELECT USING (true);

-- 7. 插入一些示例数据（可选）
INSERT INTO alumni (name, major, graduation_year, status, phone, email) VALUES
  ('张明', '计算机科学与技术', 2018, '会员校友', '+65 9123 4567', 'zhangming@example.com'),
  ('李华', '机械工程', 2020, '普通校友', '+65 9234 5678', 'lihua@example.com'),
  ('王芳', '电子信息工程', 2015, '会员校友', '+65 9345 6789', 'wangfang@example.com'),
  ('赵强', '自动化', 2019, '普通校友', '+65 9456 7890', 'zhaoqiang@example.com'),
  ('陈静', '材料科学与工程', 2021, '普通校友', '+65 9567 8901', 'chenjing@example.com');
