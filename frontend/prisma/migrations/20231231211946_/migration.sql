-- CreateTable
CREATE TABLE "email_message" (
    "id" VARCHAR(36) NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "description" VARCHAR(2000),
    "full_name" VARCHAR(255) NOT NULL,
    "interview_id" VARCHAR(255) NOT NULL,
    "position" VARCHAR(255) NOT NULL,
    "recipient" VARCHAR(255),

    CONSTRAINT "email_message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "panel_members" (
    "id" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "email" VARCHAR(255),
    "expertise" VARCHAR(255),
    "name" VARCHAR(255) NOT NULL,
    "profile" VARCHAR(255),
    "email_message_id" VARCHAR(36),

    CONSTRAINT "panel_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_feedback" (
    "id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" VARCHAR(5000) NOT NULL,
    "submission_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" VARCHAR(36),

    CONSTRAINT "user_feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "panel_members" ADD CONSTRAINT "panel_members_email_message_id_fkey" FOREIGN KEY ("email_message_id") REFERENCES "email_message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
