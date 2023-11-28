import { EmailTemplate } from "@/components/email-template";
import { EmailDataSchema } from "@/lib/zod/email-schema";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const contactData = await req.body;
  const validatedContactinfo = EmailDataSchema.safeParse(
    JSON.parse(contactData)
  );
  if (validatedContactinfo.success) {
    const { name, email, subject, message } = validatedContactinfo.data;
    try {
      const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["bishwajitkuat@gmail.com"],
        subject: "Test submission",
        text: "Contact Form",
        react: EmailTemplate({
          name,
          email,
          subject,
          message,
        }),
      });
      res
        .status(200)
        .json({ success: true, message: "Your message is successfully sent!" });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          "Problem is occured with email server, your message could not be delivered.",
      });
    }
  } else if (validatedContactinfo.error) {
    res.status(400).json({
      sucess: false,
      message: validatedContactinfo.error
        .flatten()
        .fieldErrors.name?.join(", "),
    });
  }
}
