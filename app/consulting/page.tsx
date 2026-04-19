"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";
import KakaoChannelButton from "@/components/KakaoChannelButton";

export default function ConsultingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      transactionType: String(formData.get("transactionType") ?? "").trim(),
      propertyType: String(formData.get("propertyType") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      details: String(formData.get("details") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/consulting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("상담 접수 저장에 실패했습니다.");
      }

      router.push("/complete");
    } catch {
      setSubmitError("상담 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2C2825] mb-4">매물 상담 신청</h1>
          <p className="text-[#736B65] text-lg">
            아래 정보를 남겨주시면, 이종우 대표가 직접 확인 후 빠르게 연락드리겠습니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DFD8] p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 1. 기본 정보 */}
            <div>
              <h2 className="text-xl font-bold text-[#2C2825] mb-5 pb-2 border-b border-[#E8DFD8] flex items-center gap-2">
                <span className="bg-[#8C6A53] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-normal">1</span>
                고객님의 기본 정보
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C2825]">이름 (또는 직함) <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DFD8] focus:ring-2 focus:ring-[#8C6A53]/50 focus:border-[#8C6A53] outline-none transition-all"
                    placeholder="홍길동"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C2825]">연락처 <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DFD8] focus:ring-2 focus:ring-[#8C6A53]/50 focus:border-[#8C6A53] outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>
            </div>

            {/* 2. 매물 정보 */}
            <div>
              <h2 className="text-xl font-bold text-[#2C2825] mb-5 pb-2 border-b border-[#E8DFD8] flex items-center gap-2 mt-10">
                <span className="bg-[#8C6A53] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-normal">2</span>
                매물 정보
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#2C2825] mb-3">거래 유형 <span className="text-red-500">*</span></label>
                  <div className="flex gap-4">
                    {["매도", "전세", "월세"].map((type) => (
                      <label key={type} className="flex-1 cursor-pointer">
                        <input type="radio" name="transactionType" value={type} className="peer sr-only" required />
                        <div className="text-center px-4 py-3 border border-[#E8DFD8] rounded-lg peer-checked:bg-[#8C6A53] peer-checked:text-white peer-checked:border-[#8C6A53] transition-all font-medium text-[#736B65]">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="propertyType" className="block text-sm font-medium text-[#2C2825]">매물 종류 <span className="text-red-500">*</span></label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E8DFD8] focus:ring-2 focus:ring-[#8C6A53]/50 focus:border-[#8C6A53] outline-none transition-all bg-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="아파트">아파트</option>
                      <option value="오피스텔">오피스텔</option>
                      <option value="빌라/다세대">빌라/다세대</option>
                      <option value="기타">단독/다가구/기타</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-[#2C2825]">지역 / 단지명 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#E8DFD8] focus:ring-2 focus:ring-[#8C6A53]/50 focus:border-[#8C6A53] outline-none transition-all"
                      placeholder="예) 성산동 월드파크 2단지"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="block text-sm font-medium text-[#2C2825]">문의 내용 (선택)</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8DFD8] focus:ring-2 focus:ring-[#8C6A53]/50 focus:border-[#8C6A53] outline-none transition-all"
                    placeholder="희망 가격, 이사 일정, 특이사항 등 자유롭게 적어주세요."
                  />
                </div>
              </div>
            </div>

            {/* 3. 동의 및 제출 */}
            <div className="bg-[#FCFAF8] p-5 rounded-lg border border-[#E8DFD8]">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 w-5 h-5 accent-[#8C6A53] cursor-pointer" />
                <span className="text-sm text-[#736B65] leading-relaxed">
                  (필수) 상담을 위한 최소한의 개인정보(이름, 연락처) 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며 이후 안전하게 파기됩니다.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8C6A53] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#6B4E3B] transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {isSubmitting ? "접수 중..." : "상담 신청 완료하기"}
            </button>
            {submitError ? (
              <p className="text-sm text-red-600 text-center">{submitError}</p>
            ) : null}
          </form>

          <div className="mt-8 text-center border-t border-[#E8DFD8] pt-8">
            <p className="text-[#736B65] mb-3">전화나 카카오톡 상담이 더 편하신가요?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:010-0000-0000" className="flex items-center justify-center gap-2 px-6 py-3 border border-[#E8DFD8] rounded-md text-[#2C2825] font-medium hover:bg-[#F2EBE5] transition-colors">
                <Phone className="w-5 h-5" /> 010-0000-0000
              </a>
              <KakaoChannelButton
                className="flex items-center justify-center gap-3 px-6 py-3 bg-[#FEE500] rounded-md text-black font-medium hover:bg-[#FEE500]/90 transition-colors"
                disabledClassName="cursor-pointer"
              >
                <span>카카오톡으로 문의하기</span>
              </KakaoChannelButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
