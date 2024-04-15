import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// シングルトンパターンを使用して、一つのPrismaClientインスタンスを再利用
export const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};
