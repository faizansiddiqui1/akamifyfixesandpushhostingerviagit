export interface Service {
    name: string;
    basePrice: number;
    description?: string;
    included?: boolean;
    details?: string;
  }
  
  export interface ServiceData {
    [key: string]: {
      [key: string]: boolean;
    };
  }
  
  export interface WebsiteType {
    name: string;
    basePrice: number;
    description: string;
    features: Service[];
  }
  
  export interface DeliverySpeed {
    id: 'fast' | 'medium' | 'slow';
    name: string;
    days: string;
    multiplier: number;
  }
  
  export const deliverySpeeds: DeliverySpeed[] = [
    { id: 'fast', name: 'Express Delivery', days: '1-3 days', multiplier: 1.5 },
    { id: 'medium', name: 'Standard Delivery', days: '5-10 days', multiplier: 1.2 },
    { id: 'slow', name: 'Regular Delivery', days: '10-30 days', multiplier: 1 },
  ];
  
  export const websiteTypes: WebsiteType[] = [
    {
      name: 'Portfolio Website',
      basePrice: 10000,
      description: 'Professional portfolio website to showcase your work',
      features: [
        { 
          name: 'Responsive Design',
          basePrice: 2000,
          description: 'Mobile-friendly layout',
          details: 'A fully responsive design that adapts perfectly to all screen sizes - mobile phones, tablets, laptops, and desktops.',
          included: true
        },
        {
          name: 'Project Gallery',
          basePrice: 2000,
          description: 'Interactive project showcase',
          details: 'A beautifully designed gallery to showcase your work with filtering options and lightbox image viewing.',
          included: true
        },
        {
          name: 'Contact Form',
          basePrice: 1500,
          description: 'Professional contact form',
          details: 'Advanced contact form with form validation and email notifications.',
          included: true
        },
        {
          name: 'About Section',
          basePrice: 1500,
          description: 'Detailed about page',
          details: 'A comprehensive about section featuring your bio, professional journey, and achievements.',
          included: true
        },
        {
          name: 'Skills Section',
          basePrice: 1500,
          description: 'Visual skills representation',
          details: 'Interactive skills visualization with progress bars and skill categories.',
          included: true
        },
        {
          name: 'Testimonials',
          basePrice: 1500,
          description: 'Client testimonials section',
          details: 'Showcase client feedback with a testimonials slider.',
          included: true
        },
        {
          name: 'Social Media Integration',
          basePrice: 2000,
          description: 'Social media links and feeds',
          details: 'Integration with all major social media platforms, including live feeds and share buttons.'
        },
        {
          name: 'Blog Section',
          basePrice: 3000,
          description: 'Blog for regular updates',
          details: 'Full-featured blog with categories, tags, and search functionality.'
        },
        {
          name: 'SEO Optimization',
          basePrice: 2500,
          description: 'Basic SEO setup',
          details: 'Complete SEO optimization including meta tags, sitemap, and schema markup.'
        },
        {
          name: 'Analytics Integration',
          basePrice: 2000,
          description: 'Traffic tracking',
          details: 'Integration with Google Analytics to monitor website traffic and user behavior.'
        }
      ]
    },
    {
      name: 'E-commerce Website',
      basePrice: 25000,
      description: 'Full-featured online store',
      features: [
        {
          name: 'Product Catalog',
          basePrice: 5000,
          description: 'Organized product listing',
          details: 'Advanced product catalog with categories, filters, and search functionality.',
          included: true
        },
        {
          name: 'Shopping Cart',
          basePrice: 5000,
          description: 'Advanced cart functionality',
          details: 'Feature-rich shopping cart with real-time updates and saved items.',
          included: true
        },
        {
          name: 'Payment Gateway',
          basePrice: 5000,
          description: 'Secure payment processing',
          details: 'Integration with major payment gateways including Stripe and PayPal.',
          included: true
        },
        {
          name: 'Inventory Management',
          basePrice: 5000,
          description: 'Stock tracking system',
          details: 'Complete inventory management system with stock alerts.',
          included: true
        },
        {
          name: 'Order Management',
          basePrice: 5000,
          description: 'Order processing system',
          details: 'Comprehensive order management with status tracking.',
          included: true
        },
        {
          name: 'Product Search',
          basePrice: 5000,
          description: 'Advanced search functionality',
          details: 'Powerful search engine with filters and autocomplete.'
        },
        {
          name: 'Product Reviews',
          basePrice: 5000,
          description: 'Customer review system',
          details: 'Customer review system with ratings and moderation tools.'
        },
        {
          name: 'Discount System',
          basePrice: 5000,
          description: 'Coupon management',
          details: 'Flexible discount system with coupon codes and bulk discounts.'
        },
        {
          name: 'Analytics Dashboard',
          basePrice: 5000,
          description: 'Sales analytics',
          details: 'Comprehensive analytics dashboard with sales reports.'
        },
        {
          name: 'Customer Accounts',
          basePrice: 5000,
          description: 'User account system',
          details: 'Secure customer accounts with order history and saved addresses.'
        }
      ]
    },
    {
      name: 'Management System',
      basePrice: 20000,
      description: 'Business management and administration system',
      features: [
        {
          name: 'User Management',
          basePrice: 4000,
          description: 'Role-based access control',
          details: 'Advanced user management with role-based permissions.',
          included: true
        },
        {
          name: 'Dashboard',
          basePrice: 4000,
          description: 'Interactive analytics dashboard',
          details: 'Customizable dashboard with real-time metrics.',
          included: true
        },
        {
          name: 'Report Generation',
          basePrice: 4000,
          description: 'Custom report builder',
          details: 'Flexible report builder with customizable templates.',
          included: true
        },
        {
          name: 'Task Management',
          basePrice: 4000,
          description: 'Task tracking system',
          details: 'Complete task management with assignments and deadlines.',
          included: true
        },
        {
          name: 'Document Storage',
          basePrice: 4000,
          description: 'Secure document management',
          details: 'Secure document management with version control.',
          included: true
        },
        {
          name: 'Calendar System',
          basePrice: 4000,
          description: 'Event scheduling',
          details: 'Integrated calendar system with event scheduling.'
        },
        {
          name: 'Notification System',
          basePrice: 4000,
          description: 'Real-time notifications',
          details: 'Real-time notification system with email and in-app alerts.'
        },
        {
          name: 'Data Export',
          basePrice: 4000,
          description: 'Data export functionality',
          details: 'Flexible data export with multiple format options.'
        },
        {
          name: 'Audit Logs',
          basePrice: 4000,
          description: 'Activity tracking',
          details: 'Comprehensive audit logging with user actions tracking.'
        },
        {
          name: 'API Integration',
          basePrice: 4000,
          description: 'Third-party integrations',
          details: 'API integration capabilities with popular business tools.'
        }
      ]
    },
    {
      name: 'LMS Website',
      basePrice: 30000,
      description: 'Learning Management System',
      features: [
        {
          name: 'Course Management',
          basePrice: 6000,
          description: 'Course creation and organization',
          details: 'Complete course management with curriculum builder.',
          included: true
        },
        {
          name: 'Student Dashboard',
          basePrice: 6000,
          description: 'Student progress tracking',
          details: 'Personalized student dashboard with course progress.',
          included: true
        },
        {
          name: 'Content Library',
          basePrice: 6000,
          description: 'Learning material storage',
          details: 'Centralized content library with document management.',
          included: true
        },
        {
          name: 'Assessment System',
          basePrice: 6000,
          description: 'Quiz and test platform',
          details: 'Comprehensive assessment system with multiple question types.',
          included: true
        },
        {
          name: 'Progress Tracking',
          basePrice: 6000,
          description: 'Learning progress monitoring',
          details: 'Detailed progress tracking with completion rates.',
          included: true
        },
        {
          name: 'Discussion Forums',
          basePrice: 6000,
          description: 'Student interaction platform',
          details: 'Interactive discussion forums with topic categorization.'
        },
        {
          name: 'Video Integration',
          basePrice: 6000,
          description: 'Video lesson support',
          details: 'Advanced video platform integration with streaming support.'
        },
        {
          name: 'Certificate System',
          basePrice: 6000,
          description: 'Course completion certificates',
          details: 'Automated certificate generation with custom templates.'
        },
        {
          name: 'Assignment System',
          basePrice: 6000,
          description: 'Assignment management',
          details: 'Complete assignment management with submission tracking.'
        },
        {
          name: 'Analytics Dashboard',
          basePrice: 6000,
          description: 'Learning analytics',
          details: 'Comprehensive analytics dashboard with learning metrics.'
        }
      ]
    }
  ];
  
  export const services: { [key: string]: Service[] } = {
    website: websiteTypes[0].features,
    app: [
      { name: 'Login System', basePrice: 4000, description: 'Secure authentication system' },
      { name: 'Push Notifications', basePrice: 2500, description: 'Real-time push notifications' },
      { name: 'Social Media Login', basePrice: 3500, description: 'Social media integration' },
      { name: 'In-App Purchases', basePrice: 5000, description: 'Secure in-app purchase system' },
      { name: 'Offline Mode', basePrice: 3000, description: 'Full offline functionality' },
    ],
    seo: [
      { name: 'On-Page SEO', basePrice: 5000, description: 'Complete on-page optimization' },
      { name: 'Off-Page SEO', basePrice: 6000, description: 'Comprehensive off-page SEO' },
      { name: 'Keyword Research', basePrice: 4000, description: 'In-depth keyword analysis' },
      { name: 'Google Analytics Setup', basePrice: 3500, description: 'Analytics setup and tracking' },
    ],
    social: [
      { name: 'Meta Ads', basePrice: 5000, description: 'Facebook & Instagram ad campaigns' },
      { name: 'Google Ads', basePrice: 8000, description: 'Google search and display ads' },
      { name: 'YouTube Ads', basePrice: 7000, description: 'Video ad campaign setup' },
      { name: 'Lead Generation', basePrice: 6000, description: 'Lead generation campaign setup' },
    ],
  };
  
  export const initialServiceData: ServiceData = {
    website: Object.fromEntries(websiteTypes[0].features.map(service => [service.name, service.included || false])),
    app: Object.fromEntries(services.app.map(service => [service.name, false])),
    seo: Object.fromEntries(services.seo.map(service => [service.name, false])),
    social: Object.fromEntries(services.social.map(service => [service.name, false])),
  };