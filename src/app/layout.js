import { Inter } from "next/font/google";
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Millennium",
  description: "Apply themes/skins/customization the new version of the Steam® Client. A community focused on extending Steam's base functionality, developed by Millennium.",
  url: "https://millennium.web.app/",
  image: "https://i.imgur.com/9qYPFSA.png",
  imageAlt: "Millennium for Steam Logo",
  openGraph: {
    title: "The Steam Enhancement Project",
    description: "Apply themes/skins/customizatize the new version of the Steam® Client. A community focused on extending Steam's base functionality, developed by Millennium.",
    url: "https://millennium.web.app/",
    image: "https://i.imgur.com/9qYPFSA.png",
    imageAlt: "Millennium for Steam Logo",
    siteName: "Millennium for Steam"
  },
  twitter: {
    card: "summary",
    site: "Millennium for Steam®",
    title: "The Steam Enhancement Project",
    description: "A community focused on extending Steam's base functionality, developed by Millennium.",
    url: "https://millennium.web.app/",
    image: "https://i.imgur.com/9qYPFSA.png",
    imageAlt: "Millennium for Steam Logo®"
  },
  siteName: "Millennium for Steam®",
  keywords: "Steam, Steam++, Better Steam, Steam Mod, Steam Themes, Steam Plugins, Steam Extensions, Steam Client Mod, Steam Hacks, Millennium, Millennium Steam, Millennium Steam Patcher, Steam Patcher, Millennium Patcher, Patcher, Millennium for Steam, Millennium Steam",
  author: "Steam++"
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
