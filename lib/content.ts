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
    {
      title: 'QMedic Clinical Imaging Platform',
      body: '',
      image: '/qmedic-card.png',
    },
    {
      title: 'QPINN Physics-Informed Modeling',
      body: '',
      image: '/qpinn-card.png',
    },
    {
      title: 'QTAU Analysis Workspace',
      body: '',
      image: '/qtau-analysis.png',
    },
  ],
  platformFlow: ['Quantum Computing', 'Orchestration & Control', 'AI & Modeling', 'HPC Infrastructure', 'Applications & Platforms'],
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
      badge: 'Validated Quantum-AI-HPC Platform for High-Trust Industries',
      title: 'Validated advanced computing for high-trust medical imaging and scientific computing.',
      body: 'SQK builds validated, secure, and deployable advanced-computing solutions for high-trust industries. The company leads with QMedic as its focused commercial product, supported by reusable platform assets across validation, orchestration, and physics-informed modeling.',
      primary: 'Explore Solutions',
      secondary: 'Investor Overview',
    },
    proofPoints: ['CES 2024 Award Recognition', 'QWIND Eureka International R&D Project', 'Strategic Investment & Ecosystem Engagement', 'IBM Quantum Collaboration', 'MathWorks HPC Collaboration', 'KISTI Joint R&D & Tech Transfer', 'SNUBH CT/MRI Project Activity', 'IT4H Secure Medical AI Project'],
    sections: {
      solutionsEyebrow: 'Solutions',
      solutionsTitle: 'One commercial wedge backed by reusable platform assets.',
      solutionsBody: 'SQK is not presenting unrelated standalone tools. The website leads with QMedic as the commercial product while QTAU, Qukkos, QPINN, and SuperQuantumStation are positioned as enabling platform foundations and expansion paths.',
      technologyEyebrow: 'Technology Platform',
      technologyTitle: 'Integrated from trust and orchestration to product deployment.',
      technologyBody: 'SQK connects validation, orchestration, physics-informed modeling, and domain deployment into one deployable stack. This architecture supports QMedic today and creates reusable upside across scientific computing, industrial optimization, and secure medical AI.',
      applicationsEyebrow: 'Applications',
      applicationsTitle: 'QMedic-led applications supported by platform capabilities.',
      applicationsBody: 'The product story begins with QMedic in medical imaging, then shows how QPINN and QTAU strengthen refinement, validation, quality governance, and adoption trust.',
      investorsEyebrow: 'Investors',
      investorsTitle: 'Focused product story, reusable platform upside.',
      investorsBody: 'The investor narrative is intentionally disciplined: QMedic is the near-term commercial wedge, while QTAU, Qukkos, QPINN, and SuperQuantumStation increase long-term platform leverage, defensibility, and expansion potential.',
      newsEyebrow: 'News & Milestones',
      newsTitle: 'Milestones and public proof points that support the focused story.',
      newsBody: 'Public disclosures, milestone coverage, and research publications are organized to reinforce SQK’s product-led, high-trust commercialization narrative.',
      contactEyebrow: 'Contact',
      contactTitle: 'Partner with SQK in the next generation of Quantum-AI-HPC platforms.',
      contactBody: 'This version expands the earlier concept into a more complete corporate and investor-facing website with dedicated About, Investors, News, and Contact experiences.',
    },
    aboutPage: {
      eyebrow: 'About SQK',
      title: 'A product-led advanced-computing company built around deployable trust.',
      intro: 'SQK combines quantum methods, AI, HPC, physics-informed modeling, and secure deployment into one commercialization pathway. The company is presented as a focused medical-imaging entry point with reusable platform assets behind it.',
      missionTitle: 'Mission',
      missionBody: 'Convert advanced computation into validated, secure, and deployable products for industries where reliability, reproducibility, explainability, and governance matter.',
      whyTitle: 'Why this matters',
      whyBody: 'Rather than selling speculative quantum claims or disconnected demos, SQK organizes its assets into one product-led platform model that can scale through SaaS, API, enterprise license, and partner integration pathways.',
      bullets: ['Flagship medical imaging platform with QMedic', 'Quantum benchmarking and decision support with QTAU', 'Platform and orchestration strategy through Qukkos', 'Physics-informed modeling via QPINN', 'Experience and onboarding layer with SuperQuantumStation'],
    },
    investorsPage: {
      eyebrow: 'Investors',
      title: 'A focused medical-imaging wedge with reusable platform leverage.',
      intro: 'SQK’s investor story is intentionally focused. QMedic provides the near-term product narrative, while the underlying Quantum-AI-HPC platform provides the validation, orchestration, and modeling depth that make the product scalable and defensible.',
      thesisTitle: 'Investment thesis',
      thesisBody: 'SQK is evolving from research-driven innovation into a scalable platform business. QMedic opens commercial conversations in a high-trust domain, while QTAU adds evidence and benchmarking, Qukkos supports hybrid workflow execution, QPINN adds modeling depth, and SuperQuantumStation broadens ecosystem access.',
      timelineTitle: 'Milestone timeline',
      timeline: [
        { year: '2024', title: 'CES award recognition for SuperQuantumStation', body: 'Brand visibility and ecosystem credibility that strengthen partner access without diluting the QMedic-led sales story.' },
        { year: '2025', title: 'QWIND Eureka international R&D project', body: 'Cross-border R&D execution that reinforces technical maturity and commercialization relevance.' },
        { year: '2026', title: 'Strategic investment and ecosystem engagement', body: 'Investment activity, IBM Quantum, MathWorks HPC, KISTI, SNUBH, and IT4H strengthen external validation and growth narrative.' },
      ],
      pillars: [
        { title: 'Strong technical moat', body: 'Quantum benchmarking, orchestration, medical imaging, and physics-informed AI in one connected stack.' },
        { title: 'High-trust market focus', body: 'Designed for sectors where reliability and performance directly influence operational value.' },
        { title: 'Multiple commercialization paths', body: 'SaaS, API, enterprise delivery, research-to-product packaging, and ecosystem partnerships.' },
        { title: 'Validated growth signals', body: 'Awards, joint R&D, tech transfer, medical projects, and international programs.' },
      ],
    },
    newsPage: {
      eyebrow: 'News & Insights',
      title: 'A simple newsroom for milestones, partnerships, and platform updates.',
      intro: 'Use this section to communicate public milestones, validation themes, and commercialization proof points to investors, partners, and prospective customers.',
      readMore: 'Read article',
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Start a conversation with SQK.',
      intro: 'Use this contact flow for investor, partner, pilot, and product inquiries related to QMedic and SQK’s broader Quantum-AI-HPC platform.',
      form: { name: 'Name', email: 'Email', company: 'Company', interest: 'Area of interest', message: 'Message', submit: 'Send inquiry' },
    },
    cta: { contact: 'Contact SQK', overview: 'Download Overview', whitepaper: 'Download White Paper' },
    solutionCards: shared.solutionCards.map((s, i) => ({ ...s, blurb: [
      'Benchmarking, reproducibility, quality metrics, scorecards, and reporting that act as the trust layer behind QMedic adoption.',
      'Hybrid workflow orchestration across classical, quantum, and HPC resources that supports enterprise execution behind QMedic and future verticals.',
      'Physics-informed modeling capability that strengthens QMedic and extends SQK into scientific computing and industrial optimization.',
      'Lead commercial product for CT/MRI-oriented reconstruction, refinement, comparison, and quality governance workflows.',
      'User access, education, developer touchpoints, and ecosystem visibility that expand partner reach without distracting from QMedic as the commercial wedge.',
    ][i] })),
    applicationCards: [
      { ...shared.applicationCards[0], body: 'Lead with QMedic as the flagship workflow for CT/MRI-oriented reconstruction, refinement, comparison, and quality governance.' },
      { ...shared.applicationCards[1], body: 'Use QPINN as the modeling layer that improves confidence where black-box AI is insufficient and physics constraints matter.' },
      { ...shared.applicationCards[2], body: 'Use QTAU as the evidence engine that adds benchmarking, reproducibility, scorecards, and adoption trust to QMedic.' },
    ],
    platformFlow: shared.platformFlow,
    investorCards: [
      { title: 'Strong technical moat', body: 'Quantum benchmarking, orchestration, medical imaging, and physics-informed AI in one connected stack.' },
      { title: 'High-trust market focus', body: 'Designed for industries where precision, explainability, and reliability directly affect enterprise value.' },
      { title: 'Multiple commercialization paths', body: 'SaaS, API, enterprise deployment, strategic collaboration, and platform partnerships.' },
      { title: 'Validated growth signals', body: 'Awards, research programs, institutional projects, investment activity, and ecosystem collaboration.' },
    ],
    newsCards: [
      { ...shared.newsCards[0], tag: 'Investment', title: 'IBM Ventures invests in SQK and Qodex Quantum', body: 'Official IBM announcement covering strategic investment to accelerate quantum innovation.' },
      { ...shared.newsCards[1], tag: 'Award', title: 'SuperQuantumStation recognized at CES 2024', body: 'Official CES Innovation Awards page for Super Quantum Station.' },
      { ...shared.newsCards[2], tag: 'Healthcare', title: 'QMedic public launch coverage', body: 'Media coverage highlighting QMedic and SQK’s quantum medical imaging platform.' },
      { ...shared.newsCards[3], tag: 'Paper', title: 'QMedic IEEE publication', body: 'IEEE publication related to SQK’s QMedic medical imaging research.' },
      { ...shared.newsCards[4], tag: 'Paper', title: 'Qukkos IEEE publication', body: 'IEEE publication related to SQK’s orchestration and platform research.' },
    ],
    businessModelSection: {
      eyebrow: 'Business Model',
      title: 'Product-led monetization with reusable platform upside.',
      intro: 'SQK leads with QMedic as the commercial wedge, then expands monetization through validation, orchestration, modeling, and ecosystem access.',
      items: [
        { asset: 'QMedic', initial: 'Research SaaS, paid pilots, API access, and project-based deployments.', expansion: 'Hospital or enterprise license, OEM imaging integration, and regulated workflow modules.', buyer: 'Hospitals, medical AI companies, imaging research groups, and PACS/OHIF ecosystem partners.' },
        { asset: 'QTAU', initial: 'Benchmarking reports, validation service, and enterprise PoC support.', expansion: 'Annual license, audit and report modules, and validation subscription.', buyer: 'Enterprises adopting quantum/AI/HPC workflows, research institutes, and cloud/HPC partners.' },
        { asset: 'Qukkos', initial: 'Hybrid workflow integration projects.', expansion: 'Enterprise workflow engine and managed orchestration.', buyer: 'HPC centers, quantum ecosystem partners, and enterprise R&D teams.' },
        { asset: 'QPINN', initial: 'Specialized R&D and modeling projects.', expansion: 'Domain-specific optimization licenses and simulation modules.', buyer: 'Industrial companies, scientific computing teams, and energy/manufacturing partners.' },
        { asset: 'SuperQuantumStation', initial: 'Subscription, education, and developer access.', expansion: 'Ecosystem programs, partner marketplace, and user-acquisition funnel.', buyer: 'Students, developers, institutions, and partner communities.' },
      ],
    },
    goToMarketSection: {
      eyebrow: 'Go-to-Market',
      title: 'Lead with QMedic, attach trust, convert into repeatable revenue.',
      intro: 'The commercialization sequence is intentionally disciplined so the product story stays clear while platform leverage compounds over time.',
      steps: [
        'Lead with QMedic: use one clearly defined medical imaging product to open commercial conversations.',
        'Attach QTAU to QMedic: package quality metrics, benchmark reports, and evidence generation as part of the trust layer.',
        'Convert project credibility into paid pilots: target hospitals, research labs, medical AI companies, and HPC/quantum partners.',
        'Package repeatable modules: dashboards, APIs, benchmark reports, connectors, and deployment playbooks.',
        'Expand into enterprise licensing: offer SaaS/API/on-premise packages with recurring support and integration contracts.',
        'Use SuperQuantumStation as an ecosystem and partner channel rather than the primary enterprise sales story.',
      ],
    },
    roadmapSection: {
      eyebrow: 'Growth Roadmap',
      title: 'From pilots to recurring contracts to scalable platform revenue.',
      intro: 'The growth plan follows a three-stage progression across commercial traction, product hardening, and enterprise expansion.',
      phases: [
        { timeframe: '0–12 months', commercial: 'QMedic pilot pipeline, investor website, collateral, and case studies.', product: 'QMedic MVP/PoC packaging, QTAU benchmark reports, and integrated demo assets.', kpi: 'Pilot pipeline, LOIs/MOUs, demo conversion, and benchmark reports.' },
        { timeframe: '12–24 months', commercial: 'Convert pilots into paid recurring contracts and API usage.', product: 'QMedic SaaS/API, QTAU enterprise validation, and Qukkos workflow integration.', kpi: 'Contracted revenue, active deployments, and partner integrations.' },
        { timeframe: '24–36 months', commercial: 'Scale platform revenue and expand globally.', product: 'Cross-solution integration and secure medical AI stack with PQC.', kpi: 'Enterprise licenses, OEM relationships, gross margin, and renewal rate.' },
      ],
      proceedsTitle: 'Use of proceeds',
      proceeds: [
        'Productization: QMedic SaaS/API hardening, QTAU report automation, integration connectors, and deployment tooling.',
        'Validation: data partnerships, pilot support, benchmark studies, documentation, and quality-management preparation.',
        'Engineering: platform architecture, security, MLOps/HPC integration, scalable backend, and user-facing dashboards.',
        'Commercialization: enterprise sales, partner development, investor relations, and market-entry materials.',
        'Governance and compliance: privacy controls, security reviews, legal review, claim substantiation, and regulatory pathway preparation where applicable.',
      ],
    },
    footer: { line: 'SQK · Quantum-AI-HPC platforms for high-trust industries' },
  },
  ko: {
    localeLabel: '한국어',
    nav: { home: '홈', about: 'About SQK', solutions: '솔루션', technology: '기술', applications: '적용 분야', investors: '투자자', news: '뉴스', contact: '문의' },
    hero: { badge: '고신뢰 산업을 위한 검증형 Quantum-AI-HPC 플랫폼', title: '고신뢰 의료영상과 과학컴퓨팅을 위한 검증형 첨단 컴퓨팅 플랫폼.', body: 'SQK는 검증 가능하고, 안전하며, 배포 가능한 첨단 컴퓨팅 솔루션을 구축합니다. 회사는 QMedic을 핵심 상용 제품으로 전면에 두고, 그 뒤를 검증, 오케스트레이션, 물리기반 모델링 자산이 지원하는 구조를 취합니다.', primary: '솔루션 보기', secondary: '투자자 개요' },
    proofPoints: ['CES 2024 수상 인정', 'QWIND Eureka 국제 R&D 과제', '전략 투자 및 생태계 참여', 'IBM Quantum 협업', 'MathWorks HPC 협업', 'KISTI 공동 R&D 및 기술이전', '분당서울대병원 CT/MRI 프로젝트 활동', 'IT4H 보안 의료AI 프로젝트'],
    sections: { solutionsEyebrow: '솔루션', solutionsTitle: '하나의 상용 웨지와 재사용 가능한 플랫폼 자산.', solutionsBody: 'SQK는 서로 분리된 단독 제품을 나열하지 않습니다. QMedic을 상용 제품으로 전면에 두고, QTAU·Qukkos·QPINN·SuperQuantumStation은 이를 지원하는 플랫폼 기반과 확장 경로로 제시합니다.', technologyEyebrow: '기술 플랫폼', technologyTitle: '신뢰 계층에서 제품 배포까지 통합합니다.', technologyBody: 'SQK는 검증, 오케스트레이션, 물리기반 모델링, 도메인 배포를 하나의 배포 가능한 스택으로 연결합니다. 이 구조는 현재 QMedic을 지원하고, 향후 과학컴퓨팅·산업 최적화·보안 의료AI로 확장될 수 있습니다.', applicationsEyebrow: '적용 분야', applicationsTitle: 'QMedic 중심 응용과 이를 지원하는 플랫폼 기능.', applicationsBody: '제품 스토리는 의료영상의 QMedic에서 시작하고, QPINN과 QTAU가 정제 성능, 품질 거버넌스, 검증 신뢰를 어떻게 강화하는지 보여줍니다.', investorsEyebrow: '투자자', investorsTitle: '집중된 제품 스토리와 재사용 가능한 플랫폼 업사이드.', investorsBody: '투자자 서사는 의도적으로 명확합니다. QMedic이 단기 상용 웨지이며, QTAU·Qukkos·QPINN·SuperQuantumStation은 장기 플랫폼 가치와 방어력을 높이는 기반 자산입니다.', newsEyebrow: '뉴스 및 마일스톤', newsTitle: '플랫폼 스토리를 뒷받침하는 증거들.', newsBody: '투자자 업데이트, 파트너십, 제품 진척 상황을 일관된 딥테크 내러티브로 보여주기 위한 뉴스 구조입니다.', contactEyebrow: '문의', contactTitle: '차세대 Quantum-AI-HPC 플랫폼을 SQK와 함께 만들어가십시오.', contactBody: '이 버전은 이전 컨셉을 확장해 About, Investors, News, Contact 경험을 분리한 기업·투자자용 웹사이트입니다.' },
    aboutPage: { eyebrow: 'About SQK', title: '양자, AI, HPC, 그리고 실전 배포를 연결하는 딥테크 기업.', intro: 'SQK는 양자 벤치마킹, 오케스트레이션, 과학 컴퓨팅, 의료영상, 보안형 AI 시스템을 하나의 사업화 경로로 연결하는 통합 기술 스택을 구축하고 있습니다.', missionTitle: '미션', missionBody: '정밀성, 신뢰성, 설명 가능성이 중요한 산업을 위해 첨단 계산기술을 고신뢰 제품으로 전환합니다.', whyTitle: '왜 중요한가', whyBody: '단순한 기술 데모에 머무르지 않고, SaaS, API, 엔터프라이즈, 플랫폼 기회로 성장할 수 있는 연결형 포트폴리오로 기술 자산을 조직합니다.', bullets: ['QMedic을 통한 대표 의료영상 플랫폼', 'QTAU 기반 양자 벤치마킹 및 의사결정 지원', 'Qukkos 기반 플랫폼 및 오케스트레이션 전략', 'QPINN 기반 물리기반 모델링', 'SuperQuantumStation 기반 경험 및 온보딩 레이어'] },
    investorsPage: { eyebrow: '투자자', title: '성장 가능한 Quantum-AI-HPC 플랫폼 기회.', intro: 'SQK의 투자자 스토리는 검증된 기술 자산, 대표 의료영상 실행력, 전략적 생태계 관계, 반복 가능한 제품 가치 로드맵을 결합합니다.', thesisTitle: '투자 논리', thesisBody: 'SQK는 연구 중심 혁신에서 확장 가능한 플랫폼 비즈니스로 진화하고 있습니다. 대표 솔루션, 엔터프라이즈 파트너십, 국제 프로그램, 그리고 SaaS·API·라이선스·전략 플랫폼 기회를 아우르는 사업화 경로를 가지고 있습니다.', timelineTitle: '마일스톤 타임라인', timeline: [{ year: '2024', title: 'SuperQuantumStation 인지도 확보', body: 'CES 레벨의 가시성을 통한 플랫폼 신뢰도와 생태계 신호 확보.' }, { year: '2025', title: 'QWIND 착수', body: 'Eureka 과제를 통해 국경 간 프로젝트와 사업화 연관성 강화.' }, { year: '2026', title: '전략 투자 및 파트너십', body: '투자 활동, IBM Quantum, MathWorks HPC, 기관 협업이 플랫폼 신뢰도를 강화.' }], pillars: [{ title: '강한 기술적 진입장벽', body: '양자 벤치마킹, 오케스트레이션, 의료영상, 물리기반 AI가 하나의 스택으로 연결됩니다.' }, { title: '고신뢰 시장 집중', body: '신뢰성과 성능이 직접 가치에 연결되는 산업을 겨냥합니다.' }, { title: '다중 사업화 경로', body: 'SaaS, API, 엔터프라이즈, 연구-제품 패키징, 전략 파트너십.' }, { title: '검증된 성장 신호', body: '수상, 공동 연구개발, 기술이전, 의료 프로젝트, 국제 프로그램.' }] },
    newsPage: { eyebrow: '뉴스 및 인사이트', title: '마일스톤, 파트너십, 플랫폼 업데이트를 위한 간결한 뉴스룸.', intro: '이 섹션은 투자자, 파트너, 잠재 고객에게 SQK의 진행 상황을 일관된 딥테크 내러티브로 전달하기 위한 구조입니다.', readMore: '기사 보기' },
    contactPage: { eyebrow: '문의', title: 'SQK와 대화를 시작해보세요.', intro: '아래 폼은 파트너 제안, 투자자 문의, 제품 문의를 위한 프론트엔드 UI 예시입니다.', form: { name: '이름', email: '이메일', company: '회사명', interest: '관심 분야', message: '메시지', submit: '문의 보내기' } },
    cta: { contact: 'SQK 문의하기', overview: '회사 개요 다운로드', whitepaper: '백서 다운로드' },
    solutionCards: shared.solutionCards.map((s, i) => ({ ...s, blurb: ['QMedic 도입을 뒷받침하는 벤치마킹, 재현성, 품질 지표, 스코어카드, 리포팅 기반의 신뢰 계층.', 'QMedic과 향후 수직 확장을 지원하는 고전·양자·HPC 자원 간 하이브리드 워크플로우 오케스트레이션 기능.', 'QMedic을 강화하고 과학컴퓨팅·산업 최적화로 확장할 수 있게 하는 물리기반 모델링 기능.', 'CT/MRI 지향 재건, 정제, 비교, 품질 거버넌스 워크플로우를 제공하는 핵심 상용 제품.', 'QMedic의 상용 웨지를 흐리지 않으면서 파트너 접점을 넓혀주는 사용자 접근, 교육, 개발자 터치포인트, 생태계 가시성 자산.'][i] })),
    applicationCards: [{ ...shared.applicationCards[0], body: 'QMedic을 CT/MRI 지향 재건, 정제, 비교, 품질 거버넌스를 위한 대표 워크플로우로 전면에 배치합니다.' }, { ...shared.applicationCards[1], body: 'QPINN을 블랙박스 AI만으로 충분하지 않은 영역에서 물리 제약 기반 신뢰를 더하는 모델링 계층으로 활용합니다.' }, { ...shared.applicationCards[2], body: 'QTAU를 벤치마킹, 재현성, 스코어카드, 리포팅을 제공하는 evidence engine으로 활용해 QMedic 도입 신뢰를 강화합니다.' }],
    platformFlow: ['양자 컴퓨팅', '오케스트레이션', 'AI·모델링', 'HPC 인프라', '응용 플랫폼'],
    investorCards: [{ title: '강한 기술적 진입장벽', body: '양자 벤치마킹, 오케스트레이션, 의료영상, 물리기반 AI가 연결된 스택.' }, { title: '고신뢰 시장 포지셔닝', body: '정밀성, 설명 가능성, 신뢰성이 중요한 산업에 적합한 구조.' }, { title: '다중 사업화 경로', body: 'SaaS, API, 엔터프라이즈 배포, 협업, 플랫폼 파트너십.' }, { title: '검증된 성장 신호', body: '수상, 연구 프로그램, 기관 프로젝트, 투자 활동, 생태계 협업.' }],
    newsCards: [{ ...shared.newsCards[0], tag: '투자', title: 'IBM Ventures의 SQK 및 Qodex Quantum 투자', body: '양자 혁신 가속화를 위한 전략적 투자를 다룬 IBM 공식 발표입니다.' }, { ...shared.newsCards[1], tag: '수상', title: 'SuperQuantumStation CES 2024 수상', body: 'Super Quantum Station에 대한 CES Innovation Awards 공식 페이지입니다.' }, { ...shared.newsCards[2], tag: '헬스케어', title: 'QMedic 공개 출시 기사', body: 'SQK의 양자 메디컬 이미징 플랫폼 QMedic을 소개한 공개 기사입니다.' }, { ...shared.newsCards[3], tag: '논문', title: 'QMedic IEEE 논문', body: 'SQK의 QMedic 의료영상 연구와 관련된 IEEE 논문입니다.' }, { ...shared.newsCards[4], tag: '논문', title: 'Qukkos IEEE 논문', body: 'SQK의 오케스트레이션 및 플랫폼 연구와 관련된 IEEE 논문입니다.' }],
    businessModelSection: {
      eyebrow: '비즈니스 모델',
      title: 'QMedic 중심 수익화와 재사용 가능한 플랫폼 확장.',
      intro: 'SQK는 QMedic을 상용 진입점으로 앞세우고, 검증·오케스트레이션·모델링·생태계 자산으로 수익 확장을 설계합니다.',
      items: [
        { asset: 'QMedic', initial: '연구 SaaS, 유료 파일럿, API 접근, 프로젝트형 배포.', expansion: '병원/엔터프라이즈 라이선스, OEM 이미징 통합, 규제형 워크플로우 모듈.', buyer: '병원, 의료 AI 기업, 이미징 연구그룹, PACS/OHIF 파트너.' },
        { asset: 'QTAU', initial: '벤치마크 리포트, 검증 서비스, 엔터프라이즈 PoC 지원.', expansion: '연간 라이선스, 감사/리포트 모듈, 검증 구독.', buyer: '양자/AI/HPC 도입 기업, 연구기관, 클라우드/HPC 파트너.' },
        { asset: 'Qukkos', initial: '하이브리드 워크플로우 통합 프로젝트.', expansion: '엔터프라이즈 워크플로우 엔진, 매니지드 오케스트레이션.', buyer: 'HPC 센터, 양자 생태계 파트너, 기업 R&D 팀.' },
        { asset: 'QPINN', initial: '특화 R&D 및 모델링 프로젝트.', expansion: '도메인 최적화 라이선스, 시뮬레이션 모듈.', buyer: '산업 기업, 과학컴퓨팅 팀, 에너지/제조 파트너.' },
        { asset: 'SuperQuantumStation', initial: '구독, 교육, 개발자 접근.', expansion: '생태계 프로그램, 파트너 마켓플레이스, 유저 유입 채널.', buyer: '학생, 개발자, 기관, 파트너 커뮤니티.' },
      ],
    },
    goToMarketSection: {
      eyebrow: '시장 진입 전략',
      title: 'QMedic으로 시작하고 신뢰 계층을 붙여 반복 가능한 매출로 전환.',
      intro: '제품 스토리를 명확하게 유지하면서 플랫폼 레버리지를 누적시키는 단계형 상용화 시퀀스입니다.',
      steps: [
        'QMedic으로 시작: 명확한 의료영상 제품 하나로 상업적 대화를 개시합니다.',
        'QTAU를 QMedic에 결합: 품질 지표, 벤치마크 리포트, 증거 생성을 신뢰 계층으로 패키징합니다.',
        '프로젝트 신뢰도를 유료 파일럿으로 전환: 병원, 연구실, 의료 AI 기업, HPC/양자 파트너를 공략합니다.',
        '반복 가능한 모듈화: 대시보드, API, 벤치마크 리포트, 커넥터, 배포 플레이북을 패키징합니다.',
        '엔터프라이즈 라이선스로 확장: SaaS/API/온프레미스 패키지와 반복 지원 계약으로 확대합니다.',
        'SuperQuantumStation은 파트너/생태계 채널로 활용하고 주 판매 스토리의 중심에는 두지 않습니다.',
      ],
    },
    roadmapSection: {
      eyebrow: '성장 로드맵',
      title: '파일럿에서 반복 계약, 그리고 확장형 플랫폼 수익으로.',
      intro: '상업적 견인, 제품 고도화, 엔터프라이즈 확장으로 이어지는 3단계 계획입니다.',
      phases: [
        { timeframe: '0–12개월', commercial: 'QMedic 파일럿 파이프라인, 투자자 웹사이트, 콜래트럴, 케이스 스터디.', product: 'QMedic MVP/PoC 패키징, QTAU 벤치마크 리포트, 통합 데모 자산.', kpi: '파일럿 파이프라인, LOI/MOU, 데모 전환율, 벤치마크 리포트.' },
        { timeframe: '12–24개월', commercial: '파일럿을 유료 반복 계약과 API 사용으로 전환.', product: 'QMedic SaaS/API, QTAU 엔터프라이즈 검증, Qukkos 워크플로우 통합.', kpi: '계약 매출, 활성 배포 수, 파트너 통합 수.' },
        { timeframe: '24–36개월', commercial: '플랫폼 수익 확장 및 글로벌 전개.', product: '교차 솔루션 통합과 PQC 기반 secure medical AI 스택.', kpi: '엔터프라이즈 라이선스, OEM 관계, 총마진, 갱신율.' },
      ],
      proceedsTitle: '자금 사용 계획',
      proceeds: [
        '제품화: QMedic SaaS/API 고도화, QTAU 리포트 자동화, 통합 커넥터, 배포 도구.',
        '검증: 데이터 파트너십, 파일럿 지원, 벤치마크 연구, 문서화, 품질관리 준비.',
        '엔지니어링: 플랫폼 아키텍처, 보안, MLOps/HPC 통합, 확장형 백엔드, 사용자 대시보드.',
        '상용화: 엔터프라이즈 세일즈, 파트너 개발, 투자자 관계, 시장 진입 자료.',
        '거버넌스/컴플라이언스: 개인정보 통제, 보안 검토, 법률 검토, 주장 검증, 규제 준비.',
      ],
    },
    footer: { line: 'SQK · 고신뢰 산업을 위한 Quantum-AI-HPC 플랫폼' },
  },
  fr: {
    localeLabel: 'Français',
    nav: { home: 'Accueil', about: 'À propos', solutions: 'Solutions', technology: 'Technologie', applications: 'Applications', investors: 'Investisseurs', news: 'Actualités', contact: 'Contact' },
    hero: { badge: 'Quantum-AI-HPC pour les industries à haute exigence de confiance', title: 'Calcul avancé validé pour l’imagerie médicale et le calcul scientifique à haute confiance.', body: 'SQK construit des solutions de calcul avancé validées, sécurisées et déployables pour les secteurs à haute confiance. L’entreprise met QMedic au premier plan comme produit commercial focalisé, soutenu par des actifs réutilisables de validation, d’orchestration et de modélisation guidée par la physique.', primary: 'Découvrir les solutions', secondary: 'Vue investisseurs' },
    proofPoints: ['Prix innovation CES 2024', 'Projet Eureka QWIND (2025–)', 'Investissement stratégique en 2026', 'Collaboration IBM Quantum', 'Partenaire technologique MathWorks HPC', 'R&D conjointe KISTI & transfert', 'Projet CT/MRI SNUBH', 'Projet IT4H (2026–)'],
    sections: { solutionsEyebrow: 'Solutions', solutionsTitle: 'Un portefeuille plateforme pensé pour la commercialisation.', solutionsBody: 'Du benchmarking quantique et de l’orchestration à l’imagerie médicale et à l’expérience plateforme, le portefeuille SQK est structuré pour faire évoluer des actifs validés vers des produits évolutifs.', technologyEyebrow: 'Plateforme technologique', technologyTitle: 'Intégrée du benchmarking quantique jusqu’au déploiement applicatif.', technologyBody: 'La pile technologique SQK relie calcul quantique, orchestration, IA guidée par la physique, HPC et applications métier dans une stratégie unifiée.', applicationsEyebrow: 'Applications', applicationsTitle: 'Des solutions phares traduites dans des environnements d’usage réels.', applicationsBody: 'Le portefeuille est présenté à travers des cas d’usage à haute confiance en benchmarking quantique, simulation, calcul scientifique et imagerie médicale.', investorsEyebrow: 'Investisseurs', investorsTitle: 'Conçue pour créer une valeur plateforme à long terme.', investorsBody: 'SQK restructure ses actifs autour de modèles produits répétables, de partenariats stratégiques et de marchés deep-tech mondiaux liés à la santé, au calcul scientifique, à l’IA sécurisée et au quantum-HPC.', newsEyebrow: 'Actualités & jalons', newsTitle: 'Des preuves qui soutiennent le récit plateforme.', newsBody: 'Une structure newsroom légère pour les mises à jour investisseurs, les annonces de partenariats et les étapes produit.', contactEyebrow: 'Contact', contactTitle: 'Construisez avec SQK la prochaine génération de plateformes Quantum-AI-HPC.', contactBody: 'Cette version élargit le concept précédent en une expérience corporate et investisseurs plus complète avec pages À propos, Investisseurs, Actualités et Contact.' },
    aboutPage: { eyebrow: 'À propos de SQK', title: 'Une entreprise deep-tech reliant quantique, IA, HPC et déploiement réel.', intro: 'SQK construit une pile technologique intégrée reliant benchmarking quantique, orchestration, calcul scientifique, imagerie médicale et IA sécurisée dans une trajectoire de commercialisation cohérente.', missionTitle: 'Mission', missionBody: 'Transformer le calcul avancé en produits à haute confiance pour des secteurs où précision, fiabilité et explicabilité sont essentielles.', whyTitle: 'Pourquoi cela compte', whyBody: 'Au lieu de démonstrations isolées, SQK organise ses actifs en portefeuille connecté pouvant évoluer vers le SaaS, l’API, l’entreprise et les opportunités de plateforme.', bullets: ['Plateforme d’imagerie médicale phare avec QMedic', 'Benchmarking quantique et aide à la décision avec QTAU', 'Stratégie plateforme et orchestration via Qukkos', 'Modélisation guidée par la physique avec QPINN', 'Couche expérience et onboarding avec SuperQuantumStation'] },
    investorsPage: { eyebrow: 'Investisseurs', title: 'Une opportunité plateforme Quantum-AI-HPC en émergence.', intro: 'Le récit investisseurs de SQK combine des actifs technologiques validés, une exécution phare en imagerie médicale, des relations écosystème stratégiques et une feuille de route vers une valeur produit répétable.', thesisTitle: 'Thèse d’investissement', thesisBody: 'SQK évolue d’une innovation portée par la recherche vers une activité plateforme évolutive. La trajectoire combine applications phares, partenariats entreprise, programmes internationaux et routes de commercialisation couvrant SaaS, API, licences et opportunités plateforme.', timelineTitle: 'Chronologie des jalons', timeline: [{ year: '2024', title: 'Visibilité SuperQuantumStation', body: 'Crédibilité plateforme et signal écosystème grâce à une reconnaissance de niveau CES.' }, { year: '2025', title: 'Lancement de QWIND', body: 'Un projet lié à Eureka qui renforce la pertinence commerciale transfrontalière.' }, { year: '2026', title: 'Investissement stratégique et partenariats', body: 'Activité d’investissement, IBM Quantum, MathWorks HPC et collaborations institutionnelles renforcent la crédibilité.' }], pillars: [{ title: 'Forte barrière technologique', body: 'Benchmarking quantique, orchestration, imagerie médicale et IA guidée par la physique dans une seule pile.' }, { title: 'Focalisation sur des marchés à haute confiance', body: 'Pensé pour les secteurs où fiabilité et performance influencent directement la valeur.' }, { title: 'Multiples voies de commercialisation', body: 'SaaS, API, entreprise, packaging recherche-produit et partenariats écosystème.' }, { title: 'Signaux de croissance validés', body: 'Prix, R&D conjointe, transfert de technologie, projets médicaux et programmes internationaux.' }] },
    newsPage: { eyebrow: 'Actualités & insights', title: 'Une newsroom concise pour les jalons, partenariats et mises à jour plateforme.', intro: 'Cette section sert à communiquer les avancées de SQK aux investisseurs, partenaires et clients potentiels avec un récit deep-tech cohérent.', readMore: 'Lire l’article' },
    contactPage: { eyebrow: 'Contact', title: 'Ouvrez la conversation avec SQK.', intro: 'Le formulaire ci-dessous est une maquette front-end pour les demandes partenaires, investisseurs et produits.', form: { name: 'Nom', email: 'Email', company: 'Société', interest: 'Sujet d’intérêt', message: 'Message', submit: 'Envoyer la demande' } },
    cta: { contact: 'Contacter SQK', overview: 'Télécharger la présentation', whitepaper: 'Télécharger le livre blanc' },
    solutionCards: shared.solutionCards.map((s, i) => ({ ...s, blurb: ['Cadre de benchmarking et de validation quantiques pour l’analyse, l’exploration backend et la performance.', 'Couche d’orchestration quantique-classique pour l’exécution évolutive, le routage et le contrôle plateforme.', 'Modélisation Quantum-AI guidée par la physique pour le calcul scientifique, la simulation et l’optimisation.', 'Plateforme centrée sur la fiabilité pour la reconstruction et le raffinage CT/MRI avec gouvernance qualité.', 'Environnement primé d’expérience et d’expérimentation quantiques pour l’éducation, la recherche et l’onboarding.'][i] })),
    applicationCards: [{ ...shared.applicationCards[0], body: 'Mettre QMedic au premier plan comme workflow phare pour la reconstruction, le raffinement, la comparaison et la gouvernance qualité orientés CT/MRI.' }, { ...shared.applicationCards[1], body: 'Utiliser QPINN comme couche de modélisation lorsque l’IA boîte noire seule est insuffisante et que les contraintes physiques améliorent la confiance.' }, { ...shared.applicationCards[2], body: 'Utiliser QTAU comme moteur de preuve apportant benchmarking, reproductibilité, scorecards et reporting pour renforcer la confiance d’adoption autour de QMedic.' }],
    platformFlow: ['Calcul quantique', 'Orchestration', 'IA & modélisation', 'Infrastructure HPC', 'Applications & plateformes'],
    investorCards: [{ title: 'Forte barrière technologique', body: 'Benchmarking quantique, orchestration, imagerie médicale et IA guidée par la physique dans une seule pile.' }, { title: 'Positionnement haute confiance', body: 'Pensé pour les secteurs où précision, explicabilité et fiabilité sont critiques.' }, { title: 'Voies multiples de commercialisation', body: 'SaaS, API, déploiement entreprise, collaboration et partenariats plateforme.' }, { title: 'Signaux de croissance validés', body: 'Prix, programmes de recherche, projets institutionnels, investissements et collaborations.' }],
    newsCards: [{ ...shared.newsCards[0], tag: 'Investissement', title: 'IBM Ventures investit dans SQK et Qodex Quantum', body: 'Annonce officielle d’IBM sur l’investissement stratégique pour accélérer l’innovation quantique.' }, { ...shared.newsCards[1], tag: 'Prix', title: 'SuperQuantumStation récompensé au CES 2024', body: 'Page officielle des CES Innovation Awards pour Super Quantum Station.' }, { ...shared.newsCards[2], tag: 'Santé', title: 'Article public sur le lancement de QMedic', body: 'Couverture médiatique présentant QMedic et la plateforme d’imagerie médicale quantique de SQK.' }, { ...shared.newsCards[3], tag: 'Publication', title: 'Publication IEEE sur QMedic', body: 'Publication IEEE liée à la recherche d’imagerie médicale QMedic de SQK.' }, { ...shared.newsCards[4], tag: 'Publication', title: 'Publication IEEE sur Qukkos', body: 'Publication IEEE liée à la recherche sur l’orchestration et la plateforme de SQK.' }],
    businessModelSection: {
      eyebrow: 'Modèle économique',
      title: 'Une monétisation menée par QMedic avec un effet plateforme réutilisable.',
      intro: 'SQK mène avec QMedic comme wedge commercial, puis étend la monétisation via validation, orchestration, modélisation et accès écosystème.',
      items: [
        { asset: 'QMedic', initial: 'SaaS de recherche, pilotes payants, accès API et déploiements projet.', expansion: 'Licence hôpital/entreprise, intégration OEM en imagerie et modules workflow réglementés.', buyer: 'Hôpitaux, sociétés d’IA médicale, groupes de recherche en imagerie et partenaires PACS/OHIF.' },
        { asset: 'QTAU', initial: 'Rapports de benchmark, service de validation et support PoC entreprise.', expansion: 'Licence annuelle, modules audit/rapport et abonnement de validation.', buyer: 'Entreprises adoptant des workflows quantum/IA/HPC, instituts de recherche et partenaires cloud/HPC.' },
        { asset: 'Qukkos', initial: 'Projets d’intégration de workflows hybrides.', expansion: 'Moteur de workflow entreprise et orchestration managée.', buyer: 'Centres HPC, partenaires de l’écosystème quantique et équipes R&D entreprise.' },
        { asset: 'QPINN', initial: 'Projets spécialisés de R&D et de modélisation.', expansion: 'Licences d’optimisation métier et modules de simulation.', buyer: 'Entreprises industrielles, équipes de calcul scientifique et partenaires énergie/fabrication.' },
        { asset: 'SuperQuantumStation', initial: 'Abonnement, éducation et accès développeur.', expansion: 'Programmes écosystème, marketplace partenaires et canal d’acquisition.', buyer: 'Étudiants, développeurs, institutions et communautés partenaires.' },
      ],
    },
    goToMarketSection: {
      eyebrow: 'Go-to-Market',
      title: 'Commencer par QMedic, y attacher la confiance, puis convertir en revenus récurrents.',
      intro: 'La séquence commerciale est volontairement disciplinée pour garder un récit produit clair tout en accumulant l’effet de levier plateforme.',
      steps: [
        'Commencer par QMedic : utiliser un produit d’imagerie médicale clairement défini pour ouvrir les conversations commerciales.',
        'Attacher QTAU à QMedic : packager métriques qualité, rapports de benchmark et génération de preuves comme couche de confiance.',
        'Convertir la crédibilité projet en pilotes payants : cibler hôpitaux, laboratoires, sociétés d’IA médicale et partenaires HPC/quantique.',
        'Packager des modules répétables : dashboards, API, rapports de benchmark, connecteurs et playbooks de déploiement.',
        'Étendre vers la licence entreprise : proposer des offres SaaS/API/on-premise avec support récurrent et intégration.',
        'Utiliser SuperQuantumStation comme canal écosystème/partenaire plutôt que comme récit principal de vente entreprise.',
      ],
    },
    roadmapSection: {
      eyebrow: 'Feuille de route',
      title: 'Des pilotes aux contrats récurrents puis aux revenus plateforme à grande échelle.',
      intro: 'Le plan de croissance suit trois étapes : traction commerciale, durcissement produit et expansion entreprise.',
      phases: [
        { timeframe: '0–12 mois', commercial: 'Pipeline de pilotes QMedic, site investisseurs, supports et études de cas.', product: 'Packaging MVP/PoC QMedic, rapports benchmark QTAU et démos intégrées.', kpi: 'Pipeline pilotes, LOIs/MOUs, conversion démo et rapports benchmark.' },
        { timeframe: '12–24 mois', commercial: 'Convertir les pilotes en contrats récurrents payants et usage API.', product: 'QMedic SaaS/API, validation entreprise QTAU et intégration workflow Qukkos.', kpi: 'Revenu contracté, déploiements actifs et intégrations partenaires.' },
        { timeframe: '24–36 mois', commercial: 'Étendre les revenus plateforme et se développer à l’international.', product: 'Intégration inter-solutions et stack secure medical AI avec PQC.', kpi: 'Licences entreprise, relations OEM, marge brute et taux de renouvellement.' },
      ],
      proceedsTitle: 'Usage des fonds',
      proceeds: [
        'Productisation : durcissement SaaS/API QMedic, automatisation des rapports QTAU, connecteurs et outillage de déploiement.',
        'Validation : partenariats données, support pilotes, études benchmark, documentation et préparation qualité.',
        'Ingénierie : architecture plateforme, sécurité, intégration MLOps/HPC, backend scalable et dashboards utilisateur.',
        'Commercialisation : ventes entreprise, développement partenaires, relations investisseurs et supports d’entrée marché.',
        'Gouvernance et conformité : contrôles de confidentialité, revues sécurité, revues légales, validation des claims et préparation réglementaire.',
      ],
    },
    footer: { line: 'SQK · Plateformes Quantum-AI-HPC pour les industries à haute confiance' },
  },
};
