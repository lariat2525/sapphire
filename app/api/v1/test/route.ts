import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";

const prisma = getPrismaClient();

export const GET = async (req: Request) => {
  try {
    const templates = await prisma.templates.findMany();
    return NextResponse.json({ templates }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
