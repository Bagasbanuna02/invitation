
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Deklarasi global untuk menambahkan properti 'prisma'
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Gunakan singleton pattern
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;