-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPro" BOOLEAN NOT NULL DEFAULT false,
    "lastMothPaymentFailed" BOOLEAN NOT NULL DEFAULT false,
    "timeZoneId" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeZone" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "utc_difference" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TimeZone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_userId_key" ON "Company"("userId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_timeZoneId_fkey" FOREIGN KEY ("timeZoneId") REFERENCES "TimeZone"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
