'use client';

import { useRef, useState, useTransition } from 'react';
import { submitPublicAlumniRegistration } from '@/lib/actions';

export function PublicJoinForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitPublicAlumniRegistration(formData);

      if (result.error) {
        setMessage({ type: 'error', text: result.error });
        return;
      }

      formRef.current?.reset();
      setMessage({
        type: 'success',
        text: '登记已提交，校友会后台已经收到你的资料，后续将与您建立联系。',
      });
    });
  };

  return (
    <div className="rounded-[32px] border border-[var(--bit-line)] bg-white p-6 shadow-[var(--bit-shadow)] md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--bit-brick)]">
            Alumni Registration
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-[var(--bit-ink)]">
            校友登记
          </h3>
        </div>
        <div className="rounded-full bg-[color:rgba(18,58,36,0.08)] px-3 py-1 text-xs font-semibold text-[var(--bit-forest)]">
          可立即使用
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-[var(--bit-muted)]">
        提交基础资料后，信息会进入校友会后台名册，便于后续活动通知、联络建档与志愿者对接。
      </p>

      {message && (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            message.type === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-rose-200 bg-rose-50 text-rose-800'
          }`}
        >
          {message.text}
        </div>
      )}

      <form ref={formRef} action={handleSubmit} className="mt-6 grid gap-4">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[var(--bit-ink)]">姓名</span>
            <input
              name="name"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
              placeholder="请输入真实姓名"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[var(--bit-ink)]">毕业年份</span>
            <input
              name="graduation_year"
              type="number"
              min="1940"
              max="2100"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
              placeholder="例如 2018"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[var(--bit-ink)]">专业</span>
          <input
            name="major"
            required
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
            placeholder="例如 计算机科学与技术"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[var(--bit-ink)]">邮箱</span>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
              placeholder="name@example.com"
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-[var(--bit-ink)]">手机号</span>
            <input
              name="phone"
              type="tel"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:border-[var(--bit-forest)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(18,58,36,0.14)]"
              placeholder="+65 ..."
            />
          </label>
        </div>

        <div className="rounded-2xl bg-[var(--bit-paper)] px-4 py-3 text-sm leading-6 text-[var(--bit-muted)]">
          目前登记表用于基础建档与活动联络。提交后如果资料需要补充，管理员会通过您留下的联系方式继续沟通。
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-[var(--bit-forest)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--bit-forest-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? '提交中...' : '提交校友登记'}
        </button>
      </form>
    </div>
  );
}
