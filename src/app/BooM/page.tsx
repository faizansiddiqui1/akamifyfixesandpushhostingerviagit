// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   Code2,
//   Globe,
//   LineChart,
//   Smartphone,
//   Sparkles,
// } from "lucide-react";
// import Link from "next/link";

// // Define the type for ServiceCard props
// interface ServiceCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   gradient: string;
// }

// export default function BoomPage() {

//   const [language, setLanguage] = useState<"en" | "hi">("en");

//   const faqs = {
//     en: [
//       {
//         question: "What is the BOOM Model?",
//         answer:
//           "The BOOM Model is a growth-focused business optimization strategy. Unlike traditional website development, it aims to attract more customers, provide a smooth user experience to maximize engagement, and focus on business growth and sales rather than just delivering a website.",
//       },
//       {
//         question: "What are the two ways to apply?",
//         answer:
//           "You can apply for 'Only Website Development' if you just need a website, or choose the 'BOOM Model (Business Optimization & Growth)' for a deeper approach that includes understanding your business, analyzing needs, developing tailored solutions, and guiding you on advertising and growth.",
//       },
//       {
//         question: "How does the BOOM Model work?",
//         answer:
//           "We prioritize sales and long-term success over pricing, seek serious business owners committed to growth, require you to accept expert optimization suggestions, analyze offline visit needs, and involve multiple teams (analytics, ads, etc.) to ensure maximum growth.",
//       },
//       {
//         question: "What makes the BOOM Model different?",
//         answer:
//           "Unlike most companies that just build websites, we integrate user tracking and analytics to monitor behavior (e.g., page visits, time spent, exit points), optimize based on data, use advanced technologies, and aim for long-term client success.",
//       },
//       {
//         question: "Who should apply for the BOOM Model?",
//         answer:
//           "It’s for serious business owners with a clear vision, ready to commit to growth. If you only need a website, apply directly. For comprehensive business growth, choose the BOOM Model.",
//       },
//       {
//         question: "What analytics do you provide?",
//         answer:
//           "We analyze which pages users visit, how long they stay on each page, and when/where they exit the site. This data helps us optimize your website or app to improve engagement and drive growth.",
//       },
//     ],
//     hi: [
//       {
//         question: "BOOM मॉडल क्या है?",
//         answer:
//           "BOOM मॉडल एक विकास-केंद्रित व्यवसाय अनुकूलन रणनीति है। पारंपरिक वेबसाइट विकास के विपरीत, इसका उद्देश्य अधिक ग्राहकों को आकर्षित करना, सगाई को अधिकतम करने के लिए एक सुचारू उपयोगकर्ता अनुभव प्रदान करना, और सिर्फ वेबसाइट देने के बजाय व्यवसाय विकास और बिक्री पर ध्यान देना है।",
//       },
//       {
//         question: "आवेदन करने के दो तरीके क्या हैं?",
//         answer:
//           "आप 'केवल वेबसाइट विकास' के लिए आवेदन कर सकते हैं यदि आपको सिर्फ एक वेबसाइट चाहिए, या 'BOOM मॉडल (व्यवसाय अनुकूलन और विकास)' चुन सकते हैं, जिसमें आपके व्यवसाय को समझना, जरूरतों का विश्लेषण, अनुकूलित समाधान विकसित करना, और विज्ञापन व विकास पर मार्गदर्शन शामिल है।",
//       },
//       {
//         question: "BOOM मॉडल कैसे काम करता है?",
//         answer:
//           "हम कीमत से ज्यादा बिक्री और दीर्घकालिक सफलता पर ध्यान देते हैं, विकास के लिए प्रतिबद्ध गंभीर व्यवसाय मालिकों की तलाश करते हैं, विशेषज्ञ अनुकूलन सुझावों को स्वीकार करने की अपेक्षा करते हैं, ऑफलाइन विजिट की जरूरत का विश्लेषण करते हैं, और अधिकतम विकास के लिए कई टीमों (विश्लेषण, विज्ञापन आदि) को शामिल करते हैं।",
//       },
//       {
//         question: "BOOM मॉडल को क्या अलग बनाता है?",
//         answer:
//           "ज्यादातर कंपनियां सिर्फ वेबसाइट बनाती हैं, लेकिन हम उपयोगकर्ता ट्रैकिंग और विश्लेषण को एकीकृत करते हैं (जैसे पेज विजिट, समय, निकास बिंदु), डेटा के आधार पर अनुकूलन करते हैं, उन्नत तकनीकों का उपयोग करते हैं, और दीर्घकालिक ग्राहक सफलता पर ध्यान देते हैं।",
//       },
//       {
//         question: "BOOM मॉडल के लिए कौन आवेदन कर सकता है?",
//         answer:
//           "यह उन गंभीर व्यवसाय मालिकों के लिए है जिनके पास स्पष्ट दृष्टिकोण है और जो विकास के लिए प्रतिबद्ध हैं। यदि आपको सिर्फ वेबसाइट चाहिए, तो सीधे आवेदन करें। व्यापक व्यवसाय विकास के लिए, BOOM मॉडल चुनें।",
//       },
//       {
//         question: "आप कौन सा विश्लेषण प्रदान करते हैं?",
//         answer:
//           "हम विश्लेषण करते हैं कि उपयोगकर्ता किन पेजों पर जाते हैं, प्रत्येक पेज पर कितना समय बिताते हैं, और साइट से कब/कहां बाहर निकलते हैं। यह डेटा आपकी वेबसाइट या ऐप को बेहतर करने और सगाई बढ़ाने में मदद करता है।",
//       },
//     ],
//   };

  
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background">
//       {/* Hero Section */}
//       <section className="py-32 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-grid-white/10 mask-gradient" />
//         <div className="max-w-6xl mx-auto text-center relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-purple-600">
//               BOOM: Business Optimization Operation Model
//             </h1>
//             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Transform your digital presence into a powerful growth engine.
//             </p>
//           </motion.div>
//           <div className="mt-12 flex gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:scale-105 transition-transform"
//             >
//               Get Started
//             </Link>
//             <Link
//               href="#faqs"
//               className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full text-lg font-semibold hover:scale-105 transition-transform"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faqs" className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
//             <div className="flex justify-center gap-4 mb-6">
//               <button
//                 onClick={() => setLanguage("en")}
//                 className={`px-4 py-2 rounded-full ${
//                   language === "en" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
//                 } hover:bg-primary/80 transition`}
//               >
//                 English
//               </button>
//               <button
//                 onClick={() => setLanguage("hi")}
//                 className={`px-4 py-2 rounded-full ${
//                   language === "hi" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
//                 } hover:bg-primary/80 transition`}
//               >
//                 हिंदी
//               </button>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {faqs[language].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border"
//               >
//                 <h3 className="text-xl font-bold mb-3 text-primary">{faq.question}</h3>
//                 <p className="text-muted-foreground">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section id="services" className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Our Comprehensive Services</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Everything you need to transform your business operations and drive growth
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             <ServiceCard
//               icon={<Globe className="h-10 w-10" />}
//               title="Website Development"
//               description="Custom websites built with modern technology stack and best practices"
//               gradient="from-blue-500 to-cyan-500"
//             />
//             <ServiceCard
//               icon={<Code2 className="h-10 w-10" />}
//               title="Admin Panel"
//               description="Powerful dashboard to manage your content and monitor performance"
//               gradient="from-purple-500 to-pink-500"
//             />
//             <ServiceCard
//               icon={<BarChart3 className="h-10 w-10" />}
//               title="SEO Optimization"
//               description="On-page SEO to improve your search engine rankings"
//               gradient="from-orange-500 to-red-500"
//             />
//             <ServiceCard
//               icon={<Smartphone className="h-10 w-10" />}
//               title="Mobile Apps"
//               description="Native Android and iOS applications for broader reach"
//               gradient="from-green-500 to-emerald-500"
//             />
//             <ServiceCard
//               icon={<LineChart className="h-10 w-10" />}
//               title="Analytics & Tracking"
//               description="Detailed insights into customer behavior and business performance"
//               gradient="from-yellow-500 to-orange-500"
//             />
//             <ServiceCard
//               icon={<Sparkles className="h-10 w-10" />}
//               title="Operation Analysis"
//               description="Monthly operation review and optimization recommendations"
//               gradient="from-indigo-500 to-purple-500"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Flexible packages designed to meet your business needs and goals
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border hover:scale-105 transition-transform duration-300">
//               <div className="bg-primary/10 rounded-lg p-4 inline-block mb-4">
//                 <h3 className="text-2xl font-bold">Starter Package</h3>
//               </div>
//               <div className="text-4xl font-bold mb-6">₹30,000</div>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Custom Website Development</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Admin Dashboard</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>On-page SEO Optimization</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Portfolio Development</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>1 Month Operation Analysis</span>
//                 </li>
//               </ul>
//               <Link
//                 href="/contact"
//                 className="block w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl text-center text-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Get Started
//               </Link>
//             </div>
//             <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-primary relative hover:scale-105 transition-transform duration-300">
//               <div className="absolute -top-4 right-4 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
//                 Recommended
//               </div>
//               <div className="bg-primary/10 rounded-lg p-4 inline-block mb-4">
//                 <h3 className="text-2xl font-bold">Premium Package</h3>
//               </div>
//               <div className="text-4xl font-bold mb-6">₹67,000</div>
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Advanced Website Development</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Comprehensive Admin System</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Portfolio Website</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Android & iOS Mobile Apps</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>Advanced SEO Package</span>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <ArrowRight className="h-5 w-5 text-primary" />
//                   </div>
//                   <span>3 Months Operation Analysis</span>
//                 </li>
//               </ul>
//               <Link
//                 href="/contact"
//                 className="block w-full py-4 px-6 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-xl text-center text-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Get Premium
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function ServiceCard({ icon, title, description, gradient }: ServiceCardProps) {
//   return (
//     <div className="group bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border hover:scale-105 transition-transform duration-300">
//       <div
//         className={`mb-6 text-white bg-gradient-to-br ${gradient} p-4 rounded-lg inline-block group-hover:scale-110 transition-transform`}
//       >
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold mb-3">{title}</h3>
//       <p className="text-muted-foreground">{description}</p>
//     </div>
//   );
// }


import React from 'react';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-600 animate-pulse">
        Coming Soon... Please Wait
      </h1>
    </div>
  );
};

export default Page;
