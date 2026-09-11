import React from "react";
import flutterLogo from "./assets/flutter.svg";
import dartLogo from "./assets/dart.svg";
import firebaseLogo from "./assets/firebase.svg";
import githubLogo from "./assets/github.svg";
import cipmHome from "./assets/projects/cipm/home.png";
import cipmTraining from "./assets/projects/cipm/training.png";
import cipmCertificates from "./assets/projects/cipm/certificates.png";
import cipmVoting from "./assets/projects/cipm/voting.png";
import ezOwed from "./assets/projects/eazysplitz/owed.png";
import ezKeypad from "./assets/projects/eazysplitz/keypad.png";
import ezDragSplit from "./assets/projects/eazysplitz/drag-split.png";
import ezSwipeSettle from "./assets/projects/eazysplitz/swipe-settle.png";
import ezSettled from "./assets/projects/eazysplitz/settled.png";
import ezIcon from "./assets/projects/eazysplitz/icon.png";

/* ================================================================== */
/*  Data                                                                */
/* ================================================================== */

const personalDetails = {
  name: "Michael Olorundare",
  role: "Flutter Mobile Engineer",
  location: "Lagos, Nigeria",
  tagline: "Production Flutter apps. Real users. Real architecture.",
  descriptionParagraphs: [
    "I'm a Flutter engineer focused on building scalable, maintainable mobile applications that solve real product problems.",
    "I've worked across enterprise, fintech and travel products, contributing to production applications and independently delivering complex features involving payments, APIs, eSIM provisioning, identity verification and real-time data.",
    "I enjoy working in existing codebases, understanding how systems fit together, and taking features from requirements through implementation, testing and release.",
  ],
  approach:
    "My approach is simple: understand the problem, design the right architecture, build carefully, test thoroughly, and ship.",
  skills: [
    "Flutter & Dart",
    "Riverpod · Clean Architecture",
    "Payments · APIs · Identity",
  ],
  stats: [
    { value: "3+", label: "Years Shipping Flutter" },
    { value: "1K+", label: "Users Reached" },
    { value: "4", label: "Payment Gateways" },
  ],
  contact: {
    email: "michaelolorundare@gmail.com",
    phone: "09069349103",
    location: "Lagos, Nigeria",
  },
  links: {
    github: "https://github.com/themichaelolu",
    linkedin:
      "https://www.linkedin.com/in/michael-olorundare-a41335214/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    resume: "https://drive.google.com/file/d/1lu2jPZD_QatIaoijn9ln6VqTP4uPYBpE/view?usp=sharing",
  },
};

