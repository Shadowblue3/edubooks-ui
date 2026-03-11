import {
  Sparkles,
  Brain,
  MessageSquare,
  FileSearch,
  TrendingUp,
  Zap,
  Bot,
  BarChart3,
  Send,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const aiFeatures = [
  {
    title: "Smart Fee Categorization",
    desc: "AI auto-categorizes incoming payments by fee type (tuition, transport, lab, library) reducing manual data entry by 80%.",
    icon: Brain,
    status: "Active",
    impact: "Saves 15 hrs/month",
  },
  {
    title: "Predictive Fee Defaulter Alert",
    desc: "ML model analyzes payment patterns to predict which students are likely to default, enabling proactive outreach.",
    icon: TrendingUp,
    status: "Active",
    impact: "92% accuracy",
  },
  {
    title: "Automated Invoice Generation",
    desc: "Generate and send fee invoices automatically each term with personalized breakdowns per student.",
    icon: FileSearch,
    status: "Active",
    impact: "100% automation",
  },
  {
    title: "Expense Anomaly Detection",
    desc: "AI flags unusual expense patterns — sudden spikes, duplicate entries, or category mismatches for review.",
    icon: Zap,
    status: "Beta",
    impact: "Catches 97% anomalies",
  },
  {
    title: "Natural Language Reports",
    desc: "Ask questions like 'What's the fee collection rate for Class 10?' and get instant AI-generated reports.",
    icon: BarChart3,
    status: "Beta",
    impact: "Instant insights",
  },
  {
    title: "AI Chatbot for Parents",
    desc: "WhatsApp/SMS bot lets parents check fee status, download receipts, and get payment links instantly.",
    icon: Bot,
    status: "Planned",
    impact: "24/7 availability",
  },
];

const chatMessages = [
  { role: "user", text: "What's the total pending fees for Class 10?" },
  { role: "ai", text: "Class 10 has ₹3,45,000 in pending fees across 28 students. 12 students have partial payments, and 16 are overdue. Would you like me to send automated reminders?" },
  { role: "user", text: "Yes, send reminders to overdue students" },
  { role: "ai", text: "Done! I've sent personalized SMS reminders to 16 parents with pending fee details and payment links. Expected collection based on past patterns: ₹2,80,000 within 7 days." },
];

export default function AIFeatures() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-display text-foreground">AI & Automation</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Intelligent features that reduce manual work and provide actionable insights
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="stat-card group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  feature.status === "Active" ? "bg-secondary/10 text-secondary" :
                  feature.status === "Beta" ? "bg-accent/10 text-warning" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {feature.status}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{feature.desc}</p>
              <div className="mt-3 pt-3 border-t border-border">
                <span className="text-xs font-medium text-primary">{feature.impact}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Chat Demo */}
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">AI Assistant — Try it</h3>
        </div>
        <div className="bg-muted/50 rounded-xl p-4 space-y-3 max-h-80 overflow-y-auto">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card border border-border text-foreground rounded-bl-md"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about fees, expenses, reports..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
