import { 
  Shield, 
  Smartphone, 
  Layout, 
  Code, 
  Database,
  MessageSquare,
  Globe,
  Zap
} from "lucide-react";

export const appFeatures = [
  {
    title: "User Interface & Navigation",
    description: "Modern and intuitive user experience",
    points: [
      "Custom animations & transitions",
      "Responsive layouts for all devices",
      "Intuitive navigation flows",
      "Modern UI components"
    ],
    icon: Layout
  },
  {
    title: "Security & Authentication",
    description: "Enterprise-grade security features",
    points: [
      "Biometric authentication",
      "End-to-end encryption",
      "Secure data storage",
      "Multi-factor authentication"
    ],
    icon: Shield
  },
  {
    title: "Backend Integration",
    description: "Powerful backend solutions",
    points: [
      "Real-time data sync",
      "Cloud storage integration",
      "API development",
      "Database management"
    ],
    icon: Database
  },
  {
    title: "Social & Engagement",
    description: "Build community and user engagement",
    points: [
      "Real-time chat & messaging",
      "Social media integration",
      "Push notifications",
      "User engagement analytics"
    ],
    icon: MessageSquare
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast app performance",
    points: [
      "Fast load times",
      "Smooth animations",
      "Offline capabilities",
      "Battery optimization"
    ],
    icon: Zap
  },
  {
    title: "Cross-Platform Support",
    description: "Reach users on any device",
    points: [
      "iOS & Android support",
      "Tablet optimization",
      "Web app integration",
      "Consistent experience"
    ],
    icon: Globe
  }
];

export const platformFeatures = {
  ios: {
    title: "iOS Development",
    description: "Native iOS applications with cutting-edge features",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2426",
    features: [
      {
        title: "Swift & SwiftUI",
        points: ["Modern Swift programming", "Native UI components", "iOS design guidelines", "App Store optimization"]
      },
      {
        title: "iOS Integration",
        points: ["Apple Pay integration", "iCloud sync", "Push notifications", "Siri shortcuts"]
      },
      {
        title: "iOS Security",
        points: ["Face ID/Touch ID", "Keychain services", "App privacy", "Data encryption"]
      }
    ]
  },
  android: {
    title: "Android Development",
    description: "Powerful Android apps for the world's most popular platform",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=2426",
    features: [
      {
        title: "Kotlin & Jetpack",
        points: ["Modern Kotlin development", "Material Design 3", "Jetpack Compose", "Play Store optimization"]
      },
      {
        title: "Android Integration",
        points: ["Google Pay integration", "Firebase services", "Background services", "Widget support"]
      },
      {
        title: "Android Security",
        points: ["Biometric auth", "SafetyNet API", "App signing", "Secure storage"]
      }
    ]
  }
}; 