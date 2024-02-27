import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Millennium for Steam",
  description: "A community focused on extending the functionality of Steam®"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://i.imgur.com/9qYPFSA.png" type="image/x-icon" sizes="16x16"></link>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
