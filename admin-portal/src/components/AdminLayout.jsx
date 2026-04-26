import { useState } from 'react'
import Sidebar from './Sidebar'

function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="admin-content flex flex-col min-h-screen transition-all duration-300">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-border h-20 px-4 sm:px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-text-secondary hover:text-primary hover:bg-gray-100 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="font-semibold text-text-primary">Dashboard</span>
              <span className="text-text-muted">/</span>
              <span className="text-text-secondary">Overview</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search */}
            <div className="hidden md:flex relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
              </div>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-64 pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-text-secondary hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-danger border-2 border-white rounded-full"></span>
            </button>
            
            {/* Date */}
            <div className="hidden sm:block text-sm font-medium text-text-secondary bg-gray-50 px-4 py-2 rounded-full border border-border">
              {new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 animate-fade-in overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
