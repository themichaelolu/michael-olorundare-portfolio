import React from "react";
import flutterLogo from "./assets/flutter.svg";
import dartLogo from "./assets/dart.svg";
import firebaseLogo from "./assets/firebase.svg";
import figmaLogo from "./assets/figma.svg";
import githubLogo from "./assets/github.svg";

/* ================================================================== */
/*  Data                                                                */
/* ================================================================== */

const personalDetails = {
  name: "Michael Olorundare",
  role: "Mobile Engineer (Flutter)",
  location: "Lagos, Nigeria",
  tagline: "Building reliable, production-grade Flutter apps",
  description:
    "I'm Michael Olorundare, a Mobile Engineer (Flutter) focused on turning Figma designs into responsive, production-ready Android & iOS apps — built with clean architecture, smooth animations, and scalable state management.",
  skills: [
    "Flutter & Dart",
    "Riverpod & Clean Architecture",
    "Play Store Deployments",
  ],
  stats: [
    { value: "3+", label: "Years shipping Flutter" },
    { value: "4", label: "Production apps" },
    { value: "600+", label: "Play Store downloads" },
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
    resume: "#",
  },
};

const projectsData = [
  {
    title: "CIPM Mobile Nigeria",
    dates: "Mar 2025 — Nov 2025",
    role: "Exams Module & Deployment",
    summary:
      "Built the full exams workflow — timed tests, performance dashboards, and analytics — while ensuring production-ready API integrations and smooth Play Store deployment.",
    highlights: [
      "Implemented secure exam registration & dashboards.",
      "Integrated secure REST APIs for student details and exams.",
      "Used Riverpod for clean, scalable architecture.",
      "Managed release signing & Play Store compliance.",
    ],
    tags: ["Flutter", "Riverpod", "Firebase", "REST API"],
    playStore: "https://play.google.com/store/apps/details?id=com.cipm.mobile",
    // CIPM greens
    gradient:
      "linear-gradient(135deg, #0b3d2e 0%, #1f6b3f 50%, #84c225 100%)",
    accent: "#84c225",
    secondaryText: "Official mobile platform for CIPM Nigeria",
  },
  {
    title: "Getteasy",
    dates: "Feb 2024 — Aug 2024",
    role: "UI Implementation",
    summary:
      "Translated complex hospitality Figma designs into pixel-perfect Flutter screens, complete with animations, reusable components, and responsive layouts.",
    highlights: [
      "Vivid orange brand theme with smooth galleries.",
      "Modern hotel cards and intuitive booking flows.",
      "Reusable component library for hospitality screens.",
    ],
    tags: ["Flutter", "Custom UI", "Animations"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.getteasyngltd.getteasy&hl=en",
    gradient:
      "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #fec260 100%)",
    accent: "#f7931e",
    secondaryText: "Hotel browsing & booking UI",
  },
  {
    title: "VOYA",
    dates: "Dec 2025 — Mar 2026",
    role: "Feature Implementation & Deployment",
    summary:
      "Shipped production-ready features for a global travel & visa app: Termii Soteii eSIM purchase and activation, facial verification via Google ML Kit, and secure REST integrations for user and eSIM management.",
    highlights: [
      "Termii Soteii eSIM purchase & activation flow.",
      "Facial verification powered by Google ML Kit.",
      "Secure REST APIs for user & eSIM management.",
      "Release signing & Play Store compliance.",
    ],
    tags: ["Flutter", "ML Kit", "eSIM", "REST API"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.voya.userApp",
    // VOYA brand gradient — sampled from voyavisa.io
    // deep navy #060D0E → indigo #0b1f52 → electric blue #4D65FF
    gradient:
      "linear-gradient(135deg, #060D0E 0%, #0b1f52 50%, #4D65FF 100%)",
    accent: "#4D65FF",
    secondaryText: "Visas for Global Travel",
    featured: true,
  },
  {
    title: "More Flutter Experiments",
    dates: "Ongoing",
    role: "Architectures & CI/CD",
    summary:
      "Small-scale apps exploring Flutter architecture patterns, Firebase integrations, GitHub Actions CI/CD, and reusable UI foundations.",
    tags: ["Clean Architecture", "CI/CD", "Firebase"],
    placeholderText:
      "Internal tools, dashboards, prototypes & CI/CD experiments.",
    gradient:
      "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
    accent: "#64748b",
    isExperiment: true,
  },
];

const experienceData = [
  {
    period: "2023 — Present",
    title: "Mobile Engineer (Flutter)",
    company: "Cyberspace Limited",
    description:
      "Lead Flutter engineer delivering production-ready features across enterprise-grade applications.",
    details: [
      "Implemented core exam modules, dashboards, and analytics.",
      "Integrated secure API communication layers.",
      "Architected scalable Riverpod-based state system.",
    ],
  },
  {
    period: "2024",
    title: "Flutter UI Engineer",
    company: "Getteasy Mobile App",
    description:
      "Built complete UI experiences for hospitality mobile screens following pixel-exact Figma designs.",
    details: [
      "Produced component-based UI library.",
      "Implemented hotel listings, room galleries & booking flow.",
    ],
  },
  {
    period: "Ongoing",
    title: "Freelance Mobile Engineer (Flutter)",
    company: "Independent",
    description:
      "Building bespoke mobile apps and prototypes for clients across different industries.",
    details: [],
  },
];

const aboutSkills = [
  { name: "Flutter", icon: <img src={flutterLogo} alt="" className="w-5 h-5" /> },
  { name: "Dart", icon: <img src={dartLogo} alt="" className="w-5 h-5" /> },
  {
    name: "Clean Architecture",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="17" width="18" height="4" rx="1" />
      </svg>
    ),
  },
  { name: "REST APIs · Firebase", icon: <img src={firebaseLogo} alt="" className="w-5 h-5" /> },
  { name: "Figma → Flutter UI", icon: <img src={figmaLogo} alt="" className="w-5 h-5" /> },
  { name: "Git · GitHub · CI/CD", icon: <img src={githubLogo} alt="" className="w-5 h-5" /> },
];

/* ================================================================== */
/*  Hooks                                                               */
/* ================================================================== */

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

const SectionHeader = ({ eyebrow, title, description, number }) => (
  <div className="flex flex-col gap-3 mb-12">
    <div className="flex items-center gap-3">
      {number && (
        <span className="font-mono text-xs font-medium text-primary">
          /{number}
        </span>
      )}
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h2>
    {description && (
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur">
    {children}
  </span>
);

/* ================================================================== */
/*  Header                                                              */
/* ================================================================== */

const Header = ({ details, dark, setDark }) => {
  const [open, setOpen] = React.useState(false);
  const links = ["Projects", "Experience", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/75 dark:bg-background-dark/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-8 py-3">
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-3 cursor-pointer">
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-lg">
              {details.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold text-slate-900 dark:text-white leading-tight">
              {details.name}
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
              {details.role}
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 px-2 py-1.5 backdrop-blur">
          {links.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="cursor-pointer h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-primary hover:border-primary/50 transition-colors duration-200"
          >
            {dark ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>

          <a
            href={details.links.resume}
            className="cursor-pointer hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-200 shadow-sm"
          >
            Resume
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="cursor-pointer md:hidden h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 flex items-center justify-center text-slate-700 dark:text-slate-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl flex flex-col p-3 gap-1">
            {links.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {s}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

/* ================================================================== */
/*  Hero                                                                */
/* ================================================================== */

const Hero = ({ details }) => (
  <section id="hero" className="relative w-full py-20 sm:py-28">
    <div className="relative flex flex-col items-center text-center gap-8 max-w-3xl mx-auto animate-fade-up">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-semibold tracking-wide text-emerald-700 dark:text-emerald-300">
          AVAILABLE FOR NEW PROJECTS
        </span>
      </div>

      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] tracking-tight text-slate-900 dark:text-white">
        Building{" "}
        <span className="text-gradient">production-grade</span>
        <br className="hidden sm:block" /> Flutter apps.
      </h1>

      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
        I'm{" "}
        <span className="font-semibold text-slate-900 dark:text-white">
          {details.name}
        </span>
        , a{" "}
        <span className="font-semibold text-primary">{details.role}</span>{" "}
        turning Figma designs into responsive, production-ready Android & iOS
        apps — built with clean architecture, smooth animations, and scalable
        state management.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="group cursor-pointer inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-white/10 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-200"
        >
          View my work
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </a>
        <a
          href={details.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur hover:border-primary/50 hover:text-primary transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.3 4.7 18.3 5 18.3 5c.7 1.8.2 3.1.1 3.4.8.9 1.3 2 1.3 3.3 0 4.7-2.9 5.7-5.6 6 .5.4.9 1.1.9 2.3v3.4c0 .3.1.7.8.6A12 12 0 0 0 12 .3" /></svg>
          GitHub
        </a>
        <a
          href={details.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 backdrop-blur hover:border-primary/50 hover:text-primary transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zm1.8 13H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" /></svg>
          LinkedIn
        </a>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap justify-center gap-2 pt-1">
        {details.skills.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>

      {/* Stats strip */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl">
        {details.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-4 backdrop-blur"
          >
            <p className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {s.value}
            </p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================================================================== */
/*  Project Card                                                        */
/* ================================================================== */

const ProjectCard = ({ project, index }) => {
  const isExperiment = project.isExperiment;
  const isFeatured = project.featured;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 backdrop-blur shadow-sm hover:shadow-xl hover:border-primary/40 transition-colors duration-300 ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Visual header */}
      <div
        className="relative aspect-[16/9] overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Soft blobs */}
        <div className="absolute inset-0 opacity-60 mix-blend-overlay">
          <div
            className="absolute -top-10 -right-10 h-44 w-44 rounded-full blur-2xl"
            style={{ background: `${project.accent}99` }}
          />
          <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/30 blur-2xl" />
        </div>

        {/* Grid overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id={`grid-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
        </svg>

        {/* Content */}
        <div className="relative h-full w-full flex flex-col justify-between p-5 text-white">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-medium border border-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {project.role || "Project"}
            </span>
            {isFeatured && (
              <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-semibold border border-white/30">
                Featured
              </span>
            )}
          </div>

          {!isExperiment ? (
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                {project.title}
              </p>
              <p className="text-sm opacity-90 mt-1">{project.secondaryText}</p>
            </div>
          ) : (
            <p className="text-sm opacity-95 max-w-sm">
              {project.placeholderText}
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mt-0.5">
              {project.dates}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
          {project.summary}
        </p>

        {project.highlights && !isExperiment && (
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-400">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{ color: project.accent }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {project.playStore && (
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link cursor-pointer mt-2 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
            style={{ color: project.accent }}
          >
            View on Google Play
            <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>
        )}
      </div>
    </article>
  );
};

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="w-full py-20">
    <SectionHeader
      number="01"
      eyebrow="Selected Work"
      title="Featured Projects"
      description="A selection of live Flutter projects I've shipped to the Play Store."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  </section>
);

/* ================================================================== */
/*  Experience                                                          */
/* ================================================================== */

const ExperienceSection = ({ experience }) => (
  <section id="experience" className="w-full py-20">
    <SectionHeader
      number="02"
      eyebrow="Career"
      title="Experience"
      description="Roles and real-world engineering contributions."
    />
    <div className="relative flex flex-col gap-6 border-l border-dashed border-slate-300 dark:border-slate-700 pl-8 ml-2">
      {experience.map((item, i) => (
        <div
          key={i}
          className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur hover:border-primary/40 hover:shadow-lg transition-colors duration-300"
        >
          <span className="absolute -left-[42px] top-7 flex h-4 w-4 items-center justify-center" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary/30 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark" />
          </span>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-primary font-semibold">
                {item.company}
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
              {item.period}
            </span>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
            {item.description}
          </p>

          {item.details.length > 0 && (
            <ul className="mt-3 space-y-1.5 text-xs text-slate-700 dark:text-slate-400">
              {item.details.map((d, k) => (
                <li key={k} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </section>
);

/* ================================================================== */
/*  About                                                               */
/* ================================================================== */

const AboutSection = ({ details, skills }) => (
  <section id="about" className="w-full py-20">
    <SectionHeader
      number="03"
      eyebrow="Profile"
      title="About Me"
      description="A quick snapshot of who I am and what I bring to the table."
    />

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Bio */}
      <div className="lg:col-span-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur">
        <div className="flex flex-col gap-4 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            I'm a passionate{" "}
            <strong className="text-slate-900 dark:text-white">
              {details.role}
            </strong>{" "}
            with a track record of designing and deploying clean, scalable
            applications for both Android and iOS.
          </p>
          <p>
            I've delivered production apps such as{" "}
            <em className="text-primary not-italic font-semibold">
              CIPM Mobile Nigeria
            </em>
            ,{" "}
            <em className="text-primary not-italic font-semibold">Getteasy</em>{" "}
            and{" "}
            <em className="text-primary not-italic font-semibold">VOYA</em>,
            achieving{" "}
            <strong className="text-slate-900 dark:text-white">
              600+ downloads
            </strong>{" "}
            collectively on the Play Store. My focus is building smooth,
            responsive, user-centered apps.
          </p>
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-200 dark:border-slate-800">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Based in {details.location}
            </span>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">
          Tech Stack
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group flex items-center gap-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 p-2.5 transition-colors duration-200"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200">
                {s.icon}
              </div>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ================================================================== */
/*  Contact                                                             */
/* ================================================================== */

const ContactSection = ({ contact }) => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState({ submitting: false, success: false });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);
    setStatus({ submitting: true, success: false });
    setTimeout(() => {
      setStatus({ submitting: false, success: true });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }, 700);
  };

  const inputCls = (hasError) =>
    `w-full rounded-xl border bg-white dark:bg-slate-900/60 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-400 focus:ring-red-300 dark:border-red-600"
        : "border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/30"
    }`;

  return (
    <section id="contact" className="w-full py-20">
      <SectionHeader
        number="04"
        eyebrow="Get In Touch"
        title="Let's Connect"
        description="Have a project in mind, or just want to say hi? Drop me a note — I'm always open to discussing new opportunities."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Side info */}
        <aside className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-primary/5 via-transparent to-pink-500/5 p-6 sm:p-8 backdrop-blur">
          <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
            Prefer something direct? These channels get to me fastest.
          </p>
          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${contact.email}`}
              className="cursor-pointer flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-300 hover:text-primary transition-colors duration-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>
              </span>
              <span className="truncate">{contact.email}</span>
            </a>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2z" /></svg>
              </span>
              {contact.phone}
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-800 dark:text-slate-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              {contact.location}
            </div>
          </div>
        </aside>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="lg:col-span-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur space-y-5"
        >
          {status.success && (
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 p-3 text-sm text-emerald-800 dark:text-emerald-300">
              Thanks — your message was sent. I'll get back to you soon.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
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
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
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
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
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

          <button
            type="submit"
            disabled={status.submitting}
            className="group cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 shadow-lg shadow-slate-900/20 dark:shadow-white/10 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.submitting ? "Sending..." : "Send Message"}
            {!status.submitting && (
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

/* ================================================================== */
/*  Footer                                                              */
/* ================================================================== */

const Footer = ({ details }) => (
  <footer className="w-full px-4 sm:px-8 pb-8 pt-4">
    <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-slate-200 dark:border-slate-800">
      <p className="text-xs text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} {details.name}. Crafted with care.
      </p>
      <div className="flex items-center gap-2">
        <a
          href={details.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="cursor-pointer h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.3 4.7 18.3 5 18.3 5c.7 1.8.2 3.1.1 3.4.8.9 1.3 2 1.3 3.3 0 4.7-2.9 5.7-5.6 6 .5.4.9 1.1.9 2.3v3.4c0 .3.1.7.8.6A12 12 0 0 0 12 .3" /></svg>
        </a>
        <a
          href={details.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="cursor-pointer h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zm1.8 13H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" /></svg>
        </a>
        <a
          href={`mailto:${details.contact.email}`}
          aria-label="Send email"
          className="cursor-pointer h-9 w-9 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/50 transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>
        </a>
      </div>
    </div>
  </footer>
);

/* ================================================================== */
/*  Root                                                                */
/* ================================================================== */

const Portfolio = () => {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-30 dark:opacity-20 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-cyan-300 via-sky-400 to-indigo-400 opacity-25 dark:opacity-15 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tl from-pink-300 via-fuchsia-300 to-rose-300 opacity-25 dark:opacity-10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/40 to-background-light dark:via-background-dark/40 dark:to-background-dark" />
      </div>

      <Header details={personalDetails} dark={dark} setDark={setDark} />

      <main className="flex flex-col items-center flex-1">
        <div className="w-full max-w-6xl px-4 sm:px-8">
          <Hero details={personalDetails} />
          <ProjectsSection projects={projectsData} />
          <ExperienceSection experience={experienceData} />
          <AboutSection details={personalDetails} skills={aboutSkills} />
          <ContactSection contact={personalDetails.contact} />
        </div>
      </main>

      <Footer details={personalDetails} />
    </div>
  );
};

export default Portfolio;
