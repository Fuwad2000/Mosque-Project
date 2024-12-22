import { NextRequest,NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
export async function GET(request: NextRequest)
{
   const prayers = await prisma.prayer_timings.findMany()
    return NextResponse.json(prayers)
}