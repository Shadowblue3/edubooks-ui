import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, GraduationCap, Sparkles } from "lucide-react";

const slides = [
  {
    title: "Understanding the Base MVP",
    subtitle: "HelloBooks.ai — Accounting SaaS Platform",
    content: [
      "Multi-step onboarding: Account → Email → Organization → Business setup",
      "General-purpose accounting: invoices, expenses, reports, contacts",
      "Clean, minimal UI with sidebar navigation and dashboard overview",
      "AI-powered features: smart categorization, chat interface",
      "Targets small businesses broadly — not industry-specific",
    ],
    bg: "from-primary to-primary/80",
  },
  {
    title: "Why Education Needs Customization",
    subtitle: "Unique Financial Workflows in Schools",
    content: [
      "Fee structures: tuition, transport, lab, library — per student per term",
      "Bulk operations: 1000+ students across classes, sections, terms",
      "Parent communication: receipts, reminders, payment links",
      "Budget cycles aligned to academic year (April–March), not calendar year",
      "Compliance: government grants, RTE reimbursements, audit requirements",
    ],
    bg: "from-secondary to-secondary/80",
  },
  {
    title: "Proposed Design — EduBooks.ai",
    subtitle: "Tailored Dashboard & Navigation",
    content: [
      "Education-themed dashboard with fee collection, pending, and expense cards",
      "Class-wise and student-wise fee management with filters and search",
      "Budget vs. actual tracking per expense category (salaries, transport, etc.)",
      "Academic year and term-based data organization throughout",
      "Dark sidebar with warm blue/green palette reflecting trust and growth",
    ],
    bg: "from-primary to-info",
  },
  {
    title: "AI & Automation Features",
    subtitle: "Reducing Manual Work by 80%",
    content: [
      "Smart Fee Categorization — auto-classify payments by type",
      "Predictive Defaulter Alerts — ML-based early warning system (92% accuracy)",
      "Automated Invoice Generation — per student, per term, zero effort",
      "Expense Anomaly Detection — flags duplicates and spikes",
      "AI Chatbot for Parents — WhatsApp/SMS bot for fee status & receipts",
    ],
    bg: "from-accent to-warning",
  },
  {
    title: "Natural Language Reports",
    subtitle: "Ask Questions, Get Instant Answers",
    content: [
      "'What's the collection rate for Class 10?' → instant AI report",
      "'Compare this term's expenses to last year' → auto-generated chart",
      "Pre-built templates: Fee Summary, Cash Flow, Tax Compliance",
      "One-click export to PDF/Excel for audits and board meetings",
      "Scheduled reports — auto-email weekly/monthly summaries",
    ],
    bg: "from-info to-primary",
  },
  {
    title: "How EduBooks Differs",
    subtitle: "Base MVP vs. Education-Customized Version",
    content: [
      "Generic invoices → Student fee ledgers with class/term breakdowns",
      "Basic contacts → Parent/Student profiles with payment history",
      "Standard reports → Education-specific: fee collection, grants, compliance",
      "Manual categorization → AI auto-categorization for school transactions",
      "No communication tools → Automated SMS/WhatsApp reminders to parents",
    ],
    bg: "from-secondary to-primary",
  },
  {
    title: "Summary & Next Steps",
    subtitle: "Building a Smarter School Finance Platform",
    content: [
      "EduBooks.ai transforms generic accounting into education-first finance management",
      "AI features save 15+ hours/month and improve collection rates by 25%",
      "Parent-facing tools build trust and reduce administrative overhead",
      "Scalable from single school to multi-branch institution chains",
      "Next: integrate with payment gateways, government portals, and ERP systems",
    ],
    bg: "from-primary to-secondary",
  },
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display text-foreground">Presentation</h1>
          <p className="text-sm text-muted-foreground mt-1">
            7 slides covering MVP analysis, design, and AI features
          </p>
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* Slide */}
      <div className="slide-container relative">
        <div className={`w-full h-full bg-gradient-to-br ${slide.bg} p-8 sm:p-12 flex flex-col justify-center`}>
          {/* Decorative */}
          <div className="absolute top-6 right-8 opacity-10">
            <GraduationCap className="w-24 h-24 text-primary-foreground" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs sm:text-sm font-medium text-primary-foreground/70 uppercase tracking-widest mb-2">
              Slide {current + 1}
            </p>
            <h2 className="text-2xl sm:text-4xl font-display text-primary-foreground mb-2">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-lg text-primary-foreground/80 mb-6">{slide.subtitle}</p>

            <ul className="space-y-2.5">
              {slide.content.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 mt-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 left-8 sm:left-12 flex items-center gap-2 text-primary-foreground/40 text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            EduBooks.ai — School Finance Reimagined
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="p-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-30 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
          disabled={current === slides.length - 1}
          className="p-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-30 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide thumbnails */}
      <div className="grid grid-cols-7 gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-lg overflow-hidden border-2 transition-all ${
              i === current ? "border-primary shadow-md" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <div className={`aspect-video bg-gradient-to-br ${s.bg} p-2`}>
              <p className="text-[6px] sm:text-[8px] font-bold text-primary-foreground truncate">{s.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