const projectsData = [
  {
    title: "CIPM Mobile Nigeria",
    category: "Production / Enterprise",
    featured: true,
    dates: "Mar 2025 — Nov 2025",
    role: "Flutter Engineer",
    summary:
      "Professional platform for membership, examinations and digital services.",
    highlights: [
      "Built and maintained production Flutter features",
      "Integrated and maintained payment workflows",
      "Worked with multiple REST APIs",
      "Implemented examination and payment workflows",
      "Used Riverpod and Clean Architecture patterns",
      "Collaborated with backend, QA and product teams",
      "Debugged and resolved production issues",
    ],
    metrics: ["1,000+ Users", "4 Payment Gateways", "Flutter + Riverpod"],
    tags: ["Flutter", "Riverpod", "Clean Architecture", "REST API", "Firebase"],
    contribution:
      "Built and maintained production Flutter features across authentication, examinations, payments and member workflows, integrating multiple backend services and payment providers.",
    playStore: "https://play.google.com/store/apps/details?id=com.cipm.mobile",
    appStore: "https://apps.apple.com/us/app/cipm-nigeria/id6755308723",
    accent: "#16a34a",
    images: [
      { src: cipmHome, alt: "CIPM Mobile member home screen showing membership grade, licence status and notifications" },
      { src: cipmTraining, alt: "CIPM Mobile training events screen with registration and payment status" },
      { src: cipmCertificates, alt: "CIPM Mobile appreciation letters screen with downloadable certificates" },
      { src: cipmVoting, alt: "CIPM Mobile election token verification screen" },
    ],
    imageWidth: 350,
    imageHeight: 738,
    imageClass: "rounded-[11.5%/5.5%] shadow-md",
    imageNote: "App screens shown with test account data.",
    caseStudy: [
      {
        tab: "Overview",
        body: "CIPM Mobile Nigeria is a production application for a professional membership body, covering member registration, examinations, payments and digital services. I contributed as a Flutter engineer on an existing production codebase — I did not build or found the application.",
      },
      { tab: "Screens", gallery: true },
      {
        tab: "My Contribution",
        list: [
          "Built and maintained production Flutter features",
          "Integrated and maintained payment workflows",
          "Worked with multiple REST APIs",
          "Implemented examination and payment workflows",
          "Used Riverpod and Clean Architecture patterns",
          "Collaborated with backend, QA and product teams",
          "Debugged and resolved production issues",
        ],
      },
      {
        tab: "Technical Challenges",
        body: "Integrating four separate payment gateways — Remita, Interswitch, E-Tranzact and CyberPay — alongside multiple REST APIs into a single production Flutter codebase, while keeping examination and payment workflows reliable for live members.",
      },
      {
        tab: "Implementation",
        body: "Features were implemented in Flutter using Riverpod and Clean Architecture, separating payment, examination and member workflows into distinct, testable feature modules layered over the app's existing REST and Firebase services.",
      },
      {
        tab: "Technologies",
        list: ["Flutter", "Riverpod", "Clean Architecture", "REST APIs", "Firebase", "Remita", "Interswitch", "E-Tranzact", "CyberPay"],
      },
      {
        tab: "Outcome",
        body: "Production features shipped and maintained for 1,000+ users, with payment workflows running across four gateway integrations.",
      },
    ],
  },
  {
    title: "VOYA Travels",
    category: "Production Feature Engineering",
    featured: true,
    dates: "Dec 2025 — Mar 2026",
    role: "Flutter Engineer",
    summary:
      "Independently implemented complex mobile features within an existing production Flutter application, including an end-to-end eSIM workflow and facial liveness and identity verification using Google ML Kit.",
    highlights: [
      "Independently implemented eSIM plan selection, purchase, activation and management workflows",
      "Integrated carrier provisioning APIs",
      "Implemented facial liveness and identity verification using Google ML Kit",
      "Worked with mobile camera handling and facial movement detection",
      "Integrated REST APIs across complex travel workflows",
      "Implemented SMS/OTP workflows using Termii",
      "Worked within an existing production codebase",
    ],
    tags: ["Flutter", "Google ML Kit", "REST API", "Termii", "Riverpod"],
    playStore: "https://play.google.com/store/apps/details?id=com.voya.userApp",
    appStore: "https://apps.apple.com/ca/app/voya-visas-for-global-travel/id6737156681",
    accent: "#4d65ff",
    secondaryText: "Travel & visa application platform",
    capabilities: [
      { label: "eSIM provisioning", detail: "Plan selection → purchase → activation → management" },
      { label: "Facial liveness", detail: "Google ML Kit · camera handling · movement detection" },
      { label: "Identity & OTP", detail: "Identity verification · Termii SMS/OTP" },
    ],
    caseStudy: [
      {
        tab: "Overview",
        body: "VOYA is a travel and visa application platform. I independently implemented complex mobile features within its existing production Flutter application — I did not build the entire app, and this reflects previous feature engineering work rather than a current role.",
      },
      {
        tab: "My Contribution",
        list: [
          "Independently implemented eSIM plan selection, purchase, activation and management workflows",
          "Integrated carrier provisioning APIs",
          "Implemented facial liveness and identity verification using Google ML Kit",
          "Worked with mobile camera handling and facial movement detection",
          "Integrated REST APIs across complex travel workflows",
          "Implemented SMS/OTP workflows using Termii",
          "Worked within an existing production codebase",
        ],
      },
      {
        tab: "Technical Challenges",
        body: "Building camera-based facial liveness detection, and a reliable end-to-end eSIM provisioning flow — from plan selection through carrier activation — inside an existing, large production codebase.",
      },
      {
        tab: "Implementation",
        body: "The eSIM and identity verification flows were built as self-contained Flutter features, integrating carrier provisioning REST APIs, Google ML Kit for on-device facial analysis, and Termii for SMS/OTP verification.",
      },
      {
        tab: "Technologies",
        list: ["Flutter", "Google ML Kit", "REST APIs", "Termii", "Riverpod"],
      },
      {
        tab: "Outcome",
        body: "Shipped production eSIM and identity verification features within an existing travel and visa platform.",
      },
    ],
  },
  {
    title: "EazySplitz",
    category: "Personal R&D / Product",
    featured: true,
    dates: "Ongoing",
    role: "Independent Developer",
    summary:
      "An offline-first collaborative expense splitting application designed to keep group balances accurate across devices, even when users temporarily lose connectivity.",
    highlights: [
      "Offline-first expense entry",
      "Real-time Firestore synchronization",
      "Multi-user collaboration",
      "Invite-based participant joining",
      "Concurrent seat claiming",
      "Custom expense splitting",
      "Drag-to-split allocation",
      "Swipe-to-settle interactions",
      "Exact currency reconciliation",
      "Deterministic settlement calculations",
      "180 automated tests",
    ],
    metrics: ["180 Automated Tests", "Offline-first", "Real-time Sync"],
    tags: ["Flutter", "Dart", "Riverpod", "Firebase", "Cloud Firestore"],
    accent: "#94a3b8",
    secondaryText: "Offline-first expense splitting for groups.",
    icon: ezIcon,
    github: "https://github.com/themichaelolu/jfk_guys",
    status: "Google Play release in progress",
    images: [
      { src: ezOwed, alt: "EazySplitz balance summary screen showing the total you are owed" },
      { src: ezDragSplit, alt: "EazySplitz drag-to-split allocation bar across four participants" },
      { src: ezSwipeSettle, alt: "EazySplitz swipe-to-settle list of balances between participants" },
      { src: ezKeypad, alt: "EazySplitz expense amount entry keypad" },
      { src: ezSettled, alt: "EazySplitz settled balances confirmation screen" },
    ],
    imageWidth: 540,
    imageHeight: 960,
    imageClass: "rounded-[4%/2.25%] shadow-md ring-1 ring-slate-900/10 dark:ring-white/10",
    imageNote: "Google Play listing graphics.",
    caseStudy: [
      { tab: "Screens", gallery: true },
      {
        tab: "Problem",
        body: "Groups splitting shared expenses need balances that stay accurate across devices, even when someone temporarily loses connectivity — a common failure point for naive online-only expense apps.",
      },
      {
        tab: "Solution",
        body: "An offline-first collaborative expense splitting application built around Riverpod, Firebase Authentication and Cloud Firestore, letting participants log expenses offline and sync in real time once connectivity returns.",
      },
      {
        tab: "Architecture",
        body: "Built around Riverpod, Firebase Authentication, Cloud Firestore and pure Dart financial calculators. The architecture separates domain calculations from UI state and persistence, with deterministic settlement logic designed to prevent duplicate or over-settlement.",
      },
      {
        tab: "Key Features",
        list: [
          "Offline-first expense entry",
          "Real-time Firestore synchronization",
          "Multi-user collaboration",
          "Invite-based participant joining",
          "Concurrent seat claiming",
          "Custom expense splitting",
          "Drag-to-split allocation",
          "Swipe-to-settle interactions",
          "Exact currency reconciliation",
          "Deterministic settlement calculations",
        ],
      },
      {
        tab: "Technical Decisions",
        body: "Pure Dart financial calculators keep settlement math independent of Flutter and fully unit-testable. Domain logic is isolated from UI state and persistence, so settlement rules stay deterministic regardless of sync timing or offline edits.",
      },
      {
        tab: "Testing",
        body: "180 automated tests cover financial calculations, application state, widgets and edge cases.",
      },
    ],
  },
  {
    title: "Getteasy",
    category: "Production / Client",
    dates: "Feb 2024 — Aug 2024",
    role: "Flutter Engineer",
    summary:
      "Converted complex hospitality Figma designs into a pixel-perfect, animated Flutter app with a reusable component library.",
    highlights: [
      "Pixel-perfect conversion of full Figma design system.",
      "Hotel browsing, galleries, and booking flow.",
      "Reusable widget library for future feature velocity.",
      "Smooth animations with Flutter's built-in compositing.",
    ],
    tags: ["Flutter", "Custom UI", "Animations", "Figma-to-Flutter"],
    playStore: "https://play.google.com/store/apps/details?id=com.getteasyngltd.getteasy&hl=en",
    appStore: "https://apps.apple.com/ng/app/getteasy-mobile/id6743634089",
    accent: "#f59e0b",
    secondaryText: "Hotel browsing & booking",
  },
  {
    title: "Engineering Labs",
    category: "Personal R&D",
    dates: "Ongoing",
    role: "Personal R&D",
    summary:
      "Personal experiments exploring application architecture, CI/CD, Firebase integrations and mobile engineering patterns.",
    tags: [
      "Clean Architecture",
      "GitHub Actions",
      "CI/CD",
      "Firebase",
      "Testing",
    ],
    accent: "#64748b",
    isExperiment: true,
  },
];

