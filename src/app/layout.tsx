import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { AdsScript } from "@/components/ads/ads-script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathias Everson",
  description: "Mathias Everson is a Digital Team Lead at Threesides Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <TooltipProvider>
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
        <AdsScript />
      </body>
    </html >
  );
}
