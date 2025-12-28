import type { ReactNode } from 'react'
import Navigation from '../components/Navigation'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main style={{ paddingTop: '110px' }}>{children}</main>
    </div>
  )
}

export default Layout

