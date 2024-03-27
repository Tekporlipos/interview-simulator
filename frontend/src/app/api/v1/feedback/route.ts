import { ResponseEntity } from "@/lib/helpers/ResponseEntity";
import { FeedBackDTO } from "@/lib/DTO/IEmailRequestDTO";
import { FeedBackService } from "@/app/api/v1/feedback/FeedBackService";
const feedBackService: FeedBackService = new FeedBackService();
export async function POST(req: Request) {
  const feedBackDTO: FeedBackDTO = (await req.json()) as FeedBackDTO;
  const feed = await feedBackService.addFeedback(feedBackDTO);
  return ResponseEntity(JSON.stringify(feed));
}
