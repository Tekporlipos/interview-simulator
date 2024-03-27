import { requestExtractor } from "@/lib/helpers/RequestExtractor";
import { getInterview } from "@/app/api/v1/send-email/EmailService";
import { ResponseEntity } from "@/lib/helpers/ResponseEntity";

export async function GET(req: Request) {
  let requestExtractor1 = requestExtractor(req);
  if (requestExtractor1) {
    const data = await getInterview(requestExtractor1);
    return ResponseEntity(
      JSON.stringify({ message: "Interview fetched successful", data: data }),
    );
  }
  return new Response("Bad response", {
    status: 401,
  });
}
