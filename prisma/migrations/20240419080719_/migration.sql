-- CreateTable
CREATE TABLE "BlogAppearances" (
    "id" SERIAL NOT NULL,
    "blog_id" INTEGER NOT NULL,
    "appearance_id" INTEGER NOT NULL,

    CONSTRAINT "BlogAppearances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appearances" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "en_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appearances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BlogAppearances" ADD CONSTRAINT "BlogAppearances_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogAppearances" ADD CONSTRAINT "BlogAppearances_appearance_id_fkey" FOREIGN KEY ("appearance_id") REFERENCES "Appearances"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
