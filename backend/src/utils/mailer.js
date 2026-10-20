import nodemailer from "nodemailer";

/**
 * Escapes special HTML characters to prevent HTML injection in email templates.
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Creates and returns a Nodemailer transporter configured via environment variables.
 * Returns null if required configuration is missing.
 */
function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  const port = parseInt(SMTP_PORT || "587", 10);
  const isSecure =
    SMTP_SECURE === "true" ||
    SMTP_SECURE === "1" ||
    port === 465;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: isSecure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    connectionTimeout: 1000,
    greetingTimeout: 1000,
    socketTimeout: 1500,
  });
}

/**
 * Sends an email notification when a visitor submits the contact form.
 *
 * @param {Object} submission
 * @param {string} submission.name - Visitor name
 * @param {string} submission.email - Visitor email
 * @param {string} submission.subject - Message subject
 * @param {string} submission.message - Message body
 * @param {Date|string} [submission.createdAt] - Submission timestamp
 * @returns {Promise<{success: boolean, skipped?: boolean, error?: string}>}
 */
export async function sendContactNotification({
  name,
  email,
  subject,
  message,
  createdAt = new Date(),
}) {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      "Nodemailer notification skipped: SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not configured."
    );
    return {
      success: false,
      skipped: true,
      error: "SMTP service is not configured.",
    };
  }

  const recipient =
    process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;

  if (!recipient) {
    console.warn(
      "Nodemailer notification skipped: No recipient configured in CONTACT_RECEIVER_EMAIL or SMTP_USER."
    );
    return {
      success: false,
      skipped: true,
      error: "No recipient email configured.",
    };
  }

  const fromAddress =
    process.env.SMTP_FROM ||
    `"Portfolio Contact Form" <${process.env.SMTP_USER}>`;

  const formattedDate = new Date(createdAt).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  const mailOptions = {
    from: fromAddress,
    to: recipient,
    replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email.trim()}>`,
    subject: `New Portfolio Contact Form Submission: ${subject.replace(/[\r\n]/g, "")}`,
    text: `New Portfolio Contact Form Submission\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Subject: ${subject}\n` +
      `Date: ${formattedDate}\n\n` +
      `Message:\n${message}\n`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #2c121e;
              background-color: #fcf7f9;
              margin: 0;
              padding: 24px;
            }
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 12px;
              border: 1px solid #ebd3dc;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(164, 44, 80, 0.08);
            }
            .email-header {
              background: linear-gradient(135deg, #831b3e 0%, #4a0d21 100%);
              color: #ffffff;
              padding: 24px 28px;
            }
            .email-header h2 {
              margin: 0;
              font-size: 20px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            .email-header p {
              margin: 6px 0 0;
              font-size: 13px;
              color: #f7b7cb;
            }
            .email-body {
              padding: 28px;
            }
            .field-row {
              margin-bottom: 16px;
              padding-bottom: 14px;
              border-bottom: 1px solid #f3e6ec;
            }
            .field-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .field-label {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.8px;
              color: #a42c50;
              margin-bottom: 4px;
            }
            .field-value {
              font-size: 14px;
              color: #2b111e;
              word-break: break-word;
            }
            .field-value a {
              color: #a42c50;
              text-decoration: none;
            }
            .message-box {
              background: #fdf5f8;
              border: 1px solid #ebd3dc;
              border-radius: 8px;
              padding: 16px;
              margin-top: 6px;
              white-space: pre-wrap;
              font-size: 14px;
              color: #2b111e;
            }
            .email-footer {
              padding: 16px 28px;
              background: #fdf7f9;
              border-top: 1px solid #f3e6ec;
              font-size: 12px;
              color: #7b5866;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h2>New Portfolio Contact Form Submission</h2>
              <p>You have received a new message from your portfolio website.</p>
            </div>
            <div class="email-body">
              <div class="field-row">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${escapeHtml(name)}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Sender Email</div>
                <div class="field-value">
                  <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                </div>
              </div>
              <div class="field-row">
                <div class="field-label">Subject</div>
                <div class="field-value">${escapeHtml(subject)}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Received At</div>
                <div class="field-value">${escapeHtml(formattedDate)}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Message</div>
                <div class="message-box">${escapeHtml(message)}</div>
              </div>
            </div>
            <div class="email-footer">
              Sent via your portfolio backend notification service. Reply directly to this email to respond to ${escapeHtml(name)}.
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Nodemailer delivery error:", error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}
