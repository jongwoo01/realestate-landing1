import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Phone, ArrowRight } from "lucide-react";
import KakaoChannelButton from "@/components/KakaoChannelButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#F2EBE5]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="마포구 아파트 거실 전경"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-36 xl:py-48 flex flex-col justify-center h-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              마포구 집주인을 위한<br />
              <span className="text-[#E8DFD8]">부담 없는 맞춤형 중개 상담</span>
            </h1>
            <p className="text-lg md:text-xl text-[#F2EBE5] mb-10 leading-relaxed font-light">
              성산동·망원동 아파트와 오피스텔 위주로 경험이 많습니다.<br className="hidden md:block"/>
              광고만 올리고 끝나는 중개가 아닌, 상담부터 계약까지 직접 꼼꼼하게 챙겨드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/consulting"
                className="bg-[#8C6A53] hover:bg-[#6B4E3B] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center flex items-center justify-center gap-2 shadow-lg sm:shrink-0"
              >
                우리 집 매물 내놓기 <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href="tel:010-0000-0000"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-md font-medium transition-colors flex items-center justify-center flex-1 gap-2"
                >
                  <Phone className="w-5 h-5" /> 전화 상담
                </a>
                <KakaoChannelButton
                  className="bg-[#FEE500] hover:bg-[#FEE500]/90 text-black px-6 py-4 rounded-md font-medium transition-colors flex items-center justify-center flex-1 gap-3 shadow-lg shadow-black/10"
                  disabledClassName="cursor-pointer"
                >
                  <span>카카오톡 문의</span>
                </KakaoChannelButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2C2825] mb-4">왜 종우부동산일까요?</h2>
            <p className="text-[#736B65] text-lg">
              집주인의 입장을 최우선으로 생각하는 믿을 수 있는 지역 중개 파트너
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "대표 공인중개사의 직접 소통",
                desc: "보조원이 아닌 공인중개사 이종우 대표가 직접 고객님의 매물을 파악하고 상세하게 안내부터 계약까지 책임집니다.",
              },
              {
                title: "성산동·망원동 전문성",
                desc: "마포구 성산동, 망원동, 연남동의 주거용 매물 현황과 흐름을 누구보다 빠르고 정확하게 분석하여 적절한 시세와 전략을 제안합니다.",
              },
              {
                title: "투명하고 빠른 응답",
                desc: "거래 일정이나 조율 과정에서 스트레스 받지 않으시도록, 집주인 분들과 빠르고 투명하게 직접 소통합니다.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-[#FCFAF8] p-8 rounded-xl border border-[#E8DFD8]">
                <div className="w-12 h-12 bg-[#F2EBE5] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#8C6A53]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C2825] mb-3">{feature.title}</h3>
                <p className="text-[#736B65] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Intro */}
      <section className="py-20 bg-[#F2EBE5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E8DFD8] flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#8C6A53] to-[#6B4E3B] rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-3xl font-bold opacity-80">이종우</span>
              </div>
              <h3 className="font-bold text-xl text-[#2C2825] mb-1">이종우 대표</h3>
              <p className="text-[#736B65] text-sm">종우부동산중개사무소</p>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#2C2825] mb-4">
                &ldquo;마포구 성산동과 인근 주거용 매물을 정직하게 중개합니다.&rdquo;
              </h3>
              <div className="space-y-4 text-[#736B65] leading-relaxed">
                <p>
                  마포구 집주인 분들이 안심하고 매물을 맡기실 수 있도록, 부담 없는 상담과 꼼꼼한 진행을 돕고 있습니다. 매도, 전세, 월세 고민이 있으시다면 언제든 편하게 찾아주세요.
                </p>
                <p>
                  지역 시세와 최신 거래 흐름을 바탕으로 현실적이고 적합한 솔루션을 제안해 드립니다. 광고만 올리는 방식이 아니라 소중한 재산이 좋은 가치를 인정받을 수 있도록 최선을 다하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white border-y border-[#E8DFD8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#2C2825] text-center mb-16">매물 접수부터 계약까지</h2>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Timeline connector through circle centers */}
            <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] border-t-2 border-dashed border-[#E8DFD8] z-0" />
            
            {[
              { step: "01", title: "상담 신청", desc: "온라인 또는 전화로 매물 기본 정보를 남겨주시면 빠르게 연락드립니다." },
              { step: "02", title: "시세 & 조건 브리핑", desc: "주변 실거래가와 현황을 분석하여 적정 가격과 거래 방향을 상의합니다." },
              { step: "03", title: "온·오프라인 홍보", desc: "매물의 장점이 잘 드러나게 사진 촬영 후, 적극적인 홍보를 시작합니다." },
              { step: "04", title: "투명한 조율 및 계약", desc: "조건에 맞는 손님을 모시고 꼼꼼한 확인을 거쳐 안전하게 계약을 마무리합니다." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-2 mb-10 md:mb-0 bg-transparent">
                <div className="w-16 h-16 bg-[#8C6A53] ring-4 ring-white text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-[#8C6A53]/20 shrink-0">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-[#2C2825] mb-2">{item.title}</h3>
                <p className="text-sm text-[#736B65] leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Brief */}
      <section className="py-20 bg-[#FCFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#2C2825] mb-2">최근 성사된 주요 거래</h2>
              <p className="text-[#736B65]">종우부동산의 차별화된 중개 노하우를 확인해보세요.</p>
            </div>
            <Link href="/cases" className="hidden sm:flex text-[#8C6A53] font-medium items-center hover:opacity-80 transition-opacity">
              전체 사례 보기 <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-[#E8DFD8] group hover:shadow-lg hover:border-[#8C6A53]/30 transition-all cursor-pointer">
              <div className="relative h-60 w-full overflow-hidden">
                <Image src="/case_apt.png" alt="월드파크 2단지 매도 사례" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold text-[#8C6A53]">
                  매도 계약 완료
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2825] mb-2">마포구 성산동 월드파크 2단지 (아파트)</h3>
                <p className="text-[#736B65] text-sm mb-4">이사 일정에 맞춘 빠른 매도 플랜과 적극적인 온/오프라인 홍보 진행.</p>
                <div className="flex items-center text-[#8C6A53] font-medium text-sm">
                  소요 기간: 3주 내 계약 <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-[#E8DFD8] group hover:shadow-lg hover:border-[#8C6A53]/30 transition-all cursor-pointer">
              <div className="relative h-60 w-full overflow-hidden">
                <Image src="/case_officetel.png" alt="연남스테이 월세 사례" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-bold text-[#8C6A53]">
                  월세 계약 완료
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2825] mb-2">마포구 연남동 연남스테이 (오피스텔)</h3>
                <p className="text-[#736B65] text-sm mb-4">공실 기간이 길어 고민하셨던 집주인분을 위한 현황 재정비 및 조건 조율.</p>
                <div className="flex items-center text-[#8C6A53] font-medium text-sm">
                  소요 기간: 2주 내 계약 <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/cases" className="mt-8 flex sm:hidden text-[#8C6A53] border border-[#8C6A53] py-3 rounded justify-center font-medium items-center hover:bg-[#8C6A53]/5 transition-colors">
            전체 사례 보기 <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </section>

      {/* CTA Bottom text-center block */}
      <section className="py-24 bg-[#8C6A53] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">소중한 우리집, 이제 종우부동산과 상의하세요.</h2>
          <p className="text-white/80 text-lg mb-10">
            마포구 1등 안심 중개, 빠르고 꼼꼼한 일처리로 보답하겠습니다.<br className="hidden md:block" />
            궁금하신 점이 있다면 부담 없이 상담을 남겨주세요.
          </p>
          <Link
            href="/consulting"
            className="inline-block bg-white text-[#8C6A53] px-10 py-5 rounded-md font-bold text-lg hover:bg-[#FCFAF8] transition-colors shadow-xl"
          >
            매물 상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
