import { NextResponse } from "next/server";
import { Resend } from "resend";
import ThankyouEmail from "@/emails/thankyou";
import Contact from "@/emails/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request) => {

    const { name, email, phone, message, locale } = await req.json()

    const replyToClient = await resend.emails.send({
        from: 'VerbalAce <support@verbalace.com>',
        to: email,
        subject: 'Welcome to VerbalAce - Mastering English Made Fun and Easy!',
        react: ThankyouEmail({ name }),
        reply_to: 'VerbalAce <support@verbalace.com>'
    })

    const sendToTeam = await resend.emails.send({
        from: `${name} <website@verbalace.com>`,
        to: 'support@verbalace.com',
        subject: 'VerbalAce Contact Message',
        react: Contact({ name, email, phone, message }),
        reply_to: `${name} <${email}>`
    })

    if (!replyToClient || !sendToTeam) return NextResponse.json({ success: false, error: true, message: 'Something went wrong please try again.' }, { status: 500 })

    return NextResponse.json({ status: 'Ok' })

}