# Consultation notification repair

`patch-notification.py` applies the notification fix to an exported Apps Script without checking its private recipient into Git. It preserves the spreadsheet, recipient and existing deployment URL.

```sh
python3 scripts/patch-notification.py /private/export.gs /private/patched.gs
node scripts/test-notification.mjs /private/patched.gs
```

Publish a version from the patched **currently deployed** source and update the same deployment. Apply the same targeted patch to the editor HEAD while retaining any unrelated editor changes. Sheet failures still return `ok: false`; a saved consultation returns `ok: true, notificationSent: false` when only email fails, so the client does not prompt a duplicate submission. Email failures are logged for operator review. This does not retry email automatically.

Validation uses mocked Sheets and Mail services; no real submission or email is sent.
