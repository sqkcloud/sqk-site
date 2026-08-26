'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Atom,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  HeartPulse,
  Layers3,
  Server,
} from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { SectionTitle } from '@/components/site-shell';
import { content, Locale } from '@/lib/content';

const buttonPrimary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800';
const buttonSecondary =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700';

const homeCopy: Record<Locale, any> = {
  en: {
    hero: {
      eyebrow: 'Quantum · AI · HPC · Medical Imaging',
      title: 'From advanced computing to trusted medical imaging.',
      body: 'SQK builds deployable computing systems that connect QTAU orchestration, QPINN physics-informed validation, QMedic clinical workflows, and GPU/HPC infrastructure.',
      primary: 'Explore the platform',
      secondary: 'About SQK',
    },
    facts: [
      ['Founded', '2022'],
      ['Headquarters', 'Seoul, Korea'],
      ['Core stack', 'QTAU · QPINN · QMedic'],
      ['Delivery', 'Quantum · AI · HPC'],
    ],
    company: {
      eyebrow: 'Who We Are',
      title: 'A deep-tech company building production-grade Quantum-AI-HPC systems.',
      body: 'SQK combines advanced-computing R&D with enterprise delivery. Our product stack connects hybrid orchestration, physics-informed intelligence, medical imaging workflows, and scalable GPU/HPC execution.',
      bullets: [
        'Medical imaging R&D and deployable DICOM/PACS workflows',
        'Quantum, GPU, and HPC orchestration for research and enterprise environments',
        'Physics-informed validation and bounded AI for high-trust workloads',
      ],
      link: 'Learn about SQK',
    },
    platforms: {
      eyebrow: 'Core Platforms',
      title: 'Three product layers, one deployable computing stack.',
      body: 'SQK focuses its public product story on QTAU, QPINN, and QMedic, with GPU/HPC infrastructure providing the execution foundation.',
      items: [
        {
          name: 'QTAU',
          subtitle: 'Quantum / GPU / HPC Orchestration',
          body: 'Hybrid workload orchestration, backend abstraction, experiment provenance, tuning, and evidence management across quantum, simulator, GPU, and HPC resources.',
          image: '/qtau-card.png',
          icon: Atom,
        },
        {
          name: 'QPINN',
          subtitle: 'Physics-Informed Reconstruction & Validation',
          body: 'Physics-informed reconstruction and validation for inverse problems, bounded correction, consistency checks, and high-trust scientific or imaging workflows.',
          image: '/qpinn-card.png',
          icon: BrainCircuit,
        },
        {
          name: 'QMedic',
          subtitle: 'Trusted Medical Imaging AI Platform',
          body: 'Low-dose CT restoration and reconstruction workflows with DICOM/PACS integration, quantitative comparison, safety guardrails, and auditable evidence.',
          image: '/qmedic-card.png',
          icon: HeartPulse,
        },
      ],
    },
    stack: {
      eyebrow: 'Technology Stack',
      title: 'Orchestration → physics-informed validation → clinical workflow.',
      body: 'The platform is designed as reusable layers rather than isolated demonstrations. QTAU coordinates compute, QPINN adds domain and physics constraints, and QMedic turns the stack into a deployable medical imaging workflow.',
      labels: ['QTAU', 'QPINN', 'QMedic'],
      sublabels: ['Orchestration & Evidence', 'Physics-Informed Validation', 'Clinical Imaging Workflow'],
      foundation: 'GPU / HPC Infrastructure & Enterprise Operations',
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Medical imaging first, with expansion into scientific and enterprise computing.',
      body: 'SQK applies the same validated computing architecture to high-trust workloads where reproducibility, domain constraints, and scalable execution matter.',
      items: [
        ['Medical Imaging', 'Low-dose CT restoration, reconstruction, comparison, DICOM/PACS workflow integration, and quality evidence.', HeartPulse],
        ['Scientific Computing', 'Physics-informed modeling, inverse problems, optimization, simulation, and research workflows.', Layers3],
        ['Enterprise AI / HPC', 'GPU/Kubernetes platforms, hybrid workload orchestration, observability, and scalable research infrastructure.', Server],
      ],
    },
    news: {
      eyebrow: 'News & Milestones',
      title: 'Public milestones, publications, and ecosystem activity.',
      body: 'Selected external references supporting SQK’s technology, product, and market development.',
      action: 'View source',
      all: 'View all news',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Discuss research, deployment, and partnership opportunities with SQK.',
      body: 'Contact us for QMedic, QTAU, QPINN, GPU/HPC platform projects, joint R&D, and strategic partnerships.',
      action: 'Contact SQK',
    },
  },
  ko: {
    hero: {
      eyebrow: 'Quantum · AI · HPC · Medical Imaging',
      title: '첨단 컴퓨팅에서 신뢰 가능한 의료영상까지.',
      body: 'SQK는 QTAU 오케스트레이션, QPINN 물리기반 검증, QMedic 의료영상 워크플로우, GPU/HPC 인프라를 연결한 실제 배포형 컴퓨팅 시스템을 구축합니다.',
      primary: '플랫폼 보기',
      secondary: 'SQK 소개',
    },
    facts: [
      ['설립', '2022'],
      ['본사', '서울, 대한민국'],
      ['핵심 스택', 'QTAU · QPINN · QMedic'],
      ['사업 영역', 'Quantum · AI · HPC'],
    ],
    company: {
      eyebrow: 'Who We Are',
      title: 'Quantum-AI-HPC 기술을 실제 제품과 운영환경으로 연결하는 딥테크 기업.',
      body: 'SQK는 첨단 컴퓨팅 R&D와 엔터프라이즈 구축 역량을 결합합니다. 하이브리드 오케스트레이션, 물리기반 AI, 의료영상 워크플로우, GPU/HPC 실행환경을 하나의 제품 스택으로 연결합니다.',
      bullets: [
        '의료영상 R&D 및 DICOM/PACS 기반 배포 워크플로우',
        '양자·GPU·HPC를 연결하는 연구·엔터프라이즈 오케스트레이션',
        '고신뢰 워크로드를 위한 물리기반 검증과 bounded AI',
      ],
      link: 'SQK 자세히 보기',
    },
    platforms: {
      eyebrow: 'Core Platforms',
      title: '세 개의 핵심 제품 계층을 하나의 배포형 컴퓨팅 스택으로.',
      body: 'SQK의 공식 제품 스토리는 QTAU, QPINN, QMedic에 집중하며, GPU/HPC 인프라가 대규모 실행 기반을 제공합니다.',
      items: [
        {
          name: 'QTAU',
          subtitle: 'Quantum / GPU / HPC Orchestration',
          body: '양자, 시뮬레이터, GPU, HPC 자원을 연결하는 하이브리드 워크로드 오케스트레이션, 백엔드 추상화, 실험 이력과 실행 증거 관리 계층입니다.',
          image: '/qtau-card.png',
          icon: Atom,
        },
        {
          name: 'QPINN',
          subtitle: 'Physics-Informed Reconstruction & Validation',
          body: '역문제, bounded correction, 물리 일관성 검증 등 도메인 제약이 중요한 과학·의료영상 워크로드를 위한 물리기반 모델링 및 검증 계층입니다.',
          image: '/qpinn-card.png',
          icon: BrainCircuit,
        },
        {
          name: 'QMedic',
          subtitle: 'Trusted Medical Imaging AI Platform',
          body: '저선량 CT 복원·재건, DICOM/PACS 연계, 정량 비교, 안전 가드레일, 추적 가능한 품질 증거를 제공하는 의료영상 플랫폼입니다.',
          image: '/qmedic-card.png',
          icon: HeartPulse,
        },
      ],
    },
    stack: {
      eyebrow: 'Technology Stack',
      title: '오케스트레이션 → 물리기반 검증 → 임상 워크플로우.',
      body: '각 기술을 개별 데모로 나열하지 않고 재사용 가능한 계층으로 구성합니다. QTAU가 컴퓨팅 자원을 조정하고, QPINN이 물리·도메인 제약을 적용하며, QMedic이 이를 실제 의료영상 워크플로우로 연결합니다.',
      labels: ['QTAU', 'QPINN', 'QMedic'],
      sublabels: ['오케스트레이션 & 실행 증거', '물리기반 검증', '의료영상 워크플로우'],
      foundation: 'GPU / HPC Infrastructure & Enterprise Operations',
    },
    applications: {
      eyebrow: 'Applications',
      title: '의료영상에서 시작해 과학컴퓨팅과 엔터프라이즈 HPC로 확장합니다.',
      body: '재현성, 도메인 제약, 대규모 실행이 중요한 고신뢰 워크로드에 동일한 검증형 컴퓨팅 아키텍처를 적용합니다.',
      items: [
        ['Medical Imaging', '저선량 CT 복원·재건, 비교, DICOM/PACS 연계, 품질 증거와 안전 가드레일.', HeartPulse],
        ['Scientific Computing', '물리기반 모델링, 역문제, 최적화, 시뮬레이션, 연구 워크플로우.', Layers3],
        ['Enterprise AI / HPC', 'GPU/Kubernetes 플랫폼, 하이브리드 워크로드 오케스트레이션, 모니터링과 연구 인프라.', Server],
      ],
    },
    news: {
      eyebrow: 'News & Milestones',
      title: '공개 마일스톤, 논문, 생태계 활동.',
      body: 'SQK의 기술, 제품, 시장 개발을 뒷받침하는 주요 외부 공개 자료입니다.',
      action: '원문 보기',
      all: '전체 뉴스 보기',
    },
    contact: {
      eyebrow: 'Contact',
      title: '연구, 구축, 공동사업 기회를 SQK와 논의하세요.',
      body: 'QMedic, QTAU, QPINN, GPU/HPC 플랫폼, 공동 R&D 및 전략적 파트너십 문의를 받고 있습니다.',
      action: 'SQK 문의하기',
    },
  },
  fr: {
    hero: {
      eyebrow: 'Quantum · IA · HPC · Imagerie médicale',
      title: "Du calcul avancé à l’imagerie médicale de confiance.",
      body: "SQK développe des systèmes déployables reliant l’orchestration QTAU, la validation physique QPINN, les flux cliniques QMedic et l’infrastructure GPU/HPC.",
      primary: 'Explorer la plateforme',
      secondary: 'À propos de SQK',
    },
    facts: [
      ['Fondée', '2022'],
      ['Siège', 'Séoul, Corée'],
      ['Pile principale', 'QTAU · QPINN · QMedic'],
      ['Domaines', 'Quantum · IA · HPC'],
    ],
    company: {
      eyebrow: 'Qui sommes-nous',
      title: 'Une entreprise deep-tech qui transforme le Quantum-AI-HPC en systèmes de production.',
      body: "SQK associe R&D en calcul avancé et déploiement d’entreprise. Notre pile relie orchestration hybride, intelligence informée par la physique, imagerie médicale et exécution GPU/HPC.",
      bullets: [
        'R&D en imagerie médicale et flux DICOM/PACS déployables',
        'Orchestration quantum, GPU et HPC pour la recherche et les entreprises',
        'Validation informée par la physique pour les charges de travail à haute confiance',
      ],
      link: 'Découvrir SQK',
    },
    platforms: {
      eyebrow: 'Plateformes principales',
      title: 'Trois couches produit, une seule pile déployable.',
      body: "Le récit produit public de SQK se concentre sur QTAU, QPINN et QMedic, soutenus par l’infrastructure GPU/HPC.",
      items: [
        { name: 'QTAU', subtitle: 'Quantum / GPU / HPC Orchestration', body: "Orchestration hybride, abstraction des backends, provenance expérimentale et gestion des preuves d’exécution.", image: '/qtau-card.png', icon: Atom },
        { name: 'QPINN', subtitle: 'Physics-Informed Reconstruction & Validation', body: "Reconstruction et validation informées par la physique pour les problèmes inverses et les workflows à haute confiance.", image: '/qpinn-card.png', icon: BrainCircuit },
        { name: 'QMedic', subtitle: 'Trusted Medical Imaging AI Platform', body: "Restauration et reconstruction CT, intégration DICOM/PACS, comparaison quantitative, garde-fous et preuves auditables.", image: '/qmedic-card.png', icon: HeartPulse },
      ],
    },
    stack: {
      eyebrow: 'Pile technologique',
      title: 'Orchestration → validation physique → workflow clinique.',
      body: "QTAU coordonne le calcul, QPINN ajoute les contraintes physiques et QMedic transforme la pile en workflow d’imagerie déployable.",
      labels: ['QTAU', 'QPINN', 'QMedic'],
      sublabels: ['Orchestration & preuves', 'Validation physique', 'Workflow d’imagerie clinique'],
      foundation: 'Infrastructure GPU / HPC & opérations entreprise',
    },
    applications: {
      eyebrow: 'Applications',
      title: "L’imagerie médicale d’abord, puis le calcul scientifique et l’entreprise.",
      body: "La même architecture validée s’applique aux workloads exigeant reproductibilité, contraintes de domaine et exécution à grande échelle.",
      items: [
        ['Imagerie médicale', 'CT faible dose, reconstruction, comparaison, DICOM/PACS et preuves de qualité.', HeartPulse],
        ['Calcul scientifique', 'Modélisation physique, problèmes inverses, optimisation et simulation.', Layers3],
        ['IA / HPC entreprise', 'Plateformes GPU/Kubernetes, orchestration hybride et infrastructure de recherche.', Server],
      ],
    },
    news: {
      eyebrow: 'Actualités & jalons',
      title: 'Jalons publics, publications et activité écosystème.',
      body: 'Une sélection de références externes sur les technologies, produits et marchés de SQK.',
      action: 'Voir la source',
      all: 'Toutes les actualités',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons recherche, déploiement et partenariats.',
      body: 'Contactez SQK pour QMedic, QTAU, QPINN, les plateformes GPU/HPC, la R&D conjointe et les partenariats stratégiques.',
      action: 'Contacter SQK',
    },
  },
};

