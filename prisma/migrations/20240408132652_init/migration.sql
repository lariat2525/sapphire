-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "image_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "en_name" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "release_flg" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "post_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monsters" (
    "id" SERIAL NOT NULL,
    "blog_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "jp_name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "strength_value" INTEGER NOT NULL,
    "magic_power_value" INTEGER NOT NULL,
    "intelligence_value" INTEGER NOT NULL,
    "risk_value" INTEGER NOT NULL,
    "rarity_value" INTEGER NOT NULL,
    "trait_text" TEXT NOT NULL,
    "root_text" TEXT NOT NULL,
    "weakness_text" TEXT NOT NULL,
    "habitat" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Monsters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Templates" (
    "id" SERIAL NOT NULL,
    "column" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogTags" (
    "id" SERIAL NOT NULL,
    "blog_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "BlogTags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blogs_image_id_key" ON "Blogs"("image_id");

-- CreateIndex
CREATE UNIQUE INDEX "Blogs_article_id_key" ON "Blogs"("article_id");

-- CreateIndex
CREATE UNIQUE INDEX "Monsters_blog_id_key" ON "Monsters"("blog_id");

-- AddForeignKey
ALTER TABLE "Blogs" ADD CONSTRAINT "Blogs_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blogs" ADD CONSTRAINT "Blogs_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Monsters" ADD CONSTRAINT "Monsters_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogTags" ADD CONSTRAINT "BlogTags_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogTags" ADD CONSTRAINT "BlogTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
