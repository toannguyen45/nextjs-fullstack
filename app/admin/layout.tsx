import type { Metadata } from "next";
import localFont from "next/font/local";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <header className="w-full flex items-center flex-col">
          <div className="w-full max-w-[1050px] bg-white px-4 py-4 flex justify-between sticky top-0 z-50">
            <h1>ADMIN</h1>
            <input className="border p-1" placeholder="Tìm kiếm" />
          </div>
          {/* <nav className="w-full bg-black sticky top-[72px] z-50">
            <div className="max-w-[1050px] w-full mx-auto px-4">
              <ul className="flex justify-start items-center text-white py-3">
                <li><a href="#home" className="hover:text-gray-300">GIỚI THIỆU</a></li>
                <li className="mx-5">|</li>
                <li><a href="#about" className="hover:text-gray-300">DỊCH VỤ</a></li>
                <li className="mx-5">|</li>
                <li><a href="#services" className="hover:text-gray-300">SẢN PHẨM</a></li>
                <li className="mx-5">|</li>
                <li><a href="#services" className="hover:text-gray-300">TIN TỨC</a></li>
                <li className="mx-5">|</li>
                <li><a href="#contact" className="hover:text-gray-300">LIÊN HỆ</a></li>
              </ul>
            </div>
          </nav> */}
        </header>

        {children}
      </body>
    </html>
  );
}
