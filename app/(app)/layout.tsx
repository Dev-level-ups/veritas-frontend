"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Default to true for desktop, will auto-close on mobile via useEffect
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex h-screen overflow-hidden dark:bg-gray-950'>
      
      {/* Mobile Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 
        flex flex-col justify-between w-64 px-4 py-6 
        bg-indigo-50 dark:bg-gray-900 font-sans 
        border-r border-transparent dark:border-gray-800
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 
        ${!isSidebarOpen ? 'md:hidden' : 'md:flex'}
      `}>
        {/* Top Section */}
        <div>
          {/* Brand / Logo & Close Button */}
          <div className="flex items-center justify-between px-2 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Veritas</span>
            </div>
            
            {/* Close Button (Visible on both mobile and desktop when sidebar is open) */}
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-indigo-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
              title="Close Sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <Link
              href="/documents"
              onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${pathname === '/documents'
                  ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-indigo-100/50 dark:hover:bg-gray-800'
                }`}
            >
              <svg className={`w-5 h-5 ${pathname === '/documents' ? '' : 'text-slate-600 dark:text-slate-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
              <span>Documents</span>
            </Link>

            <Link
              href="/ask"
              onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${pathname === '/ask'
                  ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-indigo-100/50 dark:hover:bg-gray-800'
                }`}
            >
              <svg className={`w-5 h-5 ${pathname === '/ask' ? '' : 'text-slate-600 dark:text-slate-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span>Ask</span>
            </Link>

            <Link
              href="/settings"
              onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${pathname === '/settings'
                  ? 'text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-indigo-100/50 dark:hover:bg-gray-800'
                }`}
            >
              <svg className={`w-5 h-5 ${pathname === '/settings' ? '' : 'text-slate-600 dark:text-slate-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        {/* Bottom Section / User Profile */}
        <div className="flex items-center gap-3 px-2 mt-auto">
          {/* Avatar */}
          <div className="flex items-center justify-center w-10 h-10 text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 rounded-full font-medium text-sm border dark:border-indigo-800">
            JD
          </div>
          {/* User Details */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">john@example.com</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className='flex flex-col flex-1 w-full min-w-0 overflow-y-auto bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100'>
        
        {/* Top Header (Shows Hamburger when sidebar is closed) */}
        <div className={`flex items-center p-4 md:px-8 md:pt-8 md:pb-0 ${isSidebarOpen ? 'md:hidden' : 'flex'}`}>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 mr-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none"
            title="Open Sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="md:hidden flex items-center gap-2">
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Veritas</span>
          </div>
        </div>

        <div className='flex justify-center w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AppLayout;
