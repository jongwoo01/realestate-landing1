"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "홈", path: "/" },
    { name: "대표 사례", path: "/cases" },
    { name: "상담 신청", path: "/consulting" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-[#E8DFD8] z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="종우부동산" width={32} height={32} className="w-8 h-8" />
          <span className="font-semibold text-lg text-[#2C2825] tracking-tight">종우부동산</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-[15px] font-medium transition-colors ${
                pathname === link.path
                  ? "text-[#8C6A53] border-b-2 border-[#8C6A53] py-1"
                  : "text-[#736B65] hover:text-[#2C2825] py-1"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/consulting"
            className="bg-[#8C6A53] text-[#FCFAF8] px-5 py-2.5 rounded-md font-medium text-[15px] hover:bg-[#6B4E3B] transition-colors shadow-sm"
          >
            내 집 내놓기
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#2C2825]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#E8DFD8] py-4 px-4 flex flex-col space-y-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-[#2C2825] font-medium py-2 border-b border-[#E8DFD8]/50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/consulting"
            className="bg-[#8C6A53] text-center text-[#FCFAF8] px-4 py-3 rounded-md font-medium text-[16px] w-full"
            onClick={() => setIsOpen(false)}
          >
            매물 상담 신청
          </Link>
        </div>
      )}
    </nav>
  );
}
