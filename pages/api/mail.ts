import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport, type Transporter } from 'nodemailer';


type Data = {
  code: number,
  name: string
}

let transporter: Transporter | null = null;

const getTransporter = () => {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    return null;
  }

  if (!transporter) {
    transporter = createTransport({
      host: "sharedlinux.cloudhostdns.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  return transporter;
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ code: 405, name: "Method not allowed" });
  }

  const mailer = getTransporter();
  if (!mailer) {
    return res.status(500).json({ code: 500, name: "Mail service is not configured" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ code: 400, name: "Missing required fields" });
  }

  const senderMailOptions = {
    from: "E-CELL VNIT <noreply@ecellvnit.org>",
    to: "corporateaffairs@ecellvnit.co.in",
    subject: `New Message from Ecell VNIT Website Contact Form: ${name}`,
    text: `You have received a new message from your website contact form.\n\n.Here are the details:\n\nName: ${name} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`,
  };

  const receiverMailOptions = {
    from: "E-CELL VNIT <noreply@ecellvnit.org>",
    to: email,
    subject: `Thank you for contacting Ecell VNIT`,
    text: `Thank you for contacting Ecell VNIT. We will get back to you as soon as possible.\n\nRegards,\nTeam Ecell`,
  };

  try {
    await Promise.all([
      mailer.sendMail(senderMailOptions),
      mailer.sendMail(receiverMailOptions),
    ]);
    return res.status(200).json({ code: 200, name: 'Message successfully sent!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ code: 500, name: 'Error' });
  }
}

export default handler;
