import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Dany Lachapelle | Portfolio",
  description: "Portfolio de Dany Lachapelle - Développeur Full-Stack Web & Mobile",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      </body>
      </html>
  );
}