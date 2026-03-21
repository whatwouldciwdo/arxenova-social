"use client";

import { useState, useEffect } from "react";
import "./EmailPanel.css";

const SENDERS = [
    { key: "brian", label: "Brian" },
    { key: "dzul", label: "Dzul" },
];

const getTemplateBody = (senderName: string) => ({
    custom: {
        name: "Custom (Kosong)",
        subject: "",
        body: "",
    },
    penawaran: {
        name: "Penawaran Website Development",
        subject: "Penawaran Jasa Website Development — Arxenova Social",
        body: `Perkenalkan, saya ${senderName} dari Arxenova Social.

Kami membantu bisnis membangun website yang tidak hanya terlihat profesional, tetapi juga dirancang untuk mendukung branding, kredibilitas, dan kebutuhan pemasaran secara digital.

Melalui layanan website development kami, Arxenova Social menyediakan solusi pembuatan website yang dapat disesuaikan dengan kebutuhan bisnis, mulai dari landing page untuk promosi produk atau campaign, hingga website company profile dan website dengan fitur yang lebih kompleks.

Layanan yang kami tawarkan meliputi:

• UI/UX website yang profesional dan responsif
• Development website custom untuk desktop dan mobile
• Setup domain dan hosting
• Basic SEO
• Integrasi WhatsApp, email, dan form leads
• Dokumentasi penggunaan
• Maintenance dan revisi sesuai paket atau scope project

Kami memahami bahwa setiap bisnis memiliki kebutuhan yang berbeda, karena itu penawaran yang kami berikan bersifat fleksibel dan dapat disesuaikan berdasarkan fitur, jumlah halaman, serta tujuan website yang ingin dicapai.

Harga dapat menyesuaikan dan bisa bertambah atau berkurang tergantung pada kebutuhan penambahan maupun pengurangan fitur.

Apabila Bapak/Ibu berkenan, kami dengan senang hati dapat mengirimkan detail penawaran yang lebih spesifik sesuai kebutuhan bisnis Anda.

Terima kasih atas waktu dan perhatian Bapak/Ibu. Kami berharap dapat menjadi partner yang tepat untuk pengembangan website bisnis Anda.`,
    },
    followup: {
        name: "Follow-up Meeting",
        subject: "Follow-up: Diskusi Kerjasama — Arxenova Social",
        body: `Terima kasih atas waktu yang telah Bapak/Ibu luangkan sebelumnya. Kami ingin menindaklanjuti diskusi kita mengenai potensi kerjasama.

Sebagai referensi, kami lampirkan kembali proposal lengkap layanan kami. Kami siap menyesuaikan paket sesuai kebutuhan spesifik bisnis Anda.

Apakah ada waktu yang nyaman untuk kita jadwalkan meeting lanjutan?`,
    },
});

