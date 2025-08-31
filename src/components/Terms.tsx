"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-12 xs:py-16 sm:py-20 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900">
            Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Service</span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 sm:space-y-8 text-gray-700 bg-white p-6 xs:p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-200"
        >
          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              By accessing or using Akamify services, including but not limited to
              <Link href="/websiteDevelopment" className="text-blue-500 hover:underline">Website Development</Link>,
              <Link href="/appDevelopment" className="text-blue-500 hover:underline">App Development</Link>, and the
              <Link href="/BooM" className="text-blue-500 hover:underline">BooM Model</Link>, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">2. Services Provided</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              We offer a range of digital services, including <Link href="/seoOptimization" className="text-blue-500 hover:underline">SEO Optimization</Link>,
              <Link href="/socialAdvertising" className="text-blue-500 hover:underline">Social Advertising</Link>, and team hiring through
              <Link href="/hireTeam" className="text-blue-500 hover:underline">Hire Team</Link>. Specific terms for each service may apply as outlined on individual agreements or respective service pages (e.g., <Link href="/pricing" className="text-blue-500 hover:underline">Pricing</Link>).
            </p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-gray-800">3. User Responsibilities</h2>
            <p className="text-sm xs:text-base sm:text-lg mt-2">
              You agree to provide accurate information when engaging with us, including during the use of our
              <Link href="/demobyakamify" className="text-blue-500 hover:underline">Demo by Akamify</Link> or subscription to the BooM Model.
              You are responsible for maintaining the confidentiality of any account credentials and for all activities under your account.
            </p>
          </section>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link href="/BooM">
            <motion.a
              className="inline-flex items-center gap-2 px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform text-sm xs:text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore BooM Model <ChevronRight className="w-5 h-5" />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
