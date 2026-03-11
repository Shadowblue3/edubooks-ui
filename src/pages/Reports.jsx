import {
  FileText,
  Download,
  TrendingUp,
  Calendar,
  PieChart as PieIcon,
  BarChart3,
  Users,
  IndianRupee,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const cashFlowData = [
  { month: "Apr", income: 620000, expense: 480000 },
  { month: "May", income: 580000, expense: 490000 },
  { month: "Jun", income: 450000, expense: 510000 },
  { month: "Jul", income: 720000, expense: 520000 },
  { month: "Aug", income: 690000, expense: 490000 },
  { month: "Sep", income: 760000, expense: 560000 },
  { month: "Oct", income: 730000, expense: 530000 },
  { month: "Nov", income: 780000, expense: 510000 },
  { month: "Dec", income: 650000, expense: 483000 },
];

const reportTemplates = [
  { title: "Fee Collection Summary", desc: "Term-wise collection with student-level breakdown", icon: IndianRupee, color: "bg-primary/10 text-primary" },
  { title: "Expense Report", desc: "Category-wise expenses with budget comparison", icon: BarChart3, color: "bg-secondary/10 text-secondary" },
  { title: "Cash Flow Statement", desc: "Monthly income vs expenditure analysis", icon: TrendingUp, color: "bg-info/10 text-info" },
  { title: "Student Fee Ledger", desc: "Individual student payment history", icon: Users, color: "bg-accent/10 text-accent-foreground" },
  { title: "Annual Financial Report", desc: "Complete yearly financial overview", icon: PieIcon, color: "bg-destructive/10 text-destructive" },
  { title: "Tax & Compliance", desc: "GST, TDS deductions and compliance docs", icon: FileText, color: "bg-muted text-muted-foreground" },
];

export default function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display text-foreground">Reports & Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">Generate financial reports tailored for educational institutions</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          <Download className="w-4 h-4" /> Export All
        </button>
      </div>

      {/* Cash Flow Chart */}
      <div className="stat-card">
        <h3 className="text-sm font-semibold text-foreground mb-4">Cash Flow — Academic Year 2025-26</h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={cashFlowData}>
            <defs>
              <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(217, 72%, 45%)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="hsl(217, 72%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="hsl(0, 72%, 55%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215, 14%, 46%)" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(215, 14%, 46%)" }} tickFormatter={(v) => `₹${v / 1000}k`} />
            <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
            <Area type="monotone" dataKey="income" stroke="hsl(217, 72%, 45%)" fill="url(#incomeGrad)" strokeWidth={2} name="Income" />
            <Area type="monotone" dataKey="expense" stroke="hsl(0, 72%, 55%)" fill="url(#expenseGrad)" strokeWidth={2} name="Expense" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Report Templates */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">Report Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reportTemplates.map((report) => {
            const Icon = report.icon;
            return (
              <div key={report.title} className="stat-card flex items-start gap-4 cursor-pointer group">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${report.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{report.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{report.desc}</p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
