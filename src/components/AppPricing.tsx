"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Store, Zap, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function AppPricing() {
  const router = useRouter();

  const handleBoomClick = () => {
    router.push("/BOOM");
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Basic Mobile App */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-6">
          <Smartphone className="w-12 h-12 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Starter App</h2>
        <p className="text-3xl font-bold text-center mb-2">₹20,000</p>
        <p className="text-center text-gray-600 mb-6">Perfect for your first mobile venture</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Native Android Excellence</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Core Features Suite</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Secure Authentication</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Play Store Launch</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>3 Months Technical Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600" onClick={handleBoomClick}>
          Begin Your App Journey
        </Button>
      </Card>

      {/* Premium Mobile App */}
     <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border-blue-500 border-2">
         <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Best Value</span>
        </div>
        <div className="flex items-center justify-center mb-6">
          <Store className="w-12 h-12 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Premium Solution</h2>
        <p className="text-3xl font-bold text-center mb-2">₹40,000</p>
        <p className="text-center text-gray-600 mb-6">Advanced features for serious business</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>iOS & Android Support</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Seamless Payment Systems</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Smart Order Management</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Real-time Analytics</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>6 Months Priority Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600" onClick={handleBoomClick}>
          Upgrade Your Business
        </Button>
      </Card>

      {/* Enterprise Mobile Solution */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-6">
          <Zap className="w-12 h-12 text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Enterprise Solution</h2>
        <p className="text-3xl font-bold text-center mb-2">₹60,000+</p>
        <p className="text-center text-gray-600 mb-6">Ultimate power for large operations</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Custom Enterprise Architecture</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Advanced API Integrations</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Scalable Cloud Infrastructure</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Enterprise-grade Security</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>1 Year VIP Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600" onClick={handleBoomClick}>
          Lead Your Industry
        </Button>
      </Card>
    </div>
  );
}