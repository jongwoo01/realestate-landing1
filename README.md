This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## KakaoTalk Channel Setup

To connect the existing Kakao consultation buttons with Kakao's official web flow, set the values below in `.env.local`.

```bash
NEXT_PUBLIC_KAKAO_JS_KEY=your_kakao_javascript_key
NEXT_PUBLIC_KAKAO_CHANNEL_PUBLIC_ID=_yourChannelId
```

Optional:

```bash
NEXT_PUBLIC_KAKAO_CHANNEL_URL=https://pf.kakao.com/_yourChannelId
```

Notes:

- `NEXT_PUBLIC_KAKAO_CHANNEL_PUBLIC_ID` is the part after `https://pf.kakao.com/`.
- When the JavaScript key and channel public ID are both present, the site uses Kakao JavaScript SDK `Kakao.Channel.chat()` on click.
- When only the channel URL or public ID is present, the site falls back to the public channel chat URL.

## Google Sheets Setup

The consulting form can send submissions to Google Sheets through Google Apps Script.

1. Create a Google Sheet and set the first row headers like this:

```text
createdAt | name | phone | transactionType | propertyType | location | details
```

2. Open the sheet and go to `Extensions -> Apps Script`.

3. Paste this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.createdAt || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.transactionType || "",
    data.propertyType || "",
    data.location || "",
    data.details || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. In Apps Script, deploy it as a web app:

- `Deploy -> New deployment`
- Type: `Web app`
- Execute as: `Me`
- Who has access: `Anyone`

5. Copy the deployed web app URL and add it to `.env.local`:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_web_app_url
```

6. Restart the Next.js server after updating `.env.local`.

Notes:

- If the sheet tab name is not `Sheet1`, update the script.
- The app sends the form data to `/api/consulting`, and that route forwards it to Apps Script.
- This keeps the webhook URL on the server side instead of exposing it in the browser.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