export default function HomePage() {
  const { locale } = useLocale();
  const t = content[locale];
  const h = homeCopy[locale];

  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8 lg:py-14">
          <div className="max-w-2xl lg:py-8">
            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-700">{h.hero.eyebrow}</div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.02]">{h.hero.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{h.hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#solutions" className={buttonPrimary}>{h.hero.primary}<ArrowRight className="h-4 w-4" /></a>
              <Link href="/about" className={buttonSecondary}>{h.hero.secondary}</Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
            <img src="/hero-main.png" alt="SQK Quantum-AI-HPC platform environment" className="h-[360px] w-full object-cover object-center sm:h-[460px] lg:h-[540px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/35 to-transparent" />
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50/70">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-slate-200 px-6 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
            {h.facts.map(([label, value]: [string, string]) => (
              <div key={label} className="px-4 py-5 first:pl-0 sm:px-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</div>
                <div className="mt-1 text-sm font-semibold text-slate-800 sm:text-base">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
        <div>
          <SectionTitle eyebrow={h.company.eyebrow} title={h.company.title} body={h.company.body} />
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">{h.company.link}<ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4">
          {h.company.bullets.map((item: string, index: number) => {
            const icons = [HeartPulse, Cpu, CheckCircle2];
            const Icon = icons[index] || CheckCircle2;
            return (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></div>
                <p className="pt-2 text-base leading-7 text-slate-700">{item}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="solutions" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow={h.platforms.eyebrow} title={h.platforms.title} body={h.platforms.body} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {h.platforms.items.map((item: any) => {
              const Icon = item.icon;
              return (
                <article key={item.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                  <div className="h-56 overflow-hidden border-b border-slate-200 bg-slate-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-950">{item.name}</h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technology" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow={h.stack.eyebrow} title={h.stack.title} body={h.stack.body} />
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {h.stack.labels.map((label: string, index: number) => (
              <div key={label} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Layer {index + 1}</div>
                <div className="mt-3 text-3xl font-semibold">{label}</div>
                <div className="mt-2 text-sm leading-6 text-slate-300">{h.stack.sublabels[index]}</div>
                {index < 2 && <ArrowRight className="absolute -right-7 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-blue-300 lg:block" />}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-5 py-4 text-center text-sm font-semibold text-blue-100">
            <Cpu className="h-5 w-5" />{h.stack.foundation}
          </div>
        </div>
      </section>

      <section id="applications" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow={h.applications.eyebrow} title={h.applications.title} body={h.applications.body} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {h.applications.items.map(([title, body, Icon]: [string, string, any]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow={h.news.eyebrow} title={h.news.title} body={h.news.body} />
          <Link href="/news" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-700">{h.news.all}<ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {t.newsCards.slice(0, 3).map((card) => (
            <a key={card.slug} href={card.href} target="_blank" rel="noreferrer" className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_38px_rgba(15,23,42,0.08)]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{card.tag}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">{h.news.action}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-blue-950 p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">{h.contact.eyebrow}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{h.contact.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{h.contact.body}</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50">{h.contact.action}<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
