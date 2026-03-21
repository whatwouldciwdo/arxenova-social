import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

const SENDERS: Record<string, { name: string; userEnv: string; passEnv: string }> = {
    brian: {
        name: "Brian - Arxenova Social",
        userEnv: "SMTP_USER_BRIAN",
        passEnv: "SMTP_PASS_BRIAN",
    },
    dzul: {
        name: "Dzul - Arxenova Social",
        userEnv: "SMTP_USER_DZUL",
        passEnv: "SMTP_PASS_DZUL",
    },
};


export async function POST(req: NextRequest) {
    try {
        const { sender, recipientEmail, recipientName, subject, body } = await req.json();

        if (!sender || !recipientEmail || !subject || !body) {
            return NextResponse.json(
                { error: "Missing required fields: sender, recipientEmail, subject, body" },
                { status: 400 }
            );
        }

        const senderConfig = SENDERS[sender];
        if (!senderConfig) {
            return NextResponse.json(
                { error: "Invalid sender. Use 'brian' or 'dzul'." },
                { status: 400 }
            );
        }

        const smtpUser = process.env[senderConfig.userEnv];
        const smtpPass = process.env[senderConfig.passEnv];
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);

        if (!smtpUser || !smtpPass || !smtpHost) {
            return NextResponse.json(
                { error: "SMTP credentials not configured. Check .env.local" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
            tls: {
                rejectUnauthorized: false,
                minVersion: "TLSv1.2",
            },
        });

        const pdfPath = path.join(process.cwd(), "public", "file", "Arxenovasocial Package.pdf");
        const logoPath = path.join(process.cwd(), "public", "images", "Arxenova Social.png");
        const attachments = [];

        if (fs.existsSync(pdfPath)) {
            attachments.push({
                filename: "Arxenovasocial Package.pdf",
                path: pdfPath,
            });
        }

        if (fs.existsSync(logoPath)) {
            attachments.push({
                filename: "arxenova-social.png",
                path: logoPath,
                cid: "arxenova-logo",
            });
        }

        const senderFirstName = senderConfig.name.split(" ")[0];
        const greeting = recipientName
            ? `Yth. Bapak/Ibu ${recipientName},`
            : "Yth. Bapak/Ibu,";

        const bodyParagraphs = body
            .split("\n\n")
            .map((p: string) => {
                const trimmed = p.trim();
                if (!trimmed) return "";
                const lines = trimmed.split("\n");
                const isList = lines.every((l: string) => l.trim().startsWith("•") || l.trim().startsWith("-") || l.trim().startsWith("*"));
                if (isList) {
                    const items = lines
                        .map((l: string) => l.trim().replace(/^[•\-*]\s*/, ""))
                        .map((item: string) => `<tr><td style="padding: 6px 0 6px 0; vertical-align: top; width: 20px; color: #2B35E0; font-size: 18px; line-height: 1;">●</td><td style="padding: 6px 0 6px 8px; font-size: 15px; line-height: 1.6; color: #333;">${item}</td></tr>`)
                        .join("");
                    return `<table cellpadding="0" cellspacing="0" border="0" style="margin: 12px 0 12px 8px;">${items}</table>`;
                }
                return `<p style="font-size: 15px; line-height: 1.8; color: #333; margin: 0 0 16px 0;">${trimmed.replace(/\n/g, "<br/>")}</p>`;
            })
            .filter((p: string) => p)
            .join("");

        const htmlBody = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f5f7; padding: 32px 16px;">
<tr><td align="center">
<table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%;">

    <!-- Header -->
    <tr><td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); border-radius: 16px 16px 0 0; padding: 32px 40px; text-align: center;">
        <img src="cid:arxenova-logo" alt="Arxenova Social" style="height: 40px; width: auto; margin-bottom: 8px;" />
    </td></tr>

    <!-- Accent Line -->
    <tr><td style="height: 4px; background: linear-gradient(90deg, #2B35E0, #00E5CC, #2B35E0);"></td></tr>

    <!-- Body -->
    <tr><td style="background-color: #ffffff; padding: 40px 40px 32px 40px;">
        <p style="font-size: 16px; line-height: 1.8; color: #1a1a2e; margin: 0 0 24px 0; font-weight: 600;">
            ${greeting}
        </p>
        ${bodyParagraphs}
    </td></tr>

    <!-- Signature -->
    <tr><td style="background-color: #ffffff; padding: 0 40px 40px 40px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="border-top: 2px solid #f0f0f0; padding-top: 24px;">
                <p style="font-size: 14px; color: #888; margin: 0 0 12px 0;">Hormat kami,</p>
                <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td style="width: 4px; background: linear-gradient(180deg, #2B35E0, #00E5CC); border-radius: 2px;"></td>
                        <td style="padding-left: 16px;">
                            <p style="margin: 0; font-size: 17px; font-weight: 700; color: #1a1a2e;">${senderFirstName}</p>
                            <p style="margin: 2px 0 0 0; font-size: 13px; color: #888; letter-spacing: 0.5px;">ARXENOVA SOCIAL</p>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 16px;">
                    <tr>
                        <td style="padding-right: 20px;">
                            <a href="https://arxenovasocial.com" style="font-size: 13px; color: #2B35E0; text-decoration: none;">🌐 arxenovasocial.com</a>
                        </td>
                        <td style="padding-right: 20px;">
                            <a href="mailto:${smtpUser}" style="font-size: 13px; color: #2B35E0; text-decoration: none;">✉️ ${smtpUser}</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding-top: 4px;">
                            <a href="https://wa.me/6281285313084" style="font-size: 13px; color: #2B35E0; text-decoration: none;">📱 +62 812-8531-3084</a>
                        </td>
                    </tr>
                </table>
            </td></tr>
        </table>
    </td></tr>

    <!-- CTA -->
    <tr><td style="background-color: #ffffff; padding: 0 40px 40px 40px; text-align: center;">
        <a href="https://wa.me/6281285313084?text=Halo%20Arxenova%20Social%2C%20saya%20tertarik%20dengan%20layanan%20website%20development" style="display: inline-block; padding: 14px 36px; background: linear-gradient(135deg, #2B35E0, #4f58e8); color: #ffffff; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600; letter-spacing: 0.3px;">💬 Hubungi via WhatsApp</a>
    </td></tr>

    <!-- Footer -->
    <tr><td style="background-color: #1a1a2e; border-radius: 0 0 16px 16px; padding: 24px 40px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #888; line-height: 1.6;">
            © 2026 Arxenova Social · Creative Digital Agency<br/>
            <a href="https://arxenovasocial.com" style="color: #00E5CC; text-decoration: none;">arxenovasocial.com</a>
        </p>
    </td></tr>

</table>
</td></tr>
</table>
</body>
</html>
        `;

        await transporter.sendMail({
            from: `"${senderConfig.name}" <${smtpUser}>`,
            to: recipientEmail,
            subject: subject,
            html: htmlBody,
            attachments: attachments,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("Email send error:", errorMessage);
        return NextResponse.json(
            { error: `Failed to send email: ${errorMessage}` },
            { status: 500 }
        );
    }
}
