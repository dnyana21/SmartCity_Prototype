import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('Login successful! (Demo Mode)')
    }, 800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden pt-20 pb-12 px-4">
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply pointer-events-none"></div>

      <div className="w-full max-w-[420px] relative z-10 animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg mb-6 group hover:scale-105 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </Link>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Welcome Back</h1>
          <p className="text-text-secondary mt-2 text-lg">Sign in to your citizen account</p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-5 py-4 border-2 border-border rounded-xl text-base bg-white/50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-primary mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full px-5 py-4 border-2 border-border rounded-xl text-base bg-white/50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-border text-accent focus:ring-accent/20 cursor-pointer" />
                <span className="text-sm font-medium text-text-secondary group-hover:text-primary transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-accent hover:text-accent-light transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-primary hover:bg-primary-light text-white text-lg font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:transform-none"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-border/50 pt-6">
            <p className="text-base text-text-secondary">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-accent hover:text-accent-light transition-colors">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
