// app/ClientLayout.tsx (Client Component)
"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import LoadingSpin from "@/components/LoadingSpinner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleLoading = () => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    };
    handleLoading();
  }, [pathname]);

  if (!isMounted) {
    return <LoadingSpin />;
  }

  return (
    <>
      {loading && <LoadingSpin />}
      <Suspense fallback={<LoadingSpin />}>
        <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
          {children}
        </div>
      </Suspense>
    </>
  );
}
