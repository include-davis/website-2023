import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
      // transporter:
      const transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: process.env.SENDER_EMAIL,
          pass: process.env.SENDER_PASSWORD,
        },
      });

      // extracting data
      const data = JSON.parse(req.body);
      const {
        fname,
        lname,
        company,
        websiteLink,
        email,
        phno,
        WebDev,
        WebDesign,
        EComm,
        AppDesign,
        Branding,
        Other,
        projectDeets,
      } = data;

      // mail format
      const mailOption = {
        from: `${email}`,
        to: process.env.RECEIVER_EMAIL as string,
        subject: `Contact Form - ${fname} ${lname}`,
        html: `<div class="mail-container">
                  <h4>Name: ${fname} ${lname}</h4>
                  <h4>Company: ${company ?? '-'} <br/> website link: ${
          websiteLink ?? '-'
        }</h4>
                  <h4>Contact details: ${email}, ${phno}</h4>
                  <p>Services requested: ${WebDev ?? ''}, ${WebDesign ?? ''}, ${
          EComm ?? ''
        }, ${AppDesign ?? ''}, ${Branding ?? ''}, ${Other ?? ''}</p>
                  <p>Further details: ${projectDeets}</p>
                </div>`,
      };

      // sending mail
      await new Promise<void>(() => {
        transporter.sendMail(mailOption, (error) => {
          if (error) {
            res.status(500).json({
              ok: false,
              error: error.message,
            });
          } else {
            res.status(200).json({ ok: true, message: 'Email sent!' });
          }
        });
      });
    } catch (error: unknown) {
      res.status(500).json({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  } else {
    res.status(400).json({
      ok: false,
      error: 'Request was not a POST request',
    });
  }
}
