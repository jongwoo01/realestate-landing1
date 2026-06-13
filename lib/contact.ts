export const officePhone = "010-0000-0000";
export const officePhoneHref = `tel:${officePhone}`;
export const kakaoChannelName = "마포부동산 상담센터";

const kakaoChannelPublicId = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_PUBLIC_ID;
const kakaoChannelUrl = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL;

export const kakaoChannelChatUrl =
  kakaoChannelUrl ??
  (kakaoChannelPublicId ? `https://pf.kakao.com/${kakaoChannelPublicId}/chat` : undefined);
