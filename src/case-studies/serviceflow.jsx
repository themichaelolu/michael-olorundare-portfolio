import React from "react";
import overviewImg from "../assets/projects/serviceflow/overview.jpg";
import checklistImg from "../assets/projects/serviceflow/before-you-start.jpg";
import liveTimerImg from "../assets/projects/serviceflow/live-timer.jpg";
import editorImg from "../assets/projects/serviceflow/order-of-service.jpg";
import importImg from "../assets/projects/serviceflow/import-programme.jpg";
import settingsImg from "../assets/projects/serviceflow/church-settings.jpg";
import displayImg from "../assets/projects/serviceflow/minister-display.jpg";
import { personalDetails } from "../profile.js";
import { useDarkMode } from "../hooks.js";
import { fadeUp, btnPrimary, btnSecondary } from "../styles.js";
import {
  Reveal,
  Icon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MailIcon,
  SectionHeader,
  Pill,
  CategoryLabel,
  Header,
  Footer,
  BrowserFrame,
} from "../components.jsx";

/* ================================================================== */
/*  Data — every claim below is taken from the ServiceFlow README,      */
/*  docs and source. Keep it that way.                                   */
/* ================================================================== */

const LIVE_URL = "https://tripleglory.vercel.app";

const project = {
  title: "ServiceFlow",
  category: "Church Service Management",
  accent: "#8b5a3c",
};

const meta = [
  { label: "Category", value: "Church Service Management" },
  { label: "Platform", value: "Flutter Web" },
  { label: "Status", value: "Live", live: true },
  {
    label: "Client",
    value:
      "The Redeemed Christian Church of God — Provincial Headquarters, Ogun Province 30, Province of the Triple Glory",
  },
];

const stack = ["Flutter Web", "Dart", "Riverpod", "Freezed", "GoRouter", "Sembast", "Firebase", "Supabase", "Gemini AI"];

const shots = {
  overview: {
    src: overviewImg,
    width: 1225,
    height: 614,
    title: "Overview",
    caption:
      "The coordinator's readiness view: phase count, planned duration, transition mode and warning thresholds, beside the approved order of service.",
    alt: "ServiceFlow overview stating the programme is approved and ready, with metrics for 11 phases, 2 hours planned, a 7-second automatic transition and 2:00 and 1:00 warnings",
  },
  checklist: {
    src: checklistImg,
    width: 1225,
    height: 614,
    title: "Before you start",
    caption:
      "A pre-service checklist confirms the programme is approved and the local timer is ready, and flags that the minister display isn't open yet.",
    alt: "ServiceFlow ready-to-start card with a before-you-start checklist, an Open on TV button, the first phase, and a Start service button",
  },
  editor: {
    src: editorImg,
    width: 1225,
    height: 614,
    title: "Order of service editor",
    caption:
      "Phases, ministers and durations edited inline, with drag handles plus explicit up/down controls for reordering.",
    alt: "ServiceFlow order of service editor listing phases with minister and duration fields, reorder arrows and delete buttons",
  },
  live: {
    src: liveTimerImg,
    width: 1225,
    height: 548,
    title: "Live timer",
    caption:
      "The coordinator's live timer before the service starts. Controls are derived from the timer state, so only valid actions appear.",
    alt: "ServiceFlow live timer card in the ready state showing the Youth Service, the first phase, a planned duration of 120:00 and programme stats",
  },
  settings: {
    src: settingsImg,
    width: 1225,
    height: 545,
    title: "Church settings",
    caption:
      "Branding and timing rules: the transition gap between phases and whether the next phase starts automatically.",
    alt: "ServiceFlow church settings showing the branding emblem and timing options for a 5, 7 or 10 second transition and automatic start of the next phase",
  },
  import: {
    src: importImg,
    width: 1225,
    height: 614,
    title: "Import a programme",
    caption:
      "Source → Interpret → Review → Approve. Text, PDF/Word and photographed or handwritten programmes are accepted; interpretation is only ever a proposal.",
    alt: "ServiceFlow import screen with source, interpret, review and approve steps, tabs for pasted text, PDF or Word upload and photos, and guidance on formatting",
  },
  display: {
    src: displayImg,
    width: 1193,
    height: 634,
    title: "Minister display",
    caption:
      "The read-only display for the TV facing the pulpit, shown here in its ready state. It has no controls and makes no sound.",
    alt: "ServiceFlow minister display on a dark background reading Ready for the service, Youth Service, a planned 120:00, and the first phase",
  },
};

