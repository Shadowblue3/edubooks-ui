import { useState } from "react";
import {
  Plus,
  Download,
  Search,
  Calendar,
  Building2,
  Zap,
  Bus,
  BookOpen,
  Wrench,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const categories = [
  { name: "Salaries & Wages", icon: Building2, amount: 320000, budget: 350000 },
  { name: "Utilities & Electricity", icon: Zap, amount: 45000, budget: 50000 },
  { name: "Transport & Fuel", icon: Bus, amount: 38000, budget: 40000 },
  { name: "Books & Supplies", icon: BookOpen, amount: 28000, budget: 35000 },
  { name: "Maintenance", icon: Wrench, amount: 52000, budget: 45000 },
];

const recentExpenses = [
  { id: 1, desc: "Staff salary - December 2025", category: "Salaries", amount: 320000, date: "2025-12-28", approved: true },
  { id: 2, desc: "Electricity bill - Dec", category: "Utilities", amount: 28000, date: "2025-12-22", approved: true },
  { id: 3, desc: "Science lab chemicals", category: "Supplies", amount: 12000, date: "2025-12-20", approved: true },
  { id: 4, desc: "School bus diesel", category: "Transport", amount: 18500, date: "2025-12-19", approved: false },
  { id: 5, desc: "Plumbing repair - Block B", category: "Maintenance", amount: 8500, date: "2025-12-18", approved: true },
  { id: 6, desc: "Annual sports day arrangements", category: "Events", amount: 45000, date: "2025-12-15", approved: false },
];

const monthlyTrend = [
  { month: "Jul", amount: 520000 },
  { month: "Aug", amount: 490000 },
  { month: "Sep", amount: 560000 },
  { month: "Oct", amount: 530000 },
  { month: "Nov", amount: 510000 },
  { month: "Dec", amount: 483000 },
];

export default function Expenses() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display text-foreground">Expense Tracking</h1>
          <p className="text-sm text-muted-foreground mt-1">Track and categorize all school expenditures</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Add Expense
          </button>
        </div>
      </div>

      {/* Budget vs Actual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const pct = Math.round((cat.amount / cat.budget) * 100);
          const isOver = pct > 100;
          return (
            <div key={cat.name} className="stat-card">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground truncate">{cat.name}</span>
              </div>
              <p className="text-lg font-bold text-foreground">₹{(cat.amount / 1000).toFixed(0)}k</p>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>{pct}% of budget</span>
                  <span>₹{(cat.budget / 1000).toFixed(0)}k</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isOver ? "bg-destructive" : pct > 80 ? "bg-accent" : "bg-primary"
                    }`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart + Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="stat-card">
          <h3 className="text-sm font-semibold text-foreground mb-4">Monthly Trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215, 14%, 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(215, 14%, 46%)" }} tickFormatter={(v) => `₹${v / 1000}k`} />
              <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
              <Bar dataKey="amount" fill="hsl(152, 45%, 45%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="stat-card lg:col-span-2 !p-0">
          <div className="px-5 py-3 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Recent Expenses</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-md border border-border bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="divide-y divide-border">
            {recentExpenses
              .filter((e) => e.desc.toLowerCase().includes(search.toLowerCase()))
              .map((exp) => (
              <div key={exp.id} className="flex items-center justify-between px-5 py-3 hover:bg-muted/30 transition-colors">
                <div>
                  <p className="text-sm font-medium text-foreground">{exp.desc}</p>
                  <p className="text-xs text-muted-foreground">{exp.category} • {exp.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">₹{exp.amount.toLocaleString()}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    exp.approved ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-warning"
                  }`}>
                    {exp.approved ? "Approved" : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
