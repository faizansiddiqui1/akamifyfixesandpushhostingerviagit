"use client"
import { useState } from 'react';
import TemplateCard from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import templates from '@/utils/demoWebUiData';

export default function DemoWebUi() {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('All');
    // State to control showing all templates
    const [showAll, setShowAll] = useState(false);

    // Filter templates based on the active tab
    let filteredTemplates = templates.filter((template) => {
        if (activeTab === 'All') return true;
        return template.category === activeTab;
    });

    // Show all templates if showAll is true, otherwise limit to 8
    filteredTemplates = showAll ? filteredTemplates : filteredTemplates.slice(0, 8);
    const router = useRouter();

    // Toggle showAll state
    const handleToggleTemplates = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="min-h-screen bg-white py-16">
            {/* Hero Section */}
            <section className="text-center py-14 bg-white">
                <h1 className="text-5xl font-bold">EXPLORE AND REMIX TEMPLATES</h1>
                <p className="text-gray-600 mt-4">
                    Remix a template and start customizing: the possibilities are endless!
                </p>
                <Link href={"/websiteDevelopment"}>
                    <Button className='mt-5 h-11 text-sm bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all'>
                        Get Started Now
                    </Button>
                </Link>
            </section>

            {/* Filter Bar */}
            <div className="px-8 mb-8 overflow-x-scroll">
                <div className="flex space-x-4 w-fit overflow-x-hidden pb-4 scrollbar-hide">
                    {[
                        'All',
                        'Digital Marketing Website',
                        'LMS Website',
                        'Ecommerce Website',
                        'Studio Website',
                        'Hotel Website',
                        'Laptop Repairing Website',
                        'Transportation Website',
                        'Real Estate Marketplace Website',
                        'SaaS',
                        'Other'
                    ].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveTab(filter)}
                            className={`px-4 py-2 min-w-fit rounded-full ${activeTab === filter ? 'bg-blue-600' : 'bg-gray-100'} hover:bg-blue-400 transition`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Template Grid */}
            <div className="px-8 pb-12 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {activeTab === 'Other' ? (
                        <div className="col-span-full text-center py-8">
                            <p className="text-gray-600 text-lg mb-4">
                                Looking for other category or business website demos? Please contact us for custom solutions!
                            </p>
                            <Link href="/contactUs">
                                <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    ) : filteredTemplates.length > 0 ? (
                        filteredTemplates.map((template, index) => (
                            <div className='p-2 border rounded-lg' key={index}>
                                <TemplateCard key={index} {...template} />
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-600">
                            No templates found for this category.
                        </p>
                    )}
                </div>
                {/* Show button only if there are more than 8 templates and not in Other tab */}
                {activeTab !== 'Other' && 
                 templates.filter((template) => activeTab === 'All' || template.category === activeTab).length > 8 && (
                    <div className="text-center mt-8">
                        <Button 
                            onClick={handleToggleTemplates}
                            className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}