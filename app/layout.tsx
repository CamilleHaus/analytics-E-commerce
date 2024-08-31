import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/navbar";
import { ThemeProvider } from "@/providers/theme-providers";
import Sidebar from "@/components/navigation/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "E-Commerce Analytics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NavBar />
          <main className="flex">
            <Sidebar />
            <section className="min-h-screen flex-1">{children}</section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
