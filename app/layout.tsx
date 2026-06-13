import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "마포부동산중개사무소 | 마포구 성산동·망원동 집주인 상담센터",
  description: "마포구 성산동과 인근 지역 주거용 매물 전문. 집주인 입장에서 부담 없는 양심적인 부동산 중개 상담을 도와드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans flex flex-col min-h-screen bg-[var(--color-surface)] text-[var(--color-text-main)]`}>
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
