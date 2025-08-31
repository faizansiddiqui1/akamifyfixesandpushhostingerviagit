"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Server, Cpu, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function SoftwarePricing() {
  const router = useRouter();

  const handleBoomClick = () => {
    router.push("/BOOM");
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Basic Software */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-6">
          <Monitor className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Basic Software</h2>
        <p className="text-3xl font-bold text-center mb-2">₹60,000</p>
        <p className="text-center text-gray-600 mb-6">School Management Solution</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Windows Platform</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Offline & Online Operation</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Synchronous & Asynchronous Features</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Student & Staff Management</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Attendance & Grade Tracking</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>6 Months Technical Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600" onClick={handleBoomClick}>
          Get Started
        </Button>
      </Card>

      {/* Standard Software */}
     <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border-blue-500 border-2">
      
          <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Populer</span>
        </div>
        <div className="flex items-center justify-center mb-6">
          <Server className="w-12 h-12 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Standard Software</h2>
        <p className="text-3xl font-bold text-center mb-2">₹1,20,000</p>
        <p className="text-center text-gray-600 mb-6">Advanced Management Solution</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Cross-Platform (Windows, Linux, macOS)</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Cloud Integration</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Advanced Reporting & Analytics</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Multi-branch Support</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Custom Module Development</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>1 Year Priority Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600" onClick={handleBoomClick}>
          Upgrade Now
        </Button>
      </Card>

      {/* Advanced Software */}
      <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-center mb-6">
          <Cpu className="w-12 h-12 text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Enterprise Software</h2>
        <p className="text-3xl font-bold text-center mb-2">₹2,50,000+</p>
        <p className="text-center text-gray-600 mb-6">Complete Enterprise Solution</p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Custom Enterprise Architecture</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>AI-Powered Analytics</span>
          </li>
          <li className="extremely items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Multi-tenant Support</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Advanced Security Protocols</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Custom API Development</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>2 Years Premium Support</span>
          </li>
        </ul>
        <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600" onClick={handleBoomClick}>
          Contact for Enterprise
        </Button>
      </Card>
    </div>
  );
}