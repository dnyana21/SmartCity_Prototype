import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('Registration successful! (Demo Mode)')
    }, 800)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden pt-24 pb-12 px-4">
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply pointer-events-none"></div>

      <div className="w-full max-w-[480px] relative z-10 animate-slide-up">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg mb-6 group hover:scale-105 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </Link>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Create Account</h1>
          <p className="text-text-secondary mt-2 text-lg">Join Nagrimitra and help improve your city</p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="E.g., Amit Sharma"
                className="w-full px-5 py-4 border-2 border-border rounded-xl text-base bg-white/50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-sm font-bold text-primary mb-2">
                Email Address
              </label>
              <input
                id="reg-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-5 py-4 border-2 border-border rounded-xl text-base bg-white/50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="reg-password" className="block text-sm font-bold text-primary mb-2">
                  Password
                </label>
                <input
                  id="reg-password"
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Create password"
                  className="w-full px-5 py-4 border-2 border-border rounded-xl text-base bg-white/50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-bold text-primary mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  placeholder="Confirm password"
                  className="w-full px-5 py-4 border-2 border-border rounded-xl text-base bg-white/50 focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded-md border-2 border-border text-accent focus:ring-accent/20 cursor-pointer" />
              <span className="text-sm font-medium text-text-secondary leading-relaxed">
                I agree to the <a href="#" className="text-primary hover:text-accent transition-colors font-bold">Terms of Service</a> and{' '}
                <a href="#" className="text-primary hover:text-accent transition-colors font-bold">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-primary hover:bg-primary-light text-white text-lg font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:hover:transform-none"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-border/50 pt-6">
            <p className="text-base text-text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-accent hover:text-accent-light transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
