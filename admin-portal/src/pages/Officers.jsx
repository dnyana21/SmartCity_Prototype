function Officers() {
  const officers = [
    { name: 'Rajesh Kumar', dept: 'Roads & Infrastructure', ward: 'Ward 12', assigned: 48, resolved: 44, score: 92 },
    { name: 'Anita Desai', dept: 'Water Supply', ward: 'Ward 5', assigned: 35, resolved: 31, score: 88 },
    { name: 'Vikram Singh', dept: 'Sanitation', ward: 'Ward 3', assigned: 52, resolved: 44, score: 85 },
    { name: 'Priya Sharma', dept: 'Streetlights', ward: 'Ward 8', assigned: 28, resolved: 22, score: 78 },
    { name: 'Sanjay Patel', dept: 'Drainage', ward: 'Ward 15', assigned: 41, resolved: 30, score: 74 },
    { name: 'Arun Verma', dept: 'Roads & Infrastructure', ward: 'Ward 7', assigned: 55, resolved: 52, score: 95 },
    { name: 'Neha Gupta', dept: 'Water Supply', ward: 'Ward 11', assigned: 30, resolved: 20, score: 68 },
    { name: 'Kiran Joshi', dept: 'Sanitation', ward: 'Ward 9', assigned: 38, resolved: 31, score: 82 },
  ]

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-success'
    if (score >= 80) return 'bg-accent'
    if (score >= 70) return 'bg-warning'
    return 'bg-danger'
  }

  const getScoreTextClass = (score) => {
    if (score >= 90) return 'text-success'
    if (score >= 80) return 'text-accent'
    if (score >= 70) return 'text-warning'
    return 'text-danger'
  }

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Officer Roster</h1>
          <p className="text-text-secondary mt-1">Monitor efficiency and workload distribution</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-light text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all self-start">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Add Officer
        </button>
      </div>

      <div className="bg-white rounded-[2rem] border border-border shadow-sm overflow-hidden animate-slide-up">
        <div className="p-4 border-b border-border bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search name, department..." 
              className="w-full sm:w-80 pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all shadow-sm"
            />
          </div>
          <div className="text-sm font-bold text-text-muted bg-white px-4 py-2 border border-border rounded-xl shadow-sm">
            Total: <span className="text-primary">{officers.length} active officers</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-white">
              <tr className="border-b border-border">
                <th className="px-6 py-5 font-bold text-text-muted text-xs uppercase tracking-wider">Officer Profile</th>
                <th className="px-6 py-5 font-bold text-text-muted text-xs uppercase tracking-wider">Department</th>
                <th className="px-6 py-5 font-bold text-text-muted text-xs uppercase tracking-wider">Assigned Ward</th>
                <th className="px-6 py-5 font-bold text-text-muted text-xs uppercase tracking-wider text-center">Workload</th>
                <th className="px-6 py-5 font-bold text-text-muted text-xs uppercase tracking-wider">Efficiency Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {officers.map((o, i) => (
                <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">
                        {o.name.charAt(0)}
                      </div>
                      <div className="font-bold text-primary">{o.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-text-secondary">
                    {o.dept}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-text-secondary rounded-lg text-sm font-bold border border-border">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {o.ward}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-bold text-primary" title="Resolved">{o.resolved}</span>
                      <span className="text-text-muted">/</span>
                      <span className="font-medium text-text-secondary" title="Total Assigned">{o.assigned}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4 w-full max-w-[200px]">
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${getScoreColor(o.score)}`}
                          style={{ width: `${o.score}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-black w-8 text-right ${getScoreTextClass(o.score)}`}>
                        {o.score}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Officers
