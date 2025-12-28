import { useState, useEffect } from 'react'
import heroFlowerLeft from '../../assets/icons/hero-flower-left.svg'
import heroFlower from '../../assets/icons/hero-flower.svg'
import Footer from '../components/Footer'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function ComingSoon() {
  // Set target date (20 days from now as shown in the image, but you can adjust this)
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 20)
    targetDate.setHours(23, 59, 45, 0) // Set to match the image: 20 days, 23:59:45
    
    const difference = +targetDate - +new Date()
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative flowers */}
      <img 
        src={heroFlowerLeft} 
        alt="" 
        className="absolute pointer-events-none w-[33px] h-[27px] top-[76px] left-4 md:left-[200px] md:w-[140px] md:h-[110px]"
      />
      <img 
        src={heroFlower} 
        alt="" 
        className="absolute pointer-events-none w-[33px] h-[27px] top-[76px] right-4 md:right-[200px] md:w-[140px] md:h-[110px]"
      />
      
      {/* Main Content */}
      <div className="flex flex-col items-center px-4 pt-8 md:pt-12 pb-8">
        {/* Banner */}
        <div 
          className="inline-flex items-center justify-center bg-white shadow-md w-[252px] h-[52px] p-0 md:w-auto md:h-auto md:px-4 md:py-2" 
          style={{ 
            borderRadius: '30px', 
            transform: 'rotate(-1deg)', 
            marginBottom: '60px', 
            marginTop: '40px'
          }}
        >
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#30004B' }}>
            Not Long Now, We're Almost There
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-black text-center mb-4 md:mb-6 text-[33px] md:text-[55px] md:w-[690px]" style={{ fontWeight: 500, maxWidth: '100%' }}>
          A Smarter Way to Commute{' '}
          <span className="text-black md:text-red-500">Is On Its Way</span>
        </h1>

        {/* Descriptive Text */}
        <div className="mx-auto text-center space-y-4 mb-12 md:mb-16" style={{ width: '690px', maxWidth: '100%' }}>
          <p className="text-black leading-relaxed text-[14px] md:text-[16px] font-[400] md:font-[300]">
            We're putting the final touches on a ride experience designed to be safer, smoother, and more reliable—built around how people actually move, not just how apps usually work.
          </p>
          <p className="text-black leading-relaxed text-[14px] md:text-[16px] font-[400] md:font-[300]">
            Our engines are running... Our drivers are onboarding... All that's left is the{' '}
            <span className="text-red-500 font-semibold">final countdown</span>.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-[64px] h-[64px] md:w-24 md:h-24">
              {/* Solid border - corners and sides */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Top-left corner - curved */}
                <path d="M 0 10 Q 0 0 10 0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top-right corner - curved */}
                <path d="M 90 0 Q 100 0 100 10" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-left corner - curved */}
                <path d="M 0 90 Q 0 100 10 100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-right corner - curved */}
                <path d="M 90 100 Q 100 100 100 90" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top side - centered */}
                <line x1="40" y1="0" x2="60" y2="0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Right side - centered */}
                <line x1="100" y1="40" x2="100" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Bottom side - centered */}
                <line x1="40" y1="100" x2="60" y2="100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Left side - centered */}
                <line x1="0" y1="40" x2="0" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-black relative z-10 text-[24px] md:text-3xl md:text-4xl">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm md:text-base text-black mt-2 font-medium">Days</span>
          </div>

          {/* Colon Separator */}
          <span className="text-3xl md:text-4xl font-bold text-black mb-8">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-[64px] h-[64px] md:w-24 md:h-24">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Top-left corner - curved */}
                <path d="M 0 10 Q 0 0 10 0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top-right corner - curved */}
                <path d="M 90 0 Q 100 0 100 10" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-left corner - curved */}
                <path d="M 0 90 Q 0 100 10 100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-right corner - curved */}
                <path d="M 90 100 Q 100 100 100 90" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top side - centered */}
                <line x1="40" y1="0" x2="60" y2="0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Right side - centered */}
                <line x1="100" y1="40" x2="100" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Bottom side - centered */}
                <line x1="40" y1="100" x2="60" y2="100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Left side - centered */}
                <line x1="0" y1="40" x2="0" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-black relative z-10 text-[24px] md:text-3xl md:text-4xl">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm md:text-base text-black mt-2 font-medium">Hours</span>
          </div>

          {/* Colon Separator */}
          <span className="text-3xl md:text-4xl font-bold text-black mb-8">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-[64px] h-[64px] md:w-24 md:h-24">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Top-left corner - curved */}
                <path d="M 0 10 Q 0 0 10 0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top-right corner - curved */}
                <path d="M 90 0 Q 100 0 100 10" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-left corner - curved */}
                <path d="M 0 90 Q 0 100 10 100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-right corner - curved */}
                <path d="M 90 100 Q 100 100 100 90" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top side - centered */}
                <line x1="40" y1="0" x2="60" y2="0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Right side - centered */}
                <line x1="100" y1="40" x2="100" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Bottom side - centered */}
                <line x1="40" y1="100" x2="60" y2="100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Left side - centered */}
                <line x1="0" y1="40" x2="0" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-black relative z-10 text-[24px] md:text-3xl md:text-4xl">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm md:text-base text-black mt-2 font-medium">Minutes</span>
          </div>

          {/* Colon Separator */}
          <span className="text-3xl md:text-4xl font-bold text-black mb-8">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-[64px] h-[64px] md:w-24 md:h-24">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Top-left corner - curved */}
                <path d="M 0 10 Q 0 0 10 0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top-right corner - curved */}
                <path d="M 90 0 Q 100 0 100 10" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-left corner - curved */}
                <path d="M 0 90 Q 0 100 10 100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Bottom-right corner - curved */}
                <path d="M 90 100 Q 100 100 100 90" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Top side - centered */}
                <line x1="40" y1="0" x2="60" y2="0" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Right side - centered */}
                <line x1="100" y1="40" x2="100" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Bottom side - centered */}
                <line x1="40" y1="100" x2="60" y2="100" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
                {/* Left side - centered */}
                <line x1="0" y1="40" x2="0" y2="60" stroke="#CC280C" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <span className="font-bold text-black relative z-10 text-[24px] md:text-3xl md:text-4xl">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm md:text-base text-black mt-2 font-medium">Seconds</span>
          </div>
        </div>
      </div>
      <div className="mt-[60px] md:mt-[80px]">
        <Footer />
      </div>
    </div>
  )
}

export default ComingSoon

