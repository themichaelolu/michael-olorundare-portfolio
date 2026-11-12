import React from "react";
import { useReveal } from "./hooks.js";

/* Shared UI used by the portfolio home page and the case-study pages. */

/* Reveal wrapper — fades + slides up when it enters the viewport */
export const Reveal = ({ children, delay = 0, className = "" }) => {
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

export const Icon = ({ className = "w-4 h-4", children }) => (
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

export const ArrowRightIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Icon>
);

export const ArrowUpRightIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M7 17L17 7M7 7h10v10" />
  </Icon>
);

export const CheckIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);

export const MailIcon = ({ className }) => (
  <Icon className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </Icon>
);

export const PhoneIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2z" />
  </Icon>
);

export const PinIcon = ({ className }) => (
  <Icon className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

export const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.4 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0C17.3 4.7 18.3 5 18.3 5c.7 1.8.2 3.1.1 3.4.8.9 1.3 2 1.3 3.3 0 4.7-2.9 5.7-5.6 6 .5.4.9 1.1.9 2.3v3.4c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zm1.8 13H3.6V9h3.5v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
  </svg>
);

export const GooglePlayIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.2-11.96-2.87-2.87L3.18 23.76zM.54 1.1A1.5 1.5 0 0 0 0 2.25v19.5c0 .47.2.9.54 1.15l.07.06 10.93-10.93v-.26L.61 1.04.54 1.1zM23.17 10.6l-3.12-1.78-3.2 3.2 3.2 3.2 3.14-1.79a1.5 1.5 0 0 0 0-2.83zM4.17.24l13.2 11.96-2.87 2.87L4.17.24z" />
  </svg>
);

export const AppleIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
  </svg>
);

export const SectionHeader = ({ eyebrow, title, description, number }) => (
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

export const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-md border border-slate-200 dark:border-slate-800 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
    {children}
  </span>
);

export const CategoryLabel = ({ project }) => (
  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
    <span
      className="h-1.5 w-1.5 rounded-full"
      style={{ background: project.accent }}
      aria-hidden="true"
    />
    {project.category}
  </span>
);

/* basePath lets pages other than the home page point the nav back at "/#section". */
export const Header = ({ details, dark, setDark, basePath = "" }) => {
  const [open, setOpen] = React.useState(false);
  const links = ["Projects", "Experience", "About", "Process", "Architecture", "Contact"];
  const initials = details.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href={`${basePath}#hero`} className="flex items-center gap-3">
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
              href={`${basePath}#${s.toLowerCase()}`}
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
              href={`${basePath}#${s.toLowerCase()}`}
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

export const Footer = ({ details }) => {
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

/* Minimal browser-window frame for landscape web-app screenshots. */
export const BrowserFrame = ({ label, children, className = "" }) => (
  <div
    className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 ${className}`}
  >
    <div className="flex h-7 items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-3 dark:border-slate-700 dark:bg-slate-800/80">
      <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden="true" />
      <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden="true" />
      <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden="true" />
      {label && (
        <span className="ml-2 truncate font-mono text-[10px] text-slate-500 dark:text-slate-400">
          {label}
        </span>
      )}
    </div>
    {children}
  </div>
);
