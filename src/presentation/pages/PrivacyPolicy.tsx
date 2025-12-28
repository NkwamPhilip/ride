import { useEffect } from 'react'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full bg-white">
      <style>{`
        @media (max-width: 1023px) {
          .privacy-heading-mobile {
            font-size: 30px !important;
            font-weight: 800 !important;
          }
          .privacy-content-mobile {
            font-size: 12px !important;
          }
          .privacy-content-mobile h2 {
            font-size: 12px !important;
          }
          .privacy-content-mobile p {
            font-size: 12px !important;
          }
          .privacy-content-mobile li {
            font-size: 12px !important;
          }
          .privacy-content-mobile strong {
            font-size: 12px !important;
          }
          .privacy-header-mobile {
            height: 160px !important;
          }
        }
      `}</style>
      <section className="relative px-5 lg:px-[80px] flex items-center privacy-header-mobile" style={{ backgroundColor: '#010101', height: '224px' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white opacity-5 rounded-[30px] h-[80px] w-[100px] lg:h-[100px] lg:w-[150px]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="mb-6 privacy-heading-mobile" style={{ fontSize: '54px', fontWeight: 400, color: '#F8F8F8' }}>Privacy Policy</h1>

          <div className="mb-8 privacy-content-mobile" style={{ fontWeight: 400, fontSize: '16px', color: '#F8F8F8' }}>
            <p className="mb-2">Last Updated: October 18, 2025</p>
            <p>Contact: info@ride2five.com</p>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-[60px]" style={{ paddingTop: '57px', paddingBottom: '48px' }}>
        <div>
          <div className="mb-8">
            <p className="mb-6 privacy-content-mobile" style={{ fontWeight: 500, fontSize: '18px', color: '#CC280C' }}>
              By creating an account, booking a ride, offering a ride, or using any Ride2Five website or app (the "Platform"), you agree to these Terms and Conditions ("Terms"). If you do not agree, do not use the Platform.
            </p>
          </div>

          <div className="space-y-8 text-gray-800 privacy-content-mobile">
            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>1. Service Description</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Ride2Five is a technology marketplace that connects commuters (Riders) with verified drivers (Drivers) on predictable, work-hour routes. Ride2Five is not a transport company or common carrier and does not own or operate vehicles. Each trip is a private agreement between Rider and Driver.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>2. Operating Modes</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>(a) Carpool mode: closed cohorts and cost sharing.</p>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>(b) Public ride-hail mode: open to the public, commercial fares, Ride2Five commission may apply.</p>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Local regulations may apply differently to each mode.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>3. Eligibility and Accounts</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>You must be 18 or older and able to enter contracts in Nigeria. Provide accurate information and keep it updated. You are responsible for all activity on your account. We may require ID and KYC verification (for example NIN, driver's licence, vehicle papers, selfie match). Submitting false or misleading information may result in suspension and referral to authorities.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>4. Driver Requirements</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Drivers must hold a valid driver's licence, maintain a roadworthy and insured vehicle, and comply with traffic laws and any applicable e-hailing requirements. Professional conduct is required (no harassment, intoxication, weapons, or illegal items). Drivers must use OTP pickup verification and start and end rides in app. Minimum standards (vehicle age, inspection, ratings) may apply. We may pause or remove drivers who fall below standards.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>5. Safety and Conduct</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>OTP pickup is mandatory. Use in-app chat or masked calls; do not exchange personal phone numbers. Seatbelts are required for all occupants. Use the in-app SOS for emergencies and contact authorities where necessary. Zero tolerance for harassment, discrimination, violence, intoxication while driving, illegal drugs, weapons, or sexual conduct in vehicles. We may investigate reports and apply temporary holds, strikes, or account termination.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>6. Booking, Matching, and Cancellations</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Trips are confirmed only when a driver accepts and the rider receives confirmation. Recurring routes and pickup windows may be offered.</p>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}><strong>Cancellations:</strong></p>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Rider late or no-show: if the rider is not at pickup within [X] minutes, the driver may cancel; a no-show fee may apply.</p>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Driver late or no-show: if the driver is [Y] or more minutes late without notice, the rider may cancel without fee.</p>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Repeated late or no-shows may lead to strikes or suspension. Material changes at pickup (route, destination, extra passengers) require driver consent and may change the price.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>7. Pricing, Payments, and Wallet</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Fares are shown before booking. In carpool mode, fares are cost-share oriented. In public ride-hail mode, fares are commercial and may include peak or surge factors. Supported payment methods may include cash, wallet, and card or bank payments via integrated gateways. For public ride-hail mode, Ride2Five may charge a commission on completed trips. Wallet balances do not earn interest. Receipts are available in trip history and may be emailed. If a payment is reversed or disputed, we may recover amounts from your wallet, future payouts, or linked payment method. You agree to provide evidence when requested (for example plate photo, chat logs, OTP match, timestamps).</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>8. Driver Payouts</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>For non-cash trips, driver earnings (minus fees, commission, and adjustments) are settled to the driver's payout method on a standard schedule (for example T+1 to T+3 business days, excluding bank or holiday delays). Minimum payout thresholds and fees may apply.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>9. Refunds and Adjustments</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Eligible refunds include material service failure (driver did not arrive), duplicate charges, or fraud reported promptly. Ineligible refunds include change of mind after pickup, route changes without driver consent, or violations of these Terms. Approved refunds may return to the original method or to wallet at our discretion.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>10. Ratings, Reviews, and Strikes</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Riders and drivers may rate and review after trips. Abusive or retaliatory reviews are prohibited. We operate a strike policy for serious or repeated violations (including safety, harassment, fraud, and dangerous driving). Multiple strikes can lead to suspension or removal.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>11. Your Responsibilities</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Follow all applicable laws, these Terms, and posted policies (Privacy Policy, Safety Policy, Community Guidelines, Refunds and Cancellations Policy). Do not engage in scams, multi-account abuse, GPS spoofing, or referral fraud. Do not copy, scrape, reverse engineer, or misuse our software, pricing, or data.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>12. Privacy and Data</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Our Privacy Policy explains what data we collect (including identity and KYC data, contact, location, device, and trip data), why we use it (including safety, matching, support, and compliance), how long we keep it, and your choices. By using the Platform, you consent to these practices and to KYC and verification through third-party providers.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>13. Intellectual Property</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>All Platform content and software are owned by Ride2Five or its licensors. Subject to your compliance, we grant you a limited, non-exclusive, non-transferable licence to use the Platform for personal use or to offer rides as a driver under these Terms.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>14. Third-Party Services</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Payments, KYC, maps, messaging, and other features may be provided by third parties, subject to their terms. We are not responsible for outages or failures of third-party services.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>15. Disclaimers</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>The Platform and trips are provided "as is" and "as available". We do not guarantee uninterrupted or error-free service. We do not control rider or driver behaviour and make no warranties regarding safety, punctuality, quality, or suitability of any vehicle or route. We are not a common carrier. You accept the inherent risks of road travel.</p>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>To the fullest extent permitted by law, Ride2Five does not accept responsibility or liability for criminal acts of third parties that may occur during or in connection with a trip, including theft, assault, kidnapping or abduction, armed robbery, or other attacks. Nothing in these Terms limits any non-waivable legal rights you may have, and we will cooperate with law enforcement where appropriate.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>16. Limitation of Liability</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>To the maximum extent permitted by law, Ride2Five and its affiliates, directors, employees, and agents are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, goodwill, or business, arising from or related to your use of the Platform or any trip, even if advised of the possibility.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>17. Indemnity</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>You agree to indemnify and hold Ride2Five harmless from any claims, losses, liabilities, damages, costs, and expenses (including reasonable legal fees) arising out of your breach of these Terms or policies, violation of law or third-party rights, trips you conduct or take, or content you provide.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>18. Suspension and Termination</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>We may suspend or terminate access immediately if you breach these Terms, pose a safety risk, engage in fraud, or if required by law or a regulator. You may delete your account at any time, subject to settlement of outstanding amounts and our data retention obligations.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>19. Changes to Terms</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>We may modify these Terms and will post material changes with a new Last updated date. Continued use after changes means you accept the revised Terms.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>20. Governing Law and Disputes</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>These Terms are governed by the laws of the Federal Republic of Nigeria. First seek good-faith resolution with support. If unresolved within 14 days, the parties may attempt mediation in Lagos. Subject to any mandatory arbitration you expressly accept, disputes may be brought in the courts of Lagos State. Either party may seek interim injunctive relief.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>21. Regulatory Compliance</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Where required (for example Lagos e-hailing regulations), we may hold additional licences, collect mandated data, and require drivers to meet regulatory standards (for example VIO or LASDRI). We may update operational requirements to comply with laws and directives.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>22. Force Majeure</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>We are not liable for delays or failures caused by events beyond reasonable control, including extreme weather, strikes, government actions, or network or provider outages.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>23. Notices and Communications</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>You consent to receive notices electronically by email, in-app, SMS, or WhatsApp. Keep your contact details current. Security and OTP messages are transactional.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>24. Entire Agreement and Severability</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>These Terms, together with incorporated policies (Privacy Policy, Safety Policy, Community Guidelines, Refunds and Cancellations Policy), form the entire agreement between you and Ride2Five. If any provision is unenforceable, the remainder remains in effect.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy

