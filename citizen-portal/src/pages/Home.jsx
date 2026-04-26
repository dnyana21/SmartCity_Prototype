import { Link } from 'react-router-dom'

function Home() {
  const stats = [
    { label: 'Complaints Resolved', value: '12,847', icon: '✨' },
    { label: 'Active Citizens', value: '45,230', icon: '👥' },
    { label: 'Avg Resolution Time', value: '3.2 Days', icon: '⏱️' },
    { label: 'Satisfaction Rate', value: '94%', icon: '⭐' },
  ]

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'AI-Powered Classification',
      desc: 'Complaints are automatically categorized using advanced AI for rapid routing to the correct department.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real-Time Tracking',
      desc: 'Track your complaint status in real-time with live updates and instant notifications.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Transparent Process',
      desc: 'Every step is documented and visible on the blockchain-inspired ledger for total accountability.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Quick Resolution',
      desc: 'Smart officer assignment ensures complaints are resolved by the right person in minimal time.',
    },
  ]

  const steps = [
    { num: '1', title: 'Report', desc: 'Take a photo and describe the issue.' },
    { num: '2', title: 'Classify', desc: 'AI routes it to the right department.' },
    { num: '3', title: 'Assign', desc: 'Local officers are immediately notified.' },
    { num: '4', title: 'Resolve', desc: 'Issue fixed. You get notified.' },
  ]

  return (
    <div className="pt-20"> {/* Offset for fixed navbar */}
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-light/40 blur-[150px] mix-blend-screen"></div>
          <div className="absolute top-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-success/10 blur-[100px] mix-blend-screen"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2.5 glass text-white text-sm font-semibold px-4 py-2 rounded-full mb-8 shadow-lg border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              Next-Gen Smart City Platform
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Report Issues.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Transform</span> City.
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-xl font-light">
              Empowering citizens with an AI-driven platform for lightning-fast grievance resolution. Be the change your city needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/complaint"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                Register Complaint
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/track"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl backdrop-blur-md border border-white/20 hover:-translate-y-1 transition-all duration-300"
              >
                Track Status
              </Link>
            </div>
          </div>

          {/* Right side illustrative element */}
          <div className="hidden lg:block relative w-full aspect-square animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative w-full h-full glass-dark rounded-[2.5rem] border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent rounded-full blur-3xl opacity-30"></div>
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-danger"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <div className="text-white/50 text-xs font-mono">nagrimitra.ai/track</div>
              </div>
              
              <div className="flex-1 py-8 flex flex-col gap-4 z-10">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-4 animate-[pulse_4s_ease-in-out_infinite]">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-success">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Streetlight Fixed</div>
                    <div className="text-white/60 text-sm">Ward 12 • 5 mins ago</div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-4 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">AI Classified: Pothole</div>
                    <div className="text-white/60 text-sm">Routing to Roads Dept...</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-4 opacity-50">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-2"></div>
                    <div className="h-3 w-24 bg-white/10 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Strip */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass bg-white/90 rounded-3xl shadow-xl border border-white p-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 text-center hover:bg-gray-50/50 transition-colors first:rounded-t-2xl lg:first:rounded-l-2xl lg:first:rounded-tr-none last:rounded-b-2xl lg:last:rounded-r-2xl lg:last:rounded-bl-none">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium text-text-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Core Technology</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6">Designed for Efficiency</h3>
          <p className="text-text-secondary text-lg leading-relaxed">
            Nagrimitra leverages artificial intelligence and real-time tracking to ensure zero bottlenecks in municipal grievance redressal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <div className="text-accent group-hover:text-white transition-colors">
                  {f.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{f.title}</h4>
              <p className="text-text-secondary leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern How It Works */}
      <section className="bg-primary-dark text-white py-24 relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">How It Works</h2>
            <p className="text-blue-200 text-lg">Four steps to a better neighborhood.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-accent/30">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  )
}

export default Home
