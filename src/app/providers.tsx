"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Preloader from "@/components/preloader";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {loading ? (
          <Preloader />
        ) : (
          <>
            {children}
            <ProgressBar
              height="3px"
              color="#FF0080"
              options={{ showSpinner: false }}
              shallowRouting
            />
          </>
        )}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
