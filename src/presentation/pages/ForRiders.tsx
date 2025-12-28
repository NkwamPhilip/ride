import { useNavigate } from 'react-router-dom'
import smartPhoneIcon from '../../assets/icons/smart-phone.svg'
import riderHeroBackground from '../../assets/icons/rider-hero-background.svg'
import earnMoreBackground from '../../assets/icons/earn-more-background.svg'
import mobileEarnBg from '../../assets/icons/mobile-earn-bg.svg'
import bubbleGumCar from '../../assets/icons/bubble-gum-car.svg'
import bubbleGumCarBlack from '../../assets/icons/bubble-gum-car-black.svg'
import mobileImage from '../../assets/images/mobile-image.png'
import howItWorkVector from '../../assets/icons/how-it-work-vector-1.svg'
import createAccountIcon from '../../assets/icons/create-your-account.svg'
import findRideIcon from '../../assets/icons/find-ride.svg'
import payEasilyIcon from '../../assets/icons/pay-easily.svg'
import rideConfidenceIcon from '../../assets/icons/ride-with-confidence.svg'
import hero1 from '../../assets/images/hero1.jpg'
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/hero3.jpg'
import hero4 from '../../assets/images/hero4.jpg'
import hero5 from '../../assets/images/hero5.png'
import hero6 from '../../assets/images/hero6.jpg'
import hero7 from '../../assets/images/hero7.jpg'
import hero8 from '../../assets/images/hero8.jpg'
import peopleIcon from '../../assets/icons/people.svg'
import heroFlowerLeft from '../../assets/icons/hero-flower-left.svg'
import heroFlower from '../../assets/icons/hero-flower.svg'
import heroFlowerBottomRight from '../../assets/icons/hero-flower-bottom-right.svg'
import Footer from '../components/Footer'
import OptimizedImage from '../components/OptimizedImage'

