import Head from "next/head";
import Link from "next/link";

const qualities = [
  {
    title: "Creative & Strategic Thinkers",
    description: "Bring innovative ideas and smart strategies to grow a digital platform."
  },
  {
    title: "Business-Oriented Mindset",
    description: "Spot opportunities in the digital economy and build sustainable growth."
  },
  {
    title: "Investment-Ready Approach",
    description: "Commit to the project’s success with a minimum investment of ₹1 lakh, with flexibility for further contributions."
  },
  {
    title: "Passion for Technology",
    description: "Believe in the power of IT, AI, and digital platforms to transform lives."
  },
  {
    title: "Professional & Ethical",
    description: "Value respect, transparency, and integrity in partnerships."
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Head>
        <title>Akamify - Business Partners Wanted</title>
        <meta name="description" content="Join Akamify as a visionary business partner to build a groundbreaking digital platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Akamify: Build the Future with Us!</h1>
          <p className="mt-2 text-lg">Seeking 2 visionary business partners to create a game-changing digital platform.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Akamify’s Vision</h2>
          <p className="text-gray-600">
          We are excited to announce the launch of an innovative digital project that has the potential to create a major impact — just like how platforms like Telegram and X (formerly Twitter) changed the world.
          </p>
        </section>

        {/* Who We’re Looking For */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We’re Looking For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-blue-600">{quality.title}</h3>
                <p className="mt-2 text-gray-600">{quality.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Project</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Platform Type:</strong> AI-driven, social engagement, and community-focused digital platform.</li>
            <li><strong>Location:</strong> Ahmedabad, Gujarat (office to be finalized with partners).</li>
            <li><strong>Vision:</strong> Create a scalable platform with global reach.</li>
          </ul>
        </section>
        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Project</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Platform Type:</strong> AI-driven, social engagement, and community-focused digital platform.</li>
            <li><strong>Location:</strong> Ahmedabad, Gujarat (office to be finalized with partners).</li>
            <li><strong>Vision:</strong> Create a scalable platform with global reach.</li>
          </ul>
        </section>

        {/* Next Steps */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Next Steps</h2>
          <p className="text-gray-600 mb-4">
            After initial discussions, we’ll host a business meetup in Ahmedabad to share the full vision, strategy, revenue model, and partnership details. 
            Meet the founding team, share ideas, and explore how we can work together.
          </p>
          <Link href="https://akamify.com/contactUs" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </button>
          </Link>
        </section>

        {/* Why Akamify */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Akamify?</h2>
          <p className="text-gray-600">
            A single bold idea can change the world. Akamify is that idea in action. 
            Join us to be part of a transformative journey and build something extraordinary.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>Ready to shape the future? <Link href="https://akamify.com/contactUs" target="_blank" className="underline" rel="noopener noreferrer">Fill out the interest form</Link> or contact us directly.</p>
          <p className="mt-2">Only serious and professional individuals will be considered.</p>
          <p className="mt-4 font-bold">Let’s build the future with Akamify! 🚀</p>
        </div>
      </footer>
    </div>
  );    
};

export default Home;