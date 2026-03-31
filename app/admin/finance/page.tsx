'use client';

import { useState, useEffect, useTransition } from 'react';
import { addFinanceRecord, getAllAlumni, getFinanceRecords } from '@/lib/actions';

export default function FinancePage() {
  const [alumniList, setAlumniList] = useState<any[]>([]);
  const [records, setRecords] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    startTransition(async () => {
      const [a, r] = await Promise.all([getAllAlumni(), getFinanceRecords()]);
      setAlumniList(a);
      setRecords(r);
    });
  };

  const handleSubmit = async (formData: FormData) => {
    const result = await addFinanceRecord(formData);
    if (result.error) {
      setMessage({ type: 'error', text: result.error });
    } else {
      setMessage({ type: 'success', text: '缴费记录录入成功！' });
      loadData(); // 刷新数据
    }
    setTimeout(() => setMessage(null), 4000);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">财务管理</h1>

      {/* 提示消息 */}
      {message && (
        <div
          className={`mb-6 px-4 py-3 rounded-lg text-sm ${
            message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
          {message.type === 'success' && message.text.includes('会费') && (
            <span className="block mt-1 text-xs text-green-600">如校友为普通状态，系统已自动升级为会员校友。</span>
          )}
        </div>
      )}

      {/* 录入缴费表单 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">录入缴费 / 捐款</h2>
        <p className="text-sm text-gray-500 mb-6">
          录入"会费"类型时，系统将自动将"普通校友"升级为"会员校友"。
        </p>
        <form action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">选择校友 *</label>
            <select
              name="alumni_id"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
            >
              <option value="">-- 请选择校友 --</option>
              {alumniList.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} ({a.major}) - {a.status}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">金额 (SGD) *</label>
            <input
              name="amount"
              type="number"
              step="0.01"
              min="0.01"
              required
              placeholder="0.00"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">类型 *</label>
            <select
              name="type"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
            >
              <option value="">-- 请选择类型 --</option>
              <option value="会费">会费</option>
              <option value="捐款">捐款</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">日期 *</label>
            <input
              name="payment_date"
              type="date"
              required
              defaultValue={new Date().toISOString().split('T')[0]}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">备注</label>
            <input
              name="remark"
              type="text"
              placeholder="可选备注信息..."
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-lg bg-[var(--bit-forest)] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--bit-forest-strong)]"
            >
              确认录入
            </button>
          </div>
        </form>
      </div>

      {/* 财务记录列表 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">历史记录</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">校友</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">类型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">金额</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">日期</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">备注</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {records.map((r: any) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{r.alumni?.name || '-'}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        r.type === '会费' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {r.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    S${Number(r.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{r.payment_date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{r.remark || '-'}</td>
                </tr>
              ))}
              {records.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-400 text-sm">
                    暂无财务记录
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
