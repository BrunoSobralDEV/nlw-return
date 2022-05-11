import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4bb08e74e92a9b",
    pass: "ca8fd38d7877f9"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <brunosobralss@gmail.com>',
      to: 'Bruno Sobral <brunosobralss@hotmail.com>',
      subject,
      html: body
   })
  }
}