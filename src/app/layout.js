import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portofolio | Dimas Cahyo Margono",
  description:
    "Portfolio of Dimas Cahyo Margono. Specializing in robust web applications, machine learning integration, and high-performance interfaces.",
  keywords: ["software engineer", "full-stack", "machine learning", "portfolio"],
  icons: {
    icon: "/assets/icons/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#242120]">
        {children}
      </body>
    </html>
  );
}