export default function EmailPanel() {
    const [sender, setSender] = useState(SENDERS[0].key);
    const [recipientEmail, setRecipientEmail] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const selectedSenderObj = SENDERS.find((s) => s.key === sender);
    const templates = getTemplateBody(selectedSenderObj?.label || "");
    const templateKeys = Object.keys(templates) as (keyof ReturnType<typeof getTemplateBody>)[];
    const [subject, setSubject] = useState(templates.penawaran.subject);
    const [body, setBody] = useState(templates.penawaran.body);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleTemplateChange = (key: keyof ReturnType<typeof getTemplateBody>) => {
        const currentTemplates = getTemplateBody(selectedSenderObj?.label || "");
        setSubject(currentTemplates[key].subject);
        setBody(currentTemplates[key].body);
    };

    const handleSenderChange = (newSender: string) => {
        setSender(newSender);
        const newSenderObj = SENDERS.find((s) => s.key === newSender);
        const newTemplates = getTemplateBody(newSenderObj?.label || "");
        const currentTemplate = templateKeys.find((key) => templates[key].subject === subject);
        if (currentTemplate && currentTemplate !== "custom") {
            setSubject(newTemplates[currentTemplate].subject);
            setBody(newTemplates[currentTemplate].body);
        }
    };

    const handleSend = async () => {
        if (!recipientEmail || !subject || !body) {
            setStatus("error");
            setMessage("Mohon isi semua field yang diperlukan.");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sender, recipientEmail, recipientName, subject, body }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage(data.message || "Email berhasil dikirim!");
                setRecipientEmail("");
                setRecipientName("");
            } else {
                setStatus("error");
                setMessage(data.error || "Gagal mengirim email.");
            }
        } catch {
            setStatus("error");
            setMessage("Network error. Pastikan server berjalan.");
        }
    };

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [authError, setAuthError] = useState("");
    const [authLoading, setAuthLoading] = useState(false);
    const [checkingSession, setCheckingSession] = useState(true);

    useEffect(() => {
        const saved = sessionStorage.getItem("arxenova_admin");
        if (saved === "authenticated") {
            setIsAuthenticated(true);
        }
        setCheckingSession(false);
    }, []);

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAuthLoading(true);
        setAuthError("");

        try {
            const res = await fetch("/api/verify-admin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                sessionStorage.setItem("arxenova_admin", "authenticated");
                setIsAuthenticated(true);
            } else {
                const data = await res.json();
                setAuthError(data.error || "Password salah.");
            }
        } catch {
            setAuthError("Network error.");
        }
        setAuthLoading(false);
    };

    if (checkingSession) {
        return (
            <main className="email-panel-page">
                <div className="password-gate">
                    <div className="spinner" />
                </div>
            </main>
        );
    }

    if (!isAuthenticated) {
        return (
            <main className="email-panel-page">
                <div className="password-gate">
                    <div className="password-gate__card">
                        <div className="password-gate__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h2>Admin Access</h2>
                        <p>Masukkan password untuk mengakses panel email.</p>
                        <form onSubmit={handlePasswordSubmit}>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                            {authError && <span className="password-gate__error">{authError}</span>}
                            <button type="submit" disabled={authLoading}>
                                {authLoading ? (
                                    <><span className="spinner" /> Memverifikasi...</>
                                ) : (
                                    <>Masuk</>    
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="email-panel-page">
            <div className="email-panel">
                {/* Header */}
                <header className="email-panel__header">
                    <div className="email-panel__header-left">
                        <div className="email-panel__logo">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 4L12 13L2 4" />
                            </svg>
                        </div>
                        <div>
                            <h1>Email Panel</h1>
                            <p className="email-panel__subtitle">Arxenova Social — Outreach Tool</p>
                        </div>
                    </div>
                </header>

                {/* Status Toast */}
                {status !== "idle" && status !== "loading" && (
                    <div className={`email-panel__toast ${status === "success" ? "toast--success" : "toast--error"}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {status === "success" ? (
                                <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>
                            ) : (
                                <><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>
                            )}
                        </svg>
                        <span>{message}</span>
                        <button onClick={() => setStatus("idle")} className="toast__close">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Form */}
                <div className="email-panel__body">
                    {/* Left Column - Settings */}
                    <div className="email-panel__sidebar">
                        <div className="email-panel__card">
                            <h3 className="card__title">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                </svg>
                                Pengirim
                            </h3>
                            <div className="field">
                                <div className="select-wrapper">
                                    <select value={sender} onChange={(e) => handleSenderChange(e.target.value)}>
                                        {SENDERS.map((s) => (
                                            <option key={s.key} value={s.key}>{s.label}</option>
                                        ))}
                                    </select>
                                    <svg className="select-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>

                            <div className="sender-preview">
                                <div className="sender-preview__avatar">
                                    {selectedSenderObj?.label.charAt(0)}
                                </div>
                                <div>
                                    <span className="sender-preview__name">{selectedSenderObj?.label}</span>
                                    <span className="sender-preview__email">{selectedSenderObj?.key}@arxenovasocial.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="email-panel__card">
                            <h3 className="card__title">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                                </svg>
                                Template
                            </h3>
                            <div className="template-list">
                                {templateKeys.map((key) => (
                                    <button key={key} className="template-btn" onClick={() => handleTemplateChange(key)}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                                        </svg>
                                        {templates[key].name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="email-panel__card">
                            <h3 className="card__title">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                </svg>
                                Lampiran
                            </h3>
                            <div className="attachment-item">
                                <div className="attachment-item__icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                                    </svg>
                                </div>
                                <div className="attachment-item__info">
                                    <span className="attachment-item__name">Arxenovasocial Package.pdf</span>
                                    <span className="attachment-item__meta">Auto-attached</span>
                                </div>
                                <div className="attachment-item__badge">PDF</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Compose */}
                    <div className="email-panel__compose">
                        <div className="email-panel__card compose-card">
                            <h3 className="card__title">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                Compose Email
                            </h3>

                            <div className="compose-fields">
                                <div className="field-row">
                                    <div className="field field--half">
                                        <label>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13L2 4" />
                                            </svg>
                                            Email Tujuan <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="client@company.com"
                                            value={recipientEmail}
                                            onChange={(e) => setRecipientEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="field field--half">
                                        <label>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                            </svg>
                                            Nama Penerima
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Nama lengkap penerima"
                                            value={recipientName}
                                            onChange={(e) => setRecipientName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" />
                                        </svg>
                                        Subject <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Subject email..."
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                        </svg>
                                        Body Email <span className="required">*</span>
                                    </label>
                                    <textarea
                                        rows={14}
                                        placeholder="Tulis isi email di sini..."
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="compose-actions">
                                <div className="compose-actions__info">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                    <span>PDF proposal akan otomatis terlampir</span>
                                </div>
                                <button
                                    className={`btn-send ${status === "loading" ? "btn-send--loading" : ""}`}
                                    onClick={handleSend}
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <span className="spinner" />
                                            Mengirim...
                                        </>
                                    ) : (
                                        <>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            Kirim Email
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
