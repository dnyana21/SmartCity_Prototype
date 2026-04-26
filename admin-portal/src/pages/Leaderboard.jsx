function Leaderboard() {
  const officers = [
    { rank: 1, name: 'Rajesh Kumar', dept: 'Roads & Infra', score: 98, resolved: 145, active: 12, trend: '+5' },
    { rank: 2, name: 'Anita Desai', dept: 'Water Supply', score: 95, resolved: 132, active: 8, trend: '+2' },
    { rank: 3, name: 'Vikram Singh', dept: 'Sanitation', score: 91, resolved: 118, active: 15, trend: '-1' },
    { rank: 4, name: 'Priya Sharma', dept: 'Streetlights', score: 88, resolved: 95, active: 5, trend: '+4' },
    { rank: 5, name: 'Sanjay Patel', dept: 'Drainage', score: 85, resolved: 82, active: 20, trend: '-3' },
  ]

  return (
    <div className="max-w-[1200px] mx-auto animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Performance Leaderboard</h1>
        <p className="text-text-secondary text-lg">Top performing officers driving civic excellence</p>
      </div>

      {/* Top 3 Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-6 mb-16 pt-10">
        {/* Rank 2 */}
        <div className="w-full md:w-1/3 max-w-[280px] order-2 md:order-1 transform md:translate-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white rounded-t-3xl border border-border border-b-0 p-6 flex flex-col items-center relative text-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute -top-10 w-20 h-20 bg-gray-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl overflow-hidden">
              🥈
            </div>
            <h3 className="mt-8 text-xl font-bold text-primary">{officers[1].name}</h3>
            <p className="text-sm font-semibold text-text-secondary mb-4">{officers[1].dept}</p>
            <div className="w-full bg-gray-50 rounded-xl p-4 border border-border">
              <p className="text-xs text-text-muted uppercase font-bold tracking-wider mb-1">Score</p>
              <p className="text-3xl font-black text-gray-700">{officers[1].score}</p>
            </div>
          </div>
          <div className="h-32 bg-gradient-to-b from-gray-200 to-gray-100 rounded-b-3xl border border-border border-t-0 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
            <span className="text-6xl font-black text-white opacity-50">2</span>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="w-full md:w-1/3 max-w-[300px] order-1 md:order-2 z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-b from-amber-50 to-white rounded-t-3xl border border-amber-200 border-b-0 p-8 flex flex-col items-center relative text-center shadow-[0_-20px_50px_rgba(245,158,11,0.15)]">
            <div className="absolute -top-12 w-24 h-24 bg-warning rounded-full border-4 border-white shadow-xl flex items-center justify-center text-4xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-300"></div>
              <span className="relative z-10">👑</span>
            </div>
            <h3 className="mt-10 text-2xl font-black text-primary">{officers[0].name}</h3>
            <p className="text-sm font-bold text-amber-600 mb-5">{officers[0].dept}</p>
            <div className="w-full bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
              <p className="text-xs text-amber-600/70 uppercase font-bold tracking-wider mb-1">Score</p>
              <p className="text-4xl font-black text-warning-dark">{officers[0].score}</p>
            </div>
          </div>
          <div className="h-40 bg-gradient-to-b from-amber-400 to-amber-500 rounded-b-3xl border border-amber-500 border-t-0 flex items-center justify-center relative overflow-hidden shadow-lg shadow-amber-500/30">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
            <span className="text-8xl font-black text-white opacity-40">1</span>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="w-full md:w-1/3 max-w-[280px] order-3 md:order-3 transform md:translate-y-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white rounded-t-3xl border border-border border-b-0 p-6 flex flex-col items-center relative text-center shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="absolute -top-10 w-20 h-20 bg-orange-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-3xl overflow-hidden">
              🥉
            </div>
            <h3 className="mt-8 text-xl font-bold text-primary">{officers[2].name}</h3>
            <p className="text-sm font-semibold text-text-secondary mb-4">{officers[2].dept}</p>
            <div className="w-full bg-gray-50 rounded-xl p-4 border border-border">
              <p className="text-xs text-text-muted uppercase font-bold tracking-wider mb-1">Score</p>
              <p className="text-3xl font-black text-orange-700">{officers[2].score}</p>
            </div>
          </div>
          <div className="h-28 bg-gradient-to-b from-orange-200 to-orange-300 rounded-b-3xl border border-orange-300 border-t-0 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
            <span className="text-6xl font-black text-white opacity-50">3</span>
          </div>
        </div>
      </div>

      {/* Rest of the list */}
      <div className="bg-white rounded-[2rem] border border-border shadow-sm overflow-hidden animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <table className="w-full text-left whitespace-nowrap">
          <thead className="bg-gray-50/50">
            <tr className="border-b border-border">
              <th className="px-8 py-5 font-bold text-text-muted text-xs uppercase tracking-wider w-24">Rank</th>
              <th className="px-8 py-5 font-bold text-text-muted text-xs uppercase tracking-wider">Officer</th>
              <th className="px-8 py-5 font-bold text-text-muted text-xs uppercase tracking-wider text-center">Resolved</th>
              <th className="px-8 py-5 font-bold text-text-muted text-xs uppercase tracking-wider text-right">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {officers.slice(3).map((o) => (
              <tr key={o.rank} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-8 py-6">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-black text-text-secondary">
                    {o.rank}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="font-bold text-primary text-base">{o.name}</div>
                  <div className="text-sm text-text-secondary font-medium">{o.dept}</div>
                </td>
                <td className="px-8 py-6 text-center">
                  <span className="inline-flex items-center justify-center bg-blue-50 text-accent font-bold px-4 py-1.5 rounded-lg border border-blue-100">
                    {o.resolved} cases
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="font-black text-xl text-primary">{o.score}</div>
                  <div className={`text-xs font-bold ${o.trend.startsWith('+') ? 'text-success' : 'text-danger'}`}>
                    {o.trend} pts
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard
