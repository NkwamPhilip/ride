import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import aboutUsMainImage from '../../assets/images/about-us-main-image.jpg'
import OptimizedImage from '../components/OptimizedImage'
import heroFlower from '../../assets/icons/hero-flower.svg'
import abFlowerLeft from '../../assets/icons/ab-flower-left.svg'
import abFlowerRight from '../../assets/icons/ab-flower-right.svg'
import hero1 from '../../assets/images/hero1.jpg'
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/hero3.jpg'
import smartMobility from '../../assets/images/smart-mobility.png'
import communityConnection from '../../assets/images/community-connection.png'
import peopleIcon from '../../assets/icons/people.svg'
import smartPhoneIcon from '../../assets/icons/smart-phone.svg'
import riderHeroBackground from '../../assets/icons/rider-hero-background.svg'
import earnMoreBackground from '../../assets/icons/earn-more-background.svg'
import mobileEarnBg from '../../assets/icons/mobile-earn-bg.svg'

function AboutUs() {
  const navigate = useNavigate()
  return (
    <div className="w-full" style={{ marginBottom: 0, paddingBottom: 0 }}>
      <section className="bg-white relative py-20 px-5 lg:px-[60px] about-us-hero-section" style={{ minHeight: '1100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="w-full flex items-center justify-center">
          <div className="bg-black rounded-3xl w-full relative overflow-hidden about-us-black-container" style={{ borderRadius: '30px' }}>
            <style>{`
              @media (max-width: 1023px) {
                .about-us-hero-section {
                  padding-top: 40px !important;
                  padding-bottom: 40px !important;
                  min-height: auto !important;
                }
                .about-us-black-container {
                  height: 675px !important;
                }
                .about-us-content-container {
                  height: 100% !important;
                }
                .about-us-text-container {
                  flex: 1 !important;
                  justify-content: center !important;
                  align-items: center !important;
                  min-height: auto !important;
                  padding-top: 20px !important;
                  padding-bottom: 20px !important;
                  padding-left: 20px !important;
                  padding-right: 20px !important;
                }
                .about-us-text-container h1 {
                  text-align: center !important;
                  margin-left: auto !important;
                  margin-right: auto !important;
                  margin-bottom: 12px !important;
                  font-size: 28px !important;
                }
                .about-us-text-container p {
                  text-align: center !important;
                  margin-left: auto !important;
                  margin-right: auto !important;
                  font-size: 12px !important;
                }
              }
            `}</style>
            <div className="absolute top-0 left-0" style={{ zIndex: 2 }}>
              <img src={heroFlower} alt="" className="w-16 h-16" style={{ filter: 'invert(1) brightness(0) saturate(100%) hue-rotate(0deg)' }} />
            </div>

            <div className="absolute top-0 right-0" style={{ zIndex: 2 }}>
              <img src={heroFlower} alt="" className="w-16 h-16" style={{ filter: 'invert(1) brightness(0) saturate(100%) hue-rotate(0deg)' }} />
            </div>

            <div className="flex flex-col about-us-content-container">
              <div className="flex flex-col justify-center items-center px-8 lg:px-16 py-12 relative z-10 text-center about-us-text-container" style={{ minHeight: '500px', marginBottom: '57px' }}>
                <h1 className="text-white mb-6 w-[350px] lg:w-auto mx-auto" style={{ fontWeight: 500, fontSize: '55px', lineHeight: '56px' }}>
                  We believe commuting<br />
                  shouldn't be stressful<br />
                  or expensive
                </h1>
                <p className="text-white w-[350px] lg:w-[556px] mx-auto" style={{ fontWeight: 400, fontSize: '16px', lineHeight: '1.6' }}>
                  At Ride2Five, we're redefining the way professionals commute. Built for the
                  modern Nigerian workforce, our platform makes everyday travel safer, more
                  affordable, and more efficient by connecting verified riders with trusted drivers
                  heading in the same direction.
                </p>
              </div>

              <div className="relative" style={{ position: 'relative' }}>
                <img
                  src={abFlowerLeft}
                  alt=""
                  className="absolute"
                  style={{ top: '-60px', left: '20px', zIndex: 10, width: '48px', height: '38px' }}
                />
                <img
                  src={abFlowerRight}
                  alt=""
                  className="absolute"
                  style={{ top: '-60px', right: '20px', zIndex: 10, width: '48px', height: '38px' }}
                />
                <div className="overflow-hidden about-us-image-container" style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', paddingLeft: '50px', paddingRight: '50px', paddingTop: '0', height: '650px' }}>
                  <OptimizedImage
                    src={aboutUsMainImage}
                    alt="Ride2Five"
                    className="w-full h-full object-cover about-us-image"
                    style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px', height: '650px' }}
                    priority={true}
                  />
                  <style>{`
                  @media (max-width: 1023px) {
                    .about-us-image-container {
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      padding-top: 10px !important;
                      padding-bottom: 10px !important;
                      padding-left: 20px !important;
                      padding-right: 20px !important;
                      height: auto !important;
                      min-height: 380px !important;
                    }
                    .about-us-image {
                      height: 380px !important;
                      width: 350px !important;
                      object-fit: cover !important;
                    }
                  }
                `}</style>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-4 about-us-stand-for-section" style={{ backgroundColor: '#FBFBFB', height: '386px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '60px', paddingRight: '60px' }}>
        <style>{`
          @media (max-width: 1023px) {
            .about-us-stand-for-section {
              height: auto !important;
              padding-top: 20px !important;
              padding-bottom: 40px !important;
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            .about-us-stand-for-heading {
              font-size: 24px !important;
              font-weight: 600 !important;
              margin-bottom: 20px !important;
            }
            .about-us-stand-for-card {
              width: 390px !important;
              height: 178px !important;
              margin: 0 auto 16px auto !important;
            }
          }
        `}</style>
        <div className="w-full">
          <h2 className="about-us-stand-for-heading" style={{ fontSize: '38px', fontWeight: 800, textAlign: 'left', marginBottom: '60px' }}>
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="relative rounded-2xl overflow-hidden w-full about-us-stand-for-card" style={{ height: '240px' }}>
              <OptimizedImage
                src={hero1}
                alt="Trust First"
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Trust First</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full about-us-stand-for-card" style={{ height: '240px' }}>
              <OptimizedImage
                src={hero2}
                alt="Affordability"
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Affordability</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full about-us-stand-for-card" style={{ height: '240px' }}>
              <OptimizedImage
                src={hero3}
                alt="Community & Connection"
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Community & Connection</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full about-us-stand-for-card" style={{ height: '240px' }}>
              <OptimizedImage
                src={smartMobility}
                alt="Smart Mobility for Africa"
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Smart Mobility for Africa</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden w-full about-us-stand-for-card" style={{ height: '240px' }}>
              <OptimizedImage
                src={communityConnection}
                alt="Sustainability"
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
                lazy={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Sustainability</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 about-us-join-movement">
        <style>{`
          @media (max-width: 1023px) {
            .about-us-join-movement {
              padding-top: 20px !important;
              padding-bottom: 40px !important;
            }
          }
          @media (min-width: 1024px) {
            .join-movement-outer-container {
              padding-left: 60px !important;
              padding-right: 60px !important;
            }
          }
          @media (max-width: 1023px) {
            .join-movement-heading {
              font-size: 24px !important;
              font-weight: 800 !important;
            }
            .join-movement-text {
              font-size: 14px !important;
              font-weight: 400 !important;
            }
            .download-btn-text {
              font-size: 14px !important;
              font-weight: 600 !important;
            }
          }
        `}</style>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="lg:px-[60px] join-movement-outer-container">
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
                <h2 className="lg:text-4xl font-bold mb-4 join-movement-heading">
                  Join the Movement
                </h2>
                <p className="lg:text-lg mb-4 text-gray-200 join-movement-text">
                  Whether you're joining as a rider looking for safe, affordable transport or as a driver ready to earn more from your daily route, Ride2Five welcomes you to a smarter way of commuting.
                </p>
                <p className="hidden lg:block text-xl font-bold mb-6">
                  Ride better. Earn better. Live better.
                </p>
                <button
                  onClick={() => navigate('/coming-soon')}
                  className="bg-white border-2 border-white text-black hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mx-auto lg:mx-0 w-[200px] lg:w-auto"
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

      <Footer />
    </div>
  )
}

export default AboutUs
