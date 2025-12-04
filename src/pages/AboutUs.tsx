import Footer from '../components/Footer'
import aboutUsMainImage from '../assets/about-us-main-image.jpg'
import heroFlower from '../assets/hero-flower.svg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import smartMobility from '../assets/smart-mobility.png'
import communityConnection from '../assets/community-connection.png'
import peopleIcon from '../assets/people.svg'
import smartPhoneIcon from '../assets/smart-phone.svg'
import riderHeroBackground from '../assets/rider-hero-background 09.55.29.svg'

function AboutUs() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white relative py-20" style={{ minHeight: '1100px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '60px', paddingRight: '60px' }}>
        <div className="w-full flex items-center justify-center">
          {/* Black Rounded Container */}
          <div className="bg-black rounded-3xl w-full relative overflow-hidden" style={{ borderRadius: '30px' }}>
            {/* Decorative Elements - Top Left */}
            <div className="absolute top-0 left-0" style={{ zIndex: 2 }}>
              <img src={heroFlower} alt="" className="w-16 h-16" style={{ filter: 'invert(1) brightness(0) saturate(100%) hue-rotate(0deg)' }} />
            </div>

            {/* Decorative Elements - Top Right */}
            <div className="absolute top-0 right-0" style={{ zIndex: 2 }}>
              <img src={heroFlower} alt="" className="w-16 h-16" style={{ filter: 'invert(1) brightness(0) saturate(100%) hue-rotate(0deg)' }} />
            </div>

            {/* Content Container */}
            <div className="flex flex-col">
              {/* Top Half - Text Content */}
              <div className="flex flex-col justify-center items-center px-8 lg:px-16 py-12 relative z-10 text-center" style={{ minHeight: '500px' }}>
                <h1 className="text-white mb-6 leading-tight" style={{ fontSize: '55px', fontWeight: 500 }}>
                  We believe commuting<br />
                  shouldn't be stressful<br />
                  or expensive
                </h1>
                <p className="text-white max-w-3xl mx-auto" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                  At Ride2Five, we're redefining the way professionals commute. Built for the
                  modern Nigerian workforce, our platform makes everyday travel safer, more
                  affordable, and more efficient by connecting verified riders with trusted drivers
                  heading in the same direction.
                </p>
              </div>

              {/* Bottom Half - Image */}
              <div className="relative overflow-hidden" style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', paddingLeft: '40px', paddingRight: '40px', paddingTop: '40px', height: '450px' }}>
                <img 
                  src={aboutUsMainImage} 
                  alt="Ride2Five" 
                  className="w-full h-full object-cover"
                  style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px', height: '450px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="pb-20 pt-4" style={{ backgroundColor: '#FBFBFB', height: '386px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '60px', paddingRight: '60px' }}>
        <div className="w-full">
          {/* Section Heading */}
          <h2 className="mb-12" style={{ fontSize: '38px', fontWeight: 800, textAlign: 'left' }}>
            What We Stand For
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Card 1: Trust First */}
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '300px', height: '240px' }}>
              <img 
                src={hero1} 
                alt="Trust First" 
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Trust First</h3>
              </div>
            </div>

            {/* Card 2: Affordability */}
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '300px', height: '240px' }}>
              <img 
                src={hero2} 
                alt="Affordability" 
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Affordability</h3>
              </div>
            </div>

            {/* Card 3: Community & Connection */}
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '300px', height: '240px' }}>
              <img 
                src={hero3} 
                alt="Community & Connection" 
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Community & Connection</h3>
              </div>
            </div>

            {/* Card 4: Smart Mobility for Africa */}
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '300px', height: '240px' }}>
              <img 
                src={smartMobility} 
                alt="Smart Mobility for Africa" 
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Smart Mobility for Africa</h3>
              </div>
            </div>

            {/* Card 5: Sustainability */}
            <div className="relative rounded-2xl overflow-hidden" style={{ width: '300px', height: '240px' }}>
              <img 
                src={communityConnection} 
                alt="Sustainability" 
                className="w-full h-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-white font-bold" style={{ fontSize: '20px' }}>Sustainability</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-20">
        <div style={{ paddingLeft: '60px', paddingRight: '60px' }}>
          <div className="relative rounded-3xl overflow-hidden" style={{ backgroundColor: '#30004B' }}>
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

            <div className="flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12 relative z-10">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Join the Movement
                </h2>
                <p className="text-lg mb-4 text-gray-200">
                  Whether you're joining as a rider looking for safe, affordable transport or as a driver ready to earn more from your daily route, Ride2Five welcomes you to a smarter way of commuting.
                </p>
                <p className="text-xl font-bold mb-6">
                  Ride better. Earn better. Live better.
                </p>
                <button className="bg-white border-2 border-white text-black hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
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
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs
