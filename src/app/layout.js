import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/AllPage/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArachnoVa",
  description: "ArachnoVa Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex flex-col">{children}</div>
      </body>
    </html>
  );
}
