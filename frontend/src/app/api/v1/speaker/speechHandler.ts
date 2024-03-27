import axios, { AxiosResponse } from "axios";

export async function getAudio(
  word: string | null,
  voice: string | null = "alloy",
) {
  const OPENAI_API_KEY = process.env["OPENAI_API_KEY"];
  if (!OPENAI_API_KEY || !word) return null;
  try {
    const response: AxiosResponse<ArrayBuffer> = await axios.post(
      "https://api.openai.com/v1/audio/speech",
      {
        model: "tts-1",
        input: word,
        voice: voice,
        response_format: "mp3",
      },
      {
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    return Buffer.from(response.data);
  } catch (error) {
    return error;
  }
}

async function proxyAudio(words: string, lang: string) {
  try {
    const axiosResponse: AxiosResponse<Buffer> = await axios.get(
      `https://www.translatedict.com/speak.php?word=${words}&lang=${lang}`,
      { responseType: "arraybuffer" },
    );
    return axiosResponse.data;
  } catch (error) {
    return null;
  }
}
