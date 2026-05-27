'use client';

import { FormEvent, useMemo, useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { btnChip } from '@/components/ui';
import { content } from '@/lib/content';

const fieldClass =
  'w-full rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100';
const labelClass = 'mb-2 block text-sm font-medium text-slate-700';
const reqMark = <span className="text-blue-600">&nbsp;*</span>;

const dialCodes = [
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'Andorra', code: '+376', flag: '🇦🇩' },
  { name: 'Angola', code: '+244', flag: '🇦🇴' },
  { name: 'Antigua and Barbuda', code: '+1', flag: '🇦🇬' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
  { name: 'Bahamas', code: '+1', flag: '🇧🇸' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Barbados', code: '+1', flag: '🇧🇧' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Belize', code: '+501', flag: '🇧🇿' },
  { name: 'Benin', code: '+229', flag: '🇧🇯' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦' },
  { name: 'Botswana', code: '+267', flag: '🇧🇼' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Burkina Faso', code: '+226', flag: '🇧🇫' },
  { name: 'Burundi', code: '+257', flag: '🇧🇮' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Cape Verde', code: '+238', flag: '🇨🇻' },
  { name: 'Central African Republic', code: '+236', flag: '🇨🇫' },
  { name: 'Chad', code: '+235', flag: '🇹🇩' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Comoros', code: '+269', flag: '🇰🇲' },
  { name: 'Congo (Brazzaville)', code: '+242', flag: '🇨🇬' },
  { name: 'Congo (Kinshasa)', code: '+243', flag: '🇨🇩' },
  { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
  { name: "Côte d'Ivoire", code: '+225', flag: '🇨🇮' },
  { name: 'Croatia', code: '+385', flag: '🇭🇷' },
  { name: 'Cuba', code: '+53', flag: '🇨🇺' },
  { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
  { name: 'Czechia', code: '+420', flag: '🇨🇿' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Djibouti', code: '+253', flag: '🇩🇯' },
  { name: 'Dominica', code: '+1', flag: '🇩🇲' },
  { name: 'Dominican Republic', code: '+1', flag: '🇩🇴' },
  { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
  { name: 'Equatorial Guinea', code: '+240', flag: '🇬🇶' },
  { name: 'Eritrea', code: '+291', flag: '🇪🇷' },
  { name: 'Estonia', code: '+372', flag: '🇪🇪' },
  { name: 'Eswatini', code: '+268', flag: '🇸🇿' },
  { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
  { name: 'Fiji', code: '+679', flag: '🇫🇯' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Gabon', code: '+241', flag: '🇬🇦' },
  { name: 'Gambia', code: '+220', flag: '🇬🇲' },
  { name: 'Georgia', code: '+995', flag: '🇬🇪' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Grenada', code: '+1', flag: '🇬🇩' },
  { name: 'Guatemala', code: '+502', flag: '🇬🇹' },
  { name: 'Guinea', code: '+224', flag: '🇬🇳' },
  { name: 'Guinea-Bissau', code: '+245', flag: '🇬🇼' },
  { name: 'Guyana', code: '+592', flag: '🇬🇾' },
  { name: 'Haiti', code: '+509', flag: '🇭🇹' },
  { name: 'Honduras', code: '+504', flag: '🇭🇳' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Iceland', code: '+354', flag: '🇮🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Jamaica', code: '+1', flag: '🇯🇲' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Kiribati', code: '+686', flag: '🇰🇮' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬' },
  { name: 'Laos', code: '+856', flag: '🇱🇦' },
  { name: 'Latvia', code: '+371', flag: '🇱🇻' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Lesotho', code: '+266', flag: '🇱🇸' },
  { name: 'Liberia', code: '+231', flag: '🇱🇷' },
  { name: 'Libya', code: '+218', flag: '🇱🇾' },
  { name: 'Liechtenstein', code: '+423', flag: '🇱🇮' },
  { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
  { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },
  { name: 'Macau', code: '+853', flag: '🇲🇴' },
  { name: 'Madagascar', code: '+261', flag: '🇲🇬' },
  { name: 'Malawi', code: '+265', flag: '🇲🇼' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Maldives', code: '+960', flag: '🇲🇻' },
  { name: 'Mali', code: '+223', flag: '🇲🇱' },
  { name: 'Malta', code: '+356', flag: '🇲🇹' },
  { name: 'Marshall Islands', code: '+692', flag: '🇲🇭' },
  { name: 'Mauritania', code: '+222', flag: '🇲🇷' },
  { name: 'Mauritius', code: '+230', flag: '🇲🇺' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Micronesia', code: '+691', flag: '🇫🇲' },
  { name: 'Moldova', code: '+373', flag: '🇲🇩' },
  { name: 'Monaco', code: '+377', flag: '🇲🇨' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳' },
  { name: 'Montenegro', code: '+382', flag: '🇲🇪' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Mozambique', code: '+258', flag: '🇲🇿' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
  { name: 'Namibia', code: '+264', flag: '🇳🇦' },
  { name: 'Nauru', code: '+674', flag: '🇳🇷' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
  { name: 'Niger', code: '+227', flag: '🇳🇪' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'North Korea', code: '+850', flag: '🇰🇵' },
  { name: 'North Macedonia', code: '+389', flag: '🇲🇰' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Palau', code: '+680', flag: '🇵🇼' },
  { name: 'Palestine', code: '+970', flag: '🇵🇸' },
  { name: 'Panama', code: '+507', flag: '🇵🇦' },
  { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬' },
  { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Rwanda', code: '+250', flag: '🇷🇼' },
  { name: 'Saint Kitts and Nevis', code: '+1', flag: '🇰🇳' },
  { name: 'Saint Lucia', code: '+1', flag: '🇱🇨' },
  { name: 'Saint Vincent and the Grenadines', code: '+1', flag: '🇻🇨' },
  { name: 'Samoa', code: '+685', flag: '🇼🇸' },
  { name: 'San Marino', code: '+378', flag: '🇸🇲' },
  { name: 'São Tomé and Príncipe', code: '+239', flag: '🇸🇹' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Senegal', code: '+221', flag: '🇸🇳' },
  { name: 'Serbia', code: '+381', flag: '🇷🇸' },
  { name: 'Seychelles', code: '+248', flag: '🇸🇨' },
  { name: 'Sierra Leone', code: '+232', flag: '🇸🇱' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
  { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
  { name: 'Solomon Islands', code: '+677', flag: '🇸🇧' },
  { name: 'Somalia', code: '+252', flag: '🇸🇴' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'South Sudan', code: '+211', flag: '🇸🇸' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Sudan', code: '+249', flag: '🇸🇩' },
  { name: 'Suriname', code: '+597', flag: '🇸🇷' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Tajikistan', code: '+992', flag: '🇹🇯' },
  { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Timor-Leste', code: '+670', flag: '🇹🇱' },
  { name: 'Togo', code: '+228', flag: '🇹🇬' },
  { name: 'Tonga', code: '+676', flag: '🇹🇴' },
  { name: 'Trinidad and Tobago', code: '+1', flag: '🇹🇹' },
  { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Turkmenistan', code: '+993', flag: '🇹🇲' },
  { name: 'Tuvalu', code: '+688', flag: '🇹🇻' },
  { name: 'Uganda', code: '+256', flag: '🇺🇬' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Vanuatu', code: '+678', flag: '🇻🇺' },
  { name: 'Vatican City', code: '+379', flag: '🇻🇦' },
  { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },
  { name: 'Zambia', code: '+260', flag: '🇿🇲' },
  { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
] as const;

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const interestOptions = {
  en: ['QMedic', 'QTAU', 'Qukkos', 'QPINN', 'QPR', 'QWIND', 'HPC Integration', 'Investors', 'Partnerships'],
  ko: ['QMedic', 'QTAU', 'Qukkos', 'QPINN', 'QPR', 'QWIND', 'HPC 통합', '투자자', '파트너십'],
  fr: ['QMedic', 'QTAU', 'Qukkos', 'QPINN', 'QPR', 'QWIND', 'Intégration HPC', 'Investisseurs', 'Partenariats'],
};

const messages = {
  en: {
    success: 'Your inquiry has been saved successfully. We will review it shortly.',
    error: 'We could not submit your inquiry. Please try again.',
    helper: 'Use the downloads below for investor and partner materials, or submit an inquiry to discuss pilots, validation programs, or co-development.',
    downloads: 'Downloads',
    required: 'Fields marked * are required.',
    phone: 'Phone',
  },
  ko: {
    success: '문의가 정상적으로 저장되었습니다. 곧 검토하겠습니다.',
    error: '문의 제출에 실패했습니다. 다시 시도해 주세요.',
    helper: '아래 자료를 통해 투자자·파트너 문서를 확인하고, 파일럿·검증 프로그램·공동개발 논의를 위해 문의를 제출할 수 있습니다.',
    downloads: '다운로드',
    required: '* 표시는 필수 입력 항목입니다.',
    phone: '전화번호',
  },
  fr: {
    success: 'Votre demande a bien été enregistrée. Nous l’examinerons rapidement.',
    error: 'Nous n’avons pas pu envoyer votre demande. Veuillez réessayer.',
    helper: 'Téléchargez ci-dessous les documents investisseurs et partenaires, ou envoyez une demande pour discuter de pilotes, de validation ou de co-développement.',
    downloads: 'Téléchargements',
    required: 'Les champs marqués * sont obligatoires.',
    phone: 'Téléphone',
  },
};

export default function ContactPage() {
  const { locale } = useLocale();
  const t = content[locale].contactPage;
  const ui = messages[locale];
  const options = interestOptions[locale];
  const [status, setStatus] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: options[0], dialCode: '+82', phone: '', message: '' });

  // Phone is optional; everything else is required.
  const canSubmit = useMemo(
    () => [form.name, form.email, form.company, form.interest, form.message].every((value) => value.trim().length > 0),
    [form],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          interest: form.interest,
          phone: form.phone.trim() ? `${form.dialCode} ${form.phone.trim()}` : '',
          message: form.message,
          locale,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Request failed');
      }
      setStatus('success');
      setFeedback(ui.success);
      setForm({ name: '', email: '', company: '', interest: options[0], dialCode: '+82', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback(ui.error);
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-8">
          <SectionTitle eyebrow={t.eyebrow} title={t.title} body={t.intro} />
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-card">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{ui.downloads}</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/SQK_Investor_White_Paper_2026_Public_Release.pdf" className={`${btnChip} px-5 py-3 text-sm`}>{content[locale].cta.whitepaper}</a>
              <a href="/SQK_Company_Overview_2026.md" download className={`${btnChip} px-5 py-3 text-sm`}>{content[locale].cta.overview}</a>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{ui.helper}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-card">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block"><span className={labelClass}>{t.form.name}{reqMark}</span><input value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} className={fieldClass} /></label>
            <label className="block"><span className={labelClass}>{t.form.email}{reqMark}</span><input type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className={fieldClass} /></label>
            <label className="block"><span className={labelClass}>{t.form.company}{reqMark}</span><input value={form.company} onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))} className={fieldClass} /></label>
            <label className="block"><span className={labelClass}>{t.form.interest}</span><div className="relative"><select value={form.interest} onChange={(e) => setForm((prev) => ({ ...prev, interest: e.target.value }))} className={`${fieldClass} cursor-pointer appearance-none pr-10`}>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /></div></label>
            <label className="block md:col-span-2">
              <span className={labelClass}>{ui.phone}</span>
              <div className="flex gap-2">
                <div className="relative w-40 shrink-0 sm:w-52">
                  <select value={form.dialCode} onChange={(e) => setForm((prev) => ({ ...prev, dialCode: e.target.value }))} aria-label="Country calling code" className={`${fieldClass} cursor-pointer appearance-none truncate pr-8`}>
                    {dialCodes.map((c) => <option key={c.name} value={c.code}>{c.flag} {c.name} ({c.code})</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
                <input type="tel" inputMode="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className={fieldClass} />
              </div>
            </label>
            <label className="block md:col-span-2"><span className={labelClass}>{t.form.message}{reqMark}</span><textarea value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} rows={6} className={`${fieldClass} min-h-[150px] resize-y`} /></label>
          </div>
          {feedback ? (
            <div className={`mt-5 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
              {feedback}
            </div>
          ) : null}
          <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">{ui.required}</p>
            <button disabled={!canSubmit || status === 'submitting'} type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-medium text-white shadow-brand-glow transition-all duration-200 hover:bg-blue-500 hover:shadow-brand-glow-lg hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none disabled:hover:translate-y-0 sm:w-auto">
              {status === 'submitting' ? 'Sending…' : <>{t.form.submit}<Send className="h-4 w-4" /></>}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
