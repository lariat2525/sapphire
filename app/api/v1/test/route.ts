import { NextResponse } from "next/server";
import { getPrismaClient } from "@/lib/config";

const prisma = getPrismaClient();

// 通常時テスト
// export const GET = async (req: Request) => {
//   try {
//     const templates = await getRecords("templates", [], {
//       filter: 1,
//     });
//     return NextResponse.json({ templates }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// 通常時条件付きテスト
// export const GET = async (req: Request) => {
//   try {
//     const templates = await getRecords("blogs", [], {
//       where: { equal: { id: 1 } },
//     });
//     return NextResponse.json({ templates }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// // リレーションつきGETテスト
// export const GET = async (req: Request) => {
//   try {
//     const templates = await getRecords("articles", [], {
//       where: { equal: { id: 1 } },
//     });

//     return NextResponse.json({ templates }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: error }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// // CRUDで単一のエンドポイントでも切り替えれるかテスト
// export const POST = async (req: Request) => {
//   try {
//     const templates = await getRecords("templates", []);
//     return NextResponse.json({ templates }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error" }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// };
