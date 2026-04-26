import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/track', label: 'Track Complaint' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className={`text-2xl font-extrabold tracking-tight ${scrolled || location.pathname !== '/' ? 'text-text-primary' : 'text-text-primary lg:text-white'}`}>
              Nagrimitra
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md p-1.5 rounded-full border border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-text-secondary hover:text-primary hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  scrolled || location.pathname !== '/' 
                    ? 'bg-primary text-white shadow-sm hover:bg-primary-light hover:-translate-y-0.5' 
                    : 'bg-white text-primary shadow-md hover:bg-gray-100 hover:-translate-y-0.5'
                }`}
              >
                Sign In
              </Link>
              <Link
                to="/complaint"
                className="px-5 py-2.5 bg-accent hover:bg-accent-light text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Register Complaint
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled || location.pathname !== '/' ? 'text-text-primary hover:bg-gray-100' : 'text-text-primary bg-white/80 backdrop-blur-md shadow-sm'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-border flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive(link.path)
                    ? 'bg-primary/5 text-primary'
                    : 'text-text-secondary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-1"></div>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-text-secondary hover:bg-gray-50"
            >
              Sign In
            </Link>
            <Link
              to="/complaint"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 bg-accent text-white rounded-xl text-sm font-semibold text-center shadow-md mt-1"
            >
              Register Complaint
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
