import { Code, ShoppingBag, Layout } from 'lucide-react';

export const servicesData = [
  {
    id: 'custom',
    label: 'Custom Website',
    icon: Code,
    content: [
      {
        title: 'Custom Website Development',
        description: 'Tailored solutions built from the ground up to meet your specific needs.',
        features: [
          'Fully customizable design and functionality',
          'Optimized performance',
          'Scalable architecture',
          'Unique user experience',
        ],
        demoUrl: 'https://preview.themeforest.net/item/real-homes-wordpress-real-estate-theme/full_screen_preview/5373914?_ga=2.164637820.2120869639.1741254506-1570537280.1741254506',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
      },
      {
        title: 'SaaS Platform Development',
        description: 'Custom software-as-a-service platforms for your business needs.',
        features: [
          'Subscription management',
          'User authentication & roles',
          'API integrations',
          'Real-time analytics',
        ],
        demoUrl: 'https://preview.themeforest.net/item/saasty-sass-ai-software-startup-business-react-next-js-template/full_screen_preview/56270663?_ga=2.128372559.2120869639.1741254506-1570537280.1741254506',
        imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2426',
      },
      {
        title: 'Progressive Web App',
        description: 'Modern PWA development for enhanced user experience.',
        features: [
          'Offline functionality',
          'Push notifications',
          'App-like experience',
          'Cross-platform compatibility',
        ],
        demoUrl: 'https://example.com/pwa-demo',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2426',
      }
    ]
  },
  {
    id: 'wordpress',
    label: 'WordPress Website',
    icon: Layout,
    content: [
      {
        title: 'WordPress Development',
        description: 'Professional WordPress websites with powerful content management.',
        features: [
          'Easy content management',
          'Extensive plugin ecosystem',
          'SEO-friendly structure',
          'Regular updates and maintenance',
        ],
        demoUrl: 'https://example.com/wordpress-demo',
        imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2426',
      },
      {
        title: 'WordPress E-commerce',
        description: 'Build your online store with WooCommerce and WordPress.',
        features: [
          'WooCommerce integration',
          'Payment gateway setup',
          'Product management',
          'Order tracking system',
        ],
        demoUrl: 'https://example.com/woocommerce-demo',
        imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2426',
      },
      {
        title: 'WordPress Blog',
        description: 'Create a professional blog with advanced features.',
        features: [
          'Custom theme development',
          'Multi-author support',
          'Category management',
          'Newsletter integration',
        ],
        demoUrl: 'https://example.com/wp-blog-demo',
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2426',
      }
    ]
  },
  {
    id: 'shopify',
    label: 'Shopify Website',
    icon: ShoppingBag,
    content: [
      {
        title: 'Shopify Development',
        description: 'Professional e-commerce solutions powered by Shopify.',
        features: [
          'Secure payment processing',
          'Inventory management',
          'Mobile-responsive design',
          'Marketing tools integration',
        ],
        demoUrl: 'https://example.com/shopify-demo',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2426',
      },
      {
        title: 'Shopify Plus Store',
        description: 'Enterprise-level e-commerce solutions for large businesses.',
        features: [
          'High-volume transactions',
          'Advanced automation',
          'Custom checkout process',
          'International commerce',
        ],
        demoUrl: 'https://example.com/shopify-plus-demo',
        imageUrl: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2426',
      },
      {
        title: 'Shopify Marketplace',
        description: 'Multi-vendor marketplace solutions with Shopify.',
        features: [
          'Vendor management',
          'Commission system',
          'Automated payouts',
          'Vendor analytics',
        ],
        demoUrl: 'https://example.com/shopify-marketplace-demo',
        imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2426',
      }
    ]
  }
]; 