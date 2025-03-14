import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"antialiased font-sans"}>
        <Providers>
          <div className="flex min-h-screen  flex-col bg-gray-950 text-base font-normal text-black w-full">

            <Header/>
            <div className="flex-grow">
              {children}
            </div>
            <Footer/>

          </div>
        </Providers>

      </body>
    </html>
  );
}
