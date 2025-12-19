import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import logo from '../assets/logo.svg'
import mobileLogo from '../assets/mobile-logo.svg'
import smartPhoneIcon from '../assets/smart-phone.svg'
import navSelector from '../assets/nav-selector.svg'

function Navigation() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: 'For Riders' },
    { path: '/drivers', label: 'For Drivers' },
    { path: '/about', label: 'About Us' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '110px' }}>
          <Link to="/" className="hidden md:flex items-center">
            <img src={logo} alt="Ride2Five" className="h-9" />
          </Link>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/" className="flex items-center">
              <img src={mobileLogo} alt="Ride2Five" className="h-auto" style={{ maxHeight: '30px' }} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative inline-block ${
                  isActive(item.path)
                    ? 'text-gray-900 px-4 py-2'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {isActive(item.path) && (
                  <img
                    src={navSelector}
                    alt=""
                    className="absolute pointer-events-none"
                    style={{
                      top: '55%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '102px',
                      height: '38px',
                      zIndex: 0
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          <button className="h-[40px] w-[140px] md:h-[50px] md:w-[200px] bg-red-500 text-white hover:bg-red-600 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
            <img src={smartPhoneIcon} alt="Phone" style={{ width: '20px', height: '20px' }} className="md:w-5 md:h-5" />
            <span className="text-[12px] md:text-sm font-semibold">Download the app</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-red-50 text-red-600 border-l-4 border-red-500'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

