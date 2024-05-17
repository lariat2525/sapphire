import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {};
