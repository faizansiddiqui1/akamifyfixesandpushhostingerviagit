"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

type BlogPost = {
  id: number;
  title: string;
  coverImage: string;
  excerpt: string;
  category: string;
  date: string;
  content: string;
};

export default function Blog() {
  // Dummy blog post data with full content added
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Digital Marketing Trends for 2023",
      coverImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Discover the key trends in digital marketing that you cannot afford to miss in 2023. From AI-driven insights to immersive ad formats, see what's next!",
      category: "Digital Marketing Growth",
      date: "Aug 10, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacinia urna. Mauris nec sapien dui. Praesent dapibus, ipsum in facilisis posuere, nisl tellus convallis nunc, in faucibus purus dolor quis urna. Donec tincidunt, ipsum vitae finibus ultricies, lectus magna fermentum dui, at egestas neque sem eget lorem. Sed placerat, mi in malesuada tristique, urna justo viverra ante, vel gravida erat nisl sed lectus. Proin a sollicitudin erat. Duis pretium ligula vel augue dictum, at tincidunt lectus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer consectetur, nunc ac finibus feugiat, velit libero auctor diam, eget consectetur eros sem eget ex.",
    },
    {
      id: 2,
      title: "Hiring the Right Digital Team",
      coverImage:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Learn how to identify and hire the perfect digital marketing team to drive your business forward in a competitive marketplace.",
      category: "Hiring",
      date: "Jul 15, 2023",
      content:
        "Vestibulum tristique ligula et quam accumsan, ut mattis urna lobortis. Nullam ac lacus sed orci suscipit malesuada. Donec efficitur, nisl sed scelerisque vulputate, turpis justo consequat lorem, sed tempus augue enim sit amet ipsum. Aliquam erat volutpat. Nulla facilisi. Curabitur at dignissim ipsum. Sed volutpat metus ut ligula blandit, in elementum libero pellentesque.",
    },
    {
      id: 3,
      title: "The Future of App Development",
      coverImage:
        "https://images.unsplash.com/photo-1555617117-eac3b04fad5c?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Explore the latest innovations in app development that are shaping the future of mobile engagement and customer experience.",
      category: "Digital Services",
      date: "Jun 20, 2023",
      content:
        "Phasellus ut ligula eget nisi ultricies consequat non in velit. Nulla facilisi. Proin volutpat sem ut sollicitudin volutpat. Etiam sagittis lorem nec malesuada dignissim. Sed iaculis libero ac lacinia porta. Vivamus ut dui in nunc tempor venenatis a ac ligula.",
    },
    {
      id: 4,
      title: "Optimizing Websites for Maximum Conversions",
      coverImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "This post provides actionable tips to enhance your website's user experience and dramatically boost your conversions.",
      category: "Digital Services",
      date: "May 05, 2023",
      content:
        "In hac habitasse platea dictumst. Maecenas quis lorem id eros faucibus commodo a eu urna. Donec faucibus justo vitae massa scelerisque, at sagittis sem congue. Suspendisse potenti. Sed lacinia, urna quis laoreet hendrerit, risus elit pretium quam, sit amet imperdiet arcu lorem ut nulla.",
    },
    {
      id: 5,
      title: "Maximizing ROI with Google Ads",
      coverImage:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Leverage data-driven strategies to optimize your Google Ads campaigns and see a significant boost in your ROI.",
      category: "Digital Marketing Growth",
      date: "Apr 22, 2023",
      content:
        "Suspendisse non dui vitae odio maximus malesuada. Vestibulum sit amet ante id sapien ultricies finibus. Donec euismod consectetur enim, sit amet eleifend velit commodo vel. Duis tincidunt, arcu sed fermentum vestibulum, orci quam dictum felis, a porttitor mi est ac eros.",
    },
    {
      id: 6,
      title: "Effective Social Media Management Strategies",
      coverImage:
        "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Discover the best practices for managing and growing your social media presence in today's fast-paced digital world.",
      category: "Digital Marketing Growth",
      date: "Mar 30, 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet lacinia urna. Mauris nec sapien dui. Praesent dapibus, ipsum in facilisis posuere, nisl tellus convallis nunc, in faucibus purus dolor quis urna. Donec tincidunt, ipsum vitae finibus ultricies, lectus magna fermentum dui, at egestas neque sem eget lorem. Sed placerat, mi in malesuada tristique, urna justo viverra ante, vel gravida erat nisl sed lectus. Proin a sollicitudin erat. Duis pretium ligula vel augue dictum, at tincidunt lectus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer consectetur, nunc ac finibus feugiat, velit libero auctor diam, eget consectetur eros sem eget ex.",
    },
    {
      id: 7,
      title: "Business Management in the Digital Era",
      coverImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Learn how digital tools are revolutionizing business management techniques across industries worldwide.",
      category: "Business Management",
      date: "Mar 10, 2023",
      content:
        "Vestibulum tristique ligula et quam accumsan, ut mattis urna lobortis. Nullam ac lacus sed orci suscipit malesuada. Donec efficitur, nisl sed scelerisque vulputate, turpis justo consequat lorem, sed tempus augue enim sit amet ipsum. Aliquam erat volutpat. Nulla facilisi. Curabitur at dignissim ipsum. Sed volutpat metus ut ligula blandit, in elementum libero pellentesque.",
    },
    {
      id: 8,
      title: "Leveraging Webinar Marketing for Lead Generation",
      coverImage:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Webinars are a powerful tool for generating leads. Learn effective strategies to create impactful webinar content.",
      category: "Digital Marketing Growth",
      date: "Feb 18, 2023",
      content:
        "Phasellus ut ligula eget nisi ultricies consequat non in velit. Nulla facilisi. Proin volutpat sem ut sollicitudin volutpat. Etiam sagittis lorem nec malesuada dignissim. Sed iaculis libero ac lacinia porta. Vivamus ut dui in nunc tempor venenatis a ac ligula.",
    },
    {
      id: 9,
      title: "The Art of Video Editing in Modern Marketing",
      coverImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      excerpt:
        "Explore the creative techniques in video editing that captivate audiences and drive engagement.",
      category: "Digital Services",
      date: "Jan 25, 2023",
      content:
        "Etiam porttitor, ligula quis pretium pharetra, risus est lobortis neque, vel fermentum mauris eros sit amet orci. Cras blandit velit eget velit hendrerit, eu bibendum velit tincidunt.",
    },
  ];

  // Number of blog posts visible initially
  const [visibleCount, setVisibleCount] = useState(6);
  const loaderRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to detect when to load more posts
  useEffect(() => {
    const currentLoader = loaderRef.current; // Store the current ref value

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 3, blogPosts.length));
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader); // Use the stored value in cleanup
      }
    };
  }, [blogPosts.length]);

  // State for selected blog post to display in the modal
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="relative cursor-none min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Head>
        <title>Our Blog | Digital Marketing Insights, Trends & Strategies</title>
        <meta
          name="description"
          content="Stay updated with the latest trends in digital marketing, business management, and digital services. Our blog provides expert insights, tips, and success stories to help you thrive in the digital era."
        />
        <meta
          name="keywords"
          content="Digital Marketing, Blog, Business Management, SEO, Growth Strategies, Social Media, Digital Services"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.yourwebsite.com/blog" />
        <meta
          property="og:title"
          content="Our Blog | Digital Marketing Insights, Trends & Strategies"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest trends in digital marketing, business management, and digital services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/blog" />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/path-to-og-image.jpg"
        />
      </Head>

      {/* Custom Cursor Elements */}
      <div
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="fixed w-8 h-8 border border-blue-500 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Header Section with updated gradient */}
      <header className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="container mx-auto px-4 text-center pt-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white max-w-2xl mx-auto"
          >
            Stay updated with the latest trends in digital marketing, business management,
            digital services, and growth strategies. Discover expert insights and success
            stories.
          </motion.p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
                width={1200}
                height={800}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-medium text-blue-500">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="mt-auto inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Loader element observed for lazy loading */}
        <div ref={loaderRef} className="mt-10 text-center">
          {visibleCount < blogPosts.length && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Loading more posts...
            </p>
          )}
        </div>
      </section>

      {/* Modal Popup for Full Blog Post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl font-bold hover:text-gray-900 transition"
            >
              ×
            </button>
            <Image
              src={selectedPost.coverImage}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
              width={1200}
              height={800}
            />
            <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              {selectedPost.date}
            </p>
            <div className="prose dark:prose-dark max-w-none">
              <p>{selectedPost.content}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}