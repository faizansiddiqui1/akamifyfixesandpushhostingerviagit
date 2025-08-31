import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">When to Choose Each Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Custom Website</h3>
            <ul className="space-y-3 text-black">
              <li>• When you need complete customization</li>
              <li>• For unique functionality requirements</li>
              <li>• Complex integration needs</li>
              <li>• Scalability is a priority</li>
              <li>• Long-term investment focus</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-green-600">WordPress</h3>
            <ul className="space-y-3 text-black">
              <li>• Content-focused websites</li>
              <li>• Blog-centric platforms</li>
              <li>• Small to medium businesses</li>
              <li>• Quick deployment needed</li>
              <li>• Budget-conscious projects</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-purple-600">Shopify</h3>
            <ul className="space-y-3 text-black">
              <li>• E-commerce focused business</li>
              <li>• Quick store setup needed</li>
              <li>• Built-in payment processing</li>
              <li>• Inventory management required</li>
              <li>• Marketing tools priority</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;