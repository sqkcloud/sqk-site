export type Locale = 'en' | 'ko' | 'fr';

export type SiteDict = {
  localeLabel: string;
  nav: {
    home: string;
    about: string;
    solutions: string;
    technology: string;
    applications: string;
    investors: string;
    news: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  proofPoints: string[];
  sections: {
    solutionsEyebrow: string;
    solutionsTitle: string;
    solutionsBody: string;
    technologyEyebrow: string;
    technologyTitle: string;
    technologyBody: string;
    applicationsEyebrow: string;
    applicationsTitle: string;
    applicationsBody: string;
    investorsEyebrow: string;
    investorsTitle: string;
    investorsBody: string;
    newsEyebrow: string;
    newsTitle: string;
    newsBody: string;
    contactEyebrow: string;
    contactTitle: string;
    contactBody: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    intro: string;
    missionTitle: string;
    missionBody: string;
    whyTitle: string;
    whyBody: string;
    bullets: string[];
  };
  investorsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    thesisTitle: string;
    thesisBody: string;
    timelineTitle: string;
    timeline: Array<{ year: string; title: string; body: string }>;
    pillars: Array<{ title: string; body: string }>;
  };
  newsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    readMore: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    form: {
      name: string;
      email: string;
      company: string;
      interest: string;
      message: string;
      submit: string;
    };
  };
  cta: { contact: string; overview: string; whitepaper: string };
  solutionCards: Array<{ name: string; blurb: string; image: string; position?: string }>;
  applicationCards: Array<{ title: string; body: string; image: string }>;
  platformFlow: string[];
  investorCards: Array<{ title: string; body: string }>;
  newsCards: Array<{ slug: string; title: string; body: string; tag: string; href: string }>;
  footer: { line: string };
  businessModelSection: { eyebrow: string; title: string; intro: string; items: Array<{ asset: string; initial: string; expansion: string; buyer: string }>; };
  goToMarketSection: { eyebrow: string; title: string; intro: string; steps: string[]; };
  roadmapSection: { eyebrow: string; title: string; intro: string; phases: Array<{ timeframe: string; commercial: string; product: string; kpi: string }>; proceedsTitle: string; proceeds: string[]; };
};

const shared = {
  solutionCards: [
    { name: 'QTAU', blurb: '', image: '/qtau-card.png' },
    { name: 'Qukkos', blurb: '', image: '/qukkos-card.png', position: 'center 20%' },
    { name: 'QPINN', blurb: '', image: '/qpinn-card.png' },
    { name: 'QMedic', blurb: '', image: '/qmedic-card.png' },
    { name: 'SQS', blurb: '', image: '/superquantumstation-card.png', position: 'center 58%' },
  ],
  applicationCards: [
    { title: 'QMedic Clinical Imaging Platform', body: '', image: '/qmedic-card.png' },
    { title: 'QPINN Physics-Informed Modeling', body: '', image: '/qpinn-card.png' },
    { title: 'QTAU Analysis Workspace', body: '', image: '/qtau-analysis.png' },
  ],
  platformFlow: ['Quantum Validation', 'Hybrid Orchestration', 'Physics-Informed Modeling', 'HPC Execution', 'Domain Applications'],
  newsCards: [
    { slug: 'ibm-investment', title: '', body: '', tag: 'Investment', href: 'https://www.ibm.com/new/announcements/ibm-ventures-invests-in-sqk-and-qodex-quantum-to-accelerate-quantum-innovation' },
    { slug: 'sqs-ces-award', title: '', body: '', tag: 'Award', href: 'https://www.ces.tech/ces-innovation-awards/2024/super-quantum-station/' },
    { slug: 'qmedic-launch', title: '', body: '', tag: 'Healthcare', href: 'https://kr.aving.net/news/articleView.html?idxno=1810067' },
    { slug: 'qmedic-ieee', title: '', body: '', tag: 'Paper', href: 'https://ieeexplore.ieee.org/document/11468144' },
    { slug: 'qukkos-ieee', title: '', body: '', tag: 'Paper', href: 'https://ieeexplore.ieee.org/document/11165960' },
  ],
};

