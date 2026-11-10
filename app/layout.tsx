import type { Metadata } from "next";
import { Geologica, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geologica({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Outfit({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace",
  description: "Ace is an ai powered interview preparation platform that helps you prepare for your next interview with ease.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-page font-mono">
        {children}
      </body>
    </html>
  );
}
