import React from 'react'
import Link from 'next/link';
import { ThemeToggle } from './components/theme-toggle';

const LandingPage = () => {
  return (
    <div className='flex items-center justify-center h-screen gap-10 flex-col'>
      <div><ThemeToggle /></div>
      <span>
      Landing Page
      </span>
      <Link className='bg-indigo-300 dark:bg-indigo-600 rounded-full px-5 py-2' href={'/documents'}>Go to Main &gt;</Link>
    </div>
  )
}

export default LandingPage
