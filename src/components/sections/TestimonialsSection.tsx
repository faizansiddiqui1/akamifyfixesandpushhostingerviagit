"use client";

import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Yadav",
    title: "Founder, Digital Adbird",
    handle: "@digitaladbird",
    quote:
      '“Akamify built my business website with strong SEO, easy lead management, smooth payment integration, and it handles 10M+ monthly traffic with zero server cost.”',
    imageLink: "https://digitaladbird.com/images/digitalAdBird.png",
  },
  {
    name: "Mr. Rajesh Kumar Chawla",
    title: "Founder & CEO, Midland India",
    handle: "@midlandindia",
    quote:
      '“The Akamify team handled everything for my store. From graphics and video editing to payment setup, they made it simple and helped increase my sales.”',
    imageLink:
      "https://midlandindia.com/cdn/shop/files/Midland_Logo.png?v=1709872687&width=75",
  },
  {
    name: "Anuj Chauhan",
    title: "Director, Oxford Group of Institutions",
    handle: "@oxfordinstitution",
    quote:
      '“They made our admission process very easy and smooth. They also handled all our digital marketing, website, and server work perfectly with great support.”',
    imageLink:
      "https://oxfordgroupofinstitution.com/(S(rdxuu3yjc101acyycc0sk5qt))/images/Logo.png",
  },
  {
    name: "India Hotels Owner",
    title: "Hotel Manager: Taj, Vista, etc.",
    handle: "@hotelmanager",
    quote:
      '“The hotel management system makes everything easy. Our bookings increased, more customers returned, and marketing became simple. It really helped us grow faster.”',
    imageLink:
      "https://img.freepik.com/premium-vector/hotel-icon-logo-vector-design-template_827767-3569.jpg",
  },
  {
    name: "Indian Hospital Owner",
    title: "Hospital Owner: MAX, Apollo, Fortis, etc.",
    handle: "@hospitalowner",
    quote:
      '“The patient portal is very easy to use. I can check my reports, book appointments, and view my medical history anytime. No more waiting at the hospital desk.”',
    imageLink:
      "https://static.vecteezy.com/system/resources/previews/011/640/711/non_2x/simple-modern-hospital-logo-with-healthcare-medical-template-vector.jpg",
  },
  {
    name: "E-commerce Brand Owner",
    title: "Online Store Business",
    handle: "@ecommercebrand",
    quote:
      '“Akamify set up our complete online store with product catalog, payment gateway, and marketing automation. Now we get consistent online sales every day.”',
    imageLink: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
  },
  {
    name: "Restaurant Business Owner",
    title: "Food & Dining Industry",
    handle: "@restaurantbiz",
    quote:
      '“Our restaurant website with table booking and food delivery system boosted orders and improved customer experience. Online promotions also helped us reach new customers.”',
    imageLink: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    name: "Real Estate Business Owner",
    title: "Builder & Property Developer",
    handle: "@realestatebiz",
    quote:
      '“Akamify created a professional real estate website with property listings, lead forms, and virtual tours. It made client handling and sales much faster.”',
    imageLink: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
  },
  {
    name: "School Owner",
    title: "Education & Institutions",
    handle: "@educationbiz",
    quote:
      '“Our online learning system and website made admissions, fee collection, and online classes super easy. Parents and students love the digital experience.”',
    imageLink: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  },
];

type TestimonialProps = {
  name: string;
  title: string;
  handle: string;
  quote: string;
  imageLink: string;
};

const TestimonialCard = ({
  name,
  title,
  handle,
  quote,
  imageLink,
}: TestimonialProps) => (
  <div className="w-[90vw] sm:w-[300px] md:w-[340px] max-w-full flex-shrink-0 bg-white/90 border border-gray-200 backdrop-blur-md rounded-2xl p-6 mx-3 shadow-md hover:shadow-xl transition-all overflow-hidden">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-blue-200 shadow-inner">
        <Image
          src={imageLink}
          alt={`${name} - ${title}`}
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-gray-800 text-base truncate">{name}</h4>
        <p className="text-sm text-gray-500 truncate">{title}</p>
        <p className="text-xs italic text-gray-400 truncate">{handle}</p>
      </div>
    </div>
    <p className="text-gray-700 text-sm italic break-words">{quote}</p>
  </div>
);

const TestimonialsMarquee = () => {
  return (
    <section className="bg-gradient-to-br from-[#2538ffb0] to-[#ff00ff] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-10">
          Client <span className="text-blue-400">Love</span> for Akamify
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-6">
            {[...testimonials, ...testimonials].map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
