"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Title</title>
        <meta name="description" content="Description" />
      </head>
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  );
}
