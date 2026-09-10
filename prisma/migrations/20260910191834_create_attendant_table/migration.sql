-- CreateTable
CREATE TABLE "Attendant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "numAttendantsMdn" INTEGER NOT NULL,
    "numAttendantsGrj" INTEGER NOT NULL,
    "numAttendantsLee" INTEGER NOT NULL,
    "isAttending" BOOLEAN NOT NULL
);
