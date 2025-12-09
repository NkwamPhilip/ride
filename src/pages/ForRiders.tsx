import smartPhoneIcon from '../assets/smart-phone.svg'
import riderHeroBackground from '../assets/rider-hero-background 09.55.29.svg'
import bubbleGumCar from '../assets/bubble-gum-car.svg'
import mobileImage from '../assets/mobile-image.png'
import howItWorkVector from '../assets/how-it-work-vector-1.svg'
import createAccountIcon from '../assets/create-your-account.svg'
import findRideIcon from '../assets/find-ride.svg'
import payEasilyIcon from '../assets/pay-easily.svg'
import rideConfidenceIcon from '../assets/ride-with-confidence.svg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.png'
import hero6 from '../assets/hero6.jpg'
import hero7 from '../assets/hero7.jpg'
import hero8 from '../assets/hero8.jpg'
import peopleIcon from '../assets/people.svg'
import heroFlowerLeft from '../assets/hero-flower-left.svg'
import heroFlower from '../assets/hero-flower.svg'
import heroFlowerBottomRight from '../assets/hero-flower-bottom-right.svg'
import Footer from '../components/Footer'

function ForRiders() {
  return (
    <div className="w-full" style={{ marginBottom: 0, paddingBottom: 0 }}>
      {/* Hero Section */}
      <section className="bg-white relative pt-5 pb-10 lg:pt-0 lg:pb-0 lg:h-[800px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Mobile Hero Images - Before content, horizontally arranged */}
        {/* Hero Flower Left - At top left of Hero 4 (Mobile) */}
        <img
          src={heroFlowerLeft}
          alt=""
          className="block lg:hidden absolute"
          style={{
            top: '5px',
            left: '5px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        {/* Hero 4 Image - Mobile, Left, overlapping Hero 6 by 40% */}
        <img
          src={hero4}
          alt=""
          className="block lg:hidden absolute"
          style={{
            height: '144px',
            width: '100px',
            top: '40px',
            left: '40px',
            zIndex: 3,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 1 Image - Mobile, Right, moved up */}
        <img
          src={hero1}
          alt=""
          className="block lg:hidden absolute"
          style={{
            height: '194px',
            width: '144px',
            top: '40px',
            left: '232px',
            zIndex: 1,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero Flower Bottom Right - At bottom right of Hero 1 (Mobile) */}
        <img
          src={heroFlowerBottomRight}
          alt=""
          className="block lg:hidden absolute"
          style={{
            top: '234px',
            left: '376px',
            zIndex: 4,
            width: '33px',
            height: '27px'
          }}
        />
        {/* Hero 6 Image - Mobile, Center, overlapping Hero 1 by 10% */}
        <img
          src={hero6}
          alt=""
          className="block lg:hidden absolute"
          style={{
            height: '252px',
            width: '158px',
            top: '88px',
            left: '88px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 5 Image - Overlapping Hero 7 from the left */}
        <img
          src={hero5}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '170px',
            width: '128px',
            top: '88px',
            left: '117px',
            zIndex: 3,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero Flower - At the edge of Hero 5 */}
        <img
          src={heroFlowerLeft}
          alt=""
          className="hidden lg:block absolute"
          style={{
            top: '55px',
            left: '70px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        {/* Hero 7 Image - Top Left */}
        <img
          src={hero7}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '208px',
            width: '144px',
            top: '50px',
            left: '160px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 4 Image - Top Right */}
        <img
          src={hero4}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '160px',
            width: '112px',
            top: '50px',
            right: '160px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 6 Image - Top Right, starting from 70% of Hero 4 height */}
        <img
          src={hero6}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '208px',
            width: '160px',
            top: '162px',
            right: '180px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 8 Image - Top Right, more aligned to the right */}
        <img
          src={hero8}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '208px',
            width: '144px',
            top: '130px',
            right: '80px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Background Image - Hidden on mobile */}
        <div className="hidden lg:block absolute inset-0" style={{ backgroundImage: `url(${riderHeroBackground})`, backgroundSize: '100% auto', backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full pt-[408px] lg:pt-0">
          {/* Center - Content */}
          <div className="text-center max-w-[700px] mx-auto relative z-10 lg:-translate-y-20">
            <h1 className="text-2xl sm:text-3xl lg:text-[55px] font-medium text-gray-900 mb-4 lg:mb-6 lg:leading-normal max-w-[700px] mx-auto px-4 lg:px-0" style={{ lineHeight: '1.2' }}>
              Smarter.{' '}Safer.{' '}Cheaper.{' '}Your{' '}
              <span className="text-red-500">Daily Commute Reimagined</span>.
            </h1>
            <p className="text-sm sm:text-base font-light text-gray-600 mb-6 lg:mb-8 max-w-[700px] mx-auto px-4 lg:px-0">
              Ride2Five helps working professionals share rides with verified
              drivers and riders going in the same direction – making everyday
              commuting affordable, comfortable, and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 lg:px-0">
              <button className="h-[50px] w-full sm:w-[200px] bg-red-500 text-white hover:bg-red-600 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" />
                <span className="text-sm font-semibold">Download the app</span>
              </button>
              <button className="h-[50px] w-full sm:w-[200px] border-2 border-black text-black bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center justify-center shadow-md hover:shadow-lg">
                <span className="text-sm font-semibold">Become a Driver</span>
              </button>
            </div>
          </div>
        </div>
        {/* Hero 3 Image - Bottom Left, Overlapping Hero 2 from the left */}
        <img
          src={hero3}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '170px',
            width: '128px',
            bottom: '100px',
            left: '117px',
            zIndex: 3,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 2 Image - Bottom Left */}
        <img
          src={hero2}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '208px',
            width: '144px',
            bottom: '100px',
            left: '160px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero 1 Image - Bottom Right */}
        <img
          src={hero1}
          alt=""
          className="hidden lg:block absolute"
          style={{
            height: '216px',
            width: '160px',
            bottom: '100px',
            right: '160px',
            zIndex: 2,
            objectFit: 'cover',
            borderRadius: '16px'
          }}
        />
        {/* Hero Flower - At the top right of Hero 1 */}
        <img
          src={heroFlower}
          alt=""
          className="hidden lg:block absolute"
          style={{
            top: '450px',
            right: '110px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        {/* Animated Cars - Hidden on mobile */}
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-20 overflow-hidden">
          {/* First Car - Red */}
          <img
            src={bubbleGumCar}
            alt="Car"
            className="absolute bottom-0 h-16"
            style={{
              animation: 'slide 10s linear infinite',
              left: '-117px',
              filter: 'hue-rotate(0deg) saturate(2) brightness(1.1)'
            }}
          />
          {/* Second Car - Green */}
          <img
            src={bubbleGumCar}
            alt="Car"
            className="absolute bottom-0 h-16"
            style={{
              animation: 'slide 10s linear infinite',
              animationDelay: '3.33s',
              left: '-117px',
              filter: 'hue-rotate(120deg) saturate(1.5) brightness(1.1)'
            }}
          />
          {/* Third Car - Blue */}
          <img
            src={bubbleGumCar}
            alt="Car"
            className="absolute bottom-0 h-16"
            style={{
              animation: 'slide 10s linear infinite',
              animationDelay: '6.66s',
              left: '-117px',
              filter: 'hue-rotate(240deg) saturate(1.5) brightness(1.1)'
            }}
          />
        </div>
        <style>{`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(100vw + 117px));
            }
          }
        `}</style>
      </section>
      {/* Divider */}
      <div className="w-full border-t border-gray-200 mt-8"></div>

      {/* How It Works Section */}
      <section className="bg-black relative py-12 lg:py-20 overflow-hidden mx-4 sm:mx-8 lg:mx-16 mt-8 lg:mt-12" style={{ borderRadius: '30px', padding: '40px 20px lg:100px lg:40px' }}>
        {/* Background Vector Overlay - Hidden on mobile */}
        <img
          src={howItWorkVector}
          alt=""
          className="hidden lg:block absolute opacity-20"
          style={{
            borderRadius: '30px',
            zIndex: 1,
            left: '-80px',
            top: '20%',
            transform: 'translateY(-50%) scale(0.9)',
            width: '900px',
            height: 'auto'
          }}
        />
        <img
          src={howItWorkVector}
          alt=""
          className="hidden lg:block absolute opacity-20"
          style={{
            borderRadius: '30px',
            zIndex: 1,
            right: '-80px',
            top: '80%',
            transform: 'translateY(-50%) scale(0.9)',
            width: '800px',
            height: 'auto'
          }}
        />
        <img
          src={howItWorkVector}
          alt=""
          className="hidden lg:block absolute opacity-20"
          style={{
            borderRadius: '30px',
            zIndex: 1,
            right: '-80px',
            top: '40%',
            transform: 'translateY(-50%) scale(0.9)',
            width: '800px',
            height: 'auto'
          }}
        />
        <img
          src={howItWorkVector}
          alt=""
          className="hidden lg:block absolute opacity-20"
          style={{
            borderRadius: '30px',
            zIndex: 1,
            top: '80%',
            transform: 'translateY(-50%) scale(0.9)',
            width: '800px',
            height: 'auto'
          }}
        />

        <div className="w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:h-[800px]">
          {/* Top Header - Centered */}
          <div className="text-center text-white mb-8 lg:mb-8" style={{ zIndex: 3 }}>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold mb-4" style={{ fontWeight: 800 }}>HOW IT WORKS</h2>
            <p className="text-sm mx-auto px-4" style={{ fontSize: '14px', fontWeight: 400, maxWidth: '350px' }}>
              Begin your journey in just four quick steps, designed to make your commute smooth, safe, and stress-free.
            </p>
          </div>

          {/* Bottom Section - Mobile: Stacked, Desktop: Side by side */}
          <div className="relative" style={{ zIndex: 3 }}>
            {/* Mobile Image - Centered on mobile, positioned on desktop */}
            <div className="flex justify-center mb-8 lg:hidden">
              <img
                src={mobileImage}
                alt="Mobile App"
                className="max-h-[400px] w-auto"
                style={{
                  transform: 'rotate(-8deg)',
                  objectFit: 'contain'
                }}
              />
            </div>
            <img
              src={mobileImage}
              alt="Mobile App"
              className="hidden lg:block absolute"
              style={{
                height: '750px',
                width: 'auto',
                objectFit: 'contain',
                transform: 'rotate(-8deg)',
                left: '-400px',
                top: '-120px'
              }}
            />

            {/* Steps - Stacked on mobile, positioned on desktop */}
            <div className="relative lg:absolute text-white lg:right-[-200px] lg:top-[70px]">
              <div className="space-y-3 lg:space-y-4">
                {/* Step 1 */}
                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={createAccountIcon} alt="Create Account" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Create Your Account</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Sign up in minutes using your phone number. Verify your Identity keep the community secure.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={findRideIcon} alt="Find Ride" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Find or Publish a Ride</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Enter your destination to see nearby rides heading your way.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={payEasilyIcon} alt="Pay Easily" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Pay Easily & Securely</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Top up your wallet, view trip costs upfront, and enjoy seamless Paystack-powered payments.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={rideConfidenceIcon} alt="Ride Confidence" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Ride With Confidence</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Meet your verified driver or passenger, start your trip, track your route, and arrive safely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 mt-12"></div>

      {/* Advantages Section */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: '#F8F8F8' }}>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="lg:px-16">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="mb-4 mx-auto text-2xl sm:text-3xl lg:text-[38px]" style={{ fontWeight: 800, maxWidth: '500px' }}>
              The advantages of{' '}
              <span className="text-red-500">Ride2Five</span>
            </h2>
            <p className="text-gray-600 mx-auto mb-6 lg:mb-8 text-sm lg:text-base px-4" style={{ fontWeight: 400, maxWidth: '650px' }}>
              Enjoy premium carpooling with trusted professionals. Save money, reduce stress, and get to your destination safely — every day.
            </p>
            <button className="h-[50px] w-full sm:w-[200px] bg-red-500 text-white hover:bg-red-600 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mx-auto">
              <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" />
              <span className="text-sm font-semibold">Download the app</span>
            </button>
          </div>

          {/* Image Cards Grid */}
          <style>{`
            @media (min-width: 1024px) {
              .advantages-cards-container {
                padding-left: 60px !important;
                padding-right: 60px !important;
              }
            }
          `}</style>
          <div className="space-y-6 advantages-cards-container">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Card 1 */}
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden" style={{ height: '236px' }}>
                <img src={hero1} alt="Professional & Verified Community" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Professional & Verified Community</p>
                  <p className="text-white mt-2 lg:hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Every rider and driver goes through identity checks — Work ID, NIN, and document verification — ensuring you ride with trusted professionals.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden" style={{ height: '236px' }}>
                <img src={hero2} alt="Affordable Daily Transportation" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Affordable Daily Transportation</p>
                  <p className="text-white mt-2 lg:hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Spend less on commuting while enjoying more comfort than public transport.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden" style={{ height: '236px' }}>
                <img src={hero3} alt="Comfort Meets Convenience" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Comfort Meets Convenience</p>
                  <p className="text-white mt-2 lg:hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Air-conditioned rides, predictable routes, flexible pickup points, and professional drivers.</p>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 Wider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Card 4 */}
              <div className="md:col-span-3 relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
                <img src={hero4} alt="Eco Friendly" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Eco Friendly</p>
                  <p className="text-white mt-2 lg:hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Every shared ride means one less car on the road, contributing to cleaner air, reduced traffic, and a more sustainable environment.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="md:col-span-3 relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
                <img src={hero5} alt="Designed for Nigeria" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Designed for Nigeria</p>
                  <p className="text-white mt-2 lg:hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Spend less on commuting while enjoying more comfort than public transport.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 mt-12"></div>

      {/* Earn More Section */}
      <section className="py-12 lg:py-20">
        <style>{`
          @media (min-width: 1024px) {
            .earn-more-outer-container {
              padding-left: 60px !important;
              padding-right: 60px !important;
            }
          }
        `}</style>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="lg:px-16 earn-more-outer-container">
          <div className="relative rounded-3xl overflow-hidden" style={{ backgroundColor: '#2F0F5F' }}>
            {/* SVG for clip-path mask */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <clipPath id="earnMoreDecorative" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 L0.88,0 L0.92,0.04 L0.96,0.07 L1,0.1 L1,1 L0,1 L0,0.9 L0.04,0.93 L0.08,0.96 L0,0.9 Z" />
                </clipPath>
              </defs>
            </svg>
            
            <div style={{ clipPath: 'url(#earnMoreDecorative)' }}>
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
                <div className="flex-1 text-white text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    Earn More From Your Daily Commute
                  </h2>
                  <p className="text-base lg:text-lg mb-6 text-gray-200">
                    Already driving to work? Earn extra income monthly by monetizing your empty seats.
                  </p>
                  <button className="bg-white text-black hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full sm:w-auto mx-auto lg:mx-0">
                    <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" style={{ filter: 'invert(1) brightness(0)' }} />
                    <span className="font-semibold">Download the app</span>
                  </button>
                </div>

                {/* Right Side - People Illustration */}
                <div className="flex-shrink-0">
                  <img src={peopleIcon} alt="People" className="w-full h-auto max-w-md" />
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

export default ForRiders

