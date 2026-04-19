import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { kakaoChannelChatUrl } from "@/lib/contact";

export default function CompletePage() {
  return (
    <div className="min-h-screen bg-[#FCFAF8] flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DFD8] p-10 md:p-16 flex flex-col items-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-[#2C2825] mb-4">상담 신청이 완료되었습니다</h1>
          <p className="text-[#736B65] text-lg mb-8 leading-relaxed">
            남겨주신 소중한 정보를 확인한 후,<br className="hidden md:block" />
            이종우 대표가 직접 연락드려 친절히 안내해 드리겠습니다.
          </p>
          
          <div className="bg-[#F2EBE5] rounded-xl p-6 w-full mb-10 text-left">
            <h3 className="font-bold text-[#2C2825] mb-2">추가 문의가 급하신 경우</h3>
            <p className="text-[#736B65] text-sm mb-4">
              아래 연락처로 편하게 연락 주시면 바로 상담이 가능합니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[#2C2825] font-medium">
                <span className="text-[#8C6A53]">대표전화</span>
                <a href="tel:010-0000-0000" className="hover:underline">010-0000-0000</a>
              </div>
              <div className="flex items-center gap-3 text-[#2C2825] font-medium">
                <span className="text-[#8C6A53]">카카오톡</span>
                {kakaoChannelChatUrl ? (
                  <a href={kakaoChannelChatUrl} className="hover:underline">
                    채널 &#39;종우부동산 상담센터&#39; 채팅 연결
                  </a>
                ) : (
                  <span>채널 &#39;종우부동산 상담센터&#39; 검색</span>
                )}
              </div>
            </div>
          </div>
          
          <Link
            href="/"
            className="flex items-center gap-2 text-[#8C6A53] font-bold hover:text-[#6B4E3B] transition-colors"
          >
            홈으로 돌아가기 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
