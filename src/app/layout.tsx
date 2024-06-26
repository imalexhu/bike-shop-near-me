import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
// eslint-disable-next-line new-cap
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bike Shop Near Me",
  description: "Finds bike shop near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body
        className={inter.className}>{children}</body>
    </html>
  );
}
