import sgMail from '@sendgrid/mail';

const sendGridApiKey = process.env.SENDGRID_API_KEY;
const emailTo = process.env.CONTACT_EMAIL_TO || 'admin@mbabros.com';
const emailFrom = process.env.CONTACT_EMAIL_FROM || 'no-reply@mbabros.com';

if (!sendGridApiKey) {
  throw new Error('SENDGRID_API_KEY is not configured.');
}

sgMail.setApiKey(sendGridApiKey);

async function parseJsonRequestBody(req: any) {
  const chunks: Uint8Array[] = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const body = req.body ?? (await parseJsonRequestBody(req));
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    await sgMail.send({
      to: emailTo,
      from: emailFrom,
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact email send failed:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}
