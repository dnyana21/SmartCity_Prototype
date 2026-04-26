import { useState } from 'react'

const dummyComplaints = [
  { id: 'NGR-X8K2', category: 'Roads', location: 'Ward 12', priority: 'High', status: 'Pending', date: '2026-04-20', aiConfidence: '98%' },
  { id: 'NGR-M4L9', category: 'Water', location: 'Ward 5', priority: 'Medium', status: 'In Progress', date: '2026-04-19', aiConfidence: '85%' },
  { id: 'NGR-P9Q1', category: 'Sanitation', location: 'Ward 3', priority: 'Low', status: 'Resolved', date: '2026-04-18', aiConfidence: '92%' },
  { id: 'NGR-W2N5', category: 'Streetlight', location: 'Ward 8', priority: 'High', status: 'Pending', date: '2026-04-20', aiConfidence: '88%' },
  { id: 'NGR-A5B6', category: 'Drainage', location: 'Ward 15', priority: 'Critical', status: 'In Progress', date: '2026-04-17', aiConfidence: '95%' },
  { id: 'NGR-C7D8', category: 'Roads', location: 'Ward 7', priority: 'Medium', status: 'Resolved', date: '2026-04-15', aiConfidence: '91%' },
]

function Complaints() {
  const [filter, setFilter] = useState('All')

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

  const filteredData = filter === 'All' ? dummyComplaints : dummyComplaints.filter(c => c.status === filter)

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Complaint Database</h1>
          <p className="text-text-secondary mt-1">Manage and assign AI-classified grievances</p>
        </div>
        
        <div className="flex bg-white rounded-xl p-1 shadow-sm border border-border self-start">
          {['All', 'Pending', 'In Progress', 'Resolved'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                filter === f ? 'bg-primary text-white shadow-md' : 'text-text-secondary hover:text-primary hover:bg-gray-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-border shadow-sm overflow-hidden animate-slide-up">
        {/* Table Header / Toolbar */}
        <div className="p-4 border-b border-border bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search ID, Category..." 
              className="w-full sm:w-80 pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-xl text-sm font-bold text-text-secondary hover:text-primary shadow-sm hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            Filters
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-white">
              <tr className="border-b border-border">
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Complaint ID</th>
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">AI Category</th>
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 font-bold text-text-muted text-xs uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredData.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-bold text-primary">{c.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-text-secondary">{c.category}</div>
                    <div className="text-[10px] font-bold text-success flex items-center gap-1 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {c.aiConfidence} Match
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-text-secondary">{c.location}</td>
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
                  <td className="px-6 py-4 text-text-muted font-medium">{c.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 bg-white border border-border hover:border-accent hover:text-accent text-text-secondary rounded-lg text-sm font-bold shadow-sm transition-all">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <p className="text-text-secondary font-medium">No complaints found for this filter.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border bg-gray-50/50 flex items-center justify-between text-sm text-text-muted font-medium">
          <span>Showing {filteredData.length} of {dummyComplaints.length} entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-border rounded-lg bg-white hover:bg-gray-50 transition-colors disabled:opacity-50">Prev</button>
            <button className="px-3 py-1.5 border border-border rounded-lg bg-white hover:bg-gray-50 transition-colors disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complaints
