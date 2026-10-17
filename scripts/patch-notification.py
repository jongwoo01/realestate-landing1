"""Patch an exported Apps Script without storing its private recipient in Git.
Usage: python3 scripts/patch-notification.py input.gs output.gs
Deploy output to the existing deployment; preserve its sheet and recipient.
"""
import sys
from pathlib import Path

def patch(source):
    if 'notificationSent' in source:
        return source
    start = source.index('    MailApp.sendEmail({')
    end = source.index('    });', start) + len('    });')
    call = source[start:end]
    wrapped = '    let notificationSent = true;\n    try {\n' + '\n'.join('  ' + line for line in call.splitlines()) + '\n    } catch (mailError) {\n      notificationSent = false;\n      console.error("Consultation saved; notification failed. Check mail authorization/quota.");\n    }'
    result = source[:start] + wrapped + source[end:]
    assert 'JSON.stringify({ ok: true })' in result
    return result.replace('JSON.stringify({ ok: true })', 'JSON.stringify({ ok: true, notificationSent: notificationSent })', 1)

if __name__ == '__main__':
    Path(sys.argv[2]).write_text(patch(Path(sys.argv[1]).read_text()))
