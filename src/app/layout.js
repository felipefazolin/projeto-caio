import { Inter } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="links-menu">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            Sobre
          </Link>
        </div>
        <div> {children}</div>
      </body>
    </html>
  );
}