const sections = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "challenges", label: "Engineering" },
  { id: "architecture", label: "Architecture" },
  { id: "testing", label: "Testing" },
  { id: "design", label: "Design" },
  { id: "lessons", label: "Lessons" },
];

const problemNeeds = [
  { title: "Structured service planning", detail: "An order of service with phases, ministers and time allocations." },
  { title: "Centralised live control", detail: "One coordinator drives every transition from a single interface." },
  { title: "A minister-facing display", detail: "The person at the pulpit sees their time without anyone signalling." },
  { title: "Accurate time tracking", detail: "Timing that survives refreshes, interruptions and lost connectivity." },
  { title: "Historical execution records", detail: "An honest record of what was planned against what happened." },
];

const coordinatorFeatures = [
  "Create and edit service programmes",
  "Assign ministers and durations",
  "Start, pause, resume, extend, skip and end phases",
  "Monitor programme progression",
  "View upcoming phases",
  "Access service history and audit records",
];

const displayFeatures = [
  "Large countdown display",
  "Current phase and minister",
  "Warning notices: “2 minutes remaining”, then “Final minute”",
  "Upcoming programme",
  "Projected phase start and finish clock times",
  "Fullscreen and screen wake-lock support",
];

const challenges = [
  {
    title: "Accurate timer management",
    problem:
      "A conventional countdown decrements a counter on every tick. Refresh the browser, miss a tick or lose the tab's timer, and the countdown drifts from reality.",
    solution:
      "A pure Dart timer engine with no Flutter or Firebase imports. Nothing is counted down: every tick recomputes the phase from stored facts — start time, pause totals and extensions — and the transition deadline is persisted too.",
    highlights: [
      "Timestamp-based calculations",
      "Pause and resume accounting",
      "Overtime handling",
      "Time extensions",
      "Transition deadlines",
      "Injectable clock for deterministic testing",
    ],
    code: {
      caption: "Recomputed on every tick — from the engine's documented model",
      lines: [
        "effective = allocation + Σ extensions",
        "active    = (now | pausedAt) − startedAt − pausedTotal",
        "remaining = effective − active",
        "display   = remaining > 0 ? ceil → \"mm:ss\" : floor(−remaining) → \"+mm:ss\"",
        "progress  = clamp(active / effective, 0, 1)",
      ],
    },
  },
  {
    title: "Coordinator and minister display synchronisation",
    problem:
      "The coordinator controls the service from one window while a second window, on the TV, must always show the latest state — without gaining any controls of its own.",
    solution:
      "Cross-window messaging over BroadcastChannel, with localStorage storage events as a fallback. Both windows share one local session model; the display only ever renders snapshots and never issues commands.",
    highlights: [
      "Shared local session model",
      "First-tab-wins coordinator election",
      "Read-only minister display",
      "Snapshot recovery after refresh",
      "Display presence heartbeat (5 s, closed after 12 s silence)",
    ],
    scope:
      "Live synchronisation runs between windows on the same machine and browser origin. A phone, second laptop or a TV running its own browser cannot follow the coordinator live.",
  },
  {
    title: "Offline-first reliability",
    problem: "A church service cannot depend on uninterrupted internet connectivity.",
    solution:
      "Local-first persistence with Sembast on IndexedDB. The device store is the source of truth; when Firebase is configured, events are pushed to Cloud Firestore after the fact. A finished service's terminal state and its history record are written in the same transaction.",
    highlights: [
      "Local persistence",
      "Offline status tracking",
      "Pending-sync indicators (coordinator only)",
      "Cloud event synchronisation",
      "Local store as the source of truth",
    ],
  },
  {
    title: "Maintaining historical integrity",
    problem:
      "Programmes get edited, but an approved programme and the record of a completed service must stay exactly as they were.",
    solution:
      "Approving freezes a programme version (v1, v2…); editing an approved version opens a new draft. Execution is recorded as append-only events, and a correction is a new event rather than a rewrite.",
    highlights: [
      "Immutable approved programme versions",
      "Append-only execution events",
      "Event-based corrections",
      "Planned-versus-actual reporting",
      "CSV export",
    ],
  },
  {
    title: "AI-assisted programme import",
    problem:
      "Re-typing an order of service from a WhatsApp message, document or photograph is slow and error-prone.",
    solution:
      "An import flow backed by a Supabase Edge Function that calls Gemini. The function verifies the caller's Firebase ID token, no model key ships in the app, and uploaded originals are not kept — only extracted text. Without the backend, a clearly labelled rule-based reader handles pasted text.",
    highlights: [
      "Text input",
      "PDF and Word upload",
      "Photographed or handwritten documents",
      "AI-assisted interpretation",
      "Source-to-extracted-row review",
      "Human approval before execution",
      "Unknown durations stay unresolved, never guessed",
    ],
    shot: "import",
  },
];