const experienceData = [
  {
    period: "2023 — Present",
    title: "Mobile Engineer",
    company: "Cyberspace Limited",
    description:
      "Flutter engineer contributing to production applications across enterprise and professional sectors, working within existing codebases alongside backend, QA and product teams.",
    details: [
      "Built and maintained production Flutter features for CIPM Mobile Nigeria, serving 1,000+ users.",
      "Integrated and maintained payment workflows across Remita, Interswitch, E-Tranzact and CyberPay.",
      "Implemented scalable feature architecture using Riverpod, Clean Architecture and typed API models.",
      "Collaborated with backend, QA and product teams to ship and troubleshoot production features.",
    ],
  },
  {
    period: "Dec 2025 — Mar 2026",
    title: "Mobile Developer",
    company: "VOYA (Contract)",
    description:
      "Contracted to independently implement complex mobile features within an existing production Flutter application for a global travel and visa platform.",
    details: [
      "Independently implemented an end-to-end eSIM workflow covering plan selection, purchase, activation and management.",
      "Built facial liveness and identity verification using Google ML Kit and mobile camera processing.",
      "Integrated multiple REST APIs and Termii SMS/OTP workflows.",
      "Worked within an existing production Flutter codebase to deliver complex mobile features.",
    ],
  },
  {
    period: "Feb 2024 — Aug 2024",
    title: "Mobile Engineer",
    company: "Getteasy (Contract)",
    description:
      "Delivered the complete mobile UI for a hospitality startup — from empty repo to Play Store — working directly from Figma assets.",
    details: [
      "Pixel-perfect implementation of full Figma design system.",
      "Built reusable widget library used across 12+ screens.",
      "Implemented animated hotel gallery and booking flow.",
    ],
  },
  {
    period: "Ongoing",
    title: "Freelance Flutter Engineer",
    company: "Independent",
    description:
      "Building bespoke Flutter apps and technical prototypes for clients, and running personal R&D on architecture patterns and CI/CD automation.",
    details: [],
  },
];

