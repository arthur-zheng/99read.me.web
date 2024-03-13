import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "久久读书，小说全本免费阅读，穿越，耽美，百合",
  description:
    "本站提供最全小说在线阅读，极佳操作体验。百合，耽美，穿越小说，完全免费,完美支持各种掌上PC终端移动阅读,欢迎广大书友留言讨论。",
  authors: [{ name: "priest" }, { name: "顾漫" }, { name: "墨香铜臭" }],
  category: "小说",
  keywords: [
    "网络小说",
    "免费读",
    "耽美小说",
    "百合小说",
    "穿越小说",
    "天官赐福小说",
    "纯爱小说",
  ],
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  //   googleBot: {
  //     index: false,
  //     follow: false,
  //     noimageindex: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-paperpink" lang="en">
      <head>
        {/* From zhenhunxiaoshuo.com */}
        <meta httpEquiv="content-language" content="zh-CN" />
        {/* disable user scaling is agaist accessibility */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        ></meta>
        <meta
          property="og:image"
          content="https://www.99read.me/logo.jpg"
        ></meta>
        {/* Link from https://realfavicongenerator.net */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- 安卓平台 chrome --> */}
        <meta name="mobile-web-app-capable" content="yes" />
        {/* <link rel="icon" sizes="192x192" href="/logo.jpg" /> */}
        {/* <!--  ios平台 safari --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="久久小说网" />
        {/* <link rel="apple-touch-icon-precomposed" href="/logo.jpg" /> */}
        {/* <!--  win8以上 平台 磁贴 --> */}
        <meta name="msapplication-TileImage" content="/logo.jpg" />
        <meta name="msapplication-TileColor" content="#0e90d2" />

        <meta name="mobile-web-app-capable" content="yes" />
        {/* <link rel="icon" sizes="192x192" href="/logo.jpg" /> */}
        {/* from 思兔 */}
        <meta name="robots" content="noarchive" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}
