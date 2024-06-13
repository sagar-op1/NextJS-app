import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Sample app",
  description: "My First app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        {children}
        <Footer/>
        </body>
    </html>
  );
}
