"use client";

import type { MouseEvent, ReactNode } from "react";
import { kakaoChannelName } from "@/lib/contact";

type KakaoChannelButtonProps = {
  children: ReactNode;
  className: string;
  disabledClassName?: string;
};

type KakaoSdk = {
  Channel: {
    chat: (options: { channelPublicId: string }) => void;
  };
  init: (appKey: string) => void;
  isInitialized: () => boolean;
};

declare global {
  interface Window {
    Kakao?: KakaoSdk;
  }
}

const kakaoSdkVersion = "2.8.1";
const kakaoSdkSrc = `https://t1.kakaocdn.net/kakao_js_sdk/${kakaoSdkVersion}/kakao.min.js`;
const kakaoSdkIntegrity =
  "sha384-OL+ylM/iuPLtW5U3XcvLSGhE8JzReKDank5InqlHGWPhb4140/yrBw0bg0y7+C9J";

const kakaoJsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
const kakaoChannelPublicId = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_PUBLIC_ID;
const kakaoChannelUrl = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL;
const fallbackChatUrl =
  kakaoChannelUrl ??
  (kakaoChannelPublicId ? `https://pf.kakao.com/${kakaoChannelPublicId}/chat` : undefined);

let sdkPromise: Promise<void> | null = null;

function loadKakaoSdk() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Kakao SDK can only load in the browser."));
  }

  if (window.Kakao) {
    return Promise.resolve();
  }

  if (sdkPromise) {
    return sdkPromise;
  }

  sdkPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${kakaoSdkSrc}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Failed to load the Kakao SDK.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = kakaoSdkSrc;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.integrity = kakaoSdkIntegrity;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load the Kakao SDK."));
    document.head.appendChild(script);
  });

  return sdkPromise;
}

export default function KakaoChannelButton({
  children,
  className,
  disabledClassName = "",
}: KakaoChannelButtonProps) {
  const canUseSdk = Boolean(kakaoJsKey && kakaoChannelPublicId);
  const canOpenChannel = Boolean(canUseSdk || fallbackChatUrl);
  const helperMessage = `카카오톡에서 '${kakaoChannelName}' 채널을 검색해 주세요.`;

  const handleUnconfiguredClick = async (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(kakaoChannelName);
        window.alert(`채널명 '${kakaoChannelName}'을 복사했습니다.\n카카오톡에서 붙여넣어 검색해 주세요.`);
        return;
      }
    } catch {
      // Fall through to plain guidance.
    }

    window.alert(helperMessage);
  };

  const handleClick = async (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!canUseSdk) {
      await handleUnconfiguredClick(event);
      return;
    }

    event.preventDefault();

    try {
      await loadKakaoSdk();

      if (!window.Kakao) {
        throw new Error("Kakao SDK is unavailable on window.");
      }

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoJsKey!);
      }

      window.Kakao.Channel.chat({
        channelPublicId: kakaoChannelPublicId!,
      });
    } catch {
      if (fallbackChatUrl) {
        window.location.href = fallbackChatUrl;
      }
    }
  };

  if (!canOpenChannel) {
    return (
      <button
        type="button"
        title={helperMessage}
        onClick={handleUnconfiguredClick}
        className={`${className} ${disabledClassName}`.trim()}
        aria-label={`${kakaoChannelName} 카카오톡 문의`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={fallbackChatUrl}
      onClick={handleClick}
      className={className}
      aria-label={`${kakaoChannelName} 카카오톡 문의`}
    >
      {children}
    </a>
  );
}
