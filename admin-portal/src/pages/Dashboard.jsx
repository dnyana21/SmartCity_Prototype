const stats = [
  {
    label: 'Total Complaints',
    value: '1,284',
    change: '+12%',
    trend: 'up',
    color: 'from-blue-600 to-primary',
    shadow: 'shadow-blue-500/20',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  },
  {
    label: 'Pending',
    value: '342',
    change: '-5%',
    trend: 'down',
    color: 'from-amber-500 to-warning',
    shadow: 'shadow-amber-500/20',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  },
  {
    label: 'Resolved',
    value: '891',
    change: '+18%',
    trend: 'up',
    color: 'from-emerald-500 to-success',
    shadow: 'shadow-emerald-500/20',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  },
  {
    label: 'Critical',
    value: '51',
    change: '+3',
    trend: 'up',
    color: 'from-rose-500 to-danger',
    shadow: 'shadow-rose-500/20',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  },
]

const recentComplaints = [
  { id: 'NGR-001', category: 'Road & Infra', status: 'In Progress', priority: 'High', date: 'Just now' },
  { id: 'NGR-002', category: 'Water Supply', status: 'Pending', priority: 'Medium', date: '2 hrs ago' },
  { id: 'NGR-003', category: 'Streetlight', status: 'Resolved', priority: 'Low', date: '5 hrs ago' },
  { id: 'NGR-004', category: 'Garbage', status: 'In Progress', priority: 'High', date: 'Yesterday' },
  { id: 'NGR-005', category: 'Drainage', status: 'Pending', priority: 'Critical', date: 'Yesterday' },
]

const categoryData = [
  { name: 'Road & Infra', value: 35, color: 'bg-blue-500' },
  { name: 'Water Supply', value: 22, color: 'bg-cyan-500' },
  { name: 'Garbage', value: 18, color: 'bg-emerald-500' },
  { name: 'Streetlight', value: 14, color: 'bg-amber-500' },
  { name: 'Drainage', value: 8, color: 'bg-rose-500' },
  { name: 'Other', value: 3, color: 'bg-gray-400' },
]

function Dashboard() {
  const getPriorityBadge = (p) => {
    if (p === 'Critical') return 'bg-danger/10 text-danger border-danger/20'
    if (p === 'High') return 'bg-rose-500/10 text-rose-600 border-rose-500/20'
    if (p === 'Medium') return 'bg-warning/10 text-warning-dark border-warning/20'
    return 'bg-success/10 text-success border-success/20'
  }

  const getStatusBadge = (s) => {
    if (s === 'Resolved') return 'bg-success text-white border-success'
    if (s === 'In Progress') return 'bg-accent text-white border-accent'
    return 'bg-warning text-white border-warning'
  }

  return (
    <div className="max-w-[1600px] mx-auto animate-slide-up">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">Dashboard Overview</h1>
        <p className="text-text-secondary mt-1">Real-time metrics and recent activities</p>
      </div>

      {/* Premium Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className={`bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}>
            {/* Background Glow */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 blur-2xl`}></div>
            
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-4xl font-black text-primary tracking-tight">{stat.value}</p>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className={`flex items-center gap-0.5 text-xs font-bold px-2 py-0.5 rounded-md ${stat.trend === 'up' && stat.label !== 'Resolved' && stat.label !== 'Total Complaints' ? 'bg-danger/10 text-danger' : 'bg-success/10 text-success'}`}>
                    {stat.trend === 'up' ? (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" /></svg>
                    )}
                    {stat.change}
                  </span>
                  <span className="text-xs text-text-muted">vs last month</span>
                </div>
              </div>
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} ${stat.shadow} shadow-lg rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform`}>
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {stat.icon}
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Complaints Table Card */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-gray-50/50">
            <h2 className="text-lg font-bold text-primary">Recent Complaints</h2>
            <a href="/complaints" className="text-sm font-bold text-accent hover:text-accent-light transition-colors flex items-center gap-1">
              View All <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead>
                <tr className="bg-white border-b border-border">
                  <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentComplaints.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4 font-bold text-primary">{c.id}</td>
                    <td className="px-6 py-4 font-medium text-text-secondary">{c.category}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${getPriorityBadge(c.priority)}`}>
                        {c.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(c.status)}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-text-muted font-medium text-right">{c.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Distribution Chart */}
        <div className="bg-white rounded-3xl border border-border shadow-sm flex flex-col">
          <div className="px-6 py-5 border-b border-border bg-gray-50/50">
            <h2 className="text-lg font-bold text-primary">Category Distribution</h2>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center">
            <div className="space-y-5">
              {categoryData.map((cat, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-bold text-text-secondary group-hover:text-primary transition-colors">{cat.name}</span>
                    <span className="font-bold text-primary">{cat.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${cat.color}`}
                      style={{ width: `${cat.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-sm">
              <span className="text-text-muted font-medium">Total analyzed</span>
              <span className="font-bold text-primary">100%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
