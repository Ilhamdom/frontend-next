import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Semua kolom wajib diisi' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Needs to be App Password for Gmail
      },
    });

    // Verify SMTP connection config
    await transporter.verify();

    // Prepare email HTML wrapper
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
          <div style="background-color: #0A2540; padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">Laporan Kendala SI-REVA</h2>
          </div>
          <div style="padding: 32px 24px;">
            <p style="margin-top: 0; color: #475569; font-size: 15px; line-height: 1.6;">
              Terdapat laporan kendala/pengaduan baru dari sistem SI-REVA. Berikut adalah detail tiket permohonan yang masuk:
            </p>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 24px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; width: 140px;">Nama Pengirim</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email Akun</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 700;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
              </table>
            </div>
            
            <h4 style="margin: 0 0 12px 0; color: #0f172a; font-size: 14px; text-transform: uppercase;">Detail Pesan / Pengaduan:</h4>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #3b82f6; border-radius: 6px; padding: 16px;">
              <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
              Email ini dikirim secara otomatis oleh SI-REVA Mailer System. Mohon untuk segera menindaklanjuti laporan pengguna.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: '"SI-REVA Support" <no-reply@sireva.lan.go.id>',
      to: 'muhamadilhamm48@gmail.com', // Fixed destination based on user request
      replyTo: email,
      subject: `[SI-REVA SUPPORT] Tiket Keluhan Baru dari ${name}`,
      text: `Pesan dari ${name} (${email}):\n\n${message}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, message: 'Email berhasil dikirim' }, { status: 200 });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide user-friendly error if auth fails
    if (error?.code === 'EAUTH') {
       return NextResponse.json(
        { message: 'Konfigurasi SMTP server belum diatur (Auth Failed). Hubungi developer.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Gagal memproses pengiriman ke server Gmail.' },
      { status: 500 }
    );
  }
}
