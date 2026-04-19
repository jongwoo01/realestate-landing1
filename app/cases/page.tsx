import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      type: "아파트",
      location: "마포구 성산동 월드파크 2단지",
      transaction: "매도",
      title: "이사 일정 때문에 빠른 매도 상담",
      strategy: "가격 조정과 온라인 홍보 진행",
      result: "3주 내 계약",
      image: "/case_apt.png"
    },
    {
      id: 2,
      type: "오피스텔",
      location: "마포구 연남동 연남스테이",
      transaction: "월세",
      title: "공실 기간이 길어져 임대 문의",
      strategy: "사진 재정리와 조건 조정, 문의 응대 진행",
      result: "2주 내 임차인 계약",
      image: "/case_officetel.png"
    },
    {
      id: 3,
      type: "빌라",
      location: "마포구 망원동 주택가",
      transaction: "전세",
      title: "기존 세입자 만기 일정에 맞춘 전세 상담",
      strategy: "주변 시세 비교와 보증금 조정 안내",
      result: "문의 증가 후 계약 완료",
      image: "/case_villa.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF8] py-12 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C2825] mb-4">대표 거래 사례</h1>
          <p className="text-[#736B65] text-lg max-w-2xl mx-auto leading-relaxed">
            마포구 성산동·망원동 대장 아파트부터 다세대 빌라까지, 종우부동산의 차별화된 중개 노하우로 빠르고 만족스러운 거래를 이끌어냅니다.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {cases.map((item, index) => (
            <div key={item.id} className={`bg-white rounded-2xl overflow-hidden border border-[#E8DFD8] hover:border-[#8C6A53]/30 transition-all cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} shadow-sm hover:shadow-lg`}>
              <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md text-sm font-bold shadow-sm flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.transaction === '매도' ? 'bg-[#8C6A53]' : item.transaction === '전세' ? 'bg-[#6B4E3B]' : 'bg-[#A69E96]'}`}></span>
                  <span className="text-[#2C2825]">{item.transaction} 완료</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-sm font-bold text-[#8C6A53] mb-2">{item.type}</div>
                <h2 className="text-2xl font-bold text-[#2C2825] mb-4">{item.location}</h2>
                
                <div className="space-y-5 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-[#736B65] mb-1">고객님의 고민</h3>
                    <p className="text-[#2C2825] font-medium">{item.title}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#736B65] mb-1">종우부동산의 솔루션</h3>
                    <p className="text-[#2C2825] font-medium">{item.strategy}</p>
                  </div>
                </div>

                <div className="bg-[#FCFAF8] border border-[#E8DFD8] rounded-xl p-5 flex items-start gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#8C6A53]" />
                  </div>
                  <div>
                    <span className="block text-sm text-[#736B65] font-medium mb-1">거래 결과</span>
                    <span className="text-lg font-bold text-[#8C6A53]">{item.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#8C6A53] rounded-2xl p-10 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">고객님의 매물도 좋은 결과를 만들 수 있습니다</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            망설이지 마시고 상담을 신청해주세요. 전문적인 분석과 맞춤형 홍보 전략으로 가장 좋은 조건의 거래를 도와드리겠습니다.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 bg-white text-[#8C6A53] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
          >
            내 매물 상담받기 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
