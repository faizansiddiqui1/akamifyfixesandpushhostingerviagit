"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code, Store, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function WebsitePricing() {
  const router = useRouter();

  const handleBoomClick = () => {
    router.push("/BOOM");
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {/* Portfolio Website Package */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-20" />
        <div className="flex items-center justify-center mb-6">
          <Globe className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Portfolio Website</h2>
        <p className="text-3xl font-bold text-center mb-2">₹8,000</p>
        <p className="text-center text-gray-600 mb-6">Launch your professional presence</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Stunning Responsive Design</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Strategic SEO Optimization</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Modern UI/UX Experience</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Interactive Contact Forms</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Social Media Integration</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>3 Months Expert Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" onClick={handleBoomClick}>
          Start Your Journey
        </Button>
      </Card>

      {/* Management Website Package */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border-blue-500 border-2">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-20" />
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
        <div className="flex items-center justify-center mb-6">
          <Code className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Management Website</h2>
        <p className="text-3xl font-bold text-center mb-2">₹15,000</p>
        <p className="text-center text-gray-600 mb-6">Complete management solution for schools, hospitals, hotels</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Customized Admin Dashboard</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>User & Role Management System</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Inventory & Resource Tracking</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Booking & Appointment System</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Reporting & Analytics Dashboard</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>6 Months Priority Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={handleBoomClick}>
          Transform Your Business
        </Button>
      </Card>

      {/* Ecommerce Package */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-20" />
        <div className="flex items-center justify-center mb-6">
          <Store className="w-12 h-12 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Ecommerce Business</h2>
        <p className="text-3xl font-bold text-center mb-2">₹30,000</p>
        <p className="text-center text-gray-600 mb-6">Complete online store solution</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Product Catalog & Inventory Management</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Secure Payment Gateway Integration</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Shopping Cart & Checkout System</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Order Tracking & Management</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Customer Reviews & Ratings</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>1 Year VIP Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" onClick={handleBoomClick}>
          Scale Your Business
        </Button>
      </Card>
    </div>
  );
}