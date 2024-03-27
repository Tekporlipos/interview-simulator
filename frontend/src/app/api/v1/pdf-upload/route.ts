import { ResponseEntity } from "@/lib/helpers/ResponseEntity";
import { promises as fsPromises, readFileSync } from "fs";
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const pdfFile: File = formData.get("pdf") as File;

    if (!pdfFile) {
      return ResponseEntity("No PDF file provided", 400);
    }

    const ab: ArrayBuffer = await pdfFile.arrayBuffer();
    const bf: Buffer = Buffer.from(ab);
    console.log(bf);
    const filePath: string = "public/file.pdf";

    // Write the buffer to the file
    await fsPromises.writeFile(filePath, bf);

    const fileContent = readFileSync(filePath, "utf8");
    return ResponseEntity(fileContent, 200);
  } catch (error) {
    console.error(error);
    return ResponseEntity(error || "Internal Server Error", 500);
  }
}
