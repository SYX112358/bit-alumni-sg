import { NextRequest, NextResponse } from 'next/server';

/**
 * 简单密码保护 Middleware
 * 通过环境变量 ADMIN_PASSWORD 设置后台密码
 * 访问 /admin 路由时，需要通过 URL 参数 ?pwd=xxx 或 Cookie 验证
 *
 * 使用方式：
 *   1. 在 .env.local 中设置 ADMIN_PASSWORD=你的密码
 *   2. 首次访问 /admin/dashboard?pwd=你的密码 即可通过验证
 *   3. 验证通过后会设置 Cookie，后续访问无需再带密码参数
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 仅拦截 /admin 路由
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const adminPassword = process.env.ADMIN_PASSWORD;

  // 如果未设置密码，跳过验证（开发环境友好）
  if (!adminPassword) {
    return NextResponse.next();
  }

  // 检查 URL 参数中的密码
  const urlPwd = searchParams.get('pwd');
  if (urlPwd === adminPassword) {
    // 密码正确：设置 Cookie 并重定向去掉 pwd 参数
    const url = request.nextUrl.clone();
    url.searchParams.delete('pwd');
    const response = NextResponse.redirect(url);
    response.cookies.set('admin_auth', adminPassword, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24小时有效
    });
    return response;
  }

  // 检查 Cookie 中的凭证
  const cookieAuth = request.cookies.get('admin_auth')?.value;
  if (cookieAuth === adminPassword) {
    return NextResponse.next();
  }

  // 未授权：返回 401
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="zh-CN">
    <head><meta charset="utf-8"><title>需要授权</title></head>
    <body style="display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:system-ui;background:#f9fafb;">
      <div style="text-align:center;padding:2rem;">
        <h1 style="color:#003366;font-size:1.5rem;margin-bottom:0.5rem;">管理后台 - 需要授权</h1>
        <p style="color:#666;font-size:0.9rem;">请使用正确的密码参数访问：<code>/admin/dashboard?pwd=你的密码</code></p>
      </div>
    </body>
    </html>`,
    {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    }
  );
}

export const config = {
  matcher: '/admin/:path*',
};