const techGroups = [
  { title: "Frontend", items: ["Flutter Web", "Dart", "Riverpod", "Freezed", "GoRouter"] },
  {
    title: "Architecture",
    items: [
      "Feature-based Clean Architecture",
      "Data, domain and presentation layers",
      "Dependency injection with Riverpod",
      "Pure Dart timer engine",
      "Injectable clock abstraction",
    ],
  },
  {
    title: "Persistence & infrastructure",
    items: ["Sembast", "IndexedDB", "Firebase Authentication", "Cloud Firestore", "Supabase Edge Functions", "Gemini API"],
  },
  {
    title: "Browser APIs",
    items: ["BroadcastChannel", "localStorage storage events", "Fullscreen API", "Wake Lock API", "Window Management API"],
  },
];

const testResults = [
  { value: "826", label: "Flutter tests passing" },
  { value: "42", label: "Backend tests passing" },
  { value: "22", label: "Firestore security-rule tests passing" },
];

const testTypes = [
  { title: "Unit", detail: "Every timer command, outcome and timing calculation, written test-first." },
  { title: "Widget", detail: "Screens and Sf* components, including keyboard-only use and reduced motion." },
  { title: "Integration", detail: "A full service run end to end in the browser, plus a full-service scenario with refresh." },
  { title: "Browser persistence", detail: "Sembast on IndexedDB, run on a real Chrome platform." },
  { title: "Firestore rules", detail: "Church-scoped access rules, run against the Firebase emulators." },
  { title: "Backend", detail: "The Supabase Edge Function that verifies tokens and interprets imports." },
];

const palette = [
  { name: "primary", hex: "#74482F", use: "Primary actions" },
  { name: "primarySoft", hex: "#F0E5DB", use: "Selected nav" },
  { name: "tan", hex: "#BC9273", use: "Decoration only" },
  { name: "bg", hex: "#F7F5F1", use: "Ivory canvas" },
  { name: "surface", hex: "#FFFEFA", use: "Cards" },
  { name: "ink", hex: "#292622", use: "Charcoal text" },
  { name: "success", hex: "#4D765D", use: "Status" },
  { name: "warning", hex: "#A96D24", use: "Status" },
  { name: "danger", hex: "#A7463C", use: "Status" },
  { name: "tvBg", hex: "#1E1916", use: "Minister display" },
];

const designPrinciples = [
  { title: "Calm and dignified", detail: "Ivory backgrounds, charcoal typography, brown used sparingly and minimal motion." },
  { title: "Clear status communication", detail: "Every display state is shown with a word, a shape and a colour — never colour alone." },
  { title: "Large, readable timer type", detail: "Tabular digits that never animate; the TV scale is relative to viewport height." },
  { title: "A display with no controls", detail: "The minister display has no focusable elements and makes no sound." },
  { title: "One primary action per state", detail: "Invalid actions are removed, not greyed out." },
  { title: "Responsive layouts", detail: "Sidebar at 1280 px and up, icon rail from 600 px, bottom navigation below." },
  { title: "Keyboard accessible", detail: "Visible focus rings, 44 px touch targets and 56 px live controls." },
  { title: "Reduced-motion support", detail: "Motion falls back to fades when the user asks for less." },
];