const skillCategories = [
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: <img src={flutterLogo} alt="" className="w-4 h-4" /> },
      { name: "Dart", icon: <img src={dartLogo} alt="" className="w-4 h-4" /> },
      {
        name: "Riverpod",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
          </svg>
        ),
      },
      {
        name: "GoRouter",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><path d="M6 8v4a4 4 0 0 0 4 4h2M6 8v0"/><path d="M12 16h2a4 4 0 0 0 0-8"/>
          </svg>
        ),
      },
      {
        name: "Android",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="6" y="4" width="12" height="17" rx="2"/><path d="M6 8h12M10 21v0M14 21v0"/>
          </svg>
        ),
      },
      {
        name: "iOS",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      {
        name: "REST APIs",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        ),
      },
      {
        name: "Dio · Retrofit",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12h11M15 12l-3-3M15 12l-3 3"/><rect x="17" y="7" width="4" height="10" rx="1"/>
          </svg>
        ),
      },
      { name: "Firebase", icon: <img src={firebaseLogo} alt="" className="w-4 h-4" /> },
      {
        name: "Cloud Firestore",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        ),
      },
      {
        name: "Authentication",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Integrations",
    items: [
      {
        name: "Payment Gateways",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
          </svg>
        ),
      },
      {
        name: "eSIM APIs",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/>
          </svg>
        ),
      },
      {
        name: "Termii",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-11.8 7.8L3 21l1.7-6.2A8.5 8.5 0 1 1 21 11.5z"/>
          </svg>
        ),
      },
      {
        name: "Google ML Kit",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/><path d="M8.5 15a4 4 0 0 0 7 0"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Engineering",
    items: [
      {
        name: "Clean Architecture",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="17" width="18" height="4" rx="1"/>
          </svg>
        ),
      },
      {
        name: "Dependency Injection",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        ),
      },
      {
        name: "Testing",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12l5 5L20 7"/>
          </svg>
        ),
      },
      { name: "Git", icon: <img src={githubLogo} alt="" className="w-4 h-4" /> },
      {
        name: "CI/CD",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
          </svg>
        ),
      },
      {
        name: "Debugging",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="8" y="7" width="8" height="12" rx="4"/><path d="M8 11H3M21 11h-5M8 15H4M20 15h-4M9 7l-2-2M15 7l2-2M12 7V4"/>
          </svg>
        ),
      },
      {
        name: "Performance Optimization",
        icon: (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20a8 8 0 1 1 8-8"/><path d="M12 12l4-3"/>
          </svg>
        ),
      },
    ],
  },
];

/* ================================================================== */
/*  Hooks                                                               */
/* ================================================================== */

/* Intersection Observer scroll-reveal hook */
const useReveal = (options = {}) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

/* Reveal wrapper — fades + slides up when it enters the viewport */
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const useDarkMode = () => {
  const [dark, setDark] = React.useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return [dark, setDark];
};

/* ================================================================== */
/*  Atoms                                                               */
/* ================================================================== */

const fadeUp = (delay) => ({
  animation: "fade-up 0.5s ease-out both",
  animationDelay: `${delay}ms`,
});

const btnPrimary =
  "cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200";
const btnSecondary =
  "cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-slate-400 hover:bg-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/60 transition-colors duration-200";
const btnSmall =
  "cursor-pointer inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 px-3.5 text-[13px] font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:text-slate-900 dark:hover:border-slate-500 dark:hover:text-white transition-colors duration-200";
const btnSmallPrimary =
  "cursor-pointer inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-3.5 text-[13px] font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200";

const Icon = ({ className = "w-4 h-4", children }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Icon>
);

const ArrowUpRightIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M7 17L17 7M7 7h10v10" />
  </Icon>
);

const CheckIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);

const MailIcon = ({ className }) => (
  <Icon className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </Icon>
);

const PhoneIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2z" />
  </Icon>
);

const PinIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.3 4.7 18.3 5 18.3 5c.7 1.8.2 3.1.1 3.4.8.9 1.3 2 1.3 3.3 0 4.7-2.9 5.7-5.6 6 .5.4.9 1.1.9 2.3v3.4c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zm1.8 13H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
  </svg>
);

const GooglePlayIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.87-2.87L3.18 23.76zM.54 1.1A1.5 1.5 0 0 0 0 2.25v19.5c0 .47.2.9.54 1.15l.07.06 10.93-10.93v-.26L.61 1.04.54 1.1zM23.17 10.6l-3.12-1.78-3.2 3.2 3.2 3.2 3.14-1.79a1.5 1.5 0 0 0 0-2.83zM4.17.24l13.2 11.96-2.87 2.87L4.17.24z" />
  </svg>
);

const AppleIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
  </svg>
);

