import "./globals.css";
import { AuthProvider } from "./AuthContext";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Cursor from "@/components/Cursor";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <head>
        <title>Akamify Software Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/akamifyLogo.png" sizes="any" type="image/png" />

        {/* ✅ SEO Tags */}
        <meta
          name="description"
          content="Akamify - Best Website Development & Digital Marketing Company in Farrukhabad, Uttar Pradesh. Expert in WordPress development, business management solutions, and top-ranked digital marketing services across India."
        />
        <meta
          name="keywords"
          content="Website Development, Coding Website Development, Business Management, WordPress Website Development, Digital Marketing Agency in India, Top Web Development Company in India, Digital Marketing Company in Farrukhabad, Website Development Company in Uttar Pradesh, Akamify Website Development, Best Digital Marketing Services India"
        />
        <meta name="author" content="akamify" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Grow your business with Akamify" />
        <meta
          property="og:description"
          content="If you are a businessman then my services for you are like Website Development, Google Ads, Meta Ads, GMB"
        />
        <meta property="og:url" content="https://akamify.com" />

        {/* ✅ External Script */}
        <script
          src="https://cdn.jotfor.ms/agent/embedjs/0198b91cdb22773b9c4d0616b5dd032a5511/embed.js"
          async
        ></script>
      </head>

      <body className="overflow-x-hidden">
        <Cursor />
        <AuthProvider>
          <Header />
          <main className="relative min-h-screen">
            <ClientLayout>{children}</ClientLayout>
          </main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