export const content: Record<Locale, SiteDict> = {
  en: {
    localeLabel: 'English',
    nav: { home: 'Home', about: 'About SQK', solutions: 'Solutions', technology: 'Technology', applications: 'Applications', investors: 'Investors', news: 'News', contact: 'Contact' },
    hero: {
      badge: 'Quantum · AI · HPC · Medical Imaging',
      title: 'Trusted computing for medical imaging, scientific modeling, and hybrid HPC operations.',
      body: 'SQK develops deployable Quantum-AI-HPC systems that connect medical imaging, physics-informed modeling, hybrid orchestration, and scalable computing. QMedic, QTAU, QPINN, Qukkos, and GPU/HPC technologies form a reusable platform for research and enterprise deployment.',
      primary: 'Explore Solutions',
      secondary: 'Investor Overview',
    },
    proofPoints: ['QMedic medical imaging platform', 'QTAU quantum / GPU / HPC orchestration', 'QPINN physics-informed validation', 'Hybrid quantum-classical computing', 'GPU / Kubernetes / HPC engineering', 'KISTI research and HPC collaboration', 'Medical imaging research collaboration', 'Enterprise deployment and operations'],
    sections: {
      solutionsEyebrow: 'Solutions',
      solutionsTitle: 'Integrated platforms for Quantum, AI, HPC, and medical imaging.',
      solutionsBody: 'SQK connects QMedic medical imaging, QTAU orchestration, QPINN physics-informed intelligence, Qukkos hybrid workflow technology, and HPC execution capabilities in one deployable technology portfolio.',
      technologyEyebrow: 'Technology Platform',
      technologyTitle: 'From orchestration and physics-informed intelligence to scalable execution.',
      technologyBody: 'SQK combines hybrid orchestration, physics-informed modeling, reproducible execution, and GPU/HPC infrastructure. The same stack supports medical imaging, scientific computing, optimization, and enterprise research workloads.',
      applicationsEyebrow: 'Applications',
      applicationsTitle: 'Advanced computing for medical, scientific, and enterprise workloads.',
      applicationsBody: 'SQK applies its computing platform to medical imaging, physics-informed scientific modeling, hybrid quantum workflows, and GPU/HPC environments where reproducibility, traceability, and scalable execution are essential.',
      investorsEyebrow: 'Investors',
      investorsTitle: 'Building a scalable deep-tech business across software and advanced computing.',
      investorsBody: 'SQK combines existing AI/HPC delivery capabilities with proprietary Quantum-AI and medical imaging platforms, building toward repeatable software, licensing, and enterprise deployment models.',
      newsEyebrow: 'News & Milestones',
      newsTitle: 'Public milestones, technical validation, and ecosystem traction.',
      newsBody: 'SQK highlights milestones that matter for product adoption, external credibility, partner access, and domain expansion across healthcare, quantum-HPC, and industrial computing.',
      contactEyebrow: 'Contact',
      contactTitle: 'Discuss research, partnership, and deployment opportunities with SQK.',
      contactBody: 'Contact SQK regarding QMedic, QTAU, QPINN, quantum-HPC integration, enterprise AI/HPC platforms, joint R&D, and strategic partnerships.',
    },
    aboutPage: {
      eyebrow: 'About SQK',
      title: 'A product-led deep-tech company for validated computing in high-trust domains.',
      intro: 'SQK combines quantum methods, AI, physics-informed modeling, reconstruction technology, and HPC operations into a deployment-oriented business stack. The company leads with QMedic in medical imaging and builds reusable platform capabilities for scientific and industrial workloads.',
      missionTitle: 'Mission',
      missionBody: 'Deliver validated, explainable, and deployable computing systems for sectors where reliability, reproducibility, quality governance, and operational trust determine whether technology can be adopted.',
      whyTitle: 'How SQK creates value',
      whyBody: 'SQK does not treat benchmarking, orchestration, refinement, and modeling as isolated research themes. It packages them into customer-facing solutions, recurring software modules, partner integrations, and enterprise programs across healthcare, scientific computing, and industrial optimization.',
      bullets: ['QMedic for CT/MRI reconstruction, refinement, comparison, and quality governance', 'QTAU for benchmarking, reproducibility, scorecards, and adoption trust', 'Qukkos for hybrid quantum-classical-HPC orchestration', 'QPINN and QPR for physics-informed modeling and guarded refinement', 'HPC-centered execution for simulation, analytics, and industrial scaling'],
    },
    investorsPage: {
      eyebrow: 'Investors',
      title: 'A QMedic-led revenue wedge with scalable platform upside.',
      intro: 'SQK’s investment case is grounded in a practical commercialization sequence. QMedic opens the market through high-trust imaging workflows, and the surrounding Quantum-AI-HPC stack increases defensibility, deployment readiness, and cross-domain expansion potential.',
      thesisTitle: 'Investment thesis',
      thesisBody: 'SQK is converting deep-technology assets into a focused operating model. QMedic supports near-term pilots and API revenue. QTAU adds measurable trust. Qukkos supports hybrid enterprise execution. QPINN and QPR expand scientific, industrial, and imaging performance. HPC integration turns the stack into a deployable platform for healthcare, energy, manufacturing, and research environments.',
      timelineTitle: 'Milestone timeline',
      timeline: [
        { year: '2024', title: 'SuperQuantumStation recognition and ecosystem visibility', body: 'Award-driven visibility broadened partner access and strengthened market awareness across the SQK platform story.' },
        { year: '2025', title: 'QWIND international R&D collaboration', body: 'The QWIND program demonstrates industrial co-development potential and strengthens SQK’s expansion path into energy and optimization domains.' },
        { year: '2026', title: 'Healthcare, HPC, and ecosystem engagement', body: 'IBM Quantum, MathWorks, KISTI, SNUBH, and secure medical AI initiatives strengthen external validation and operational credibility.' },
      ],
      pillars: [
        { title: 'QMedic commercial wedge', body: 'Medical imaging offers a concrete product entry point, a measurable workflow problem, and a path from pilots to recurring software revenue.' },
        { title: 'Validation and trust layer', body: 'QTAU turns technical claims into scorecards, benchmark reports, and reproducibility evidence that supports adoption decisions.' },
        { title: 'Hybrid execution and modeling depth', body: 'Qukkos, QPINN, QPR, and HPC integration extend SQK into simulation-heavy, industrial, and enterprise environments.' },
        { title: 'Reusable monetization structure', body: 'The same platform assets can generate SaaS, API, validation service, orchestration, modeling, licensing, and partner-integration revenue.' },
      ],
    },
    newsPage: {
      eyebrow: 'News & Milestones',
      title: 'Milestones, publications, and public proof points for SQK.',
      intro: 'This section gathers investment announcements, product visibility, publications, and market signals that reinforce SQK’s QMedic-led commercialization strategy.',
      readMore: 'Read article',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Start a conversation with SQK.',
      intro: 'Use this form for QMedic pilots, QTAU benchmarking programs, QPINN and QPR collaborations, quantum-HPC integrations, industrial co-development, and investor inquiries.',
      form: { name: 'Name', email: 'Email', company: 'Company', interest: 'Area of interest', message: 'Message', submit: 'Send inquiry' },
    },
    cta: { contact: 'Contact SQK', overview: 'Download Overview', whitepaper: 'Download White Paper' },
    solutionCards: shared.solutionCards.map((s, i) => ({ ...s, blurb: [
      'Validation, benchmarking, scorecards, and reproducibility reporting that help customers assess trust, deployment readiness, and benchmark performance before scaling adoption.',
      'Hybrid orchestration across classical, quantum, and HPC resources for enterprise workloads, analytics pipelines, simulation operations, and future managed workflow delivery.',
      'Physics-informed modeling for scientific computing, inverse problems, digital twins, and industrial optimization where domain constraints matter as much as raw AI output.',
      'Lead commercial platform for CT/MRI-oriented reconstruction, QPR-assisted refinement, side-by-side comparison, and quality-governed imaging workflows.',
      'Ecosystem access layer for education, onboarding, and partner touchpoints that broadens pipeline reach without competing with the core QMedic revenue story.',
    ][i] })),
    applicationCards: [
      { ...shared.applicationCards[0], body: 'QMedic packages reconstruction, QPR-guided refinement, comparison, and quality governance for hospitals, research imaging teams, imaging software vendors, and medical AI partners.' },
      { ...shared.applicationCards[1], body: 'QPINN supports industrial and scientific domains where black-box AI is insufficient: inverse problems, wind and energy optimization, digital twins, manufacturing simulation, and other HPC-heavy workloads.' },
      { ...shared.applicationCards[2], body: 'QTAU provides evidence, benchmark discipline, and reproducibility reports that help customers, partners, and investors evaluate whether advanced-computing workflows are ready for deployment.' },
    ],
    platformFlow: shared.platformFlow,
    investorCards: [
      { title: 'Healthcare entry point', body: 'QMedic provides a clear CT/MRI-focused commercial wedge with practical pilot, SaaS/API, and partner-integration paths.' },
      { title: 'Industrial expansion path', body: 'QPINN, QPR, QWIND, and HPC execution support expansion into energy, wind systems, digital twins, and industrial optimization.' },
      { title: 'Enterprise infrastructure layer', body: 'QTAU and Qukkos create benchmarking, reporting, orchestration, and managed workflow value beyond a single product.' },
      { title: 'Recurring software revenue logic', body: 'SQK can monetize through subscriptions, API usage, validation modules, enterprise licenses, and long-cycle co-development programs.' },
    ],
    newsCards: [
      { ...shared.newsCards[0], tag: 'Investment', title: 'IBM Ventures invests in SQK', body: 'Public investment visibility that strengthens SQK’s ecosystem position and supports the broader QMedic-led commercialization narrative.' },
      { ...shared.newsCards[1], tag: 'Award', title: 'SuperQuantumStation recognized at CES 2024', body: 'External recognition that expanded market visibility and ecosystem reach for the SQK platform story.' },
      { ...shared.newsCards[2], tag: 'Healthcare', title: 'QMedic public launch coverage', body: 'Public coverage of QMedic as SQK’s reliability-centered medical imaging platform for reconstruction, refinement, and quality-governed workflows.' },
      { ...shared.newsCards[3], tag: 'Paper', title: 'QMedic IEEE publication', body: 'Research publication supporting QMedic’s imaging credibility and reinforcing SQK’s trust-centered product positioning.' },
      { ...shared.newsCards[4], tag: 'Paper', title: 'Qukkos IEEE publication', body: 'Publication supporting SQK’s orchestration and hybrid execution narrative across quantum, classical, and HPC environments.' },
    ],
    businessModelSection: {
      eyebrow: 'Business Model',
      title: 'Multiple revenue engines around one deployable platform.',
      intro: 'QMedic drives near-term commercialization, while SQK expands revenue through validation services, orchestration projects, modeling programs, partner integration, and platform licensing.',
      items: [
        { asset: 'QMedic', initial: 'Research SaaS, paid pilots, API access, study-based processing, and partner integration projects.', expansion: 'Hospital or enterprise license, OEM imaging integration, workflow modules, and multi-site recurring contracts.', buyer: 'Hospitals, research hospitals, imaging centers, medical AI companies, and PACS/OHIF ecosystem partners.' },
        { asset: 'QTAU', initial: 'Benchmark reports, validation service, reproducibility packages, and enterprise PoC support.', expansion: 'Annual validation subscription, audit-ready reporting modules, and enterprise decision-support tooling.', buyer: 'Quantum/AI/HPC adopters, research institutes, infrastructure partners, and advanced R&D teams.' },
        { asset: 'Qukkos', initial: 'Hybrid workflow integration and orchestration implementation projects.', expansion: 'Enterprise workflow engine, managed orchestration, and integration software recurring revenue.', buyer: 'HPC centers, quantum ecosystem partners, industrial R&D teams, and enterprise IT groups.' },
        { asset: 'QPINN / QPR', initial: 'Specialized modeling, refinement, and domain adaptation projects for scientific and industrial use cases.', expansion: 'Optimization licenses, simulation modules, refinement engines, and digital-twin integration.', buyer: 'Energy, wind, manufacturing, scientific computing teams, and engineering organizations.' },
        { asset: 'SuperQuantumStation', initial: 'Subscription, education, and developer access programs.', expansion: 'Ecosystem funnels, partner marketplace participation, and developer acquisition support.', buyer: 'Students, developers, institutions, and partner communities.' },
      ],
    },
    goToMarketSection: {
      eyebrow: 'Go-to-Market',
      title: 'Start with QMedic and expand through validated customer programs.',
      intro: 'SQK’s commercialization path prioritizes a product-led entry point, measurable validation, and repeatable enterprise packaging.',
      steps: [
        'Lead with QMedic in CT/MRI reconstruction, refinement, and quality-governed imaging workflows for research and hospital-adjacent buyers.',
        'Attach QTAU benchmark reports, reproducibility evidence, and quality scorecards to reduce adoption friction and support evaluation.',
        'Use pilot programs and co-development projects to convert imaging, HPC, and industrial partners into paying accounts.',
        'Package repeatable modules: API delivery, dashboards, QPR refinement services, validation reports, and deployment connectors.',
        'Expand into enterprise licensing, OEM integration, and managed workflow contracts across healthcare and industrial domains.',
        'Use QWIND, research collaborations, and ecosystem channels to open adjacent markets such as wind, energy, digital twins, and optimization-heavy workflows.',
      ],
    },
    roadmapSection: {
      eyebrow: 'Growth Roadmap',
      title: 'From domain pilots to recurring platform revenue.',
      intro: 'SQK plans to harden product value in stages: customer validation first, recurring software second, and multi-domain platform expansion third.',
      phases: [
        { timeframe: '0–12 months', commercial: 'Build QMedic pilot pipeline, convert design-partner discussions, and grow healthcare and research reference cases.', product: 'Harden QMedic workflow packaging, automate QTAU reporting, mature QPR refinement, and strengthen integrated demos on HPC infrastructure.', kpi: 'Pilot pipeline, LOIs/MOUs, benchmark-report delivery, partner case studies, and first recurring API revenue.' },
        { timeframe: '12–24 months', commercial: 'Convert pilots into recurring contracts and broaden partner-led revenue across imaging and workflow integrations.', product: 'Launch QMedic SaaS/API packages, expand QTAU enterprise validation, and operationalize Qukkos workflow integration.', kpi: 'Contracted revenue, active deployments, API usage growth, and partner integrations.' },
        { timeframe: '24–36 months', commercial: 'Scale platform revenue into healthcare, scientific computing, and industrial optimization programs.', product: 'Deliver cross-solution integration, PQC-aware secure medical AI capabilities, and broader digital-twin or energy-domain offerings.', kpi: 'Enterprise licenses, OEM relationships, gross margin, renewal rate, and cross-domain expansion revenue.' },
      ],
      proceedsTitle: 'Execution priorities',
      proceeds: [
        'Productization: QMedic workflow hardening, QPR refinement modules, QTAU report automation, and deployment connectors.',
        'Validation and evidence: data partnerships, pilot support, benchmark studies, documentation, and quality-management preparation.',
        'Engineering and HPC: scalable backend, orchestration, MLOps/HPC integration, security, observability, and user-facing dashboards.',
        'Commercialization: enterprise sales, partner development, co-development programs, investor relations, and market-entry materials.',
        'Governance and compliance: privacy, security review, legal review, claim substantiation, and regulatory pathway preparation where applicable.',
      ],
    },
    footer: { line: 'SQK · Validated Quantum-AI-HPC systems for healthcare, scientific computing, and industrial optimization' },
  },
  ko: {
    localeLabel: '한국어',
    nav: { home: '홈', about: 'About SQK', solutions: '솔루션', technology: '기술', applications: '적용 분야', investors: '투자자', news: '뉴스', contact: '문의' },
    hero: {
      badge: 'Quantum · AI · HPC · Medical Imaging',
      title: '의료영상, 과학컴퓨팅, 하이브리드 HPC를 연결하는 신뢰 가능한 첨단 컴퓨팅.',
      body: 'SQK는 의료영상, 물리기반 모델링, 하이브리드 오케스트레이션, GPU/HPC를 연결하는 실제 배포형 Quantum-AI-HPC 시스템을 개발합니다. QMedic, QTAU, QPINN, Qukkos와 HPC 기술을 연구 및 엔터프라이즈 환경에 적용합니다.',
      primary: '솔루션 보기',
      secondary: '투자자 개요',
    },
    proofPoints: ['QMedic 의료영상 플랫폼', 'QTAU 양자 / GPU / HPC 오케스트레이션', 'QPINN 물리기반 검증', '하이브리드 양자-고전 컴퓨팅', 'GPU / Kubernetes / HPC 엔지니어링', 'KISTI 연구 및 HPC 협력', '의료영상 연구 협력', '엔터프라이즈 구축 및 운영'],
    sections: {
      solutionsEyebrow: '솔루션',
      solutionsTitle: 'Quantum, AI, HPC, 의료영상을 연결하는 통합 플랫폼.',
      solutionsBody: 'SQK는 QMedic 의료영상, QTAU 오케스트레이션, QPINN 물리기반 지능, Qukkos 하이브리드 워크플로우, HPC 실행 역량을 하나의 배포 가능한 기술 포트폴리오로 연결합니다.',
      technologyEyebrow: '기술 플랫폼',
      technologyTitle: '오케스트레이션과 물리기반 지능에서 대규모 실행까지 연결합니다.',
      technologyBody: 'SQK는 하이브리드 오케스트레이션, 물리기반 모델링, 재현 가능한 실행, GPU/HPC 인프라를 결합합니다. 동일한 스택을 의료영상, 과학컴퓨팅, 최적화, 엔터프라이즈 연구환경에 적용합니다.',
      applicationsEyebrow: '적용 분야',
      applicationsTitle: '의료, 과학, 엔터프라이즈 워크로드를 위한 첨단 컴퓨팅.',
      applicationsBody: 'SQK는 재현성, 추적성, 대규모 실행이 중요한 의료영상, 물리기반 과학 모델링, 하이브리드 양자 워크플로우, GPU/HPC 환경에 동일한 컴퓨팅 플랫폼을 적용합니다.',
      investorsEyebrow: '투자자',
      investorsTitle: '소프트웨어와 첨단 컴퓨팅을 기반으로 확장 가능한 딥테크 사업을 구축합니다.',
      investorsBody: 'SQK는 기존 AI/HPC 구축 역량과 독자적인 Quantum-AI 및 의료영상 플랫폼을 결합하여 반복 가능한 소프트웨어, 라이선스, 엔터프라이즈 구축 모델로 확장하고 있습니다.',
      newsEyebrow: '뉴스 및 마일스톤',
      newsTitle: '제품 도입과 생태계 확장을 뒷받침하는 공개 마일스톤.',
      newsBody: '헬스케어, 양자-HPC, 산업 컴퓨팅 영역에서 SQK의 상용화 스토리를 강화하는 공개 발표, 논문, 수상, 협력 이력을 정리합니다.',
      contactEyebrow: '문의',
      contactTitle: '연구, 파트너십, 구축 기회를 SQK와 논의하십시오.',
      contactBody: 'QMedic, QTAU, QPINN, 양자-HPC 통합, 엔터프라이즈 AI/HPC 플랫폼, 공동 R&D 및 전략적 파트너십에 대해 SQK와 논의할 수 있습니다.',
    },
    aboutPage: {
      eyebrow: 'About SQK',
      title: '고신뢰 도메인을 위한 제품지향형 딥테크 기업.',
      intro: 'SQK는 양자 방법론, AI, 물리기반 모델링, 재건 기술, HPC 운영을 하나의 사업화 가능한 스택으로 결합합니다. 의료영상의 QMedic이 상용화의 중심이며, 과학·산업 워크로드에 재사용 가능한 플랫폼 역량을 함께 구축합니다.',
      missionTitle: '미션',
      missionBody: '정밀성, 재현성, 설명 가능성, 품질 거버넌스가 실제 도입의 전제가 되는 산업을 위해 검증형 계산 시스템을 제공하는 것입니다.',
      whyTitle: '가치 창출 방식',
      whyBody: 'SQK는 벤치마킹, 오케스트레이션, 정제, 물리기반 모델링을 각각의 연구 테마로 두지 않고, 고객이 구매할 수 있는 제품, 반복 가능한 소프트웨어 모듈, 파트너 통합, 공동개발 프로그램으로 묶어냅니다.',
      bullets: ['QMedic: CT/MRI 재건, 정제, 비교, 품질 거버넌스', 'QTAU: 벤치마킹, 재현성, 스코어카드, 신뢰 계층', 'Qukkos: 양자-고전-HPC 하이브리드 오케스트레이션', 'QPINN·QPR: 물리기반 모델링과 정제 엔진', 'HPC 중심 실행 구조: 시뮬레이션, 분석, 산업 확장'],
    },
    investorsPage: {
      eyebrow: '투자자',
      title: 'QMedic을 매출 웨지로, 플랫폼을 업사이드로 만드는 구조.',
      intro: 'SQK의 투자 포인트는 화려한 기술 나열이 아니라 실전 상용화 순서에 있습니다. QMedic이 고신뢰 의료영상 시장을 열고, Quantum-AI-HPC 스택이 제품의 신뢰성, 실행성, 확장성을 높입니다.',
      thesisTitle: '투자 논리',
      thesisBody: 'SQK는 딥테크 자산을 운영 가능한 비즈니스 모델로 전환하고 있습니다. QMedic이 파일럿과 API 매출을 만들고, QTAU가 신뢰 지표를 제공하며, Qukkos가 하이브리드 실행을 담당하고, QPINN·QPR이 과학·산업·이미징 성능을 확장합니다. HPC 통합은 이 모든 기능을 실제 현장 워크로드에 연결합니다.',
      timelineTitle: '마일스톤 타임라인',
      timeline: [
        { year: '2024', title: 'SuperQuantumStation 가시성 확보', body: '수상과 공개 인지도를 통해 SQK 플랫폼의 시장 인지도와 파트너 접점을 넓혔습니다.' },
        { year: '2025', title: 'QWIND 국제 공동연구', body: 'QWIND는 에너지 및 산업 최적화 방향의 공동개발 가능성을 보여주는 사례로, 비의료 도메인 확장성의 근거가 됩니다.' },
        { year: '2026', title: '헬스케어·HPC·생태계 연계 강화', body: 'IBM Quantum, MathWorks, KISTI, SNUBH, 보안 의료AI 이니셔티브가 외부 검증과 사업 실행력을 강화합니다.' },
      ],
      pillars: [
        { title: 'QMedic 상용 웨지', body: 'CT/MRI 중심의 명확한 워크플로우 문제를 해결하며 파일럿, SaaS/API, 파트너 통합으로 이어질 수 있습니다.' },
        { title: '검증과 신뢰 계층', body: 'QTAU는 스코어카드, 벤치마크 리포트, 재현성 증거를 통해 도입 결정을 돕습니다.' },
        { title: '하이브리드 실행과 모델링 심화', body: 'Qukkos, QPINN, QPR, HPC 통합을 통해 시뮬레이션 중심 산업·과학 도메인으로 확장 가능합니다.' },
        { title: '반복 가능한 매출 구조', body: '구독, API, 검증 서비스, 엔터프라이즈 라이선스, 공동개발, 파트너 통합 매출로 연결될 수 있습니다.' },
      ],
    },
    newsPage: {
      eyebrow: '뉴스 및 마일스톤',
      title: 'SQK의 제품·논문·생태계 이력을 보여주는 공개 기록.',
      intro: '투자, 제품 공개, 논문, 수상, 협력 발표를 한 곳에 모아 SQK의 QMedic 중심 상용화 스토리를 강화합니다.',
      readMore: '기사 보기',
    },
    contactPage: {
      eyebrow: '문의',
      title: 'SQK와 대화를 시작해보세요.',
      intro: '이 양식은 QMedic 파일럿, QTAU 검증, QPINN·QPR 공동연구, 양자-HPC 통합, 산업 도메인 적용, 투자자 및 파트너 문의를 위한 연락 창구입니다.',
      form: { name: '이름', email: '이메일', company: '회사명', interest: '관심 분야', message: '메시지', submit: '문의 보내기' },
    },
    cta: { contact: 'SQK 문의하기', overview: '회사 개요 다운로드', whitepaper: '백서 다운로드' },
    solutionCards: shared.solutionCards.map((s, i) => ({ ...s, blurb: [
      '도입 전에 신뢰성과 실행 가능성을 평가할 수 있도록 벤치마킹, 재현성, 스코어카드, 리포팅을 제공하는 검증 계층입니다.',
      '고전·양자·HPC 자원을 연결해 엔터프라이즈 워크플로우, 시뮬레이션, 분석 파이프라인을 운영하는 하이브리드 오케스트레이션 계층입니다.',
      '과학컴퓨팅, 역문제, 디지털 트윈, 산업 최적화처럼 도메인 제약이 중요한 영역을 위한 물리기반 모델링 계층입니다.',
      'QPR 기반 정제와 비교·품질 거버넌스를 결합한 CT/MRI 의료영상 상용 플랫폼입니다.',
      '교육, 온보딩, 파트너 접점 확대를 담당하는 생태계 레이어로서 QMedic 중심 영업을 보완합니다.',
    ][i] })),
    applicationCards: [
      { ...shared.applicationCards[0], body: 'QMedic은 병원, 연구영상팀, 이미징 소프트웨어 벤더, 의료 AI 파트너를 위해 재건, QPR 정제, 비교, 품질 거버넌스를 패키징합니다.' },
      { ...shared.applicationCards[1], body: 'QPINN은 풍력·에너지 최적화, 제조 시뮬레이션, 디지털 트윈, 역문제 등 블랙박스 AI만으로는 충분하지 않은 산업·과학 도메인을 지원합니다.' },
      { ...shared.applicationCards[2], body: 'QTAU는 벤치마킹, 재현성, 스코어카드, 보고 체계를 통해 고객과 파트너가 실제 배포 준비도를 판단할 수 있게 합니다.' },
    ],
    platformFlow: ['양자 검증', '하이브리드 오케스트레이션', '물리기반 모델링', 'HPC 실행', '도메인 응용'],
    investorCards: [
      { title: '헬스케어 진입점', body: 'QMedic이 CT/MRI 중심의 명확한 문제를 해결하며 파일럿과 반복 계약의 출발점이 됩니다.' },
      { title: '산업 확장 경로', body: 'QPINN, QPR, QWIND, HPC 실행 구조는 풍력·에너지·디지털 트윈·산업 최적화로의 확장을 뒷받침합니다.' },
      { title: '엔터프라이즈 인프라 가치', body: 'QTAU와 Qukkos는 벤치마킹, 리포팅, 오케스트레이션, 관리형 워크플로우 가치를 제공합니다.' },
      { title: '반복 매출 구조', body: '구독, API 사용량, 검증 서비스, 엔터프라이즈 라이선스, 공동개발 매출로 이어질 수 있습니다.' },
    ],
    newsCards: [
      { ...shared.newsCards[0], tag: '투자', title: 'IBM Ventures의 SQK 투자', body: 'QMedic 중심 상용화와 SQK 생태계 확장성을 뒷받침하는 공개 투자 이력입니다.' },
      { ...shared.newsCards[1], tag: '수상', title: 'SuperQuantumStation CES 2024 수상', body: 'SQK 플랫폼 스토리의 시장 가시성과 외부 신뢰도를 높인 공개 수상 이력입니다.' },
      { ...shared.newsCards[2], tag: '헬스케어', title: 'QMedic 공개 기사', body: '재건·정제·품질 거버넌스를 중심으로 QMedic을 소개한 공개 기사입니다.' },
      { ...shared.newsCards[3], tag: '논문', title: 'QMedic IEEE 논문', body: 'QMedic의 의료영상 신뢰성과 기술적 기반을 보여주는 IEEE 공개 논문입니다.' },
      { ...shared.newsCards[4], tag: '논문', title: 'Qukkos IEEE 논문', body: '양자·고전·HPC 환경을 연결하는 SQK 오케스트레이션 서사를 보강하는 IEEE 논문입니다.' },
    ],
    businessModelSection: {
      eyebrow: '비즈니스 모델',
      title: '하나의 플랫폼에서 파생되는 다중 수익 엔진.',
      intro: 'QMedic이 단기 상용화를 이끌고, SQK는 검증 서비스, 오케스트레이션 프로젝트, 모델링 프로그램, 파트너 통합, 플랫폼 라이선스로 매출을 확장합니다.',
      items: [
        { asset: 'QMedic', initial: '연구 SaaS, 유료 파일럿, API 접근, 스터디 기반 처리, 파트너 통합 프로젝트.', expansion: '병원/엔터프라이즈 라이선스, OEM 이미징 통합, 워크플로우 모듈, 멀티사이트 반복 계약.', buyer: '병원, 연구병원, 이미징 센터, 의료 AI 기업, PACS/OHIF 파트너.' },
        { asset: 'QTAU', initial: '벤치마크 리포트, 검증 서비스, 재현성 패키지, 엔터프라이즈 PoC 지원.', expansion: '연간 검증 구독, 감사 대응형 리포트, 의사결정 지원 툴.', buyer: '양자/AI/HPC 도입 기업, 연구기관, 인프라 파트너, 고급 R&D 팀.' },
        { asset: 'Qukkos', initial: '하이브리드 워크플로우 통합 및 오케스트레이션 구축 프로젝트.', expansion: '엔터프라이즈 워크플로우 엔진, 관리형 오케스트레이션, 통합 소프트웨어 반복 매출.', buyer: 'HPC 센터, 양자 생태계 파트너, 산업 R&D 팀, 엔터프라이즈 IT 조직.' },
        { asset: 'QPINN / QPR', initial: '산업·과학 도메인을 위한 모델링 및 정제 공동개발 프로젝트.', expansion: '최적화 라이선스, 시뮬레이션 모듈, 정제 엔진, 디지털 트윈 통합.', buyer: '에너지, 풍력, 제조, 과학컴퓨팅 조직, 엔지니어링 기업.' },
        { asset: 'SuperQuantumStation', initial: '구독, 교육, 개발자 접근 프로그램.', expansion: '생태계 프로그램, 파트너 마켓플레이스, 개발자 유입 채널.', buyer: '학생, 개발자, 기관, 파트너 커뮤니티.' },
      ],
    },
    goToMarketSection: {
      eyebrow: '시장 진입 전략',
      title: 'QMedic으로 시작하고 검증을 결합해 반복 매출로 전환합니다.',
      intro: 'SQK의 상용화는 제품 중심 진입, 측정 가능한 검증, 반복 가능한 엔터프라이즈 패키징 순서로 설계되어 있습니다.',
      steps: [
        'QMedic으로 시작: CT/MRI 재건, 정제, 품질 거버넌스 워크플로우를 병원 인접 시장과 연구 시장에 제안합니다.',
        'QTAU 결합: 벤치마크 리포트, 재현성 증거, 품질 스코어카드를 패키징해 도입 장벽을 낮춥니다.',
        '파일럿과 공동개발 전환: 의료영상, HPC, 산업 파트너를 유료 계정과 공동개발 프로젝트로 전환합니다.',
        '반복 모듈 상품화: API, 대시보드, QPR 정제 서비스, 검증 리포트, 배포 커넥터를 패키징합니다.',
        '엔터프라이즈 라이선스 확장: 헬스케어와 산업 도메인에서 OEM, 라이선스, 관리형 워크플로우 계약으로 확장합니다.',
        'QWIND와 연구 협력 활용: 풍력·에너지·디지털 트윈·산업 최적화와 같은 인접 시장으로 확장합니다.',
      ],
    },
    roadmapSection: {
      eyebrow: '성장 로드맵',
      title: '도메인 파일럿에서 반복 플랫폼 매출로.',
      intro: 'SQK는 고객 검증, 반복 소프트웨어, 다중 도메인 확장의 3단계로 제품을 고도화합니다.',
      phases: [
        { timeframe: '0–12개월', commercial: 'QMedic 파일럿 파이프라인 구축, 디자인 파트너 전환, 헬스케어·연구 레퍼런스 확보.', product: 'QMedic 패키징 고도화, QTAU 리포트 자동화, QPR 정제 성숙, HPC 기반 통합 데모 강화.', kpi: '파일럿 파이프라인, LOI/MOU, 벤치마크 리포트, 파트너 사례, 초기 API 반복 매출.' },
        { timeframe: '12–24개월', commercial: '파일럿을 반복 계약으로 전환하고 이미징 및 워크플로우 파트너 매출 확대.', product: 'QMedic SaaS/API, QTAU 엔터프라이즈 검증, Qukkos 워크플로우 통합 운영.', kpi: '계약 매출, 활성 배포 수, API 사용량 증가, 파트너 통합 수.' },
        { timeframe: '24–36개월', commercial: '헬스케어, 과학컴퓨팅, 산업 최적화 프로그램으로 플랫폼 매출 확대.', product: '교차 솔루션 통합, PQC 기반 보안 의료AI, 디지털 트윈·에너지 도메인 확장.', kpi: '엔터프라이즈 라이선스, OEM 관계, 총마진, 갱신율, 도메인 확장 매출.' },
      ],
      proceedsTitle: '투자금 사용처',
      proceeds: [
        '제품화: QMedic 워크플로우 고도화, QPR 정제 모듈, QTAU 리포트 자동화, 배포 커넥터.',
        '검증 및 증거화: 데이터 파트너십, 파일럿 지원, 벤치마크 연구, 문서화, 품질관리 준비.',
        '엔지니어링 및 HPC: 확장형 백엔드, 오케스트레이션, MLOps/HPC 통합, 보안, 관측성, 사용자 대시보드.',
        '상용화: 엔터프라이즈 세일즈, 파트너 개발, 공동개발 프로그램, 투자자 관계, 시장 진입 자료.',
        '거버넌스 및 컴플라이언스: 개인정보, 보안 검토, 법무 검토, 주장 검증, 규제 경로 준비.',
      ],
    },
    footer: { line: 'SQK · 헬스케어, 과학컴퓨팅, 산업 최적화를 위한 검증형 Quantum-AI-HPC 시스템' },
  },
  fr: {
    localeLabel: 'Français',
    nav: { home: 'Accueil', about: 'À propos', solutions: 'Solutions', technology: 'Technologie', applications: 'Applications', investors: 'Investisseurs', news: 'Actualités', contact: 'Contact' },
    hero: {
      badge: 'Plateforme Quantum-AI-HPC validée pour les secteurs à haute confiance',
      title: 'QMedic au centre d’une plateforme de calcul avancé pour l’imagerie, la modélisation scientifique et les opérations HPC hybrides.',
      body: 'SQK construit des systèmes de calcul validés, sécurisés et déployables. QMedic est le produit commercial principal pour les workflows CT/MRI, tandis que QTAU, Qukkos, QPINN, QPR et l’intégration HPC apportent la validation, l’orchestration, le raffinement et la capacité d’exécution nécessaires au déploiement réel.',
      primary: 'Découvrir les solutions',
      secondary: 'Vue investisseurs',
    },
    proofPoints: ['Commercialisation des workflows QMedic', 'Validation et scorecards QTAU', 'Collaboration R&D industrielle QWIND', 'Engagement écosystème IBM Quantum', 'Axe de collaboration MathWorks et HPC', 'R&D conjointe KISTI et transfert', 'Activité projet CT/MRI SNUBH', 'Feuille de route secure medical AI et PQC'],
    sections: {
      solutionsEyebrow: 'Solutions',
      solutionsTitle: 'Un produit commercial soutenu par des moteurs plateforme réutilisables.',
      solutionsBody: 'SQK ne juxtapose pas des outils disparates. QMedic porte l’entrée marché en imagerie médicale, tandis que QTAU, Qukkos, QPINN et QPR apportent validation, orchestration hybride, modélisation guidée par la physique et raffinement contrôlé pouvant ensuite s’étendre aux domaines scientifiques, industriels et HPC.',
      technologyEyebrow: 'Plateforme technologique',
      technologyTitle: 'De la validation et du raffinement jusqu’à l’exécution sur HPC.',
      technologyBody: 'QTAU mesure et benchmarke. Qukkos orchestre les workflows hybrides. QPINN apporte le raisonnement guidé par la physique. QPR renforce reconstruction et raffinement. L’infrastructure HPC exécute les charges d’imagerie, de simulation, d’optimisation et d’analytique industrielle.',
      applicationsEyebrow: 'Applications',
      applicationsTitle: 'D’abord l’imagerie médicale, puis l’extension scientifique et industrielle.',
      applicationsBody: 'Le premier wedge commercial est QMedic pour la reconstruction, le raffinement, la comparaison et la gouvernance qualité en CT et IRM. La même plateforme peut ensuite s’étendre aux jumeaux numériques, aux problèmes inverses, à l’optimisation énergie/éolien, à la simulation industrielle et à d’autres workflows intensifs en HPC.',
      investorsEyebrow: 'Investisseurs',
      investorsTitle: 'Une commercialisation ciblée avec un levier plateforme.',
      investorsBody: 'QMedic porte le revenu à court terme, tandis que QTAU, Qukkos, QPINN, QPR et les capacités HPC renforcent la barrière technique, l’extension sectorielle et le revenu logiciel récurrent.',
      newsEyebrow: 'Actualités & jalons',
      newsTitle: 'Jalons publics, validation technique et traction écosystème.',
      newsBody: 'SQK met en avant les publications, annonces et collaborations qui soutiennent l’adoption produit, la crédibilité externe et l’extension vers la santé, le quantum-HPC et les domaines industriels.',
      contactEyebrow: 'Contact',
      contactTitle: 'Échangez avec SQK sur des pilotes, partenariats et déploiements.',
      contactBody: 'SQK peut discuter de pilotes QMedic, de programmes de validation QTAU, de collaborations QPINN/QPR, d’intégrations quantum-HPC, de co-développement industriel et d’échanges investisseurs.',
    },
    aboutPage: {
      eyebrow: 'À propos de SQK',
      title: 'Une entreprise deep-tech orientée produit pour les domaines à haute confiance.',
      intro: 'SQK relie méthodes quantiques, IA, modélisation guidée par la physique, technologies de reconstruction et opérations HPC dans une pile déployable. QMedic mène l’entrée commerciale en imagerie médicale, tandis que la plateforme se réutilise pour les workloads scientifiques et industriels.',
      missionTitle: 'Mission',
      missionBody: 'Fournir des systèmes de calcul validés pour les secteurs où fiabilité, reproductibilité, explicabilité et gouvernance qualité conditionnent l’adoption réelle.',
      whyTitle: 'Création de valeur',
      whyBody: 'SQK ne traite pas benchmarking, orchestration, raffinement et modélisation comme des thèmes de recherche isolés. L’entreprise les transforme en produits commercialisables, modules logiciels récurrents, intégrations partenaires et programmes de co-développement.',
      bullets: ['QMedic pour reconstruction, raffinement, comparaison et gouvernance qualité CT/IRM', 'QTAU pour benchmarking, reproductibilité, scorecards et couche de confiance', 'Qukkos pour orchestration hybride quantique-classique-HPC', 'QPINN et QPR pour modélisation guidée par la physique et raffinement contrôlé', 'Exécution centrée HPC pour simulation, analytique et montée en charge industrielle'],
    },
    investorsPage: {
      eyebrow: 'Investisseurs',
      title: 'Un wedge de revenu QMedic avec un upside plateforme évolutif.',
      intro: 'Le cas d’investissement SQK repose sur une séquence de commercialisation concrète. QMedic ouvre le marché via des workflows d’imagerie à haute confiance, et la pile Quantum-AI-HPC augmente la fiabilité, la capacité d’exécution et le potentiel d’extension sectorielle.',
      thesisTitle: 'Thèse d’investissement',
      thesisBody: 'SQK transforme des actifs deep-tech en modèle opérationnel. QMedic crée les premiers pilotes et revenus API. QTAU apporte la confiance mesurable. Qukkos pilote l’exécution hybride. QPINN et QPR élargissent la performance vers les domaines scientifiques, industriels et d’imagerie. L’intégration HPC relie l’ensemble à des workloads déployables.',
      timelineTitle: 'Chronologie des jalons',
      timeline: [
        { year: '2024', title: 'Visibilité SuperQuantumStation', body: 'La reconnaissance publique a élargi l’accès partenaires et renforcé la notoriété de la plateforme SQK.' },
        { year: '2025', title: 'Collaboration internationale QWIND', body: 'QWIND illustre le potentiel de co-développement dans l’énergie et l’optimisation industrielle, au-delà de la santé.' },
        { year: '2026', title: 'Renforcement santé, HPC et écosystème', body: 'IBM Quantum, MathWorks, KISTI, SNUBH et les initiatives secure medical AI apportent validation externe et crédibilité opérationnelle.' },
      ],
      pillars: [
        { title: 'Wedge commercial QMedic', body: 'QMedic répond à un problème CT/IRM mesurable et ouvre une trajectoire allant du pilote vers le SaaS/API et l’intégration partenaire.' },
        { title: 'Couche de confiance et de validation', body: 'QTAU produit scorecards, rapports de benchmark et preuves de reproductibilité qui facilitent la décision d’adoption.' },
        { title: 'Exécution hybride et profondeur de modélisation', body: 'Qukkos, QPINN, QPR et l’intégration HPC étendent SQK vers les environnements industriels, scientifiques et de simulation.' },
        { title: 'Structure de revenus récurrents', body: 'Abonnements, usage API, services de validation, licences entreprise et programmes de co-développement peuvent coexister sur la même base plateforme.' },
      ],
    },
    newsPage: {
      eyebrow: 'Actualités & jalons',
      title: 'Publications, annonces et preuves publiques de SQK.',
      intro: 'Cette section rassemble investissements, publications, visibilité produit et annonces de collaboration qui soutiennent la stratégie de commercialisation menée par QMedic.',
      readMore: 'Lire l’article',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Ouvrez la conversation avec SQK.',
      intro: 'Ce formulaire est destiné aux pilotes QMedic, aux programmes QTAU, aux collaborations QPINN/QPR, aux intégrations quantum-HPC, au co-développement industriel et aux échanges investisseurs.',
      form: { name: 'Nom', email: 'Email', company: 'Société', interest: 'Sujet d’intérêt', message: 'Message', submit: 'Envoyer la demande' },
    },
    cta: { contact: 'Contacter SQK', overview: 'Télécharger la présentation', whitepaper: 'Télécharger le livre blanc' },
    solutionCards: shared.solutionCards.map((s, i) => ({ ...s, blurb: [
      'Couche de validation fournissant benchmarking, reproductibilité, scorecards et reporting pour évaluer la fiabilité et la readiness de déploiement.',
      'Couche d’orchestration hybride reliant ressources classiques, quantiques et HPC pour les workflows entreprise, la simulation et l’analytique avancée.',
      'Couche de modélisation guidée par la physique pour calcul scientifique, problèmes inverses, jumeaux numériques et optimisation industrielle.',
      'Plateforme commerciale principale pour reconstruction CT/IRM, raffinement assisté par QPR, comparaison et workflows d’imagerie gouvernés par la qualité.',
      'Couche d’accès écosystème pour l’éducation, l’onboarding et les points de contact partenaires, sans concurrencer le récit commercial QMedic.',
    ][i] })),
    applicationCards: [
      { ...shared.applicationCards[0], body: 'QMedic regroupe reconstruction, raffinement QPR, comparaison et gouvernance qualité pour les hôpitaux, équipes d’imagerie, éditeurs logiciels et partenaires d’IA médicale.' },
      { ...shared.applicationCards[1], body: 'QPINN soutient des domaines où l’IA boîte noire seule ne suffit pas: optimisation énergie/éolien, simulation industrielle, jumeaux numériques et problèmes inverses.' },
      { ...shared.applicationCards[2], body: 'QTAU apporte benchmarking, reproductibilité, scorecards et reporting afin d’aider clients et partenaires à juger la readiness de déploiement.' },
    ],
    platformFlow: ['Validation quantique', 'Orchestration hybride', 'Modélisation guidée par la physique', 'Exécution HPC', 'Applications métier'],
    investorCards: [
      { title: 'Point d’entrée santé', body: 'QMedic résout un problème CT/IRM clair et devient le point de départ des pilotes et contrats récurrents.' },
      { title: 'Trajectoire d’expansion industrielle', body: 'QPINN, QPR, QWIND et l’exécution HPC soutiennent l’extension vers l’énergie, l’éolien, les jumeaux numériques et l’optimisation.' },
      { title: 'Valeur d’infrastructure entreprise', body: 'QTAU et Qukkos apportent benchmarking, reporting, orchestration et workflows managés.' },
      { title: 'Logique de revenus récurrents', body: 'Abonnements, API, services de validation, licences entreprise et co-développement peuvent être combinés.' },
    ],
    newsCards: [
      { ...shared.newsCards[0], tag: 'Investissement', title: 'IBM Ventures investit dans SQK', body: 'Annonce publique qui renforce la crédibilité de SQK et sa trajectoire de commercialisation menée par QMedic.' },
      { ...shared.newsCards[1], tag: 'Prix', title: 'SuperQuantumStation récompensé au CES 2024', body: 'Signal public de visibilité marché et de crédibilité externe pour la plateforme SQK.' },
      { ...shared.newsCards[2], tag: 'Santé', title: 'Couverture publique de QMedic', body: 'Présentation de QMedic comme plateforme centrée sur la reconstruction, le raffinement et la gouvernance qualité en imagerie médicale.' },
      { ...shared.newsCards[3], tag: 'Publication', title: 'Publication IEEE QMedic', body: 'Publication soutenant la crédibilité technique de QMedic et son positionnement produit centré sur la confiance.' },
      { ...shared.newsCards[4], tag: 'Publication', title: 'Publication IEEE Qukkos', body: 'Publication qui soutient le récit orchestration et exécution hybride de SQK dans les environnements quantiques, classiques et HPC.' },
    ],
    businessModelSection: {
      eyebrow: 'Modèle économique',
      title: 'Plusieurs moteurs de revenus autour d’une même plateforme déployable.',
      intro: 'QMedic porte la monétisation à court terme, puis SQK étend ses revenus via validation, orchestration, modélisation, intégration partenaire et licences plateforme.',
      items: [
        { asset: 'QMedic', initial: 'SaaS de recherche, pilotes payants, accès API, traitement par étude et projets d’intégration partenaire.', expansion: 'Licence hôpital/entreprise, intégration OEM en imagerie, modules workflow et contrats multi-sites récurrents.', buyer: 'Hôpitaux, centres d’imagerie, entreprises d’IA médicale, partenaires PACS/OHIF.' },
        { asset: 'QTAU', initial: 'Rapports benchmark, service de validation, packages de reproductibilité et support PoC.', expansion: 'Abonnement annuel de validation, modules de reporting et outils d’aide à la décision.', buyer: 'Adopteurs quantum/IA/HPC, instituts de recherche, partenaires infrastructure et équipes R&D avancées.' },
        { asset: 'Qukkos', initial: 'Projets d’intégration et d’orchestration de workflows hybrides.', expansion: 'Moteur de workflow entreprise, orchestration managée et revenus logiciels d’intégration récurrents.', buyer: 'Centres HPC, partenaires de l’écosystème quantique, équipes R&D industrielles, organisations IT.' },
        { asset: 'QPINN / QPR', initial: 'Projets de modélisation et de raffinement pour domaines scientifiques et industriels.', expansion: 'Licences d’optimisation, modules de simulation, moteurs de raffinement et intégration jumeaux numériques.', buyer: 'Énergie, éolien, fabrication, calcul scientifique et organisations d’ingénierie.' },
        { asset: 'SuperQuantumStation', initial: 'Abonnement, éducation et accès développeur.', expansion: 'Programmes écosystème, marketplace partenaires et canaux d’acquisition développeurs.', buyer: 'Étudiants, développeurs, institutions et communautés partenaires.' },
      ],
    },
    goToMarketSection: {
      eyebrow: 'Go-to-Market',
      title: 'Commencer par QMedic, y ajouter la validation, puis convertir en revenus récurrents.',
      intro: 'La commercialisation SQK suit une logique de produit, de validation mesurable et de packaging entreprise répétable.',
      steps: [
        'Commencer par QMedic : proposer des workflows CT/IRM de reconstruction, raffinement et gouvernance qualité aux marchés hospitaliers et de recherche.',
        'Ajouter QTAU : packager rapports benchmark, preuves de reproductibilité et scorecards pour réduire la friction d’adoption.',
        'Transformer pilotes et co-développement en revenus : convertir partenaires santé, HPC et industriels en comptes payants.',
        'Produit répétable : API, dashboards, services de raffinement QPR, rapports de validation et connecteurs de déploiement.',
        'Étendre vers les licences entreprise : intégration OEM, licences et contrats de workflow managé pour la santé et l’industrie.',
        'Utiliser QWIND et les collaborations R&D comme portes d’entrée vers l’énergie, l’éolien, les jumeaux numériques et l’optimisation industrielle.',
      ],
    },
    roadmapSection: {
      eyebrow: 'Feuille de route',
      title: 'Des pilotes sectoriels aux revenus plateforme récurrents.',
      intro: 'SQK fait progresser la plateforme en trois temps : validation client, logiciel récurrent, puis expansion multi-domaines.',
      phases: [
        { timeframe: '0–12 mois', commercial: 'Construire le pipeline de pilotes QMedic, convertir les design partners et établir des références santé et recherche.', product: 'Renforcer le packaging QMedic, automatiser les rapports QTAU, maturer le raffinement QPR et améliorer les démos sur infrastructure HPC.', kpi: 'Pipeline pilotes, LOI/MOU, rapports benchmark, cas partenaires et premiers revenus API récurrents.' },
        { timeframe: '12–24 mois', commercial: 'Convertir les pilotes en contrats récurrents et élargir les revenus via l’imagerie et les intégrations workflow.', product: 'Lancer QMedic SaaS/API, validation entreprise QTAU et intégration workflow Qukkos.', kpi: 'Revenu contracté, déploiements actifs, croissance d’usage API et intégrations partenaires.' },
        { timeframe: '24–36 mois', commercial: 'Étendre les revenus plateforme aux programmes santé, calcul scientifique et optimisation industrielle.', product: 'Intégration inter-solutions, secure medical AI avec PQC et extension vers des offres énergie/jumeaux numériques.', kpi: 'Licences entreprise, relations OEM, marge brute, taux de renouvellement et revenus d’expansion sectorielle.' },
      ],
      proceedsTitle: 'Usage des fonds',
      proceeds: [
        'Productisation : durcissement des workflows QMedic, modules QPR, automatisation QTAU et connecteurs de déploiement.',
        'Validation et preuve : partenariats données, support pilotes, études benchmark, documentation et préparation qualité.',
        'Ingénierie et HPC : backend scalable, orchestration, intégration MLOps/HPC, sécurité, observabilité et dashboards.',
        'Commercialisation : ventes entreprise, développement partenaires, programmes de co-développement, relations investisseurs et supports marché.',
        'Gouvernance et conformité : confidentialité, sécurité, revue juridique, validation des claims et préparation réglementaire.',
      ],
    },
    footer: { line: 'SQK · Systèmes Quantum-AI-HPC validés pour la santé, le calcul scientifique et l’optimisation industrielle' },
  },
};
