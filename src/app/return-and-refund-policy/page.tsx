import React from 'react';

export default function ReturnRefundPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">Return & Refund Policy</h1>

      <div className="space-y-6 bg-white shadow-xl rounded-2xl p-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Project Initiation and Refund Eligibility</h2>
          <p>
            At Akamify, we prioritize transparency and client satisfaction. Please note that once a project has
            commenced—meaning our team has begun work based on the agreed-upon scope and deliverables—refunds are
            not available. This policy ensures fair compensation for the time and resources allocated to your project.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Advance Payments</h2>
          <p>
            All advance payments made prior to project initiation are non-refundable. These funds secure your
            project&apos;s place in our schedule and cover preliminary preparations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Client Responsibilities</h2>
          <p>
            Clients are expected to provide necessary information, feedback, and approvals in a timely manner.
            Delays in communication or provision of materials may impact project timelines and are not grounds for refunds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Service-Specific Policies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Website and App Development:</strong> Once design and development work has started, refunds are not available.
            </li>
            <li>
              <strong>Digital Marketing Services:</strong> Due to the nature of digital marketing campaigns and associated costs,
              refunds are not provided once campaigns have been launched.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Exceptional Circumstances</h2>
          <p>
            In rare cases where Akamify is unable to deliver the agreed-upon services due to unforeseen circumstances,
            we will assess the situation and may offer a partial or full refund at our discretion.
          </p>
          <p className="mt-2">
            If your project is not completed due to reasons from our end, you will be eligible for a full refund. However, if the delay or non-completion
            is due to lack of communication, delay in feedback, or failure to provide necessary information from the client side,
            no refund will be provided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Akamify Commitment</h2>
          <p>
            At Akamify, we are committed to delivering high-quality digital solutions tailored to your business needs. We specialize
            in website development, mobile apps, digital marketing, and branding. Our team works diligently to ensure each
            client receives the best possible experience, and we continuously aim to improve our services and client support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="mb-2">For any questions or concerns regarding this policy, please contact us at:</p>
          <ul className="list-disc list-inside">
            <li>Email: <a href="mailto:support@akamify.com" className="text-indigo-600 underline">support@akamify.com</a></li>
            <li>Phone: +91-7317322775</li>
            <li>Address: [Gujrat Ahmedabad]</li>
          </ul>
        </section>

        <footer className="text-sm text-gray-500 mt-6">
          *This policy is subject to change without prior notice. Please review it periodically for any updates.*
        </footer>
      </div>
    </div>
  );
}