const lessons = [
  {
    title: "Store facts, derive time",
    body: "A countdown that decrements state is only as reliable as the timer firing it. Storing when a phase started, paused and was extended — and deriving everything else — made refreshes and missed ticks irrelevant, and let a fake clock test every edge case deterministically.",
  },
  {
    title: "Design for offline from the first commit",
    body: "Making the local store the source of truth meant the network became an enhancement rather than a dependency. Cloud sync receives records afterwards; the service itself never waits for it.",
  },
  {
    title: "History should be immutable",
    body: "Versioned approvals and an append-only event log keep the planned programme, what actually happened and any later corrections as separate, trustworthy records — which is what makes planned-versus-actual reporting honest.",
  },
  {
    title: "The browser is a capable multi-window platform",
    body: "BroadcastChannel, storage events, Fullscreen, Wake Lock and Window Management together turned two ordinary browser windows into a coordinator console and a dedicated TV display — within clear, documented limits.",
  },
  {
    title: "AI output is a proposal, not a decision",
    body: "Interpretation is shown beside its source, missing durations stay unresolved, and nothing runs until a person approves it. In an operational workflow, a confident wrong guess is worse than an honest gap.",
  },
];

/* ================================================================== */
/*  Components                                                          */
/* ================================================================== */

const Lightbox = ({ shot, onClose }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={`${shot.title} screenshot, enlarged`}
      className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-slate-950/85 backdrop:backdrop-blur-sm sm:p-8"
    >
      <figure className="mx-auto flex max-w-[1280px] flex-col items-center">
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          className="h-auto max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl"
        />
        <figcaption className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-200">
          <span className="font-medium text-white">{shot.title}.</span> {shot.caption}
        </figcaption>
      </figure>
      <button
        type="button"
        autoFocus
        onClick={onClose}
        aria-label="Close enlarged screenshot"
        className="cursor-pointer fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-slate-900/70 text-white hover:bg-slate-800 transition-colors duration-200"
      >
        <Icon>
          <path d="M6 6l12 12M6 18L18 6" />
        </Icon>
      </button>
    </dialog>
  );
};

const Screenshot = ({ shot, onOpen, eager = false, className = "" }) => (
  <figure className={className}>
    <button
      type="button"
      onClick={() => onOpen(shot)}
      className="group block w-full cursor-zoom-in rounded-xl text-left"
    >
      <BrowserFrame
        label={`ServiceFlow · ${shot.title}`}
        className="transition-shadow duration-200 group-hover:shadow-md"
      >
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
          className="block h-auto w-full"
        />
      </BrowserFrame>
      <span className="sr-only">Open larger view</span>
    </button>
    <figcaption className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      <span className="font-medium text-slate-900 dark:text-white">{shot.title}.</span> {shot.caption}
    </figcaption>
  </figure>
);

