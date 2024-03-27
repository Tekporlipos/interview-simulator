import { EmailRequestDTO } from "@/lib/DTO/IEmailRequestDTO";
import { ResponseEntity } from "@/lib/helpers/ResponseEntity";
import { getInterview, sendEmail } from "@/app/api/v1/send-email/EmailService";
import { requestExtractor } from "@/lib/helpers/RequestExtractor";

export async function POST(req: Request) {
  const emailRequest: EmailRequestDTO = (await req.json()) as EmailRequestDTO;
  try {
    let prismaEmailMessageClient = await sendEmail(emailRequest);
    return ResponseEntity(
      JSON.stringify({
        message: "Interview booked successfully",
        data: prismaEmailMessageClient,
      }),
    );
  } catch (error) {
    return new Response("Bad response", {
      status: 400,
    });
  }
}
