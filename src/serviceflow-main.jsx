import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ServiceFlowCaseStudy from './case-studies/serviceflow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-200 selection:bg-primary/30 selection:text-primary">
      <ServiceFlowCaseStudy />
    </div>
  </StrictMode>,
)