const SectionHeader = ({ eyebrow, title, description, number }) => (
  <div className="flex flex-col gap-3 mb-10 sm:mb-12">
    <div className="flex items-center gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
      {number && <span className="text-primary">{number}</span>}
      <span className="uppercase tracking-[0.18em]">{eyebrow}</span>
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
    </div>
    <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h2>
    {description && (
      <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-md border border-slate-200 dark:border-slate-800 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
    {children}
  </span>
);

const CategoryLabel = ({ project }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
    <span
      className="h-1.5 w-1.5 rounded-full"
      style={{ background: project.accent }}
      aria-hidden="true"
    />
    {project.category}
  </span>
);

/* ================================================================== */
/*  Header                                                              */
/* ================================================================== */

const Header = ({ details, dark, setDark }) => {
  const [open, setOpen] = React.useState(false);
  const links = ["Projects", "Experience", "About", "Process", "Architecture", "Contact"];
  const initials = details.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 font-mono text-xs font-medium text-slate-900 dark:text-white">
            {initials}
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-sm font-semibold text-slate-900 dark:text-white">
              {details.name}
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">
              {details.role}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {links.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="cursor-pointer flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-200"
          >
            {dark ? (
              <Icon>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </Icon>
            ) : (
              <Icon>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </Icon>
            )}
          </button>

          <a
            href={details.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-3.5 text-xs font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
          >
            Resume
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="cursor-pointer md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          >
            <Icon>
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
            </Icon>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex flex-col gap-1"
        >
          {links.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors duration-200"
            >
              {s}
            </a>
          ))}
          <a
            href={details.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors duration-200 sm:hidden"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

/* ================================================================== */
/*  Hero                                                                */
/* ================================================================== */

const Hero = ({ details }) => (
  <section id="hero" className="w-full pt-16 pb-20 sm:pt-24 sm:pb-24">
    <div className="max-w-3xl">
      <p
        className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-slate-500 dark:text-slate-400"
        style={fadeUp(0)}
      >
        <span className="uppercase tracking-[0.14em] sm:tracking-[0.18em]">
          <span className="whitespace-nowrap">{details.role}</span>
          {" · "}
          <span className="whitespace-nowrap">{details.location}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Available for new projects
        </span>
      </p>

      <h1
        className="mt-6 font-display text-4xl sm:text-6xl font-semibold leading-[1.05] tracking-tight text-slate-900 dark:text-white"
        style={fadeUp(80)}
      >
        I build production Flutter apps that{" "}
        <span className="text-primary">work.</span>
      </h1>

      <p
        className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed"
        style={fadeUp(160)}
      >
        Flutter mobile engineer focused on scalable architecture, complex API
        integrations, payments, identity verification, and real-world product
        delivery.
      </p>
      <p
        className="mt-3 text-base text-slate-500 dark:text-slate-400 leading-relaxed"
        style={fadeUp(200)}
      >
        Production Flutter applications for Android & iOS — from architecture
        and API integration to testing and release.
      </p>

      <div className="mt-8 flex flex-wrap gap-3" style={fadeUp(260)}>
        <a href="#projects" className={`group ${btnPrimary}`}>
          View Projects
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
        <a
          href={details.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={btnSecondary}
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          href={details.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={btnSecondary}
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>

      <p
        className="mt-6 font-mono text-xs text-slate-500 dark:text-slate-400"
        style={fadeUp(320)}
      >
        {details.skills.join("  /  ")}
      </p>
    </div>

    <dl
      className="mt-14 grid grid-cols-3 border-y border-slate-200 dark:border-slate-800 divide-x divide-slate-200 dark:divide-slate-800"
      style={fadeUp(380)}
    >
      {details.stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-1 py-5 px-3 sm:px-6 first:pl-0">
          <dt className="order-last text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug">
            {s.label}
          </dt>
          <dd className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

/* ================================================================== */
/*  Projects                                                            */
/* ================================================================== */

const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const dialogRef = React.useRef(null);
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    const trigger = document.activeElement;
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus?.();
    };
  }, [onClose]);

  const tabs = project.caseStudy;
  const current = tabs[activeTab];
  const panelId = `case-study-panel-${activeTab}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 px-5 pt-5 sm:px-7 sm:pt-6">
          <div className="min-w-0 pb-4">
            <CategoryLabel project={project} />
            <h3
              id="case-study-title"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              {project.title}
            </h3>
            <div
              role="tablist"
              aria-label={`${project.title} case study sections`}
              className="-mb-4 mt-4 flex gap-1 overflow-x-auto"
            >
              {tabs.map((t, i) => (
                <button
                  key={t.tab}
                  type="button"
                  role="tab"
                  id={`case-study-tab-${i}`}
                  aria-selected={i === activeTab}
                  aria-controls={`case-study-panel-${i}`}
                  onClick={() => setActiveTab(i)}
                  className={`cursor-pointer whitespace-nowrap border-b-2 px-3 py-2.5 text-sm transition-colors duration-200 ${
                    i === activeTab
                      ? "border-primary font-medium text-slate-900 dark:text-white"
                      : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {t.tab}
                </button>
              ))}
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="cursor-pointer flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
          >
            <Icon>
              <path d="M6 6l12 12M6 18L18 6" />
            </Icon>
          </button>
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`case-study-tab-${activeTab}`}
          className="overflow-y-auto px-5 py-6 sm:px-7"
        >
          {current.gallery && (
            <figure>
              <div
                role="region"
                aria-label={`${project.title} screens`}
                tabIndex={0}
                className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 sm:-mx-7 sm:scroll-px-7 sm:px-7"
              >
                {project.images.map((img) => (
                  <img
                    key={img.alt}
                    src={img.src}
                    alt={img.alt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                    className={`h-80 w-auto flex-shrink-0 snap-start sm:h-[26rem] ${project.imageClass}`}
                  />
                ))}
                <span className="w-2 flex-shrink-0" aria-hidden="true" />
              </div>
              {project.imageNote && (
                <figcaption className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {project.imageNote}
                </figcaption>
              )}
            </figure>
          )}
          {current.body && (
            <p className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {current.body}
            </p>
          )}
          {current.list && (
            <ul className="grid max-w-2xl gap-2.5 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
              {current.list.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectLinks = ({ project, onOpenCaseStudy }) => (
  <div className="flex flex-wrap items-center gap-2">
    {project.caseStudy && (
      <button type="button" onClick={onOpenCaseStudy} className={`group ${btnSmallPrimary}`}>
        Case study
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    )}
    {project.github && (
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={btnSmall}>
        <GitHubIcon className="h-3.5 w-3.5" />
        GitHub
      </a>
    )}
    {project.playStore && (
      <a href={project.playStore} target="_blank" rel="noopener noreferrer" className={btnSmall}>
        <GooglePlayIcon />
        Google Play
      </a>
    )}
    {project.appStore && (
      <a href={project.appStore} target="_blank" rel="noopener noreferrer" className={btnSmall}>
        <AppleIcon />
        App Store
      </a>
    )}
  </div>
);

const ProjectVisual = ({ project }) => {
  if (project.images) {
    return (
      <figure className="w-full">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {project.images.slice(0, 3).map((img, i) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              decoding="async"
              className={`h-auto w-[30%] max-w-[190px] ${project.imageClass} ${
                i === 1 ? "sm:-translate-y-4" : ""
              }`}
            />
          ))}
        </div>
        {project.imageNote && (
          <figcaption className="mt-6 text-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
            {project.imageNote}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="w-full max-w-md">
      <ol className="surface divide-y divide-slate-200 dark:divide-slate-800">
        {project.capabilities.map((c, i) => (
          <li key={c.label} className="flex gap-4 p-5">
            <span className="pt-0.5 font-mono text-xs text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{c.label}</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {c.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 text-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
        Features I implemented
      </figcaption>
    </figure>
  );
};

const FeaturedProject = ({ project, reverse, onOpenCaseStudy }) => (
  <article className="surface grid overflow-hidden lg:grid-cols-2">
    <div className={`flex flex-col gap-5 p-6 sm:p-8 ${reverse ? "lg:order-2" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <CategoryLabel project={project} />
        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
          {project.dates}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {project.icon && (
          <img
            src={project.icon}
            alt=""
            width="48"
            height="48"
            className="h-12 w-12 flex-shrink-0 rounded-xl"
          />
        )}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {project.secondaryText}
          </p>
        </div>
      </div>

      <p className="leading-relaxed text-slate-700 dark:text-slate-300">
        {project.contribution || project.summary}
      </p>

      {project.metrics && (
        <ul className="flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <li
              key={m}
              className="rounded-md bg-slate-100 dark:bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-800 dark:text-slate-200"
            >
              {m}
            </li>
          ))}
        </ul>
      )}

      <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-400">
        {project.highlights.slice(0, 4).map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
        {project.tags.join(" · ")}
      </p>

      <div className="mt-auto flex flex-col gap-3 pt-2">
        <ProjectLinks project={project} onOpenCaseStudy={onOpenCaseStudy} />
        {project.status && (
          <p className="inline-flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            {project.status}
          </p>
        )}
      </div>
    </div>

    <div
      className={`flex items-center justify-center border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-white/[0.02] px-6 py-10 sm:px-8 lg:border-t-0 ${
        reverse ? "lg:order-1 lg:border-r" : "lg:border-l"
      }`}
    >
      <ProjectVisual project={project} />
    </div>
  </article>
);

const ProjectCard = ({ project }) => (
  <article
    className={`flex h-full flex-col gap-4 p-6 ${
      project.isExperiment
        ? "rounded-2xl border border-dashed border-slate-300 dark:border-slate-700"
        : "surface"
    }`}
  >
    <div className="flex flex-wrap items-center justify-between gap-2">
      <CategoryLabel project={project} />
      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
        {project.dates}
      </span>
    </div>
    <div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {project.title}
      </h3>
      {project.secondaryText && (
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.secondaryText}</p>
      )}
    </div>
    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.summary}</p>
    {project.highlights && (
      <ul className="grid gap-1.5 text-sm text-slate-600 dark:text-slate-400">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    )}
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((t) => (
        <Pill key={t}>{t}</Pill>
      ))}
    </div>
    <div className="mt-auto pt-2">
      <ProjectLinks project={project} />
    </div>
  </article>
);

const ProjectsSection = ({ projects }) => {
  const [activeProject, setActiveProject] = React.useState(null);
  const closeCaseStudy = React.useCallback(() => setActiveProject(null), []);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="w-full py-20">
      <SectionHeader
        number="01"
        eyebrow="Selected Work"
        title="Projects & Impact"
        description="Production Flutter work and independent engineering — from enterprise platforms with real users to self-built, fully tested products."
      />
      <div className="flex flex-col gap-6">
        {featured.map((p, i) => (
          <Reveal key={p.title}>
            <FeaturedProject
              project={p}
              reverse={i % 2 === 1}
              onOpenCaseStudy={() => setActiveProject(p)}
            />
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      {activeProject && (
        <CaseStudyModal
          key={activeProject.title}
          project={activeProject}
          onClose={closeCaseStudy}
        />
      )}
    </section>
  );
};

/* ================================================================== */
/*  Experience                                                          */
/* ================================================================== */

const ExperienceSection = ({ experience }) => (
  <section id="experience" className="w-full py-20">
    <SectionHeader
      number="02"
      eyebrow="Career"
      title="Work Experience"
      description="3+ years of Flutter delivery across enterprise platforms, product startups, and contract work — with shipped apps to show for it."
    />
    <ol className="ml-1 flex flex-col gap-6 border-l border-slate-200 dark:border-slate-800">
      {experience.map((item, i) => (
        <li key={`${item.company}-${item.period}`} className="relative pl-6 sm:pl-8">
          <span
            className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background-light dark:bg-background-dark"
            aria-hidden="true"
          />
          <Reveal delay={i * 80}>
            <div className="surface p-6">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.company}
                  </p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {item.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
              {item.details.length > 0 && (
                <ul className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </section>
);

/* ================================================================== */
/*  About                                                               */
/* ================================================================== */

const AboutSection = ({ details }) => (
  <section id="about" className="w-full py-20">
    <SectionHeader
      number="03"
      eyebrow="Profile"
      title="About Me"
      description="Flutter engineer. Clean architecture advocate. Delivery-focused."
    />

    <Reveal>
      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">
        <div className="surface p-6 sm:p-8 lg:col-span-3">
          <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {details.descriptionParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="mt-1 border-t border-slate-200 pt-4 font-medium text-slate-900 dark:border-slate-800 dark:text-white">
              {details.approach}
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <PinIcon className="h-4 w-4" />
              Based in {details.location}
            </p>
          </div>
        </div>

        <div className="surface flex flex-col gap-6 p-6 sm:p-8 lg:col-span-2">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {cat.category}
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {cat.items.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-slate-200"
                  >
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center text-slate-500 dark:text-slate-400">
                      {s.icon}
                    </span>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

/* ================================================================== */
/*  How I Build                                                         */
/* ================================================================== */

const buildSteps = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the product requirement, existing architecture, API contracts and user flow.",
  },
  {
    step: "02",
    title: "Design",
    description: "Break the feature into domain logic, data flow, UI states and edge cases.",
  },
  {
    step: "03",
    title: "Build",
    description: "Implement maintainable Flutter features using appropriate architecture and state management.",
  },
  {
    step: "04",
    title: "Integrate",
    description: "Connect backend APIs, payments, Firebase, third-party SDKs and platform services.",
  },
  {
    step: "05",
    title: "Test",
    description: "Validate business logic, state, widgets, edge cases and production behavior.",
  },
  {
    step: "06",
    title: "Ship",
    description: "Debug, optimize, prepare releases and work with QA/product teams through delivery.",
  },
];

const HowIBuildSection = () => (
  <section id="process" className="w-full py-20">
    <SectionHeader
      number="04"
      eyebrow="Process"
      title="How I Build"
      description="A consistent process for taking a feature from requirement to release."
    />
    <Reveal>
      <ol className="grid grid-cols-1 gap-x-12 border-t border-slate-200 dark:border-slate-800 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
        {buildSteps.map((s) => (
          <li
            key={s.step}
            className="flex gap-5 border-b border-slate-200 py-6 dark:border-slate-800"
          >
            <span className="pt-1 font-mono text-sm text-primary">{s.step}</span>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  </section>
);

/* ================================================================== */
/*  Architecture & Approach                                             */
/* ================================================================== */

const architectureLayers = [
  {
    layer: "Presentation Layer",
    description: "Flutter UI + Riverpod for reactive state management. Widgets are dumb — they observe state and dispatch events, nothing more.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    layer: "Domain Layer",
    description: "Business logic, use cases, and entities. Pure Dart — no Flutter dependencies, no framework coupling. Fully testable in isolation.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    layer: "Data Layer",
    description: "Repository pattern, API services, and local caching. The only layer that knows about Firebase, REST, or SQLite — swappable without touching business logic.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
];

const architectureBenefits = [
  { text: "Testability — easier testing and debugging" },
  { text: "Maintainability across a growing codebase" },
  { text: "Clear separation of concerns" },
  { text: "Faster feature iteration" },
];

const architecturePillars = [
  {
    title: "Clean Architecture",
    description:
      "Data, domain, and presentation layers are strictly separated. Business logic lives in pure Dart use cases — UI never touches the data source directly.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="17" width="18" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Riverpod State Management",
    description:
      "Provider-independent, compile-safe state with AsyncNotifier and StateNotifier patterns. No BuildContext leaks, no spaghetti setState.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: "Repository Pattern",
    description:
      "Every data source sits behind an abstract repository interface. Swapping REST for Firebase, or mocking in tests, requires zero changes in business logic.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "Figma → Production UI",
    description:
      "I build screens from Figma assets with pixel-exact fidelity — spacing, typography, motion, and brand color all preserved. No rogue padding, no 'close enough'.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "REST API Integration",
    description:
      "Secure API layers with token management, retry logic, and typed response models using Freezed. Errors surface as typed failures, never raw exceptions.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "CI/CD & Play Store Deployment",
    description:
      "GitHub Actions pipelines for automated builds and testing. Android release signing, Play Store compliance, and AAB uploads handled as repeatable, scripted processes.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
  },
];

const ArchitectureSection = () => (
  <section id="architecture" className="w-full py-20">
    <SectionHeader
      number="05"
      eyebrow="Engineering Approach"
      title="Architecture & Approach"
      description="Architecture patterns applied across production and personal Flutter projects."
    />
    <p className="-mt-6 mb-10 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-12">
      This structure supports testability, maintainability, clear separation of concerns and faster feature iteration.
    </p>

    <Reveal>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <ol className="flex flex-col gap-4 lg:col-span-3">
          {architectureLayers.map((item, i) => (
            <li key={item.layer} className="surface flex gap-4 p-5">
              <div className="flex flex-shrink-0 flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-primary dark:border-slate-800">
                  {item.icon}
                </div>
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                  L{i + 1}
                </span>
              </div>
              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-slate-900 dark:text-white">
                  {item.layer}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="surface p-6">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              This structure allows for
            </h3>
            <ul className="space-y-3">
              {architectureBenefits.map((b) => (
                <li
                  key={b.text}
                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface p-6">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Also applied
            </h3>
            <ul className="flex flex-col gap-4">
              {architecturePillars.slice(3).map((pillar) => (
                <li key={pillar.title} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                    {pillar.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{pillar.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ================================================================== */
/*  Selected Engineering Work                                          */
/* ================================================================== */

const engineeringWins = [
  {
    title: "Multi-Gateway Payments",
    description: "Integrated payment workflows across Remita, Interswitch, E-Tranzact and CyberPay.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
      </svg>
    ),
  },
  {
    title: "eSIM Provisioning",
    description: "Implemented an end-to-end eSIM workflow covering plan selection, purchase, activation and management.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/>
      </svg>
    ),
  },
  {
    title: "Identity Verification",
    description: "Implemented facial liveness and identity verification using Google ML Kit and mobile camera processing.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8"/><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/><path d="M8.5 15a4 4 0 0 0 7 0"/>
      </svg>
    ),
  },
  {
    title: "Offline-First Sync",
    description: "Built EazySplitz around offline expense entry and real-time Firestore synchronization.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    title: "Automated Testing",
    description: "Built 180 automated tests covering financial calculations, application state, widgets and edge cases.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12l5 5L20 7"/>
      </svg>
    ),
  },
];

const EngineeringWinsSection = () => (
  <section id="engineering-wins" className="w-full py-20">
    <SectionHeader
      number="06"
      eyebrow="Proof"
      title="Selected Engineering Work"
      description="Concrete engineering work behind the projects above."
    />
    <Reveal>
      <ul className="grid grid-cols-1 gap-x-12 border-t border-slate-200 dark:border-slate-800 md:grid-cols-2">
        {engineeringWins.map((w) => (
          <li
            key={w.title}
            className="flex gap-4 border-b border-slate-200 py-6 dark:border-slate-800"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-primary dark:border-slate-800">
              {w.icon}
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                {w.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {w.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

/* ================================================================== */
/*  Contact                                                             */
/* ================================================================== */

const ContactSection = ({ details }) => {
  const { contact, links } = details;
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [opened, setOpened] = React.useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 8)
      e.message = "Please enter a brief message (min 8 chars).";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  // No backend: hand the message to the visitor's mail client instead of faking a send.
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n${form.name.trim()} (${form.email.trim()})`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const inputCls = (hasError) =>
    `w-full rounded-lg border bg-surface-light dark:bg-background-dark px-4 py-3 text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-400 focus:ring-red-300 dark:border-red-600"
        : "border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-primary/25"
    }`;

  const labelCls =
    "mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400";

  const channels = [
    { href: `mailto:${contact.email}`, label: contact.email, icon: <MailIcon className="h-4 w-4" /> },
    { href: links.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true },
    { href: links.github, label: "GitHub", icon: <GitHubIcon />, external: true },
  ];

  return (
    <section id="contact" className="w-full py-20">
      <SectionHeader
        number="07"
        eyebrow="Get In Touch"
        title="Let's build something."
        description="Open to Flutter development roles, freelance projects and long-term engineering collaborations."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <aside className="surface p-6 sm:p-8 lg:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Direct
          </h3>
          <ul className="mt-5 flex flex-col gap-2">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex min-h-11 items-center gap-3 rounded-lg text-sm font-medium text-slate-800 hover:text-primary dark:text-slate-200 transition-colors duration-200"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 group-hover:text-primary dark:border-slate-800 dark:text-slate-300">
                    {c.icon}
                  </span>
                  <span className="truncate">{c.label}</span>
                </a>
              </li>
            ))}
            <li className="flex min-h-11 items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
                <PhoneIcon className="h-4 w-4" />
              </span>
              {contact.phone}
            </li>
            <li className="flex min-h-11 items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800">
                <PinIcon className="h-4 w-4" />
              </span>
              {contact.location}
            </li>
          </ul>
        </aside>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="surface space-y-5 p-6 sm:p-8 lg:col-span-3"
        >
          {opened && (
            <p
              role="status"
              className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-white/[0.03] dark:text-slate-300"
            >
              Opening your email app with this message. If nothing happens, email{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-primary underline-offset-2 hover:underline">
                {contact.email}
              </a>{" "}
              directly.
            </p>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelCls}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={inputCls(!!errors.name)}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className={labelCls}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputCls(!!errors.email)}
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelCls}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${inputCls(!!errors.message)} resize-none`}
              placeholder="Tell me about your project…"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className={`group w-full ${btnPrimary}`}>
            Send via email
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
};

/* ================================================================== */
/*  Footer                                                              */
/* ================================================================== */

const Footer = ({ details }) => {
  const iconLink =
    "flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white transition-colors duration-200";

  return (
    <footer className="w-full px-4 pb-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 dark:border-slate-800 sm:flex-row">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {details.name} · {details.role}
        </p>
        <div className="flex items-center gap-2">
          <a href={details.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={iconLink}>
            <GitHubIcon />
          </a>
          <a href={details.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={iconLink}>
            <LinkedInIcon />
          </a>
          <a href={`mailto:${details.contact.email}`} aria-label="Send email" className={iconLink}>
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

/* ================================================================== */
/*  Root                                                                */
/* ================================================================== */

const Portfolio = () => {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-background-light text-slate-900 dark:bg-background-dark dark:text-white">
      <a
        href="#projects"
        className="fixed left-4 top-4 z-[70] -translate-y-20 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white transition-transform duration-200 focus:translate-y-0 dark:bg-white dark:text-slate-900"
      >
        Skip to projects
      </a>

      <Header details={personalDetails} dark={dark} setDark={setDark} />

      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-8">
          <Hero details={personalDetails} />
          <ProjectsSection projects={projectsData} />
          <ExperienceSection experience={experienceData} />
          <AboutSection details={personalDetails} />
          <HowIBuildSection />
          <ArchitectureSection />
          <EngineeringWinsSection />
          <ContactSection details={personalDetails} />
        </div>
      </main>

      <Footer details={personalDetails} />
    </div>
  );
};

export default Portfolio;
