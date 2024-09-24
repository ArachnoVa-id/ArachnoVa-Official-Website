import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/AllPage/NavBar/Navbar";
import Footer from "@/components/AllPage/Footer/Footer";
import Script from "next/script"; // Import Script

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArachnoVa",
  description: "ArachnoVa Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4EXCWJLFZ8"></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4EXCWJLFZ8');
        `}
      </Script>
      <body>
        <Navbar />
        <div className="flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
