export const fadeUp = (delay) => ({
  animation: "fade-up 0.5s ease-out both",
  animationDelay: `${delay}ms`,
});

export const btnPrimary =
  "cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200";
export const btnSecondary =
  "cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-slate-400 hover:bg-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/60 transition-colors duration-200";
export const btnSmall =
  "cursor-pointer inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 px-3.5 text-[13px] font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 hover:text-slate-900 dark:hover:border-slate-500 dark:hover:text-white transition-colors duration-200";
export const btnSmallPrimary =
  "cursor-pointer inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-slate-900 dark:bg-white px-3.5 text-[13px] font-medium text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200";
