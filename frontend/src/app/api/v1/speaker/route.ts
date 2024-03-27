import { NextRequest } from "next/server";
import { throws } from "assert";
import { getAudio } from "@/app/api/v1/speaker/speechHandler";
import { getResponseTypeEntity } from "@/lib/helpers/ResponseEntity";

export async function GET(req: NextRequest) {
  const url = new URL(req.url).searchParams;
  const word = url.get("word");
  const lang = url.get("voice");
  let audioData = await getAudio(word, lang);
  return getResponseTypeEntity(audioData);
}
