-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Tenant', 'Landlord', 'PropertyManager');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'Tenant',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "properties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "numberOfUnits" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "referenceNumber" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "rentDue" DOUBLE PRECISION NOT NULL,
    "rentArrears" DOUBLE PRECISION NOT NULL,
    "utilities" TEXT NOT NULL,
    "water" BOOLEAN NOT NULL,
    "electricity" BOOLEAN NOT NULL,
    "garbage" BOOLEAN NOT NULL,
    "serviceCharge" BOOLEAN NOT NULL,
    "taxDeductable" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
