/*
  Warnings:

  - You are about to alter the column `phoneNumber` on the `Attendant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attendant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "affiliation" TEXT NOT NULL,
    "numAttendantsMdn" INTEGER NOT NULL,
    "numAttendantsGrj" INTEGER NOT NULL,
    "numAttendantsLee" INTEGER NOT NULL,
    "isAttending" BOOLEAN NOT NULL
);
INSERT INTO "new_Attendant" ("affiliation", "countryCode", "id", "isAttending", "name", "numAttendantsGrj", "numAttendantsLee", "numAttendantsMdn", "phoneNumber") SELECT "affiliation", "countryCode", "id", "isAttending", "name", "numAttendantsGrj", "numAttendantsLee", "numAttendantsMdn", "phoneNumber" FROM "Attendant";
DROP TABLE "Attendant";
ALTER TABLE "new_Attendant" RENAME TO "Attendant";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
