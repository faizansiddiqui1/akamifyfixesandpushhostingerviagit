import dynamic from "next/dynamic";

// Client component (theme toggle, animations, DOM APIs)
const OurTeam = dynamic(() => import("./components/OurTeam"), { ssr: false });

/* =========================
   SEO METADATA (NEXT.JS)
   ========================= */
export const metadata = {
  title: "Our Team | Akamify Digital – Growth-Focused Developers & Marketers & Ecommerce Solution",
  description:
    "Meet the expert team at Akamify Digital. Our developers, designers, marketers, and strategists help brands scale through data-driven digital solutions.",
  keywords: [
    "akamify",
    "Akamify team",
    "faizan siddiqui",
    "faizan siddiqui team",
    "faizan siddiqui digital team",
    "akamify digital team",
    "ecommerce by faizan siddiqui",
    "india's no 1 ecommerce solution company",
    "digital marketing agency team",
    "software development team India",
    "Software Engineer Faizan Siddiqui",
    "website development",
    "branding experts",
    "website developer",
    "mobile app developer",
    "andoroid app developer",
    "ios app developer",
    "software developer",
    "SaaS company in india",
    "performance marketing team",
  ],
  alternates: {
    canonical: "https://akamify.com/our-team",
  },
  openGraph: {
    title: "Meet Our Expert Team | Akamify Tech",
    description:
      "Discover the talented professionals behind Akamify Digital—developers, software engineer, and marketers driving measurable growth.",
    url: "https://akamify.com/our-team",
    siteName: "Akamify Digital",
    images: [
      {
        url: "https://akamify.com/seo/our-team-cover.png",
        width: 1200,
        height: 630,
        alt: "Akamify Digital Expert Team",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Akamify Tech",
    description:
      "Meet the experts behind Akamify Digital—building scalable brands through strategy, tech, and marketing.",
    images: ["https://akamify.com/seo/our-team-cover.png"],
  },
};

/* =========================
   TEAM DATA FOR SCHEMA (ALL 17)
   ========================= */
const teamForSchema = [
  { name: "Akram Khan", jobTitle: "Content Writer", image: "https://akamify.com/akamifyTeam/10.png" },
  { name: "Azhar Akhtar", jobTitle: "Backend Developer", image: "https://akamify.com/akamifyTeam/7.png" },
  { name: "Yasir Arafat", jobTitle: "Frontend Developer", image: "https://akamify.com/akamifyTeam/4.png" },
  { name: "Faizan Siddiqui", jobTitle: "Software Engineer", image: "https://akamify.com/akamifyTeam/11.png" },
  { name: "Sameer Ansari", jobTitle: "Android Developer", image: "https://akamify.com/akamifyTeam/6.png" },
  { name: "Prashant Kumar", jobTitle: "WordPress Developer & Sales", image: "https://akamify.com/akamifyTeam/13.png" },
  { name: "Kartik Rajpoot", jobTitle: "Meta Ads Expert", image: "https://akamify.com/akamifyTeam/8.png" },
  { name: "Anushka Jakhad", jobTitle: "Graphic Designer", image: "https://akamify.com/akamifyTeam/12.png" },
  { name: "Rani Rai", jobTitle: "Video Editor & Post Production", image: "https://akamify.com/akamifyTeam/3.png" },
  { name: "Tasharika Rajpal", jobTitle: "Finance & Operations", image: "https://akamify.com/akamifyTeam/2.png" },
  { name: "Prince Vineet", jobTitle: "Counselor Head", image: "https://akamify.com/akamifyTeam/14.png" },
  { name: "Rahul Raj", jobTitle: "Script Writer & Meta Ads", image: "https://akamify.com/akamifyTeam/15.png" },
  { name: "Kapil Rajpoot", jobTitle: "Shopify Developer", image: "https://akamify.com/akamifyTeam/1.png" },
  { name: "Suraj Singh", jobTitle: "Video & Social Media Manager", image: "https://akamify.com/akamifyTeam/16.png" },
  { name: "Annan Hussain", jobTitle: "Video Shooter", image: "https://akamify.com/akamifyTeam/17.png" },
  { name: "Riza Naaz", jobTitle: "Content Creator & Sales", image: "https://akamify.com/akamifyTeam/5.png" },
];

/* =========================
   JSON-LD SCHEMA
   ========================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://akamify.com/#organization",
      name: "Akamify Digital",
      url: "https://akamify.com",
      logo: "https://akamify.com/seo/logo.png",
      description:
        "Akamify Digital is a growth-focused digital agency specializing in development, performance marketing, branding, and eCommerce solutions.",
      sameAs: [
        "https://www.instagram.com/akamify_tech/",
        "https://in.linkedin.com/in/akamify-tech-6b0bb4361",
        "https://x.com/akamify?s=21",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "business inquiries",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },

    ...teamForSchema.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      image: person.image,
      worksFor: {
        "@id": "https://akamify.com/#organization",
      },
    })),
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client-side Team Page UI */}
      <OurTeam />
    </>
  );
}