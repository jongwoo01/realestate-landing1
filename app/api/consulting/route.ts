import { NextResponse } from "next/server";

type ConsultingPayload = {
  name: string;
  phone: string;
  transactionType: string;
  propertyType: string;
  location: string;
  details?: string;
};

type WebhookResponse = {
  ok?: boolean;
  message?: string;
};

function isValidPayload(body: unknown): body is ConsultingPayload {
  if (!body || typeof body !== "object") {
    return false;
  }

  const payload = body as Record<string, unknown>;

  return (
    typeof payload.name === "string" &&
    typeof payload.phone === "string" &&
    typeof payload.transactionType === "string" &&
    typeof payload.propertyType === "string" &&
    typeof payload.location === "string" &&
    (payload.details === undefined || typeof payload.details === "string")
  );
}

function isValidWebhookResponse(body: unknown): body is WebhookResponse {
  if (!body || typeof body !== "object") {
    return false;
  }

  const payload = body as Record<string, unknown>;

  return (
    (payload.ok === undefined || typeof payload.ok === "boolean") &&
    (payload.message === undefined || typeof payload.message === "string")
  );
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, message: "GOOGLE_SHEETS_WEBHOOK_URL is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload = {
    ...body,
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
    redirect: "follow",
  }).catch(() => null);

  if (!response || response.status !== 200) {
    return NextResponse.json(
      { ok: false, message: "Failed to write to Google Sheets." },
      { status: 502 },
    );
  }

  const result = (await response.json().catch(() => null)) as unknown;
  const webhookMessage = isValidWebhookResponse(result) ? result.message : undefined;

  if (!isValidWebhookResponse(result) || result.ok !== true) {
    return NextResponse.json(
      { ok: false, message: webhookMessage ?? "Webhook reported failure." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
