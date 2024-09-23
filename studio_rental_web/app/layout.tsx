import {Nunito} from "next/font/google"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Studio Rental WebSite",
  description: "A studio rental website for emerging creators",
};

const font = Nunito({
  subsets : ["latin"],
})

export default async function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className= {font.className}>
        <ToasterProvider/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
