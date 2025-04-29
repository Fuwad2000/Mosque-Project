import MosqueEmail from "@/emails/MosqueEmail";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import schema from "../../contact/schema";
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "oladegafuwad7@gmail.com",
      subject: "Hello World", // Fixed typo: "Hello Wold" to "Hello World"
      react: render(
        <MosqueEmail
          name={name}
          email={email}
          subject={subject}
          message={message}
        />
      ),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Improved the catch block to return a more useful error response
    console.error("Error occurred:", error); // Log the error for debugging
    return NextResponse.json(
      { success: false, message: "An error occurred while sending the email" },
      { status: 500 }
    );
  }
}
