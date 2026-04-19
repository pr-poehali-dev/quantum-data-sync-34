"""
Отправка B2B заявок от партнёров DELINA LAB в Telegram и на email.
Telegram: @denis22345, телефон 89099755333
"""
import json
import os
import urllib.request
import urllib.parse


TELEGRAM_CHAT_ID = "@denis22345"

PARTNER_LABELS = {
    "pharmacy": "Аптека",
    "barbershop": "Барбершоп",
    "fitness": "Фитнес-клуб",
    "nutritionist": "Нутрициолог",
    "spa": "SPA / Салон",
    "other": "Другое",
}


def send_telegram(token: str, chat_id: str, text: str) -> bool:
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML",
    }).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.status == 200
    except Exception:
        return False


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") != "POST":
        return {"statusCode": 405, "headers": headers, "body": {"error": "Method not allowed"}}

    body = json.loads(event.get("body") or "{}")

    name = body.get("name", "").strip()
    company = body.get("company", "").strip()
    phone = body.get("phone", "").strip()
    email = body.get("email", "").strip()
    partner_type = body.get("partnerType", "").strip()
    comment = body.get("comment", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": {"error": "Name and phone required"},
        }

    partner_label = PARTNER_LABELS.get(partner_type, partner_type or "Не указан")

    message = (
        "🌿 <b>DELINA LAB — Новая B2B заявка!</b>\n"
        "━━━━━━━━━━━━━━━━━━\n"
        f"👤 <b>Имя:</b> {name}\n"
        f"🏢 <b>Компания:</b> {company or '—'}\n"
        f"📱 <b>Телефон:</b> {phone}\n"
        f"📧 <b>Email:</b> {email or '—'}\n"
        f"🤝 <b>Тип партнёра:</b> {partner_label}\n"
    )
    if comment:
        message += f"💬 <b>Комментарий:</b> {comment}\n"
    message += "━━━━━━━━━━━━━━━━━━"

    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    tg_ok = False
    if token:
        tg_ok = send_telegram(token, TELEGRAM_CHAT_ID, message)

    return {
        "statusCode": 200,
        "headers": headers,
        "body": {"success": True, "telegram": tg_ok},
    }