const CheckList = ({ items, columns = false }) => (
  <ul className={`grid gap-2.5 text-sm text-slate-700 dark:text-slate-300 ${columns ? "sm:grid-cols-2" : ""}`}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5">
        <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Eyebrow = ({ children }) => (
  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
    {children}
  </p>
);

const ScopeNote = ({ children }) => (
  <p className="flex items-start gap-3 rounded-lg border border-amber-300/60 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5M12 16h.01" />
    </Icon>
    <span>
      <span className="font-medium">Scope: </span>
      {children}
    </span>
  </p>
);

/* ---------- Architecture diagram ---------------------------------- */

const FlowNode = ({ step, label, detail, tone = "default" }) => {
  const tones = {
    default: "border-slate-200 bg-surface-light dark:border-slate-700 dark:bg-surface-dark",
    strong: "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900",
    soft: "border-dashed border-slate-300 bg-transparent dark:border-slate-600",
  };
  const muted = tone === "strong" ? "text-white/70 dark:text-slate-600" : "text-slate-500 dark:text-slate-400";
  return (
    <div className={`min-w-0 flex-1 rounded-lg border px-3.5 py-3 ${tones[tone]}`}>
      {step && <span className={`font-mono text-[10px] ${muted}`}>{step}</span>}
      <p className={`text-sm font-medium leading-snug ${tone === "strong" ? "" : "text-slate-900 dark:text-white"}`}>
        {label}
      </p>
      {detail && <p className={`mt-0.5 font-mono text-[11px] leading-snug ${muted}`}>{detail}</p>}
    </div>
  );
};

const FlowArrow = () => (
  <span
    className="flex flex-shrink-0 items-center justify-center text-slate-400 dark:text-slate-500"
    aria-hidden="true"
  >
    <Icon className="h-4 w-4 rotate-90 lg:rotate-0">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  </span>
);

const FlowRow = ({ nodes }) => (
  <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
    {nodes.map((n, i) => (
      <React.Fragment key={n.label}>
        {i > 0 && <FlowArrow />}
        <li className="flex min-w-0 flex-1">
          <FlowNode {...n} />
        </li>
      </React.Fragment>
    ))}
  </ol>
);

const Lane = ({ title, badge, badgeTone = "neutral", children, note }) => (
  <div className="surface p-5 sm:p-6">
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
      <span
        className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
          badgeTone === "required"
            ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300"
            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
        }`}
      >
        {badge}
      </span>
    </div>
    {children}
    {note && <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{note}</p>}
  </div>
);

const ArchitectureDiagram = () => (
  <figure className="flex flex-col gap-4">
    <Lane
      title="Live service path"
      badge="Runs fully offline"
      badgeTone="required"
      note="The snapshot is persisted locally and broadcast to the display. The display caches the last snapshot, so a refresh of either window recovers immediately."
    >
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-2 lg:w-[52%] lg:flex-row lg:items-center">
          <FlowNode step="01" label="Coordinator interface" detail="commands" tone="strong" />
          <FlowArrow />
          <FlowNode step="02" label="Timer engine" detail="pure Dart · injected clock" />
          <FlowArrow />
          <FlowNode step="03" label="Session snapshot" detail="revisioned state" />
        </div>
        <FlowArrow />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <FlowNode step="04" label="Local persistence" detail="Sembast · IndexedDB" />
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <FlowNode step="05" label="Cross-window channel" detail="BroadcastChannel · storage events" />
            <FlowArrow />
            <FlowNode step="06" label="Minister display" detail="read-only" tone="strong" />
          </div>
        </div>
      </div>
    </Lane>

    <div className="grid gap-4 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <Lane
          title="Cloud synchronisation"
          badge="Optional"
          note="Records are pushed after the fact. Nothing is pulled back from the cloud; the local store stays the source of truth."
        >
          <FlowRow
            nodes={[
              { label: "Local event store", detail: "append-only events" },
              { label: "Cloud Firestore", detail: "Firebase Auth · church-scoped rules", tone: "soft" },
            ]}
          />
        </Lane>
      </div>
      <div className="lg:col-span-3">
        <Lane
          title="AI import path"
          badge="Optional · signed-in coordinator"
          note="Used only when preparing a programme. Gemini is never on the live timing path."
        >
          <div className="grid gap-2 sm:grid-cols-3">
            {[
              { label: "Document, photo or text" },
              { label: "Supabase Edge Function", detail: "verifies Firebase ID token", tone: "soft" },
              { label: "Gemini", tone: "soft" },
              { label: "Extracted programme" },
              { label: "Human review", detail: "source beside rows" },
              { label: "Approved programme", detail: "frozen version", tone: "strong" },
            ].map((n, i) => (
              <div key={n.label} className="flex">
                <FlowNode step={`${String(i + 1).padStart(2, "0")}${i < 5 ? " →" : ""}`} {...n} />
              </div>
            ))}
          </div>
        </Lane>
      </div>
    </div>
    <figcaption className="sr-only">
      Architecture: the coordinator issues commands to a pure Dart timer engine, which produces a session
      snapshot that is persisted to Sembast on IndexedDB and broadcast across windows to the read-only minister
      display. Separately and optionally, the local event store syncs to Cloud Firestore, and documents, photos
      or text can be sent through a Supabase Edge Function to Gemini, producing an extracted programme that a
      person reviews before it becomes an approved programme.
    </figcaption>
  </figure>
);

/* ---------- Page sections ---------------------------------------- */

const CaseStudyHero = ({ onOpen }) => (
  <section id="overview" className="w-full pt-10 pb-16 sm:pt-14 sm:pb-20">
    <a
      href="/#projects"
      className="inline-flex min-h-10 items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
      style={fadeUp(0)}
    >
      <ArrowRightIcon className="h-4 w-4 rotate-180" />
      All projects
    </a>

    <div className="mt-6 max-w-3xl">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2" style={fadeUp(40)}>
        <CategoryLabel project={project} />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          Engineering case study
        </span>
      </div>
      <h1
        className="mt-5 font-display text-5xl sm:text-6xl font-semibold leading-[1.02] tracking-tight text-slate-900 dark:text-white"
        style={fadeUp(80)}
      >
        ServiceFlow
      </h1>
      <p
        className="mt-5 font-display text-xl sm:text-2xl font-medium leading-snug tracking-tight text-slate-800 dark:text-slate-200"
        style={fadeUp(140)}
      >
        Bringing structure, precision, and visibility to live church services.
      </p>
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400" style={fadeUp(180)}>
        A Flutter Web application designed to coordinate Sunday services through a programmable timer, structured
        order of service, and dedicated minister display.
      </p>

      <div className="mt-8 flex flex-wrap gap-3" style={fadeUp(220)}>
        <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={`group ${btnPrimary}`}>
          Open live app
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
        <a href="#challenges" className={btnSecondary}>
          Engineering challenges
        </a>
      </div>
    </div>

    <dl
      className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-slate-200 py-6 dark:border-slate-800 lg:grid-cols-[auto_auto_auto_1fr] lg:gap-x-12"
      style={fadeUp(260)}
    >
      {meta.map((m) => (
        <div key={m.label} className={m.label === "Client" ? "col-span-2 lg:col-span-1" : ""}>
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            {m.label}
          </dt>
          <dd className="mt-1.5 flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
            {m.live && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />}
            {m.value}
          </dd>
        </div>
      ))}
    </dl>

    <div className="mt-6 flex flex-wrap gap-1.5" style={fadeUp(300)}>
      <span className="sr-only">Technology stack:</span>
      {stack.map((t) => (
        <Pill key={t}>{t}</Pill>
      ))}
    </div>

    <div className="mt-10" style={fadeUp(340)}>
      <Screenshot shot={shots.overview} onOpen={onOpen} eager />
    </div>
  </section>
);

const SectionNav = () => (
  <nav
    aria-label="Case study sections"
    className="sticky top-16 z-40 -mx-4 border-b border-slate-200 bg-background-light/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-background-dark/90 sm:-mx-8 sm:px-8"
  >
    <ul className="flex gap-1 overflow-x-auto py-2">
      {sections.map((s, i) => (
        <li key={s.id} className="flex-shrink-0">
          <a
            href={`#${s.id}`}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-md px-3 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-white transition-colors duration-200"
          >
            <span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const ProblemSection = () => (
  <section id="problem" className="w-full py-20">
    <SectionHeader number="01" eyebrow="The Problem" title="Keeping a live service on time" />
    <Reveal>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:col-span-3">
          <p>
            A Sunday service is a sequence of programme phases — worship, prayer, announcements, offerings, the
            sermon — each led by a different minister with its own time allocation, and each handing over to the
            next.
          </p>
          <p>
            Without a dedicated coordination system, maintaining accurate timing, communicating programme
            progression to the people leading it, and keeping service records can all become difficult.
          </p>
          <p>ServiceFlow was developed to address these challenges with a single system for planning, running and recording the service.</p>
        </div>
        <div className="lg:col-span-2">
          <Eyebrow>What the service needed</Eyebrow>
          <ol className="mt-4 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {problemNeeds.map((n, i) => (
              <li key={n.title} className="flex gap-4 py-3.5">
                <span className="pt-0.5 font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{n.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{n.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  </section>
);

const SolutionSection = ({ onOpen }) => (
  <section id="solution" className="w-full py-20">
    <SectionHeader
      number="02"
      eyebrow="The Solution"
      title="Two interfaces, one source of truth"
      description="A coordinator runs the service on a laptop. A TV connected to that laptop shows a second window — the minister display — facing the pulpit."
    />

    <Reveal>
      <article className="flex flex-col gap-8">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Eyebrow>Interface 01</Eyebrow>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Coordinator dashboard
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              The coordinator prepares and approves the order of service, then controls the live service. Every
              action is written to an append-only audit trail.
            </p>
          </div>
          <div className="lg:col-span-3 lg:pt-7">
            <CheckList items={coordinatorFeatures} columns />
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
          <Screenshot shot={shots.checklist} onOpen={onOpen} />
          <Screenshot shot={shots.editor} onOpen={onOpen} />
          <Screenshot shot={shots.live} onOpen={onOpen} />
          <Screenshot shot={shots.settings} onOpen={onOpen} />
        </div>
      </article>
    </Reveal>

    <Reveal>
      <article className="mt-20 grid items-start gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Eyebrow>Interface 02</Eyebrow>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Minister display
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            A separate, read-only interface for a television or secondary monitor facing the pulpit. It is large,
            calm, has no controls and makes no sound — and it can open directly on a second monitor through the
            Window Management API.
          </p>
          <div className="mt-6">
            <CheckList items={displayFeatures} />
          </div>
        </div>
        <div className="lg:col-span-3">
          <Screenshot shot={shots.display} onOpen={onOpen} />
        </div>
      </article>
    </Reveal>
  </section>
);

const ChallengesSection = ({ onOpen }) => (
  <section id="challenges" className="w-full py-20">
    <SectionHeader
      number="03"
      eyebrow="Engineering"
      title="Challenges and solutions"
      description="The decisions that make ServiceFlow dependable in a live room, rather than just functional in a demo."
    />
    <ol className="flex flex-col gap-6">
      {challenges.map((c, i) => (
        <li key={c.title}>
          <Reveal>
            <article className="surface p-6 sm:p-8">
              <header className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {c.title}
                </h3>
              </header>

              <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
                <div>
                  <Eyebrow>Problem</Eyebrow>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{c.problem}</p>
                </div>
                <div>
                  <Eyebrow>Solution</Eyebrow>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{c.solution}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                <Eyebrow>Technical highlights</Eyebrow>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {c.highlights.map((h) => (
                    <li key={h}>
                      <Pill>{h}</Pill>
                    </li>
                  ))}
                </ul>
              </div>

              {c.code && (
                <figure className="mt-6">
                  <pre className="overflow-x-auto rounded-lg bg-slate-950 p-4 font-mono text-[12px] leading-relaxed text-slate-200 dark:bg-black/40 sm:text-[13px]">
                    <code>{c.code.lines.join("\n")}</code>
                  </pre>
                  <figcaption className="mt-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    {c.code.caption}
                  </figcaption>
                </figure>
              )}

              {c.scope && (
                <div className="mt-6">
                  <ScopeNote>{c.scope}</ScopeNote>
                </div>
              )}

              {c.shot && (
                <div className="mt-8">
                  <Screenshot shot={shots[c.shot]} onOpen={onOpen} />
                </div>
              )}
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  </section>
);

const ArchitectureSection = () => (
  <section id="architecture" className="w-full py-20">
    <SectionHeader
      number="04"
      eyebrow="Architecture"
      title="Architecture and technology"
      description="Local timing never depends on the network. The cloud and AI paths are optional additions around a self-sufficient core."
    />
    <Reveal>
      <ArchitectureDiagram />
    </Reveal>
    <Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techGroups.map((g) => (
          <div key={g.title} className="surface p-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {g.title}
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-800 dark:text-slate-200">
              {g.items.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  </section>
);

const TestingSection = () => (
  <section id="testing" className="w-full py-20">
    <SectionHeader
      number="05"
      eyebrow="Quality"
      title="Testing and quality assurance"
      description="The timer engine was built test-first: every state-machine command, outcome and timing calculation had a test before its implementation."
    />
    <Reveal>
      <dl className="grid grid-cols-3 border-y border-slate-200 divide-x divide-slate-200 dark:border-slate-800 dark:divide-slate-800">
        {testResults.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 px-3 py-5 first:pl-0 sm:px-6">
            <dt className="order-last text-xs leading-snug text-slate-500 dark:text-slate-400 sm:text-sm">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 font-mono text-[11px] text-slate-500 dark:text-slate-400">
        Historical figures recorded at the project's last documented full test run — not a live CI result.
      </p>
    </Reveal>

    <Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <ul className="grid gap-x-8 border-t border-slate-200 dark:border-slate-800 sm:grid-cols-2 lg:col-span-3">
          {testTypes.map((t) => (
            <li key={t.title} className="border-b border-slate-200 py-4 dark:border-slate-800">
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{t.title} testing</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t.detail}</p>
            </li>
          ))}
        </ul>
        <aside className="surface p-6 lg:col-span-2">
          <Eyebrow>Deterministic time</Eyebrow>
          <h3 className="mt-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
            A fake clock drives the engine
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Time is injected through a clock abstraction, so tests advance time explicitly instead of waiting for
            it. The control matrix, durations, ending commands, idempotency, ticks, transitions and full service
            runs each have their own suite.
          </p>
        </aside>
      </div>
    </Reveal>
  </section>
);

const DesignSection = () => (
  <section id="design" className="w-full py-20">
    <SectionHeader
      number="06"
      eyebrow="Design"
      title="Design decisions"
      description="A calm, dignified interface for a setting where nothing on screen should compete with the service itself."
    />
    <Reveal>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="surface p-6 sm:p-8 lg:col-span-2">
          <Eyebrow>ServiceFlow design tokens</Eyebrow>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-5 lg:grid-cols-2">
            {palette.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                <span
                  className="h-9 w-9 flex-shrink-0 rounded-lg ring-1 ring-inset ring-slate-900/10 dark:ring-white/15"
                  style={{ background: c.hex }}
                  aria-hidden="true"
                />
                <span className="min-w-0 leading-tight">
                  <span className="block truncate text-xs font-medium text-slate-900 dark:text-white">{c.use}</span>
                  <span className="block font-mono text-[10px] text-slate-500 dark:text-slate-400">{c.hex}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
            <Eyebrow>Typography</Eyebrow>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <span className="font-medium text-slate-900 dark:text-white">Inter</span> for interface text and
              tabular digits; <span className="font-medium text-slate-900 dark:text-white">Source Serif 4</span> for
              service titles and minister names. Both are bundled so the app renders offline.
            </p>
          </div>
        </div>
        <ul className="grid content-start gap-x-8 border-t border-slate-200 dark:border-slate-800 sm:grid-cols-2 lg:col-span-3">
          {designPrinciples.map((p) => (
            <li key={p.title} className="border-b border-slate-200 py-4 dark:border-slate-800">
              <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);

const LessonsSection = () => (
  <section id="lessons" className="w-full py-20">
    <SectionHeader number="07" eyebrow="Reflection" title="Lessons and engineering takeaways" />
    <Reveal>
      <ol className="grid gap-x-12 border-t border-slate-200 dark:border-slate-800 md:grid-cols-2">
        {lessons.map((l, i) => (
          <li key={l.title} className="flex gap-5 border-b border-slate-200 py-6 dark:border-slate-800">
            <span className="pt-1 font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{l.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{l.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  </section>
);

const ProjectFooter = () => (
  <section className="w-full pt-8 pb-20" aria-labelledby="next-steps-title">
    <Reveal>
      <div className="surface flex flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2
            id="next-steps-title"
            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            Building something that has to work on the day?
          </h2>
          <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I'm open to Flutter roles, freelance projects and long-term engineering collaborations.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/#contact" className={`group ${btnPrimary}`}>
            <MailIcon className="h-4 w-4" />
            Contact me
          </a>
          <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
            Live app
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a href="/#projects" className={btnSecondary}>
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to portfolio
          </a>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ================================================================== */
/*  Page                                                                */
/* ================================================================== */

const ServiceFlowCaseStudy = () => {
  const [dark, setDark] = useDarkMode();
  const [activeShot, setActiveShot] = React.useState(null);
  const closeShot = React.useCallback(() => setActiveShot(null), []);

  return (
    <div className="case-study flex min-h-screen w-full flex-col overflow-x-clip bg-background-light text-slate-900 dark:bg-background-dark dark:text-white">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[70] -translate-y-20 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white transition-transform duration-200 focus:translate-y-0 dark:bg-white dark:text-slate-900"
      >
        Skip to content
      </a>

      <Header details={personalDetails} dark={dark} setDark={setDark} basePath="/" />

      <main id="main-content" className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-8">
          <CaseStudyHero onOpen={setActiveShot} />
          <SectionNav />
          <ProblemSection />
          <SolutionSection onOpen={setActiveShot} />
          <ChallengesSection onOpen={setActiveShot} />
          <ArchitectureSection />
          <TestingSection />
          <DesignSection />
          <LessonsSection />
          <ProjectFooter />
        </div>
      </main>

      <Footer details={personalDetails} />

      {activeShot && <Lightbox key={activeShot.title} shot={activeShot} onClose={closeShot} />}
    </div>
  );
};

export default ServiceFlowCaseStudy;
