import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import {Roboto} from "next/font/google"

const roboto = Roboto({weight: ['400','500','700','900'],subsets:["greek"]});
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

export const metadata = {
  title: {
    default: "Next Home",
    template: '%s | Next Meal '
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={roboto.className} 
      >
        <NavBar></NavBar>
       <div className="">
            {children}
       </div>
       <footer className=" p-16 items-center justify-center bg-yellow-900 text-white">
          <h1>Footer For Practice 2</h1>
      </footer>
      </body>
    </html>
  );
}
