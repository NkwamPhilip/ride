import { useState } from 'react'
import smartPhoneIcon from '../assets/smart-phone.svg'
import whyDriveWoman from '../assets/why-drive-with-us-woman.jpg'
import earnWithoutIcon from '../assets/earn-without.svg'
import chooseYourIcon from '../assets/choose-your.svg'
import safeVerifiedIcon from '../assets/safe-verified.svg'
import lowFeesIcon from '../assets/low-fees.svg'
import howItWorksMobileImage from '../assets/how-it-works-mobile-image.png'
import peopleDriverIcon from '../assets/people-driver.svg'
import riderHeroBackground from '../assets/rider-hero-background 09.55.29.svg'
import hero9 from '../assets/hero9.png'
import hero10 from '../assets/hero10.jpg'
import hero11 from '../assets/hero11.png'
import hero12 from '../assets/hero12.jpg'
import heroFlowerLeft from '../assets/hero-flower-left.svg'
import heroFlowerBottomRight from '../assets/hero-flower-bottom-right.svg'
import Footer from '../components/Footer'

function ForDrivers() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className="w-full" style={{ marginBottom: 0, paddingBottom: 0 }}>
      {/* Hero Section */}
      <section className="bg-white relative pt-5 pb-10 lg:pt-0 lg:pb-0 lg:h-[600px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Hero 9 - Standing straight, left of content */}
        <img
          src={hero9}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '360px',
            width: '250px',
            bottom: '120px',
            left: '180px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 10 - Laying on Hero 9, slanted to the left */}
        <img
          src={hero10}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '360px',
            width: '250px',
            bottom: '120px',
            left: '150px',
            zIndex: 3,
            objectFit: 'cover',
            borderRadius: '16px',
            transform: 'rotate(-12deg)'
          }}
        />
        {/* Hero Flower Left - At top left of Hero 10 */}
        <img
          src={heroFlowerLeft}
          alt=""
          className="hidden lg:block absolute"
          style={{
            top: '100px',
            left: '100px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        {/* Hero 11 - Standing straight, right of content */}
        <img
          src={hero11}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '360px',
            width: '250px',
            bottom: '120px',
            right: '180px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 12 - Laying on Hero 11, slanted to the right */}
        <img
          src={hero12}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '360px',
            width: '250px',
            bottom: '120px',
            right: '150px',
            zIndex: 3,
            objectFit: 'cover',
            borderRadius: '16px',
            transform: 'rotate(12deg)'
          }}
        />
        {/* Hero Flower Bottom Right - At bottom right of Hero 12 */}
        <img
          src={heroFlowerBottomRight}
          alt=""
          className="hidden lg:block absolute"
          style={{
            bottom: '80px',
            right: '130px',
            zIndex: 4,
            width: '33px',
            height: '27px'
          }}
        />
        {/* Mobile Hero Images - Before content, centered */}
        {/* Hero 9 - Mobile, standing straight */}
        <img
          src={hero9}
          alt=""
          className="block lg:hidden absolute"
          style={{
            height: '287px',
            width: '201px',
            top: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 10 - Mobile, laying on Hero 9, slanted to the left */}
        <img
          src={hero10}
          alt=""
          className="block lg:hidden absolute"
          style={{
            height: '287px',
            width: '201px',
            top: '40px',
            left: 'calc(50% - 10px)',
            zIndex: 3,
            objectFit: 'cover',
            borderRadius: '16px',
            transform: 'translateX(-50%) rotate(-12deg)'
          }}
        />
        {/* Hero Flower Left - Mobile, at top left of Hero 10 */}
        <img
          src={heroFlowerLeft}
          alt=""
          className="block lg:hidden absolute"
          style={{
            top: '20px',
            left: 'calc(50% - 150px)',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-[347px] lg:pt-0">
          <div className="flex flex-col items-center justify-center relative z-10" style={{ height: '100%' }}>
            {/* Content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* White Container with Text */}
              <div className="inline-block mb-4 lg:mb-6 px-4 py-2 bg-white shadow-md" style={{ borderRadius: '30px' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#30004B' }}>Not on the passenger side? Perfect.</p>
              </div>

              {/* Headline */}
              <h1 className="mb-4 lg:mb-6 leading-tight mx-auto text-[32px] lg:text-[55px] w-[390px] lg:w-[555px]" style={{ fontWeight: 500 }}>
                Earn More From the Trips You Already Take
              </h1>

              {/* Body Text */}
              <style>{`
                .driver-body-text {
                  font-weight: 400;
                }
                @media (min-width: 1024px) {
                  .driver-body-text {
                    font-weight: 300;
                  }
                }
              `}</style>
              <p className="text-gray-600 mb-6 lg:mb-8 mx-auto text-sm lg:text-base w-[334px] lg:w-[556px] driver-body-text">
                Turn your daily commute into a simple, steady source of income. With Ride2Five, you earn money every time you drive to work. Share empty seats, choose who rides with you, and stay in control on every trip.
              </p>

              {/* Download Button - Mobile only full width with padding */}
              <div className="block lg:hidden w-full" style={{ width: 'calc(100vw - 40px)', marginLeft: 'calc(-50vw + 50% + 10px)', paddingLeft: '20px', paddingRight: '20px' }}>
                <button className="bg-black text-white hover:bg-gray-800 rounded-lg py-3 px-6 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full">
                  <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" />
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>Download the app</span>
                </button>
              </div>
              {/* Download Button - Desktop */}
              <button className="hidden lg:flex bg-black text-white hover:bg-gray-800 rounded-lg px-6 py-3 transition-all duration-200 items-center justify-center gap-2 shadow-md hover:shadow-lg mx-auto">
                <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" />
                <span style={{ fontWeight: 600, fontSize: '14px' }}>Download the app</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-8 lg:h-12"></div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200"></div>

      {/* Why Drive With Us Section */}
      <section className="bg-gray-50 py-8 lg:py-20 lg:h-[750px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            {/* Left - Woman Image */}
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden">
                <img src={whyDriveWoman} alt="Woman" className="w-full object-cover lg:h-[530px]" style={{ height: '370px' }} />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1">
              <h2 className="text-gray-900 mb-6 lg:mb-12 text-2xl lg:text-[38px] lg:font-extrabold" style={{ fontWeight: 600 }}>Why Drive With Us?</h2>

              {/* Advantages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-12">
                {/* Advantage 1 */}
                <div className="lg:border-0 border-b border-gray-300 pb-4 lg:pb-0">
                  <div className="mb-3 lg:mb-4">
                    <img src={earnWithoutIcon} alt="Earn Without" className="w-12 h-12" />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>Earn Without Changing Your Routine</h3>
                  <p className="text-gray-600" style={{ fontSize: '14px', fontWeight: 400 }}>
                    You're already driving — so why not earn from it? Share your regular route with verified professionals and get paid for the seats you aren't using.
                  </p>
                </div>

                {/* Advantage 2 */}
                <div className="lg:border-0 border-b border-gray-300 pb-4 lg:pb-0">
                  <div className="mb-3 lg:mb-4">
                    <img src={chooseYourIcon} alt="Choose Your" className="w-12 h-12" />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>Choose Your Passengers</h3>
                  <p className="text-gray-600" style={{ fontSize: '14px', fontWeight: 400 }}>
                    Review rider profiles, ratings, and verification badges before accepting them. You stay in control of who gets into your car every time.
                  </p>
                </div>

                {/* Advantage 3 */}
                <div className="lg:border-0 border-b border-gray-300 pb-4 lg:pb-0">
                  <div className="mb-3 lg:mb-4">
                    <img src={safeVerifiedIcon} alt="Safe Verified" className="w-12 h-12" />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>Safe, Verified Community</h3>
                  <p className="text-gray-600" style={{ fontSize: '14px', fontWeight: 400 }}>
                    All riders go through identity checks using NIN and Work IDs. You only drive trusted, verified passengers with real workplace profiles.
                  </p>
                </div>

                {/* Advantage 4 */}
                <div className="lg:border-0 border-b border-gray-300 pb-4 lg:pb-0">
                  <div className="mb-3 lg:mb-4">
                    <img src={lowFeesIcon} alt="Low Fees" className="w-12 h-12" />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>Low Fees, More Earnings</h3>
                  <p className="text-gray-600" style={{ fontSize: '14px', fontWeight: 400 }}>
                    Keep a higher percentage of what you make on every trip. No hidden charges, no surprises, just transparent earnings.
                  </p>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="flex justify-center lg:justify-start">
                {/* Mobile Button - Full width with padding */}
                <div className="block lg:hidden w-full" style={{ width: 'calc(100vw - 40px)', marginLeft: 'calc(-50vw + 50% + 10px)', paddingLeft: '20px', paddingRight: '20px' }}>
                  <button className="bg-black text-white hover:bg-gray-800 rounded-lg py-3 px-6 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center w-full">
                    <span className="font-semibold">Get Started</span>
                  </button>
                </div>
                {/* Desktop Button */}
                <button className="hidden lg:flex bg-black text-white hover:bg-gray-800 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg items-center justify-center" style={{ width: '200px', height: '50px' }}>
                  <span className="font-semibold">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-8 lg:h-16"></div>

      {/* How It Works Section */}
      <section className="bg-white py-8 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-gray-900 mb-3 lg:mb-4 text-2xl lg:text-[38px] w-[390px] lg:w-auto mx-auto" style={{ fontWeight: 800 }}>How It Works for Drivers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base w-[390px] lg:max-w-2xl" style={{ fontWeight: 400 }}>
              Enjoy premium carpooling with trusted professionals. Save money, reduce stress, and get to your destination safely — every day.
            </p>
          </div>

          {/* Content - Mobile Image and Steps */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
            {/* Left - Mobile Image */}
            <div className="flex-1 flex justify-center lg:justify-start w-full lg:w-auto">
              <div className="bg-black rounded-2xl p-4 flex items-center justify-center w-full max-w-full lg:w-[600px]" style={{ height: '470px' }}>
                <img
                  src={howItWorksMobileImage}
                  alt="Mobile App"
                  className="rounded-2xl mx-auto"
                  style={{ width: '222px', height: '430px', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Right - Steps */}
            <div className="flex-1">
              <div className="space-y-3 lg:space-y-4">
                {/* Step 1 */}
                <div
                  onClick={() => setActiveStep(0)}
                  className={`rounded-2xl px-4 pt-4 pb-4 shadow-lg cursor-pointer transition-all duration-200 ${activeStep === 0 ? 'bg-black text-white' : 'bg-white border border-gray-200 text-black'}`}
                  style={{ height: '100px' }}
                >
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 500 }}>Sign Up & Verify</h3>
                  <p className={activeStep === 0 ? 'text-gray-300' : 'text-gray-600'} style={{ fontSize: '14px', fontWeight: 400 }}>
                    Create your account and complete your verification using your NIN, driver documents, and vehicle details.
                  </p>
                </div>

                {/* Step 2 */}
                <div
                  onClick={() => setActiveStep(1)}
                  className={`rounded-2xl px-4 pt-4 pb-4 shadow-lg cursor-pointer transition-all duration-200 ${activeStep === 1 ? 'bg-black text-white' : 'bg-white border border-gray-200 text-black'}`}
                  style={{ height: '100px' }}
                >
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 500 }}>Publish Your Route</h3>
                  <p className={activeStep === 1 ? 'text-gray-300' : 'text-gray-600'} style={{ fontSize: '14px', fontWeight: 400 }}>
                    List your daily commute — where you're going, your departure time, and how many seats are available.
                  </p>
                </div>

                {/* Step 3 */}
                <div
                  onClick={() => setActiveStep(2)}
                  className={`rounded-2xl px-4 pt-4 pb-4 shadow-lg cursor-pointer transition-all duration-200 ${activeStep === 2 ? 'bg-black text-white' : 'bg-white border border-gray-200 text-black'}`}
                  style={{ height: '100px' }}
                >
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 500 }}>Approve Bookings</h3>
                  <p className={activeStep === 2 ? 'text-gray-300' : 'text-gray-600'} style={{ fontSize: '14px', fontWeight: 400 }}>
                    Review rider profiles and accept only the passengers you feel comfortable driving with.
                  </p>
                </div>

                {/* Step 4 */}
                <div
                  onClick={() => setActiveStep(3)}
                  className={`rounded-2xl px-4 pt-4 pb-4 shadow-lg cursor-pointer transition-all duration-200 ${activeStep === 3 ? 'bg-black text-white' : 'bg-white border border-gray-200 text-black'}`}
                  style={{ height: '100px' }}
                >
                  <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: 500 }}>Earn on Every Trip</h3>
                  <p className={activeStep === 3 ? 'text-gray-300' : 'text-gray-600'} style={{ fontSize: '14px', fontWeight: 400 }}>
                    Start your ride, complete it, and receive payments directly into your Ride2Five wallet. Withdraw anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <div className="h-8 lg:h-16"></div>

      {/* Start Earning Section */}
      <section className="py-12 lg:py-20">
        <style>{`
          @media (min-width: 1024px) {
            .start-earning-outer-container {
              padding-left: 60px !important;
              padding-right: 60px !important;
            }
          }
        `}</style>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="lg:px-[60px] start-earning-outer-container">
          <div className="relative rounded-3xl overflow-hidden bg-white" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div className="bg-black rounded-3xl">
              {/* Background Image at Bottom */}
              <img
                src={riderHeroBackground}
                alt=""
                className="absolute opacity-20"
                style={{
                  bottom: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  maxWidth: '918px',
                  height: 'auto',
                  zIndex: 1
                }}
              />

              <div className="flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-12 relative z-10">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-white">
                  <h2 className="mb-4" style={{ fontSize: '26px', fontWeight: 800 }}>
                    Start Earning Today
                  </h2>
                  <p className="mb-6 text-gray-200" style={{ fontSize: '16px', fontWeight: 400 }}>
                    Already driving to work? Earn extra income monthly by monetizing your empty seats.
                  </p>
                  <button className="bg-white border-2 border-white text-black hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                    <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" style={{ filter: 'invert(1) brightness(0)' }} />
                    <span className="font-semibold">Download the app</span>
                  </button>
                </div>

                {/* Right Side - People Illustration */}
                <div className="flex-shrink-0">
                  <img src={peopleDriverIcon} alt="People" className="w-full h-auto max-w-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ForDrivers
