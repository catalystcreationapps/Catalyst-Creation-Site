import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, storeUrl, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const senderEmail = process.env.SMTP_USER || 'catalystcreationapps@gmail.com';
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'sahadmuhammedkm123@gmail.com';
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    // Build Email HTML Content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <div style="background-color: #132937; padding: 16px 24px; border-radius: 8px; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Website Contact Lead</h2>
          <p style="color: #3A925F; margin: 4px 0 0 0; font-size: 14px; font-weight: bold;">Catalyst Creations Apps</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #4a5568; font-weight: bold; width: 140px;">Sender Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #4a5568; font-weight: bold;">Sender Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;">
              <a href="mailto:${email}" style="color: #3A925F; font-weight: bold;">${email}</a>
            </td>
          </tr>
          ${storeUrl ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #4a5568; font-weight: bold;">Shopify Store URL:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;">
              <a href="${storeUrl.startsWith('http') ? storeUrl : 'https://' + storeUrl}" target="_blank" style="color: #3A925F;">${storeUrl}</a>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #4a5568; font-weight: bold;">Requested Service:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;">${service || 'Custom Solution Inquiry'}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border-left: 4px solid #3A925F; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; color: #132937;">Message Details:</h4>
          <p style="margin: 0; color: #4a5568; white-space: pre-wrap; line-height: 1.6;">${message || 'No additional message provided.'}</p>
        </div>

        <div style="font-size: 12px; color: #a0aec0; text-align: center; border-top: 1px solid #edf2f7; padding-top: 16px;">
          Sent from <strong>Catalyst Creations Apps Website</strong> • Delivery Target: ${receiverEmail}
        </div>
      </div>
    `;

    // If Gmail App Password environment variable is present, send email via Nodemailer SMTP
    if (gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: senderEmail,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: `"Catalyst Creations Apps" <${senderEmail}>`,
        to: receiverEmail,
        replyTo: email,
        subject: `New Lead from ${name}: ${service || 'Contact Form Inquiry'}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: 'Message sent successfully to ' + receiverEmail
      });
    }

    // Fallback if environment variables are not configured yet
    console.log(`[Form Submission Lead Received]
      Name: ${name}
      Email: ${email}
      Store URL: ${storeUrl}
      Service: ${service}
      Message: ${message}
      Target Receiver: ${receiverEmail}
    `);

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully! (SMTP Credentials pending configuration in .env.local)'
    });

  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
