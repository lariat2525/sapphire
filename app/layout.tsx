"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";
import Footer from "@/components/layouts/articles/Footer";
import Header from "@/components/layouts/articles/Header";
// FIXME: レイアウトのデザインを後で直す

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <title>Title</title>
        <meta name="description" content="Description" />
      </head>
      <RecoilRoot>
        <body className="bg-primary-color">
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </RecoilRoot>
    </html>
  );
}
