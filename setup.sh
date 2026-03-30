#!/bin/bash
# ============================================================
# 北京理工大学新加坡校友会 - 一键初始化 & 部署脚本
# 使用方式: 在项目根目录运行 bash setup.sh
# ============================================================

set -e

echo ""
echo "=========================================="
echo "  BIT 新加坡校友会 - 项目初始化 & 部署"
echo "=========================================="
echo ""

# ---------- Step 1: 安装依赖 ----------
echo "[1/5] 安装项目依赖..."
npm install
echo "✅ 依赖安装完成"
echo ""

# ---------- Step 2: 配置环境变量 ----------
echo "[2/5] 配置环境变量"
echo ""

if [ -f .env.local ]; then
  echo "检测到已有 .env.local 文件，是否覆盖？(y/N)"
  read -r overwrite
  if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
    echo "跳过环境变量配置"
  else
    rm .env.local
  fi
fi

if [ ! -f .env.local ]; then
  echo "请先前往 https://supabase.com 创建项目（用 GitHub 登录）"
  echo "创建时选择区域：Southeast Asia (Singapore)"
  echo "创建完成后，进入 Project Settings → API 获取以下信息："
  echo ""

  read -p "Supabase Project URL (如 https://xxx.supabase.co): " SUPABASE_URL
  read -p "Supabase anon (public) key: " SUPABASE_ANON_KEY
  read -p "Supabase service_role key: " SUPABASE_SERVICE_KEY
  read -p "管理后台密码 (自定义): " ADMIN_PWD

  cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=${SUPABASE_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_KEY}
ADMIN_PASSWORD=${ADMIN_PWD}
EOF

  echo ""
  echo "✅ .env.local 已生成"
fi
echo ""

# ---------- Step 3: 提示运行 SQL ----------
echo "[3/5] 数据库初始化"
echo ""
echo "⚠️  请在 Supabase Dashboard 中完成以下操作："
echo "   1. 进入你的项目 → 左侧菜单 SQL Editor"
echo "   2. 复制 supabase-schema.sql 的全部内容到编辑器中"
echo "   3. 点击 Run 执行"
echo ""
read -p "完成数据库初始化后按回车继续..."
echo "✅ 数据库初始化完成"
echo ""

# ---------- Step 4: Git 初始化 & 推送到 GitHub ----------
echo "[4/5] 推送代码到 GitHub"
echo ""

if ! command -v git &> /dev/null; then
  echo "❌ 未检测到 git，请先安装 git"
  exit 1
fi

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "初始化北理新加坡校友会官网"
fi

echo "请在 GitHub 上创建一个新仓库："
echo "  前往 https://github.com/new"
echo "  仓库名: bit-alumni-sg"
echo "  设为 Private (推荐)"
echo "  不要勾选 Initialize with README"
echo ""
read -p "输入你的 GitHub 仓库地址 (如 https://github.com/username/bit-alumni-sg.git): " REPO_URL

if [ -n "$REPO_URL" ]; then
  git remote remove origin 2>/dev/null || true
  git remote add origin "$REPO_URL"
  git branch -M main
  git push -u origin main
  echo "✅ 代码已推送到 GitHub"
else
  echo "跳过 GitHub 推送"
fi
echo ""

# ---------- Step 5: Vercel 部署 ----------
echo "[5/5] 部署到 Vercel"
echo ""
echo "请完成以下操作："
echo "  1. 前往 https://vercel.com 用 GitHub 登录"
echo "  2. 点击 Add New → Project"
echo "  3. 选择 bit-alumni-sg 仓库并 Import"
echo "  4. 在 Environment Variables 中添加以下 4 个变量："
echo ""
echo "     NEXT_PUBLIC_SUPABASE_URL"
echo "     NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "     SUPABASE_SERVICE_ROLE_KEY"
echo "     ADMIN_PASSWORD"
echo ""
echo "     (值与 .env.local 中一致)"
echo ""
echo "  5. 点击 Deploy"
echo ""

# 如果安装了 vercel CLI，提供自动部署选项
if command -v vercel &> /dev/null; then
  echo "检测到 Vercel CLI，是否使用 CLI 直接部署？(y/N)"
  read -r use_cli
  if [ "$use_cli" = "y" ] || [ "$use_cli" = "Y" ]; then
    vercel --prod
    echo "✅ 部署完成！"
  fi
fi

echo ""
echo "=========================================="
echo "  🎉 全部完成！"
echo "=========================================="
echo ""
echo "  官网首页: https://你的域名.vercel.app"
echo "  管理后台: https://你的域名.vercel.app/admin/dashboard?pwd=你的密码"
echo ""
echo "  首次登录后台后会自动记住密码 (Cookie 24小时有效)"
echo ""
