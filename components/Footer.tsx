import Image from "next/image";
import { kakaoChannelChatUrl, kakaoChannelName, officePhone } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="bg-[#2C2825] text-[#F2EBE5] py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Image src="/logo-white.svg" alt="마포부동산" width={32} height={32} className="w-8 h-8 opacity-90" />
            <span className="font-semibold text-xl tracking-tight text-white">마포부동산중개사무소</span>
          </div>
          
          <div className="space-y-2 text-[14px] text-[#A69E96]">
            <p>상담 담당 : 마포부동산</p>
            <p>대표번호 : {officePhone}</p>
            <p>
              카카오톡 : 카카오톡 채널{" "}
              {kakaoChannelChatUrl ? (
                <a href={kakaoChannelChatUrl} className="text-[#F2EBE5] font-medium hover:underline">
                  &#39;{kakaoChannelName}&#39; 채팅 연결
                </a>
              ) : (
                <span className="text-[#F2EBE5] font-medium">&#39;{kakaoChannelName}&#39;</span>
              )}{" "}
              {!kakaoChannelChatUrl && "검색"}
            </p>
            <p>전문 지역 : 마포구 성산동, 망원동, 연남동</p>
            <p>상담 가능 : 아파트, 오피스텔, 빌라 (매도/전세/월세)</p>
          </div>
        </div>

        <div className="md:text-right flex flex-col md:items-end justify-end">
          <p className="text-[13px] text-[#736B65] mt-8 md:mt-0">
            © {new Date().getFullYear()} 마포부동산중개사무소. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
