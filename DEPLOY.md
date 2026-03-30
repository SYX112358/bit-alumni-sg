# 北京理工大学新加坡校友会 - 零预算部署指南

整体方案：**Supabase (免费) + Vercel (免费)** = 完全零成本

---

## 第一步：创建 Supabase 数据库（5分钟）

1. 前往 https://supabase.com 注册/登录（可用 GitHub 账号）
2. 点击 **New Project**，输入项目名 `bit-alumni-sg`，设置数据库密码，选择区域 **Southeast Asia (Singapore)**
3. 等待项目创建完成后，进入左侧 **SQL Editor**
4. 复制 `supabase-schema.sql` 文件的全部内容，粘贴到编辑器中，点击 **Run** 执行
5. 获取密钥：进入 **Project Settings → API**，复制以下三项：
   - `Project URL` → 用于 `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → 用于 `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → 用于 `SUPABASE_SERVICE_ROLE_KEY`

## 第二步：本地运行验证（可选）

```bash
cd bit-alumni-sg
cp .env.local.example .env.local
# 编辑 .env.local，填入上一步获取的 Supabase 密钥和你的管理密码
npm install
npm run dev
# 访问 http://localhost:3000
```

## 第三步：部署到 Vercel（3分钟）

### 方式一：通过 GitHub 部署（推荐）

1. 将项目推送到 GitHub：
   ```bash
   cd bit-alumni-sg
   git init
   git add .
   git commit -m "初始化北理新加坡校友会官网"
   git remote add origin https://github.com/你的用户名/bit-alumni-sg.git
   git push -u origin main
   ```

2. 前往 https://vercel.com 用 GitHub 登录
3. 点击 **Add New → Project**，选择刚推送的仓库
4. 在 **Environment Variables** 中添加 4 个变量：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_PASSWORD`
5. 点击 **Deploy**，等待完成

### 方式二：Vercel CLI 一键部署

```bash
npm i -g vercel
cd bit-alumni-sg
vercel
# 按提示操作，然后在 Vercel 控制台添加环境变量
```

## 部署完成后

- 官网首页：`https://你的域名.vercel.app`
- 管理后台：`https://你的域名.vercel.app/admin/dashboard?pwd=你设置的密码`

## 免费额度说明

| 服务 | 免费额度 | 对本项目是否够用 |
|------|---------|----------------|
| Supabase | 500MB 数据库 + 1GB 存储 + 50K 月活 | 绰绰有余 |
| Vercel | 100GB 带宽/月 + 无限部署 | 绰绰有余 |
