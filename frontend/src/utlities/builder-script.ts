import { OBJECT_DATA } from "./question";
export const baseUrl: string =
  process.env["NEXT_PUBLIC_BACK_SERVER_URL"] + "/api/v1/";
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
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      cache: "force-cache",
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
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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