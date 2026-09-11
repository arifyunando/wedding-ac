import { PrismaClient } from "./prisma/generated/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "$env/static/private";

const adapter = new PrismaLibSql({
  url: `${TURSO_DATABASE_URL}`,
  authToken: `${TURSO_AUTH_TOKEN}`,
});
export const prismaClient = new PrismaClient({ adapter });