function ForRiders() {
  const navigate = useNavigate()
  return (
    <div className="w-full" style={{ marginBottom: 0, paddingBottom: 0 }}>
      <section className="bg-white relative pt-5 pb-10 h-[750px] lg:pt-0 lg:pb-0 lg:h-[800px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={heroFlowerLeft}
          alt=""
          className="block lg:hidden absolute"
          decoding="async"
          loading="eager"
          style={{
            top: '5px',
            left: '5px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        <img
          src={hero4}
          alt=""
          className="block lg:hidden absolute"
          decoding="async"
          loading="eager"
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
        <img
          src={hero1}
          alt=""
          className="block lg:hidden absolute"
          decoding="async"
          loading="eager"
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
        <img
          src={heroFlowerBottomRight}
          alt=""
          className="block lg:hidden absolute"
          decoding="async"
          loading="eager"
          style={{
            top: '234px',
            left: '376px',
            zIndex: 4,
            width: '33px',
            height: '27px'
          }}
        />
        <img
          src={hero6}
          alt=""
          className="block lg:hidden absolute"
          decoding="async"
          loading="eager"
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
        <img
          src={hero5}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="eager"
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
        <img
          src={heroFlowerLeft}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="eager"
          style={{
            top: '55px',
            left: '70px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        <img
          src={hero7}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="eager"
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
        <img
          src={hero4}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="eager"
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
        <img
          src={hero6}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="lazy"
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
        <img
          src={hero8}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="lazy"
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
        <div className="block lg:hidden absolute inset-0" style={{ backgroundImage: `url(${riderHeroBackground})`, backgroundSize: '100% auto', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}></div>
        <div className="hidden lg:block absolute inset-0" style={{ backgroundImage: `url(${riderHeroBackground})`, backgroundSize: '100% auto', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full pt-[280px] lg:pt-0">
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
              <button
                onClick={() => navigate('/coming-soon')}
                className="h-[50px] w-full sm:w-[200px] bg-red-500 text-white hover:bg-red-600 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" />
                <span className="text-sm font-semibold">Download the app</span>
              </button>
              <button className="h-[50px] w-full sm:w-[200px] border-2 border-black text-black bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center justify-center shadow-md hover:shadow-lg">
                <span className="text-sm font-semibold">Become a Driver</span>
              </button>
            </div>
          </div>
        </div>
        <img
          src={hero3}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="lazy"
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
        <img
          src={hero2}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="lazy"
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
        <img
          src={hero1}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="lazy"
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
        <img
          src={heroFlower}
          alt=""
          className="hidden lg:block absolute"
          decoding="async"
          loading="lazy"
          style={{
            top: '450px',
            right: '110px',
            zIndex: 4,
            width: '50px',
            height: '40px'
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-10 lg:h-20 overflow-hidden">
          <img
            src={bubbleGumCar}
            alt="Red Car"
            className="absolute bottom-0 h-8 lg:h-16"
            style={{
              animation: 'redCarSequence 48s linear infinite',
              left: '-117px'
            }}
          />
          <img
            src={bubbleGumCarBlack}
            alt="Black Car"
            className="absolute bottom-0 h-8 lg:h-16"
            style={{
              animation: 'blackCarSequence 48s linear infinite',
              right: '-117px'
            }}
          />
          <img
            src={bubbleGumCar}
            alt="Green Car"
            className="absolute bottom-0 h-8 lg:h-16"
            style={{
              animation: 'greenCarSequence 48s linear infinite',
              left: '-117px',
              filter: 'hue-rotate(120deg) saturate(1.5) brightness(1.1)'
            }}
          />
          <img
            src={bubbleGumCar}
            alt="Blue Car"
            className="absolute bottom-0 h-8 lg:h-16"
            style={{
              animation: 'blueCarSequence 48s linear infinite',
              right: '-117px',
              filter: 'hue-rotate(240deg) saturate(1.8) brightness(1.2)'
            }}
          />
        </div>
        <style>{`
          @keyframes redCarSequence {
            0% {
              transform: translateX(0);
              opacity: 1;
              visibility: visible;
            }
            20.83% {
              transform: translateX(calc(100vw + 117px));
              opacity: 1;
              visibility: visible;
            }
            20.84% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(100vw + 117px));
            }
            100% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(100vw + 117px));
            }
          }
          @keyframes blackCarSequence {
            0% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(0) scaleX(-1);
            }
            24.99% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(0) scaleX(-1);
            }
            25% {
              opacity: 1;
              visibility: visible;
              transform: translateX(0) scaleX(-1);
            }
            45.83% {
              opacity: 1;
              visibility: visible;
              transform: translateX(calc(-100vw - 234px)) scaleX(-1);
            }
            45.84% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(-100vw - 234px)) scaleX(-1);
            }
            100% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(-100vw - 234px)) scaleX(-1);
            }
          }
          @keyframes greenCarSequence {
            0% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(0);
            }
            49.99% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(0);
            }
            50% {
              opacity: 1;
              visibility: visible;
              transform: translateX(0);
            }
            70.83% {
              opacity: 1;
              visibility: visible;
              transform: translateX(calc(100vw + 117px));
            }
            70.84% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(100vw + 117px));
            }
            100% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(100vw + 117px));
            }
          }
          @keyframes blueCarSequence {
            0% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(0) scaleX(-1);
            }
            74.99% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(0) scaleX(-1);
            }
            75% {
              opacity: 1;
              visibility: visible;
              transform: translateX(0) scaleX(-1);
            }
            95.83% {
              opacity: 1;
              visibility: visible;
              transform: translateX(calc(-100vw - 234px)) scaleX(-1);
            }
            95.84% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(-100vw - 234px)) scaleX(-1);
            }
            100% {
              opacity: 0;
              visibility: hidden;
              transform: translateX(calc(-100vw - 234px)) scaleX(-1);
            }
          }
        `}</style>
      </section>
      <div className="w-full border-t border-gray-200 mt-8"></div>

      <section className="bg-black relative py-12 lg:py-20 overflow-hidden mx-4 sm:mx-8 lg:mx-16" style={{ borderRadius: '30px', padding: '40px 20px lg:100px lg:40px', marginTop: '60px' }}>
        <img
          src={howItWorkVector}
          alt=""
          className="hidden lg:block absolute opacity-40"
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
          className="hidden lg:block absolute opacity-40"
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
          className="hidden lg:block absolute opacity-40"
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
          className="hidden lg:block absolute opacity-40"
          style={{
            borderRadius: '30px',
            zIndex: 1,
            top: '80%',
            transform: 'translateY(-50%) scale(0.9)',
            width: '800px',
            height: 'auto'
          }}
        />

        <div className="w-full lg:max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:h-[650px]">
          <div className="text-center text-white mb-8 lg:mb-8" style={{ zIndex: 3 }}>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold mb-4" style={{ fontWeight: 800 }}>How It Works</h2>
            <p className="text-sm mx-auto px-4" style={{ fontSize: '14px', fontWeight: 400, width: '400px' }}>
              Begin your journey in just four quick steps, designed to make your commute smooth, safe, and stress-free.
            </p>
          </div>

          <div className="relative" style={{ zIndex: 3 }}>
            <div className="flex justify-center mb-8 lg:hidden">
              <OptimizedImage
                src={mobileImage}
                alt="Mobile App"
                className="max-h-[400px] w-auto"
                lazy={true}
                style={{
                  transform: 'rotate(-8deg)',
                  objectFit: 'contain'
                }}
              />
            </div>
            <OptimizedImage
              src={mobileImage}
              alt="Mobile App"
              className="hidden lg:block absolute"
              lazy={true}
              style={{
                height: '750px',
                width: 'auto',
                objectFit: 'contain',
                transform: 'rotate(-8deg)',
                left: '-400px',
                top: '-80px'
              }}
            />

            <div className="relative lg:absolute text-white lg:right-[-200px] lg:top-[40px]">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={createAccountIcon} alt="Create Account" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Create Your Account</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Sign up in minutes using your phone number. Verify your Identity keep the community secure.</p>
                  </div>
                </div>

                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={findRideIcon} alt="Find Ride" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Find or Publish a Ride</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Enter your destination to see nearby rides heading your way.</p>
                  </div>
                </div>

                <div className="bg-white text-black h-auto lg:h-[85px] py-3 px-4 lg:p-5 flex flex-row items-center justify-center gap-3 lg:justify-start lg:gap-4" style={{ borderRadius: '20px' }}>
                  <div className="flex items-center justify-center flex-shrink-0">
                    <img src={payEasilyIcon} alt="Pay Easily" className="w-10 h-10 lg:w-[45px] lg:h-[45px]" />
                  </div>
                  <div className="text-center lg:text-left lg:flex-1">
                    <h3 className="text-base lg:text-xl" style={{ fontWeight: 500 }}>Pay Easily & Securely</h3>
                    <p className="hidden lg:block text-xs lg:text-sm" style={{ fontWeight: 400, color: '#4B5563' }}>Top up your wallet, view trip costs upfront, and enjoy seamless Paystack-powered payments.</p>
                  </div>
                </div>

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

      <div className="w-full border-t border-gray-200 mt-12"></div>

      <div className="w-full" style={{ backgroundColor: '#F8F8F8', paddingTop: '60px', paddingBottom: '60px' }}>
        <section className="w-full">
          <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="lg:px-16 max-w-full">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="mb-4 mx-auto text-2xl sm:text-3xl lg:text-[38px]" style={{ fontWeight: 800, maxWidth: '500px' }}>
                The advantages of{' '}
                <span className="text-red-500">Ride2Five</span>
              </h2>
              <p className="text-gray-600 mx-auto mb-6 lg:mb-8 text-sm lg:text-base px-4" style={{ fontWeight: 400, maxWidth: '650px' }}>
                Enjoy premium carpooling with trusted professionals. Save money, reduce stress, and get to your destination safely — every day.
              </p>
              <button
                onClick={() => navigate('/coming-soon')}
                className="h-[50px] w-full sm:w-[200px] bg-red-500 text-white hover:bg-red-600 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mx-auto"
              >
                <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" />
                <span className="text-sm font-semibold">Download the app</span>
              </button>
            </div>

            <style>{`
            @media (min-width: 1024px) {
              .advantages-cards-container {
                padding-left: 60px !important;
                padding-right: 60px !important;
              }
            }
          `}</style>
            <div className="space-y-6 advantages-cards-container">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <div className="md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:-translate-y-2" style={{ height: '236px' }}>
                  <OptimizedImage src={hero1} alt="Professional & Verified Community" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" lazy={true} />
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}>
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(1, 1, 1, 0.85) 100%)' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg transition-all duration-300 lg:group-hover:-translate-y-2">Professional & Verified Community</p>
                    <p className="text-white mt-2 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-96 lg:transition-all lg:duration-300 lg:overflow-hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Every rider and driver goes through identity checks — Work ID, NIN, and document verification — ensuring you ride with trusted professionals.</p>
                  </div>
                </div>

                <div className="md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:-translate-y-2" style={{ height: '236px' }}>
                  <OptimizedImage src={hero2} alt="Affordable Daily Transportation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" lazy={true} />
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}>
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(1, 1, 1, 0.85) 100%)' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg transition-all duration-300 lg:group-hover:-translate-y-2">Affordable Daily Transportation</p>
                    <p className="text-white mt-2 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-96 lg:transition-all lg:duration-300 lg:overflow-hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Spend less on commuting while enjoying more comfort than public transport.</p>
                  </div>
                </div>

                <div className="md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:-translate-y-2" style={{ height: '236px' }}>
                  <OptimizedImage src={hero3} alt="Comfort Meets Convenience" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" lazy={true} />
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}>
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(1, 1, 1, 0.85) 100%)' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg transition-all duration-300 lg:group-hover:-translate-y-2">Comfort Meets Convenience</p>
                    <p className="text-white mt-2 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-96 lg:transition-all lg:duration-300 lg:overflow-hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Air-conditioned rides, predictable routes, flexible pickup points, and professional drivers.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                <div className="md:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:-translate-y-2" style={{ height: '360px' }}>
                  <OptimizedImage src={hero4} alt="Eco Friendly" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" lazy={true} />
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}>
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(1, 1, 1, 0.85) 100%)' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg transition-all duration-300 lg:group-hover:-translate-y-2">Eco Friendly</p>
                    <p className="text-white mt-2 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-96 lg:transition-all lg:duration-300 lg:overflow-hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Every shared ride means one less car on the road, contributing to cleaner air, reduced traffic, and a more sustainable environment.</p>
                  </div>
                </div>

                <div className="md:col-span-3 group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 lg:hover:scale-105 lg:hover:-translate-y-2" style={{ height: '360px' }}>
                  <OptimizedImage src={hero5} alt="Designed for Nigeria" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" lazy={true} />
                  <div className="absolute inset-0 transition-all duration-300" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.32) 0%, rgba(1, 1, 1, 0.73) 100%)' }}>
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(1, 1, 1, 0.5) 0%, rgba(1, 1, 1, 0.85) 100%)' }}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg transition-all duration-300 lg:group-hover:-translate-y-2">Designed for Nigeria</p>
                    <p className="text-white mt-2 lg:opacity-0 lg:max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-96 lg:transition-all lg:duration-300 lg:overflow-hidden" style={{ fontWeight: 400, fontSize: '14px' }}>Spend less on commuting while enjoying more comfort than public transport.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full border-t border-gray-200"></div>

      <div className="w-full" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <section className="w-full">
          <style>{`
            @media (max-width: 1023px) {
              .download-btn-text {
                font-size: 14px !important;
                font-weight: 600 !important;
              }
            }
            @media (min-width: 1024px) {
              .earn-more-outer-container {
                padding-left: 60px !important;
                padding-right: 60px !important;
              }
            }
          `}</style>
          <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="lg:px-16 earn-more-outer-container">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={mobileEarnBg}
                alt=""
                className="w-full h-auto lg:hidden"
              />
              <img
                src={earnMoreBackground}
                alt=""
                className="hidden lg:block w-full h-auto"
              />

              <div className="absolute inset-0 flex flex-col lg:flex-row items-center gap-8 p-6 lg:p-12 pt-[60px] lg:pt-12">
                <div className="flex-1 text-white text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    Earn More From Your Daily Commute
                  </h2>
                  <p className="text-base lg:text-lg mb-6 text-gray-200">
                    Already driving to work? Earn extra income monthly by monetizing your empty seats.
                  </p>
                  <button
                    onClick={() => navigate('/coming-soon')}
                    className="bg-white text-black hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mx-auto lg:mx-0 w-[200px] lg:w-auto"
                  >
                    <img src={smartPhoneIcon} alt="Phone" className="w-5 h-5" style={{ filter: 'invert(1) brightness(0)' }} />
                    <span className="font-semibold text-sm lg:text-base download-btn-text">Download the app</span>
                  </button>
                </div>

                <div className="flex-shrink-0 hidden lg:block">
                  <OptimizedImage src={peopleIcon} alt="People" className="w-full h-auto max-w-md" lazy={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default ForRiders

