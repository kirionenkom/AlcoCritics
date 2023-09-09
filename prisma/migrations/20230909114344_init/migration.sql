-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image_path" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Alcohol" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "taste" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image_path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Alcohol_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlcoholRate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "alcohol_id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "AlcoholRate_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlcoholRate_alcohol_id_fkey" FOREIGN KEY ("alcohol_id") REFERENCES "Alcohol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
