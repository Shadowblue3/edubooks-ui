import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  ChevronDown,
  CheckCircle2,
  Clock,
  AlertCircle,
  Send,
} from "lucide-react";

const feeData = [
  { id: 1, student: "Aarav Sharma", class: "10-A", roll: "01", total: 45000, paid: 45000, status: "paid", date: "2025-12-15" },
  { id: 2, student: "Priya Patel", class: "10-A", roll: "02", total: 45000, paid: 30000, status: "partial", date: "2025-12-10" },
  { id: 3, student: "Rahul Kumar", class: "9-B", roll: "12", total: 42000, paid: 0, status: "overdue", date: null },
  { id: 4, student: "Sneha Gupta", class: "8-C", roll: "07", total: 40000, paid: 40000, status: "paid", date: "2025-12-18" },
  { id: 5, student: "Vikram Singh", class: "10-B", roll: "15", total: 45000, paid: 22500, status: "partial", date: "2025-11-28" },
  { id: 6, student: "Ananya Reddy", class: "7-A", roll: "03", total: 38000, paid: 0, status: "overdue", date: null },
  { id: 7, student: "Karan Mehta", class: "9-A", roll: "21", total: 42000, paid: 42000, status: "paid", date: "2025-12-20" },
  { id: 8, student: "Divya Nair", class: "12-A", roll: "05", total: 50000, paid: 50000, status: "paid", date: "2025-12-01" },
];

const statusConfig = {
  paid: { label: "Paid", icon: CheckCircle2, className: "text-secondary bg-secondary/10" },
  partial: { label: "Partial", icon: Clock, className: "text-warning bg-accent/10" },
  overdue: { label: "Overdue", icon: AlertCircle, className: "text-destructive bg-destructive/10" },
};

export default function FeeCollection() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = feeData.filter((f) => {
    const matchesSearch = f.student.toLowerCase().includes(search.toLowerCase()) || f.class.includes(search);
    const matchesStatus = filterStatus === "all" || f.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display text-foreground">Fee Collection</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage student fee payments and send reminders</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Record Payment
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stat-card border-l-4 border-l-secondary">
          <p className="text-xs text-muted-foreground">Fully Paid</p>
          <p className="text-xl font-bold text-foreground mt-1">₹17,70,000</p>
          <p className="text-xs text-secondary mt-1">4 students</p>
        </div>
        <div className="stat-card border-l-4 border-l-accent">
          <p className="text-xs text-muted-foreground">Partially Paid</p>
          <p className="text-xl font-bold text-foreground mt-1">₹52,500</p>
          <p className="text-xs text-warning mt-1">2 students</p>
        </div>
        <div className="stat-card border-l-4 border-l-destructive">
          <p className="text-xs text-muted-foreground">Overdue</p>
          <p className="text-xl font-bold text-foreground mt-1">₹80,000</p>
          <p className="text-xs text-destructive mt-1">2 students</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search student or class..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex gap-1.5">
          {["all", "paid", "partial", "overdue"].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterStatus === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="stat-card overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Student</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Class</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Fee</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Paid</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Balance</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => {
                const config = statusConfig[row.status];
                const StatusIcon = config.icon;
                return (
                  <tr key={row.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-foreground">{row.student}</div>
                      <div className="text-xs text-muted-foreground">Roll #{row.roll}</div>
                    </td>
                    <td className="px-5 py-3.5 text-foreground">{row.class}</td>
                    <td className="px-5 py-3.5 text-right text-foreground">₹{row.total.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-right text-foreground">₹{row.paid.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-right font-medium text-foreground">
                      ₹{(row.total - row.paid).toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${config.className}`}>
                        <StatusIcon className="w-3 h-3" />
                        {config.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {row.status !== "paid" && (
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-primary hover:bg-primary/10 transition-colors">
                          <Send className="w-3 h-3" /> Remind
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
