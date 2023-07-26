import { NextResponse } from "next/server";
import { Resend } from "resend";
import ThankyouEmail from "@/emails/thankyou";
import Contact from "@/emails/contact";
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {

    const { name, email, phone, message } = await req.json()

    await resend.emails.send({
        from: 'support@verbalace.com',
        to: email,
        subject: 'Welcome to VerbalAce - Mastering English Made Fun and Easy!',
        react: ThankyouEmail({ name })
    })

    await resend.emails.send({
        from: 'email@verbalace.com',
        to: 'support@verbalace.com',
        subject: 'VerbalAce Contact Page',
        react: Contact({ name, email, phone, message })
    })

    return NextResponse.json({ status: 'Ok' })

}