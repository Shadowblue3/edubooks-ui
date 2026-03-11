import {
  TrendingUp,
  TrendingDown,
  Users,
  IndianRupee,
  AlertCircle,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Wallet,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const stats = [
  {
    label: "Total Fee Collected",
    value: "₹24,56,000",
    change: "+12.5%",
    trend: "up",
    icon: IndianRupee,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Pending Fees",
    value: "₹8,34,000",
    change: "148 students",
    trend: "down",
    icon: Clock,
    color: "text-warning",
    bgColor: "bg-accent/10",
  },
  {
    label: "Total Students",
    value: "1,240",
    change: "+45 this term",
    trend: "up",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    label: "Monthly Expenses",
    value: "₹6,78,000",
    change: "-3.2%",
    trend: "down",
    icon: Wallet,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

const monthlyData = [
  { month: "Apr", collected: 420000, pending: 180000 },
  { month: "May", collected: 480000, pending: 150000 },
  { month: "Jun", collected: 350000, pending: 200000 },
  { month: "Jul", collected: 520000, pending: 120000 },
  { month: "Aug", collected: 490000, pending: 140000 },
  { month: "Sep", collected: 560000, pending: 90000 },
  { month: "Oct", collected: 530000, pending: 110000 },
  { month: "Nov", collected: 580000, pending: 80000 },
];

const expenseBreakdown = [
  { name: "Salaries", value: 45, color: "hsl(217, 72%, 45%)" },
  { name: "Infrastructure", value: 20, color: "hsl(152, 45%, 45%)" },
  { name: "Utilities", value: 12, color: "hsl(38, 92%, 55%)" },
  { name: "Supplies", value: 10, color: "hsl(200, 80%, 50%)" },
  { name: "Transport", value: 8, color: "hsl(280, 60%, 55%)" },
  { name: "Others", value: 5, color: "hsl(0, 0%, 60%)" },
];

const recentActivity = [
  { id: 1, text: "Fee received from Class 10-A (32 students)", time: "2 hours ago", type: "success" },
  { id: 2, text: "Salary disbursement processed - ₹3,20,000", time: "5 hours ago", type: "expense" },
  { id: 3, text: "Overdue fee reminder sent to 48 parents", time: "1 day ago", type: "warning" },
  { id: 4, text: "Lab equipment purchase - ₹45,000", time: "1 day ago", type: "expense" },
  { id: 5, text: "Government grant received - ₹2,00,000", time: "3 days ago", type: "success" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Academic Year 2025-26 • Term 2
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            All systems operational
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-secondary" : "text-muted-foreground"
                }`}>
                  {stat.change}
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                </span>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Fee Collection Chart */}
        <div className="stat-card lg:col-span-2">
          <h3 className="text-sm font-semibold text-foreground mb-4">Fee Collection Overview</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215, 14%, 46%)" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(215, 14%, 46%)" }} tickFormatter={(v) => `₹${v / 1000}k`} />
              <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
              <Bar dataKey="collected" fill="hsl(217, 72%, 45%)" radius={[4, 4, 0, 0]} name="Collected" />
              <Bar dataKey="pending" fill="hsl(38, 92%, 55%)" radius={[4, 4, 0, 0]} name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Breakdown */}
        <div className="stat-card">
          <h3 className="text-sm font-semibold text-foreground mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={expenseBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={75}
                dataKey="value"
                paddingAngle={2}
              >
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => `${v}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {expenseBreakdown.slice(0, 4).map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-medium text-foreground">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="stat-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
          <button className="text-xs text-primary font-medium hover:underline">View all</button>
        </div>
        <div className="space-y-3">
          {recentActivity.map((item) => (
            <div key={item.id} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                item.type === "success" ? "bg-secondary" :
                item.type === "warning" ? "bg-accent" : "bg-primary"
              }`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{item.text}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
