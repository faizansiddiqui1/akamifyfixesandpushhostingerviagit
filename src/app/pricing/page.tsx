"use client";

import { AppPricing } from "@/components/AppPricing";
import { SoftwarePricing } from "@/components/SoftwarePricing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WebsitePricing } from "@/components/WebsitePricing";
import { Shield, Clock, Star, Rocket, PhoneCall } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function PricingPage() {
  const router = useRouter();

  const handleBoomClick = () => {
    router.push("/BOOM");
  };

  return (
    <>
      <Head>
        <title>Akamify Services Pricing</title>
        <meta
          name="description"
          content="Check out Akamify's pricing plans for web development, app development, software solutions, and digital services. Transparent and affordable pricing tailored to your business needs."
        />
        <meta name="keywords" content="Akamify pricing, web development pricing, app development pricing, software development pricing, affordable plans" />
        <meta name="author" content="Akamify" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
              Transform Your Digital Presence
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Elevate Your Business to New Heights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We don&apos;t just build solutions - we craft digital experiences that drive growth, engage customers, and deliver measurable results
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="extremely items-center bg-white px-6 py-3 rounded-full shadow-sm">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <span>24/7 Priority Support</span>
              </div>
              <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-sm">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Website Development Section */}
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
              Web Development
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Professional Website Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              From portfolio sites to complete ecommerce solutions, we build websites that convert visitors into customers
            </p>
          </div>
          
          <WebsitePricing />

          {/* Mobile App Section */}
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
              Mobile Innovation
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Transform Your Business with Mobile Apps
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              From simple apps to complex enterprise solutions, we bring your mobile vision to life
            </p>
          </div>

          <AppPricing />

          {/* Software Solutions Section */}
          <div className="text-center mb-12">
            <span className="bg-pink-100 text-pink-800 text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
              Software Solutions
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
              Custom Software for Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Powerful software solutions designed to streamline operations and boost productivity
            </p>
          </div>

          <SoftwarePricing />

          <div className="mt-16 text-center space-y-8">
            <div className="bg-white p-12 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Why Partner With Us?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <Clock className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">24/7 Elite Support</h4>
                  <p className="text-gray-600">Expert assistance whenever you need it</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                  <Rocket className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Innovation First</h4>
                  <p className="text-gray-600">Cutting-edge solutions for modern businesses</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100">
                  <Shield className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Guaranteed Results</h4>
                  <p className="text-gray-600">Performance you can count on</p>
                </div>
              </div>
            </div>

            <Link href={"/BooM"}>
              <Button
                variant="outline"
                size="lg"
                className="mt-12 text-lg font-semibold px-8 py-6 bg-gradient-to-r from-blue-300 to-purple-100 hover:from-blue-500 hover:to-purple-300"
                onClick={handleBoomClick}
              >
                Discover Our BOOM Model
              </Button>
            </Link>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mt-8">
              <p className="text-lg font-semibold text-gray-800 mb-4">
                Our Promise to You
              </p>
              <p className="text-gray-600">
                ✨ Free consultation and strategic planning
              </p>
              <p className="text-gray-600">
                🛡️ Transparent pricing with no hidden costs
              </p>
              <p className="text-gray-600">
                🚀 Continuous support and optimization
              </p>
              <p className="text-gray-600">
                💎 Custom solutions for unique requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}