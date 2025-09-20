import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from "dotenv";
import { createTransport } from 'nodemailer';
dotenv.config();


type Data = {
  code: number,
  name: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log("Please set the environment variables");
    return;
  }
  const transporter = createTransport({
    host: "sharedlinux.cloudhostdns.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const senderMailOptions = {
    from: "E-CELL VNIT <noreply@ecellvnit.org>",
    to: "corporateaffairs@ecellvnit.co.in",
    subject: `New Message from Ecell VNIT Website Contact Form: ${req.body.name}`,
    text: `You have received a new message from your website contact form.\n\n.Here are the details:\n\nName: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`,
  };

  try {
    await transporter.verify();
    await transporter.sendMail(senderMailOptions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, name: 'Error' });
  }

  const receiverMailOptions = {
    from: "E-CELL VNIT <noreply@ecellvnit.org>",
    to: req.body.email,
    subject: `Thank you for contacting Ecell VNIT`,
    text: `Thank you for contacting Ecell VNIT. We will get back to you as soon as possible.\n\nRegards,\nTeam Ecell`,
  };

  try {
    await transporter.verify();
    await transporter.sendMail(receiverMailOptions);
    res.status(200).json({ code: 200, name: 'Message successfully sent!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, name: 'Error' });
  }
}

export default handler;