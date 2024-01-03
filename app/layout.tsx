import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// TODO: add book name inside title like: 久久閱讀-千秋夢
// TODO: add page number inside description
export const metadata: Metadata = {
  title: "久久讀書",
  description: "最全小說免費讀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-paperpink" lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* Google tag (gtag.js) */}
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      /> */}
      {/* <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', ${process.env.GA_MEASUREMENT_ID});
        `}
      </Script> */}
    </html>
  );
}
