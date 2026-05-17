'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { content } from '@/lib/content';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const interestOptions = {
  en: ['QMedic', 'QTAU', 'Qukkos', 'QPINN', 'SuperQuantumStation', 'Investors', 'Partnerships'],
  ko: ['QMedic', 'QTAU', 'Qukkos', 'QPINN', 'SuperQuantumStation', '투자자', '파트너십'],
  fr: ['QMedic', 'QTAU', 'Qukkos', 'QPINN', 'SuperQuantumStation', 'Investisseurs', 'Partenariats'],
};

const messages = {
  en: {
    success: 'Your inquiry has been saved successfully. We will review it shortly.',
    error: 'We could not submit your inquiry. Please try again.',
    helper: 'This form is now connected to a local backend endpoint and stores submissions on the server.',
    downloads: 'Downloads',
  },
  ko: {
    success: '문의가 정상적으로 저장되었습니다. 곧 검토하겠습니다.',
    error: '문의 제출에 실패했습니다. 다시 시도해 주세요.',
    helper: '이 폼은 이제 로컬 백엔드 엔드포인트와 연결되어 서버에 문의 내용을 저장합니다.',
    downloads: '다운로드',
  },
  fr: {
    success: 'Votre demande a bien été enregistrée. Nous l’examinerons rapidement.',
    error: 'Nous n’avons pas pu envoyer votre demande. Veuillez réessayer.',
    helper: 'Ce formulaire est désormais relié à un endpoint backend local qui enregistre les demandes sur le serveur.',
    downloads: 'Téléchargements',
  },
};

export default function ContactPage() {
  const { locale } = useLocale();
  const t = content[locale].contactPage;
  const ui = messages[locale];
  const options = interestOptions[locale];
  const [status, setStatus] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: options[0], message: '' });

  const canSubmit = useMemo(() => Object.values(form).every((value) => value.trim().length > 0), [form]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Request failed');
      }
      setStatus('success');
      setFeedback(ui.success);
      setForm({ name: '', email: '', company: '', interest: options[0], message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback(ui.error);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-8">
          <SectionTitle eyebrow={t.eyebrow} title={t.title} body={t.intro} />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{ui.downloads}</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/SQK_Investor_White_Paper_2026_Public_Release.pdf" className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-50">{content[locale].cta.whitepaper}</a>
              <a href="/SQK_Company_Overview_2026.md" download className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-50">{content[locale].cta.overview}</a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{ui.helper}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">{t.form.name}</span><input value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">{t.form.email}</span><input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">{t.form.company}</span><input value={form.company} onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium text-slate-700">{t.form.interest}</span><select value={form.interest} onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400">{options.map((option) => <option key={option}>{option}</option>)}</select></label>
            <label className="block md:col-span-2"><span className="mb-2 block text-sm font-medium text-slate-700">{t.form.message}</span><textarea value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} rows={6} className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-400" /></label>
          </div>
          {feedback ? (
            <div className={`mt-5 rounded-2xl px-4 py-3 text-sm ${status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
              {feedback}
            </div>
          ) : null}
          <button disabled={!canSubmit || status === 'submitting'} type="submit" className="mt-6 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">
            {status === 'submitting' ? '...' : t.form.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
