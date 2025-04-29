import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import schema from "../contact/schema";
import { renderEmailContent } from "@/lib/renderEmail"; // Import the helper function

const resend = new Resend(process.env.RESEND_API_KEY!);

let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(users);
}
