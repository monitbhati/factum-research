import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

export const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50"></div>
      </div>

      <div className="relative z-10">
        <Header />

        {/* Page Header */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-yellow-200 shadow-xl">
              <CardContent className="pt-8 pb-8 prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Agreement to Terms</h2>
                <p className="text-gray-700">
                  By registering as a panelist with FACTUM RESEARCH, you agree to be bound by these Terms and Conditions. 
                  If you do not agree with any part of these terms, please do not register or use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Eligibility</h2>
                <p className="text-gray-700">To participate as a panelist, you must:</p>
                <ul className="text-gray-700">
                  <li>Be at least 18 years of age</li>
                  <li>Provide accurate and truthful information during registration</li>
                  <li>Have legal capacity to enter into binding agreements</li>
                  <li>Not be prohibited from using our services under applicable laws</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Account Registration</h2>
                <p className="text-gray-700">
                  When creating an account, you agree to:
                </p>
                <ul className="text-gray-700">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Maintain the security and confidentiality of your password</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access or security breach</li>
                </ul>
                <p className="text-gray-700">
                  You may only register one account. Multiple accounts by the same person are prohibited and may result 
                  in suspension of all accounts.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Panelist Responsibilities</h2>
                <p className="text-gray-700">As a panelist, you agree to:</p>
                <ul className="text-gray-700">
                  <li>Provide honest and thoughtful responses to survey questions</li>
                  <li>Not rush through surveys or provide random answers</li>
                  <li>Not use automated tools, bots, or scripts to complete surveys</li>
                  <li>Not share survey links with others or discuss survey content</li>
                  <li>Complete surveys personally and not delegate to others</li>
                  <li>Respect the confidentiality of survey content and research materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Survey Participation</h2>
                <p className="text-gray-700">
                  Survey invitations are sent based on your profile and research requirements. Please note:
                </p>
                <ul className="text-gray-700">
                  <li>Not all panelists will receive every survey invitation</li>
                  <li>Survey availability depends on research client needs</li>
                  <li>We reserve the right to screen and qualify participants for specific surveys</li>
                  <li>Survey invitations may have limited availability or expiration dates</li>
                  <li>You are not obligated to complete any survey invitation</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Rewards and Incentives</h2>
                <p className="text-gray-700">
                  Participation in research surveys may be rewarded with incentives:
                </p>
                <ul className="text-gray-700">
                  <li>Incentives are provided at our discretion and may vary by survey</li>
                  <li>Rewards are only provided for complete and quality responses</li>
                  <li>We reserve the right to withhold rewards for fraudulent or low-quality responses</li>
                  <li>Reward amounts, types, and redemption methods are subject to change</li>
                  <li>Tax implications of rewards are your responsibility</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Quality Control</h2>
                <p className="text-gray-700">
                  We employ quality control measures to ensure data integrity:
                </p>
                <ul className="text-gray-700">
                  <li>Survey responses are monitored for quality and consistency</li>
                  <li>Automated detection systems identify suspicious response patterns</li>
                  <li>We may include attention check questions or trap questions</li>
                  <li>Responses failing quality checks may be rejected</li>
                  <li>Repeated quality violations may result in account suspension or termination</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Prohibited Conduct</h2>
                <p className="text-gray-700">You must not:</p>
                <ul className="text-gray-700">
                  <li>Provide false or misleading information</li>
                  <li>Create multiple accounts or use accounts of others</li>
                  <li>Use VPNs, proxies, or other tools to manipulate your location</li>
                  <li>Attempt to hack, reverse engineer, or compromise our systems</li>
                  <li>Harass, threaten, or abuse our staff or other panelists</li>
                  <li>Use our platform for any illegal or unauthorized purpose</li>
                  <li>Sell, trade, or transfer your account to others</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content, trademarks, and materials on our platform are owned by FACTUM RESEARCH or our licensors. 
                  You may not reproduce, distribute, modify, or create derivative works without written permission.
                </p>
                <p className="text-gray-700">
                  By participating in surveys, you grant us the right to use your anonymized responses for research 
                  purposes and client reporting.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">10. Account Suspension and Termination</h2>
                <p className="text-gray-700">
                  We reserve the right to suspend or terminate your account:
                </p>
                <ul className="text-gray-700">
                  <li>For violation of these Terms and Conditions</li>
                  <li>For fraudulent activity or quality control violations</li>
                  <li>For prolonged inactivity (12+ months)</li>
                  <li>At our discretion for any reason with or without notice</li>
                </ul>
                <p className="text-gray-700">
                  Upon termination, your right to use our services ceases immediately. Accrued but unredeemed rewards 
                  may be forfeited.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">11. Disclaimer of Warranties</h2>
                <p className="text-gray-700">
                  Our services are provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="text-gray-700">
                  <li>Uninterrupted or error-free service</li>
                  <li>Accuracy or completeness of any content</li>
                  <li>Specific survey availability or frequency</li>
                  <li>Guaranteed rewards or payment amounts</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">12. Limitation of Liability</h2>
                <p className="text-gray-700">
                  To the maximum extent permitted by law, FACTUM RESEARCH shall not be liable for:
                </p>
                <ul className="text-gray-700">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages exceeding the total rewards earned in the past 12 months</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">13. Indemnification</h2>
                <p className="text-gray-700">
                  You agree to indemnify and hold harmless FACTUM RESEARCH from any claims, losses, or damages arising 
                  from your violation of these terms or misuse of our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">14. Privacy and Data Protection</h2>
                <p className="text-gray-700">
                  Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy 
                  to understand how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">15. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">16. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the 
                  exclusive jurisdiction of courts in Lucknow, Uttar Pradesh.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8">17. Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these Terms and Conditions, please contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                  <p className="text-gray-900 font-semibold mb-2">FACTUM RESEARCH</p>
                  <p className="text-gray-700">Email: <a href="mailto:rfq@factumresearch.com" className="text-purple-600 hover:underline">rfq@factumresearch.com</a></p>
                  <p className="text-gray-700">Phone: +91 8690396627</p>
                  <p className="text-gray-700">Address: B2-1424 Tower-B2 DLF Mypad TCG 6/6, Vibhuti Khand, Gomti Nagar, Lucknow - Uttar Pradesh 226010</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> By clicking "Create Account" during registration, you acknowledge that 
                    you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};
