import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="w-full bg-white flex items-center flex-col">
          <div className="w-full max-w-[1050px] bg-white px-4 py-4 flex justify-between sticky top-0 z-50">
            <h1>LOGO</h1>
            <input className="border p-1" placeholder="Tìm kiếm" />
          </div>
          <nav className="w-full bg-black sticky top-[72px] z-50">
            <div className="max-w-[1050px] w-full mx-auto px-4">
              <ul className="flex justify-start items-center text-white py-3">
                <li><Link href={`/gioi-thieu`}>GIỚI THIỆU</Link></li>
                <li className="mx-5">|</li>
                <li><Link href={`/dich-vu`}>DỊCH VỤ</Link></li>
                <li className="mx-5">|</li>
                <li><Link href={`/san-pham`}>SẢN PHẨM</Link></li>
                <li className="mx-5">|</li>
                <li><Link href={`/tin-tuc`}>TIN TỨC</Link></li>
                <li className="mx-5">|</li>
                <li><Link href={`/lien-he`}>LIÊN HỆ</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        {/* <div className="relative w-full h-[500px]"> 
          <Image
            src="/images/carousel_one.jpg"
            alt="Picture of the author"
            priority
            fill
            className="object-cover"
      />
        </div> */}


        <div className="content-container mt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
