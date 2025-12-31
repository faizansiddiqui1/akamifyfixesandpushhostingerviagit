"use client";
import { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Assuming we import autoTable for better tables if needed, but for now, we'll handle text.

export default function InvestorPage() {
  const textRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!textRef.current) {
      console.error("Text ref is not attached.");
      return;
    }

    const doc = new jsPDF("p", "pt", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 40;
    const maxLineWidth = pageWidth - 2 * margin;
    const lineHeight = 20; // Adjusted for readability
    const content = textRef.current.innerText;
    const splitText = doc.splitTextToSize(content, maxLineWidth);

    let yPosition = margin;
    splitText.forEach((line: any) => {
      if (yPosition + lineHeight > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    doc.save("Investor_Proposal.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans px-10 py-14">
      <h1 className="text-5xl font-extrabold text-center mb-16 text-blue-900 tracking-tight">
        EduManage Software – Your Opportunity to Invest in the Future of Education
      </h1>

      <div ref={textRef} className="max-w-4xl mx-auto text-gray-800 space-y-12 leading-loose">
        {/* Investment Model Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">
            Our Investment Model: Clear, Fair, and Built for Success
          </h2>
          <p className="mb-4">
            We're looking for smart investors to help us grow EduManage, our game-changing software for schools and colleges. This is your chance to join a fast-growing field in education technology. We've made our investment options simple and flexible to fit what works best for you. Here's how it breaks down:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Equity Investment:</strong> You become a part-owner of the company. For example, if our company is valued at 10 lakh INR before your investment, and you put in 1 lakh INR, you'd own 10%. This means you share in the long-term wins, like profits, future sales, or even going public. It's great if you believe in our growth over time.
            </li>
            <li>
              <strong>Profit-Sharing Option:</strong> Get a cut of our profits right away until you recover your investment plus an agreed return. No ownership involved, but you see money back sooner. We set clear limits so it's not open-ended.
            </li>
            <li>
              <strong>Hybrid Approach:</strong> Mix the two – start with profit sharing for quick returns, then convert part of it to equity once we hit key goals. This balances short-term cash with long-term potential.
            </li>
            <li>
              <strong>How We Make It Official:</strong> We'll spell out everything in a clear agreement – your investment amount, percentages, timelines, your say in decisions, ways to exit, and regular updates. We handle it with physical signatures and stamps for real security. You download, sign, send it back, and we countersign. It's all about trust and working together.
            </li>
            <li>
              <strong>Where Your Money Goes:</strong> We'll use it to improve the software, reach more customers, build better support, and keep innovating. This sets us up for big growth and steady profits.
            </li>
          </ul>
          <p className="mt-4">
            Investing with us isn't just about money – it's about building something that changes education for the better. We've seen huge interest already, and with your help, we can scale up fast.
          </p>
        </section>

        {/* Software Description Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">
            What is EduManage? A Complete Solution for Modern Education
          </h2>
          <p className="mb-4">
            EduManage is a powerful, all-in-one tool that helps schools, colleges, and universities run smoothly. It handles everything from daily tasks to big-picture planning, making life easier for everyone involved. We've designed it to be user-friendly, secure, and ready to grow with any institution. Here's what makes it stand out:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Core Features:</strong> Manage student admissions, track attendance, handle fees, schedule exams, calculate results, organize faculty, create timetables, run libraries, coordinate transport, and keep parents in the loop – all in one place.
            </li>
            <li>
              <strong>Smart Tools:</strong> Real-time dashboards show key data at a glance. Get reports and analytics to make better decisions. It's mobile-friendly, so you can access it anywhere, and secure logins ensure only the right people see sensitive info.
            </li>
            <li>
              <strong>Customization and Ease:</strong> Pick the modules you need, set up grading as you like, send automatic reminders, and connect with other systems like online payments or learning apps. No big training needed – it's intuitive for admins, teachers, students, and parents.
            </li>
            <li>
              <strong>Why It Matters:</strong> In today's world, education is going digital. EduManage cuts down on paperwork, reduces errors, and boosts efficiency. It helps schools focus on teaching and learning, not admin headaches. Plus, it scales from a small school to a large university network.
            </li>
            <li>
              <strong>Ongoing Support:</strong> We provide regular updates, quick help when needed, and features based on user feedback. This keeps EduManage ahead of the curve in a market that's exploding with demand for tech in education.
            </li>
          </ul>
          <p className="mt-4">
            EduManage isn't just software – it's a partner for better education. By investing, you're supporting a tool that improves outcomes for students and makes institutions more successful. We've already helped several schools save time and money, and the feedback is fantastic.
          </p>
        </section>

        {/* Additional Section: Market Opportunity */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">
            The Growing Market: Why Now is the Time to Invest
          </h2>
          <p className="mb-4">
            The EdTech industry is booming, especially in India and globally. With more schools going online post-pandemic, demand for tools like EduManage is skyrocketing. Here's a quick look:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>Market size expected to reach $10 billion in India by 2025.</li>
            <li>Over 1.5 million schools and colleges needing better management systems.</li>
            <li>Government push for digital education creating new opportunities.</li>
            <li>Competitors exist, but EduManage stands out with its affordability and all-in-one design.</li>
          </ul>
          <p className="mt-4">
            Imagine this growth: [Placeholder for a simple graph – e.g., bar chart showing market growth from 2020 to 2025]. We're positioned to capture a big share.
          </p>
        </section>

        {/* Additional Section: Financial Projections */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-800 border-b-2 border-blue-300 pb-2">
            Financial Outlook: Solid Returns Ahead
          </h2>
          <p className="mb-4">
            We're projecting strong growth based on current traction. Key highlights:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>Year 1: Break even with 500 institutions onboarded.</li>
            <li>Year 2: 30% profit margin on ₹5 crore revenue.</li>
            <li>Year 3: Scale to ₹20 crore, with international expansion.</li>
            <li>Risks are low – subscription model ensures steady income.</li>
          </ul>
          <p className="mt-4">
            Your investment will fuel this path to profitability.
          </p>
        </section>
      </div>

      <div className="text-center mt-16">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 text-white font-semibold px-10 py-5 rounded-xl hover:bg-blue-700 transition text-xl shadow-lg"
        >
          Download Your Investor Agreement Now
        </button>
      </div>
    </div>
  );
}