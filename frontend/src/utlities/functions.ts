import {
  baseUrl,
  dataClean,
  extractFiles,
  HistoryItem,
  IChat,
  postWebClient,
} from "@/utlities/builder-script";
import { template } from "@/utlities/question";
import {
  CvQuestion,
  EmailRequest,
  IBioData,
  IInterviewQuestion,
  IPanel,
  IQuestionAnswer,
  PanelMember,
} from "@/utlities/interfaces";
import cvGenieQuestions, {
  getPanelMembers,
  interviewAppointmentQuestions,
} from "@/utlities/cv-genie-questions";

export function generateUUID(): string {
  let d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); // use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function getDomainName(url: string): string | null {
  try {
    const trimmedUrl = url.trim();
    const hasScheme =
      trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://");
    if (!hasScheme) {
      url = `http://${trimmedUrl}`;
    }
    const urlObj = new URL(url);
    const hostnameParts = urlObj.hostname.split(".");
    return hostnameParts.length > 2
      ? hostnameParts.slice(1, -1).join(".")
      : hostnameParts.slice(0, -1).join(".");
  } catch (error) {
    return null;
  }
}

export function getCleanedDomainAndPath(url: string): string | null {
  try {
    const trimmedUrl = url.trim();
    const hasScheme =
      trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://");

    if (!hasScheme) {
      url = `http://${trimmedUrl}`;
    }
    const urlObj = new URL(url);
    const hostnameParts = urlObj.hostname.split(".");
    const domainName = hostnameParts.slice(0, -1).join(".");
    const cleanedPath = urlObj.pathname.replace(/^\/|\/$/g, ""); // Removes leading and trailing slashes

    return `${domainName}/${cleanedPath}`;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}

export function getDateMonth(data: string): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[Number(data) - 1];
}

export default function formatInternationalPhoneNumber(
  phoneNumber: string,
): string {
  const numericPhoneNumber = phoneNumber.replace(/\D/g, "");
  if (!numericPhoneNumber) return phoneNumber;
  const countryCode = numericPhoneNumber.substring(0, 3);
  const segmentedNumber = (
    numericPhoneNumber?.substring(3)?.match(/.{1,3}/g) ?? []
  ).join(" ");
  return `${countryCode} ${segmentedNumber}`;
}

