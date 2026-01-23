// PRISMA SINGELETON INSTANCE (AGAR SAAT QUERY ULANG TIDAK BUAT INSTANCE BARU)
// MYSQL PAKAI PRISMA 6
// import { PrismaClient } from "@/generated/prisma/client";

import { PrismaClient } from "@/generated/prisma";

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;

// const globalForPrisma = globalThis;

// const prisma =
//     globalForPrisma.prisma ??
//     new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//     globalForPrisma.prisma = prisma;
// }

// export default prisma;
