import { FeedBackDTO } from "@/lib/DTO/IEmailRequestDTO";
import prisma from "@/lib/prisma/prisma";
import { generateUUID } from "@/utlities/functions";

export class PdfUpload {
  async addFeedback(body: FeedBackDTO): Promise<any> {
    try {
      return await prisma.user_feedback.create({
        data: {
          id: generateUUID(),
          message: body.message,
          user_id: body.userId,
          submission_date: new Date(body.submissionDate).toISOString(),
        },
      });
    } catch (error) {
      throw new Error("Error sending email");
    }
  }
}
