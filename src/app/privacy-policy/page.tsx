"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 sm:space-y-8 text-gray-700"
        >
          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">1. Introduction</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              At Akamify, we are committed to safeguarding your privacy. This Privacy Policy outlines how we handle your personal data when you use our services, including website development, app development, SEO optimization, and more.
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">2. Information We Collect</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              We may collect personal information such as your name, email address, phone number, and payment details when you interact with us through our website, contact forms, or services like <Link href="/BooM" className="text-blue-500 hover:underline">BooM Model</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">3. How We Use Your Information</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              Your data is used to provide and improve our services, process payments, respond to inquiries, and send marketing updates (if you opt-in). For example, data from our <Link href="/socialAdvertising" className="text-blue-500 hover:underline">Social Advertising</Link> service may be used to optimize ad campaigns.
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">4. Data Protection</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              We implement industry-standard security measures to protect your information. However, no method is 100% secure, and we strive to continuously enhance our safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">5. Your Rights</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              You can request access, correction, or deletion of your personal data by contacting us at <a href="mailto:support@akamify.com" className="text-blue-500 hover:underline">support@akamify.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">6. Contact Us</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              For questions about this policy, reach out via our <Link href="/contactUs" className="text-blue-500 hover:underline">Contact Us</Link> page.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}