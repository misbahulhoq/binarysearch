import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@ant-design/v5-patch-for-react-19";
import Provider from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binary Search",
  description: "A platform to learn coding for free.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.svg" type="image/svg" sizes="50x32" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Provider>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />{" "}
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
