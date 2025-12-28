import { useEffect } from 'react'
import Footer from '../components/Footer'

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full bg-white">
      <style>{`
        @media (max-width: 1023px) {
          .terms-heading-mobile {
            font-size: 30px !important;
            font-weight: 800 !important;
          }
          .terms-content-mobile {
            font-size: 12px !important;
          }
          .terms-content-mobile h2 {
            font-size: 12px !important;
          }
          .terms-content-mobile p {
            font-size: 12px !important;
          }
          .terms-content-mobile li {
            font-size: 12px !important;
          }
          .terms-content-mobile strong {
            font-size: 12px !important;
          }
          .terms-header-mobile {
            height: 160px !important;
          }
        }
      `}</style>
      <section className="relative px-5 lg:px-[80px] flex items-center terms-header-mobile" style={{ backgroundColor: '#010101', height: '224px' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white opacity-5 rounded-[30px] h-[80px] w-[100px] lg:h-[100px] lg:w-[150px]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="mb-6 terms-heading-mobile" style={{ fontSize: '54px', fontWeight: 400, color: '#F8F8F8' }}>Terms and Conditions</h1>

          <div className="mb-8 terms-content-mobile" style={{ fontWeight: 400, fontSize: '16px', color: '#F8F8F8' }}>
            <p className="mb-2">Last Updated: October 18, 2025</p>
            <p>Contact: info@ride2five.com</p>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-[60px]" style={{ paddingTop: '57px', paddingBottom: '48px' }}>
        <div>
          <div className="mb-8">
            <p className="mb-6 terms-content-mobile" style={{ fontWeight: 500, fontSize: '18px', color: '#CC280C' }}>
              By creating an account, booking a ride, offering a ride, or using any Ride2Five website or app (the "Platform"), you agree to these Terms and Conditions ("Terms"). If you do not agree, do not use the Platform.
            </p>
          </div>

          <div className="space-y-8 text-gray-800 terms-content-mobile">
            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>1. Service Description</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Ride2Five is a technology marketplace connecting Riders with verified Drivers on predictable routes. It's not a transport company; each trip is a private agreement.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>2. Operating Modes</h2>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontWeight: 400, fontSize: '14px' }}>
                <li><strong>Carpool mode:</strong> closed cohorts, cost sharing.</li>
                <li><strong>Public ride-hail mode:</strong> open to the public, commercial fares, Ride2Five commission applies. Local regulations may vary.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>3. Eligibility and Accounts</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Users must be 18+, able to contract in Nigeria, provide accurate info, and be responsible for account activity. Requires ID and KYC verification (NIN, driver's license, vehicle papers, selfie match). False info leads to suspension/referral to authorities.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>4. Driver Requirements</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Drivers need a valid license, roadworthy/insured vehicle, compliance with traffic laws and e-hailing requirements. Professional conduct (no harassment, intoxication, weapons, illegal items). OTP pickup verification and in-app start/end rides are mandatory. Minimum standards (vehicle age, inspection, ratings) apply. Drivers below standards may be paused.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>5. Safety and Conduct</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>OTP pickup is mandatory. Use in-app chat/masked calls; no personal phone numbers. Seatbelts required. In-app SOS for emergencies. Zero tolerance for harassment, discrimination, violence, intoxication while driving, illegal drugs, weapons, or sexual conduct. Violations may lead to investigations, holds, strikes, or account termination.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>6. Booking, Matching, and Cancellations</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Trips confirmed upon driver acceptance and rider confirmation. Recurring routes/pickup windows offered.</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ fontWeight: 400, fontSize: '14px' }}>
                <li><strong>Cancellations:</strong> Rider no-show (X minutes late) allows driver to cancel, no-show fee applies.</li>
                <li>Driver late/no-show (Y minutes late) allows rider to cancel without fee.</li>
                <li>Repeated late/no-shows lead to strikes/suspension. Material changes (route, destination, passengers) may change price.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>7. Pricing, Payments, and Wallet</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Fares shown before booking. Carpool is cost-share; public ride-hail is commercial with peak/surge factors. Supported payments: cash, wallet, card/bank via gateways. Ride2Five commissions apply to public ride-hail. Wallet balances don't earn interest. Receipts available in trip history/email. Reversed/disputed payments recovered from wallet, future payouts, or linked method. Evidence (plate photo, chat logs, OTP match, timestamps) may be requested.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>8. Driver Payouts</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Non-cash trip earnings (minus fees, commission, adjustments) settled to driver's payout method on a standard schedule (T+1 to T+3 business days, excluding bank/holiday delays). Minimum payout thresholds/fees apply.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>9. Refunds and Adjustments</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}><strong>Eligible refunds:</strong> material service failure (driver didn't arrive), duplicate charges, fraud reported promptly.</p>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}><strong>Ineligible refunds:</strong> change of mind after pickup, route changes without driver consent, or violations of terms.</p>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Approved refunds returned to original method or wallet at discretion.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>10. Ratings, Reviews, and Strikes</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Riders/drivers can rate/review. Abusive/retaliatory reviews prohibited. Strike policy for serious/repeated violations (safety, harassment, fraud, dangerous driving). Multiple strikes lead to suspension/removal.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>11. Your Responsibilities</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Follow all laws, Terms, and posted policies (Privacy Policy, Safety Policy, Community Guidelines, Refunds and Cancellations Policy). Do not engage in scams, multi-account abuse, GPS spoofing, referral fraud. Do not copy, scrape, reverse engineer, misuse software, pricing, or data.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>12. Privacy and Data</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Privacy Policy explains data collected (identity, KYC, contact, location, device, trip data), why it's used (safety, matching, support, compliance), retention, and user choices. Consent to practices and KYC/verification via third-party providers by using Platform.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>13. Intellectual Property</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>All Platform content/software owned by Ride2Five or its licensors. Users granted limited, non-exclusive, non-transferable license to use Platform for personal use or to offer rides as a driver.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>14. Third-Party Services</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Payments, KYC, messaging, other features provided by third parties, subject to their terms. Ride2Five not responsible for outages/failures of third-party services.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>15. Disclaimers</h2>
              <p className="mb-2" style={{ fontWeight: 400, fontSize: '14px' }}>Platform/trips provided "as is" and "as available." No guarantee of uninterrupted/error-free service, safety, punctuality, quality, suitability of vehicle/route. Not a common carrier. User accepts inherent risks of road travel. Ride2Five not liable for criminal acts of third parties (theft, assault, kidnapping, abduction, armed robbery, other attacks). Terms don't limit non-waivable legal rights.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>16. Limitation of Liability</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>To maximum extent permitted by law, Ride2Five and affiliates/directors/employees/agents not liable for indirect, incidental, special, consequential, exemplary, punitive damages, lost profits, data, goodwill, business, arising from/related to use of Platform or any trip, even if advised of possibility.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>17. Indemnity</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>User agrees to indemnify/hold Ride2Five harmless from claims, losses, liabilities, damages, costs, expenses (including reasonable legal fees) arising from breach of Terms/policies, violation of law/third-party rights, trips conducted/taken, or content provided.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>18. Suspension and Termination</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Access may be suspended/terminated immediately for breach of Terms, posing safety risk, engaging in fraud, or if required by law/regulator. User may delete account at any time, subject to settlement of outstanding amounts and data retention obligations.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>19. Changes to Terms</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Terms may be modified; new "Last Updated" date. Continued use means acceptance of revised Terms.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>20. Governing Law and Disputes</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Governed by laws of Federal Republic of Nigeria. Good-faith resolution first. Unresolved within 14 days, parties may attempt mediation in Lagos. Subject to mandatory arbitration. Disputes may be brought in Lagos courts. Either party may seek interim injunctive relief.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>21. Regulatory Compliance</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Where required (e.g., Lagos e-hailing regulations), Ride2Five may hold additional licenses, collect mandated data, require drivers to meet regulatory standards (e.g., VIO or LASDRI). Operational requirements may be updated to comply with laws/directives.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>22. Force Majeure</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Not liable for delays/failures caused by events beyond reasonable control (extreme weather, strikes, government actions, network/provider outages).</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>23. Notices and Communications</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Users consent to receive notices electronically (email, in-app, SMS, WhatsApp). Keep contact details current. Security/OTP messages are transactional.</p>
            </div>

            <div>
              <h2 className="mb-3" style={{ fontWeight: 500, fontSize: '16px' }}>24. Entire Agreement and Severability</h2>
              <p style={{ fontWeight: 400, fontSize: '14px' }}>Terms, together with incorporated policies (Privacy Policy, Safety Policy, Community Guidelines, Refunds and Cancellations Policy), form entire agreement. If any provision is unenforceable, remainder remains in effect.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsAndConditions

