import { useState } from 'react'

const dummyComplaint = {
  id: 'NGR-X8K2M9PQ',
  category: 'Road & Infrastructure',
  priority: 'High',
  status: 'In Progress',
  description: 'Large pothole on MG Road near City Mall causing traffic issues and accidents.',
  location: 'MG Road, Ward 12',
  submittedDate: '2026-04-20',
  assignedOfficer: 'Rajesh Kumar',
  timeline: [
    { status: 'Submitted', date: '2026-04-20, 10:32 AM', completed: true, desc: 'Complaint registered successfully' },
    { status: 'AI Classified', date: '2026-04-20, 10:33 AM', completed: true, desc: 'Categorized as Road & Infrastructure – Priority: High' },
    { status: 'Officer Assigned', date: '2026-04-20, 11:15 AM', completed: true, desc: 'Assigned to Rajesh Kumar, Roads Dept.' },
    { status: 'In Progress', date: '2026-04-21, 09:00 AM', completed: true, desc: 'Officer has inspected the site' },
    { status: 'Resolved', date: '', completed: false, desc: 'Pending resolution' },
  ],
}

function Track() {
  const [complaintId, setComplaintId] = useState('')
  const [result, setResult] = useState(null)
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!complaintId.trim()) return
    
    setLoading(true)
    setSearched(true)
    
    // Simulate network request
    setTimeout(() => {
      setLoading(false)
      if (complaintId.toUpperCase().includes('NGR')) {
        setResult(dummyComplaint)
      } else {
        setResult(null)
      }
    }, 800)
  }

  const getPriorityColor = (p) => {
    if (p === 'High') return 'bg-danger/10 text-danger border-danger/20'
    if (p === 'Medium') return 'bg-warning/10 text-warning border-warning/20'
    return 'bg-success/10 text-success border-success/20'
  }

  const getStatusColor = (s) => {
    if (s === 'Resolved') return 'bg-success text-white border-success'
    if (s === 'In Progress') return 'bg-accent text-white border-accent'
    if (s === 'Pending') return 'bg-warning text-white border-warning'
    return 'bg-gray-100 text-text-secondary border-border'
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-bg px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">Track Status</h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Enter your unique Tracking ID to see real-time updates on your grievance resolution.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-[2rem] shadow-lg border border-border p-4 md:p-6 mb-8 animate-slide-up">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-text-muted">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
              </div>
              <input
                type="text"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                placeholder="e.g., NGR-X8K2M9PQ"
                className="w-full pl-14 pr-6 py-4 border-2 border-border rounded-xl text-lg font-medium tracking-wide bg-bg focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all uppercase placeholder:normal-case"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-primary hover:bg-primary-light text-white text-lg font-bold rounded-xl shadow-md transition-all whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Searching...
                </>
              ) : 'Track Now'}
            </button>
          </form>
        </div>

        {/* Results */}
        {searched && !loading && result && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
            {/* Status Card */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-[2rem] shadow-lg border border-border p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 border-b border-border pb-6">
                  <div>
                    <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Tracking ID</p>
                    <p className="text-3xl font-black text-primary tracking-widest">{result.id}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${getPriorityColor(result.priority)} flex items-center gap-1.5`}>
                      <div className={`w-2 h-2 rounded-full ${result.priority === 'High' ? 'bg-danger animate-pulse' : 'bg-current'}`}></div>
                      {result.priority} Priority
                    </span>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold border shadow-sm ${getStatusColor(result.status)}`}>
                      {result.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-bg rounded-2xl p-5 border border-border/50">
                    <div className="flex items-center gap-3 text-text-muted mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                      <span className="text-sm font-bold uppercase tracking-wider">Category</span>
                    </div>
                    <p className="font-semibold text-text-primary text-lg">{result.category}</p>
                  </div>
                  
                  <div className="bg-bg rounded-2xl p-5 border border-border/50">
                    <div className="flex items-center gap-3 text-text-muted mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="text-sm font-bold uppercase tracking-wider">Location</span>
                    </div>
                    <p className="font-semibold text-text-primary text-lg">{result.location}</p>
                  </div>
                  
                  <div className="bg-bg rounded-2xl p-5 border border-border/50">
                    <div className="flex items-center gap-3 text-text-muted mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span className="text-sm font-bold uppercase tracking-wider">Submitted On</span>
                    </div>
                    <p className="font-semibold text-text-primary text-lg">{result.submittedDate}</p>
                  </div>
                  
                  <div className="bg-bg rounded-2xl p-5 border border-border/50">
                    <div className="flex items-center gap-3 text-text-muted mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      <span className="text-sm font-bold uppercase tracking-wider">Officer</span>
                    </div>
                    <p className="font-semibold text-text-primary text-lg">{result.assignedOfficer}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-3">Issue Description</h3>
                  <p className="text-text-primary leading-relaxed bg-bg p-5 rounded-2xl border border-border/50">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[2rem] shadow-lg border border-border p-8 sticky top-28">
                <h3 className="text-xl font-extrabold text-primary mb-8 flex items-center gap-2">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Resolution Timeline
                </h3>
                
                <div className="relative pl-3">
                  <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-border rounded-full"></div>
                  
                  {result.timeline.map((step, i) => (
                    <div key={i} className="relative mb-8 last:mb-0">
                      {/* Node */}
                      <div className={`absolute -left-[1.35rem] w-6 h-6 rounded-full border-[3px] flex items-center justify-center z-10 bg-white ${
                        step.completed ? 'border-success' : 'border-border'
                      }`}>
                        {step.completed && <div className="w-2 h-2 rounded-full bg-success"></div>}
                      </div>
                      
                      {/* Active Line Override */}
                      {step.completed && i < result.timeline.length - 1 && (
                        <div className="absolute -left-3 top-6 w-0.5 h-10 bg-success -z-0"></div>
                      )}

                      {/* Content */}
                      <div className={`pl-6 ${step.completed ? 'opacity-100' : 'opacity-50'}`}>
                        <h4 className={`font-bold text-base ${step.completed ? 'text-primary' : 'text-text-muted'}`}>
                          {step.status}
                        </h4>
                        {step.date && <p className="text-xs font-medium text-text-secondary mt-1">{step.date}</p>}
                        <p className="text-sm text-text-secondary mt-2 leading-relaxed bg-bg/50 p-3 rounded-lg border border-border/30">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {searched && !loading && !result && (
          <div className="bg-white rounded-[2rem] shadow-lg border border-border p-12 text-center animate-slide-up">
            <div className="w-20 h-20 bg-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">No Match Found</h3>
            <p className="text-text-secondary text-lg max-w-md mx-auto">
              We couldn't find a complaint matching the ID <span className="font-bold">"{complaintId}"</span>. Please check the ID and try again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Track
