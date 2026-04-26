import { useState } from 'react'

function Complaint() {
  const [form, setForm] = useState({ description: '', location: '', category: '' })
  const [fileName, setFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [complaintId, setComplaintId] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true)
    } else if (e.type === 'dragleave') {
      setIsDragging(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = 'NGR-' + Math.random().toString(36).substr(2, 8).toUpperCase()
    setComplaintId(id)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-bg px-4">
        <div className="max-w-lg w-full bg-white rounded-[2rem] shadow-xl border border-border p-8 md:p-12 text-center animate-slide-up">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-success/20 rounded-full animate-ping"></div>
            <svg className="w-10 h-10 text-success relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-primary mb-2 tracking-tight">Report Received</h2>
          <p className="text-text-secondary mb-8 text-lg">Thank you! Your issue is now in our system.</p>
          
          <div className="bg-bg rounded-2xl p-6 mb-8 border border-border/50">
            <p className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">Tracking ID</p>
            <p className="text-3xl font-black text-accent tracking-widest">{complaintId}</p>
          </div>
          
          <p className="text-sm text-text-muted mb-8 leading-relaxed">
            Please save this Tracking ID. You will also receive an SMS/Email confirmation shortly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/track"
              className="px-6 py-3.5 bg-primary hover:bg-primary-light text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              Track Status
            </a>
            <button
              onClick={() => { setSubmitted(false); setForm({ description: '', location: '', category: '' }); setFileName('') }}
              className="px-6 py-3.5 bg-white border-2 border-border text-text-primary hover:bg-bg font-bold rounded-xl transition-all"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-bg px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">Register Complaint</h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Provide the details below. Our AI system will automatically analyze and route your issue to the correct department.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-border p-6 md:p-10 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-bold text-primary mb-2">
                Issue Details <span className="text-danger">*</span>
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Describe the issue clearly. E.g., 'Deep pothole on main road causing traffic disruption...'"
                className="w-full px-5 py-4 border-2 border-border rounded-2xl text-base bg-bg focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none shadow-sm"
              />
            </div>

            {/* Smart Image Upload */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Upload Proof (Photo)
              </label>
              <div 
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                  isDragging ? 'border-accent bg-accent/5 scale-[1.02]' : 'border-border bg-bg hover:border-accent/50 hover:bg-gray-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-upload').click()}
              >
                <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                
                {fileName ? (
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center text-success mb-2">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-semibold text-primary">{fileName}</span>
                    <span className="text-xs text-text-muted">Click to change file</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-accent mb-4 border border-border">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>
                    </div>
                    <p className="text-base font-semibold text-primary mb-1">Click to upload or drag & drop</p>
                    <p className="text-sm text-text-muted">JPEG, PNG up to 10MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Location & Category grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-bold text-primary mb-2">
                  Location / Landmark
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <input
                    id="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="Enter area or ward"
                    className="w-full pl-11 pr-5 py-3.5 border-2 border-border rounded-xl text-base bg-bg focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-bold text-primary mb-2">
                  AI Category Suggestion
                </label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-5 py-3.5 border-2 border-border rounded-xl text-base bg-bg focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm appearance-none"
                >
                  <option value="">Auto-detect (Recommended)</option>
                  <option value="road">Roads & Infrastructure</option>
                  <option value="water">Water Supply</option>
                  <option value="sanitation">Sanitation & Garbage</option>
                  <option value="electricity">Streetlights & Power</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-light text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Submit Report Instantly
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>
              <p className="text-center text-xs text-text-muted mt-4 flex items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure and encrypted submission
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Complaint
