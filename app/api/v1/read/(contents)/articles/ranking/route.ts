import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";
import { getResponseData } from "@/lib/helper";
import { rankings } from "@/mock/v1/read/content";

const prisma = getPrismaClient();

// リレーションつきGETテスト
export const GET = async (req: Request) => {};