export function convertDateToReadableTime(dateString: string) {
  const date = new Date(dateString);

  // Get individual date and time components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const timeZone = date.toTimeString().split(" ")[1]; // Get the time zone

  // Create a readable time string
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${timeZone}`;
}

export function createNewResume(
  histories: HistoryItem[],
  setStoredHistoryData: any,
  router: any,
  props: any,
): void {
  let templates = template.find(
    (value) => props?.searchParams?.resume == value.id,
  );
  if (templates) {
    const uuid: string = generateUUID();
    const newProject: HistoryItem = {
      type: props.searchParams.resume,
      id: uuid,
      name: `New Resume ${histories.length + 1}`,
      url: null,
    };
    setStoredHistoryData([newProject, ...histories]);
    localStorage.setItem("history", JSON.stringify([newProject, ...histories]));
    router.replace(
      "/builder/" + uuid + "?resume-id=" + props.searchParams.resume,
    );
  }
}

export function sendToServer(
  data: IChat[],
  setStoredData: any,
  createFiles: any,
  handleShowToast: any,
) {
  postWebClient("chat", {
    data: data.length > 5 ? [...data].slice(-5) : data,
  })
    .then((value) => {
      if (value.message) {
        const systemMessage = {
          content: value?.message.content,
          role: value?.message.role,
        };
        let extractFile = extractFiles(value?.message.content);
        if (extractFile.length > 0) {
          setStoredData([...data, systemMessage]);
          createFiles(extractFile, [...data, systemMessage]);
        }
        return;
      }
      handleShowToast(
        "Something went wrong, and we could not process your request. Please try again later.",
      );
    })
    .catch((_) => {
      handleShowToast(
        "We're sorry, but there was an internal server error while processing your request.",
      );
    });
}

export function profileSet(
  answer: any,
  setTyping: any,
  projectId: any,
  chatSendMessage: any,
  setAnswer: any,
) {
  let item = localStorage.getItem("bio");
  if (item) {
    let parse: IBioData = JSON.parse(item);
    const data = [
      ...answer,
      {
        name: "profile_picture",
        type: "user",
        question: null,
        answer: "Profile picture url " + parse.profile_picture,
      } as IQuestionAnswer,
    ];
    localStorage.setItem(projectId?.id + "cvData", JSON.stringify(data));
    setTyping(true);
    chatSendMessage(projectId, 3000, data);
    setAnswer(data);
  }
}

export function chatSendMessage(
  data: HistoryItem,
  timeOut: number,
  answer: IQuestionAnswer[],
  setAnswer: any,
  setTyping: any,
) {
  let find1 = template.find((v) => v.id === data?.type);
  if (find1) {
    let question: number[] = find1.question;
    let iCvQuestionAnswers: IQuestionAnswer[] = answer.filter(
      (v: IQuestionAnswer) => v.question,
    );
    if (
      iCvQuestionAnswers.length <= answer.length / 2 &&
      !(iCvQuestionAnswers.length > answer.length / 2 + 2)
    ) {
      setTimeout(() => {
        const dat: CvQuestion = cvGenieQuestions(
          question[iCvQuestionAnswers.length],
        );
        const dataSet = [
          ...answer,
          {
            name: dat?.name,
            type: "chat",
            question: dat?.question,
            answer: null,
          } as IQuestionAnswer,
        ];
        setAnswer(dataSet);
        setTyping(false);
        localStorage.setItem(data.id + "cvData", JSON.stringify(dataSet));
      }, timeOut);
    } else {
      setTyping(false);
    }
  } else {
    setTyping(false);
  }
}

export function interviewSendMessage(
  data: HistoryItem,
  timeOut: number,
  answer: IQuestionAnswer[],
  setAnswer: any,
  setTyping: any,
) {
  let iCvQuestionAnswers: IQuestionAnswer[] = answer.filter(
    (v: IQuestionAnswer) => v.type === "chat",
  );
  if (
    iCvQuestionAnswers.length <= answer.length / 2 &&
    !(iCvQuestionAnswers.length > answer.length / 2 + 1)
  ) {
    setTimeout(() => {
      const dat: IInterviewQuestion = interviewAppointmentQuestions(
        iCvQuestionAnswers.length,
      );
      const dataSet = [
        ...answer,
        {
          name: dat?.name,
          type: "chat",
          question: dat?.question,
          answer: null,
        } as IQuestionAnswer,
      ];
      setAnswer(dataSet);
      setTyping(false);
      const dataClean = dataSet.filter(
        (value) => value.type !== "error" && value.name !== "error",
      );
      localStorage.setItem(data.id + "interview", JSON.stringify(dataClean));
    }, timeOut);
  } else {
    setTyping(false);
  }
}

export function goNext(
  setLoading: any,
  props: any,
  description: any,
  router: any,
) {
  setLoading("loading");
  const parsedHistory = [];
  const storeProject: string | null = localStorage.getItem("history");
  if (storeProject) {
    parsedHistory.push(...(JSON.parse(storeProject) || []));
  }
  const uuid: string = generateUUID();
  const newProject: HistoryItem = {
    type: props?.data?.params?.id,
    id: uuid,
    name: `New Resume ${parsedHistory.length + 1}`,
    url: null,
  };
  localStorage.setItem(
    "history",
    JSON.stringify([newProject, ...parsedHistory]),
  );
  localStorage.setItem("job_description", description);
  router.replace(" /builder/" + uuid + "?resume-id=" + props?.data?.params?.id);
}

export function goNextInterview(router: any) {
  const parsedHistory = [];
  const storeProject: string | null = localStorage.getItem("history");
  if (storeProject) {
    parsedHistory.push(...(JSON.parse(storeProject) || []));
  }
  const uuid: string = generateUUID();
  const newProject: HistoryItem = {
    type: "interview",
    id: uuid,
    name: `New Mock Interview ${parsedHistory.length + 1}`,
    url: null,
  };
  localStorage.setItem(
    "history",
    JSON.stringify([newProject, ...parsedHistory]),
  );
  router.push(" /builder/" + uuid);
}

function validateEmail(email: string): boolean {
  // Regular expression for a valid email address
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Test the email against the pattern
  return emailPattern.test(email);
}

function validateFullName(fullName: string): boolean {
  // Regular expression to check if the full name contains at least one space
  const fullNamePattern = /[A-Za-z]+\s[A-Za-z]+/;

  return fullNamePattern.test(fullName);
}

export function validateInterview(
  answer: IQuestionAnswer[],
  input: string,
): [boolean, IQuestionAnswer | undefined] {
  let iCvQuestionAnswers: IQuestionAnswer[] = answer.filter(
    (v: IQuestionAnswer) => v.type === "chat",
  );
  let chat: IQuestionAnswer | undefined;
  let state: boolean = true;
  switch (iCvQuestionAnswers.length - 1) {
    case 0:
      if (!validateFullName(input)) {
        state = false;
        chat = {
          name: "",
          type: "error",
          question:
            "Oops! Please enter a valid full name with only letters and spaces. 😕",
          answer: null,
        } as IQuestionAnswer;
      }
      break;
    case 1:
      if (!validateEmail(input)) {
        state = false;
        chat = {
          name: "",
          type: "error",
          question:
            "Oops! It seems like the email address you provided is not valid. Please check and try again. 😕",
          answer: null,
        } as IQuestionAnswer;
      }
      break;
    case 2:
      if (!(input.length > 5)) {
        state = false;
        chat = {
          name: "",
          type: "error",
          question:
            "Oops! It seems like the position you provided is not valid. Please check and try again. 😕",
          answer: null,
        } as IQuestionAnswer;
      }
      break;
  }
  return [state, chat];
}

export function sendForAppointment(
  answer: IQuestionAnswer[],
  projectId: string,
) {
  let iQuestionAnswers = answer.filter(
    (value) => value.answer && value.question && value.type == "chat",
  );
  const sendData: EmailRequest = {} as EmailRequest;
  iQuestionAnswers.forEach((value) => {
    if (value.name === "full_name" && typeof value.answer === "string") {
      sendData.fullName = value.answer;
    } else if (value.name === "email" && typeof value.answer === "string") {
      sendData.recipient = value.answer;
    } else if (value.name === "position" && typeof value.answer === "string") {
      sendData.position = value.answer;
    } else if (
      value.name === "job_description" &&
      typeof value.answer === "string"
    ) {
      sendData.description = dataClean(value.answer);
    } else if (
      value.name === "preferred_date" &&
      typeof value.answer === "string"
    ) {
      sendData.date = JSON.parse(value.answer);
    } else if (
      value.name === "panel_members" &&
      typeof value.answer === "string"
    ) {
      sendData.panelMembers = JSON.parse(value.answer)?.filter(
        (v: IPanel) => v.selected,
      );
    }
  });
  sendData.interviewId = projectId;
  postWebClient("email/send", sendData).then((r) => r);
}

export function filterIntroduction(
  panelMembers: PanelMember[],
  interviewIntroduction: any[],
) {
  const data = panelMembers.map((value) => value.name.trim().toLowerCase());
  return interviewIntroduction.filter((value) =>
    data.includes(value.panel_name.trim().toLowerCase()),
  );
}

export function getAudioLink(words: string, name: string): string {
  const panel = getPanelMembers().find((value) => value.name === name);
  return `${baseUrl}speaker?word=${words}?&voice=${
    panel?.voice ?? "en-US-Studio-Q"
  }`;
}

export function noIntroductionMessage() {
  return "We appreciate your participation in the practice interview. We would like to invite you to share some information about yourself to assist us in customizing our questions to your experience and abilities. However, if you'd rather not do so, that's perfectly acceptable. Please inform us of any additional support you may require, and we will continue with the interview to the best of our ability.";
}

export const playTrack = (
  url: string,
  panel_name: string,
  audioRef: any,
  setSpeaker: any,
  wait: number = 500,
) => {
  if (audioRef.current) {
    audioRef.current.src = url;
    setTimeout(() => {
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().then(() => {
          setSpeaker(panel_name);
        });
      }
    }, wait);
  }
};

function convertToJSON(input: string): string {
  let jsonObject;
  try {
    jsonObject = JSON.parse(input);
  } catch (error) {
    const quotedKeys: string = input.replace(
      /([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g,
      '$1"$2":',
    );
    const quotedValues: string = quotedKeys.replace(
      /'([^'\\]*(?:\\.[^'\\]*)*)'/g,
      '"$1"',
    );
    try {
      jsonObject = JSON.parse(quotedValues);
    } catch (error) {
      try {
        jsonObject = JSON.parse(cleanJsonCode(input));
      } catch (error) {
        const pattern = new RegExp(`[^a-zA-Z0-9\\s:]`, "g");
        let str = input.replace(pattern, "");
        const list = str.split(":");
        if (list.length > 1) {
          jsonObject = assignToGenie(findLongestSentence(list).trim());
        } else {
          jsonObject = assignToGenie(
            "Apologies, but we encountered an issue on our end and can't proceed to the next question. Please click on the replay button to retry this process.",
          );
        }
      }
    }
  }
  return JSON.stringify(jsonObject, null, 2);
}

function assignToGenie(question: string): any {
  return { panel_name: "Genie AI", question: question, type: "Question" };
}

function findLongestSentence(arr: string[]): string {
  let longestSentence = "";
  let maxLength = 0;
  arr.forEach((str) => {
    if (str.length > maxLength) {
      longestSentence = str;
      maxLength = str.length;
    }
  });
  return longestSentence;
}

function cleanJsonCode(input: string): string {
  const b: string[] = [];
  for (let a: number = 0; a < input.length; a++) {
    const v: string = input[a];
    if (
      v === "'" &&
      (input[a - 1] === "{" ||
        input[a - 1] === "," ||
        input[a - 1] === "[" ||
        input[a - 1] === ":" ||
        input[a + 1] === ":" ||
        input[a + 1] === "," ||
        input[a + 1] === "}" ||
        input[a + 1] === "]" ||
        ((input[a - 1] === " " || input[a + 1] === " ") &&
          (input[a - 2] === ":" ||
            input[a - 2] === "{" ||
            (input[a - 2] === "," &&
              (input[a - 3] === "'" || input[a - 3] === '"')) ||
            input[a - 2] === "[" ||
            input[a - 2] === " ")))
    ) {
      b.push('"');
    } else if (v === "\\" && input[a + 1] === "'") {
      b.push("");
    } else {
      b.push(v);
    }
  }
  return b.join("");
}

export function getDatOfRequest(
  value: any,
  setInterviewQuestions: any,
  startIndex: any,
  audioRef: any,
  setSpeaker: any,
) {
  if (value.message) {
    let extractFile = JSON.parse(convertToJSON(value?.message.content) ?? {});
    if (extractFile.length > 0) {
      setInterviewQuestions(extractFile);

      playTrack(
        getAudioLink(
          extractFile[startIndex.current].question,
          extractFile[startIndex.current].panel_name,
        ),
        extractFile[startIndex.current].panel_name,
        audioRef,
        setSpeaker,
        0,
      );
    }
  }
}

export function getTodayDDMMYY(): string {
  const today = new Date();
  let dd = today.getDate().toString();
  let mm = (today.getMonth() + 1).toString(); // Jan is 0, so add 1

  // Pad single digit day or month with leading zero
  dd = dd.length === 1 ? `0${dd}` : dd;
  mm = mm.length === 1 ? `0${mm}` : mm;

  const yyyy = today.getFullYear().toString().slice(-2); // Get last 2 digits of year

  return `${dd}${mm}${yyyy}`;
}

export function clearBookLocalStorage(): void {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("book")) {
      localStorage.removeItem(key);
    }
  }
}

export function validateUserName(userName: string): boolean {
  if (userName.trim() === "") {
    return false;
  }
  const fullNameRegex = /^(?!.*[.]{2,})(?!.*\s{2,})[a-zA-Z\s.'-]{2,}$/;
  let mySet = new Set(Array.from(userName.trim().split("")));
  return fullNameRegex.test(userName) && mySet.size > 5;
}

export function validateJobPosition(jobPosition: string): boolean {
  if (jobPosition.trim() === "") {
    return false;
  }
  const positionRegex = /^[a-zA-Z\s.'-]+$/;
  let mySet = new Set(Array.from(jobPosition.trim().split("")));
  return positionRegex.test(jobPosition.trim()) && mySet.size > 3;
}
export function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export function getDataOfRequestObject(
  value: any,
  audioRef: any,
  setSpeaker: any,
  wait: number,
  type: string = "question",
): void {
  if (value.message) {
    try {
      let extractFile = JSON.parse(convertToJSON(value?.message.content) ?? {});
      if (extractFile.panel_name) {
        playTrack(
          getAudioLink(extractFile[type], extractFile.panel_name),
          extractFile.panel_name,
          audioRef,
          setSpeaker,
          wait,
        );
      }
    } catch (e: any) {
      throw Error(e);
    }
  }
}

export function getTimeOfDay(): string {
  const currentHour = new Date().getHours();
  // Assuming daytime is from 6 AM to 6 PM
  const isDaytime = currentHour >= 6 && currentHour < 18;
  return isDaytime ? "day" : "night";
}

export function getTimeLeft(size: number, stage: number): number {
  return 33 - stage * (30 / size);
}

export function getData(data: any, maxLent: any, iPanels: any) {
  return {
    full_name: data.full_name,
    position: data.position,
    recipient: data.recipient,
    description: JSON.stringify({
      description: dataClean(
        data.description
          .toString()
          .substring(0, maxLent - data?.questions.toString().length),
      ),
      questions: dataClean(data?.questions.toString().substring(0, maxLent)),
      resume:
        data?.questions.toString().length < 20
          ? dataClean(
              data?.resume
                .toString()
                .substring(0, maxLent - data?.description.toString().length),
            )
          : null,
    }),
    date: new Date(
      data.date.length > 10 ? data.date.toString() : Date(),
    ).toISOString(),
    panel_members: iPanels,
    interview_id: generateUUID(),
  };
}
