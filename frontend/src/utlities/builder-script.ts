import { OBJECT_DATA } from "./question";
export const baseUrl: string =  process.env['NEXT_PUBLIC_BACK_SERVER_URL']+"/api/v1/";
// export const baseUrl: string = "https://api.genieaibuilder.com/api/v1";
export interface HistoryItem {
  id: string;
  name: string;
  url: string | null;
  type: string | null;
}

export interface FileData {
  file: string;
  type: string;
  code: string;
}
export interface IChat {
  role: string;
  content: string;
}
export function extractFiles(content: string): FileData[] {
  const files: FileData[] = [];

  const pattern = /\*\*(.*?)\*\*[\s\S]*?```([\s\S]*?)```/gs;
  let match;
  while ((match = pattern.exec(content))) {
    const fileName = match[1].trim();
    let fileType = "";
    const code = match[2].trim();

    if (fileName.includes(".")) {
      fileType = fileName.substring(fileName.lastIndexOf(".") + 1);
    }

    const file: FileData = {
      file: fileName,
      type: fileType,
      code: code,
    };

    files.push(file);
  }

  return files;
}

export async function postWebClient(
  path = "/chat",
  data: any,
  type = "POST",
): Promise<any> {
  return fetch(baseUrl + path, {
    method: type,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export async function postFileWebClient(
  path = "/chat",
  data: FormData,
  type = "POST",
): Promise<any> {
  return fetch(baseUrl + path, {
    method: type,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      cache: "force-cache",
      Authorization:
        "Bearer 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",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export async function getWebclient(
  path = "/history",
  type = "GET",
): Promise<any> {
  return fetch(baseUrl + path, {
    method: type,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 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",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}

export function dataClean(data: string): string {
  return data
    .replace(/[\r\n]+/g, " ")
    .replace(/"/g, "'")
    .replace(/  +/g, " ");
}

export function formatMessage(message: string = "", count: Number = 0): string {
  switch (count) {
    case 0:
      return (
        "want a " +
        message +
        " Could you please help me with some code snippets and suggested filenames to get started? " +
        "Please always surround the filenames with ** and put them on top of each code snippet. " +
        "Also, remember that the entry file should be named index, for example **index.html**."
      );
    case 1:
      return (
        "Thank you for the code snippet. " +
        "Now, I would like to make some modifications to the code to achieve a specific outcome. " +
        "Instead of just providing the changes, could you please generate the complete updated file with the modifications? " +
        "Here are the modifications I would like to make: " +
        message +
        ". Remember to always surround the filenames with ** and put them on top of each code snippet"
      );
    case 2:
      return (
        `Could you help me create a professional CV based on my information? Here's the data I have, and I'd like it formatted in a professional, well-structured, and appealing manner, especially the bio description and the work descriptions. Don't just fill the object while filling; enhance it and make it professional. Don't leave placeholders. Use your knowledge and provide witty content. I want to assign it to data in my code. It should be a JSON code snippet. Note: The skill levels can only be Beginner, Novice, Intermediate, Advanced, and Expert. If not in this format, convert it to the appropriate format, and the language level is A1 - Beginner, A2 - Elementary, B1 - Intermediate, B2 - Upper Intermediate, C1 - Advanced, and C2 - Proficient/Native. If not in this format, convert it to the appropriate format. If unavailable, set it to Intermediate and B1 - Intermediate, respectively. ` +
        message +
        OBJECT_DATA
      );
    case 3:
      return (
        "use this information to fill the html data and return just the html i want to assign it to a data in my code it should be an html code snippet. " +
        "note: use your knowledge about the job role and job title to enhance every information using the data provided. I am building my resume(cv). add all the entries for list if available." +
        message
      );
    case 4:
      return (
        `I need assistance in tailoring my JSON object to better match my qualifications and experiences for a  job application. Can you help me adjust the 'bio' and 'work experience' sections and ensure that the job I'm applying for is excluded from the 'work experience' section? Additionally, please make any other necessary changes to align with the requirements of the job posting.` +
        message +
        OBJECT_DATA
      );
    default:
      return message;
  }
}
