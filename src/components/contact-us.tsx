"use client";

import Head from "next/head";
import HeroSection from "./contact/ContactHero";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import ExpertiseSection from "./contact/ExpertisSection";


export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Akamify</title>
        <meta
          name="description"
          content="Get in touch with Akamify for expert web development, Shopify solutions, and custom software development tailored to your business needs."
        />
        <meta
          name="keywords"
          content="contact Akamify, web development, Shopify development, software development, digital solutions"
        />
        <meta name="author" content="Akamify" />
      </Head>

      <div className="min-h-screen bg-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <HeroSection />
        <section className="py-10 md:py-10 relative">
          <div className="container mx-auto px-6 max-w-8xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
        <ExpertiseSection />
      </div>
    </>
  );
}