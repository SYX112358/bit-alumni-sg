'use client';

import { useState, useEffect, useTransition } from 'react';
import { addAlumni, searchAlumni } from '@/lib/actions';
import type { Alumni } from '@/types/database';

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [keyword, setKeyword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // 加载校友数据
  const loadAlumni = (search: string = '') => {
    startTransition(async () => {
      const data = await searchAlumni(search);
      setAlumni(data as Alumni[]);
    });
  };

  useEffect(() => {
    loadAlumni();
  }, []);

  // 搜索处理
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    loadAlumni(keyword);
  };

  // 添加校友表单提交
  const handleAdd = async (formData: FormData) => {
    const result = await addAlumni(formData);
    if (result.error) {
      setMessage({ type: 'error', text: result.error });
    } else {
      setMessage({ type: 'success', text: '校友添加成功！' });
      setShowModal(false);
      loadAlumni(keyword);
    }
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">校友名册</h1>
        <button
          onClick={() => setShowModal(true)}
          className="rounded-lg bg-[var(--bit-forest)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--bit-forest-strong)]"
        >
          + 添加新校友
        </button>
      </div>

      {/* 提示消息 */}
      {message && (
        <div
          className={`mb-4 px-4 py-3 rounded-lg text-sm ${
            message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* 搜索栏 */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="按姓名搜索校友..."
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
          />
          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isPending ? '搜索中...' : '搜索'}
          </button>
        </div>
      </form>

      {/* 校友数据表格 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">专业</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">毕业年份</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">联系电话</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">邮箱</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {alumni.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{a.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{a.major}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{a.graduation_year}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        a.status === '会员校友'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{a.phone || '-'}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{a.email || '-'}</td>
                </tr>
              ))}
              {alumni.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-400 text-sm">
                    {isPending ? '加载中...' : '暂无校友记录'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 添加校友弹窗 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">添加新校友</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form action={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
                <input name="name" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">专业 *</label>
                <input name="major" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">毕业年份 *</label>
                <input name="graduation_year" type="number" min="1940" max="2100" required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
                <input name="phone" type="tel" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                <input name="email" type="email" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]" />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-[var(--bit-forest)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--bit-forest-strong)]"
                >
                  确认添加
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
