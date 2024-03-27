"use client";
import TextareaComponent from "@/component/builder/textarea.component";
import React, { useEffect, useRef, useState } from "react";
import LeftNavComponent from "@/component/builder/leftNav.component";
import ActionsComponent from "@/component/builder/actions.component";
import WelcomeComponent from "@/component/builder/welcome.component";
import ToastComponent from "@/component/shared/toast/toast.component";
import FrameComponent from "@/component/builder/frame.component";
import LoaderComponent from "@/component/builder/loader.component";
import {
  dataClean,
  FileData,
  formatMessage,
  HistoryItem,
  IChat,
  postWebClient,
} from "@/utlities/builder-script";
import {
  chatSendMessage,
  createNewResume,
  generateUUID,
  interviewSendMessage,
  profileSet,
  sendForAppointment,
  sendToServer,
  validateInterview,
} from "@/utlities/functions";
import { useRouter } from "next/navigation";
import CreatorPageComponent from "@/component/creator/creator.page.component";
import ChatPageComponent from "@/component/builder/chat.page.component";
import {
  IBioData,
  IQuestionAnswer,
  IPractical,
  IPanel,
  EmailRequest,
} from "@/utlities/interfaces";
import { template } from "@/utlities/question";
import TemplateComponent from "@/component/template/templateComponent";
import { useReactToPrint } from "react-to-print";
import { screenView } from "@/utlities/analytics";
import NoteComponent from "@/component/note/note.component";
import { a } from "@react-spring/web";

export default function Home(props: any) {
  const [show, setShow] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [iFrameCount, setIFrameCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [projectId, setProjectId] = useState<HistoryItem>({} as HistoryItem);
  const [answer, setAnswer] = useState<IQuestionAnswer[]>(
    [] as IQuestionAnswer[],
  );
  const [codes, setCodes] = useState<Array<FileData[]>>(
    [] as Array<FileData[]>,
  );
  const [storedData, setStoredData] = useState<IChat[]>([] as IChat[]);
  const [storedHistoryData, setStoredHistoryData] = useState<HistoryItem[]>([]);
  const router = useRouter();

  const handleShowToast = (message: string) => {
    setMessage(message);
    setShow("toast");
    setTimeout(() => {
      setShow("component");
    }, 3000); // Hide the toast after 3 seconds
  };

  useEffect(() => {
    const storeProject: string | null = localStorage.getItem("history");
    if (storeProject) {
      const parsedHistory: HistoryItem[] = JSON.parse(storeProject) || [];
      setStoredHistoryData(parsedHistory);
      if (props?.searchParams?.resume) {
        createNewResume(parsedHistory, setStoredHistoryData, router, props);
      }
    } else {
      createNewResume([], setStoredHistoryData, router, props);
    }
  }, []);

  useEffect(() => {
    if (props.param) {
      const storedDataString: string | null = localStorage.getItem(
        props.param + "chatData",
      );
      if (storedDataString) {
        const newVar: IChat[] = JSON.parse(storedDataString) ?? [];
        setStoredData(newVar);
      }

      const storeFileData: string | null = localStorage.getItem(
        props.param + "fileData",
      );
      if (storeFileData) {
        const newVar: Array<FileData[]> = JSON.parse(storeFileData) ?? [];
        setCodes(newVar);
      }
    }
  }, [props.param]);

  useEffect(() => {
    let find = storedHistoryData.find((value) => value.id === props.param);
    let preview = localStorage.getItem("preview" + find?.id);
    if (find) {
      setProjectId(find);
      if (find.type && find.type != "interview") {
        let item = localStorage.getItem(find.id + "cvData");
        let job = localStorage.getItem("job_description") ?? "";
        localStorage.setItem("job_description" + find.id, job);
        localStorage.removeItem("job_description");
        const newVar: IQuestionAnswer[] = JSON.parse(item ?? "[]");
        setAnswer(newVar);
        setTyping(true);
        chatSendMessage(find, 3000, newVar, setAnswer, setTyping);
        setState("chat");
      } else if (find.type && find.type == "interview") {
        setState("chat");
        let item = localStorage.getItem(find.id + "interview");
        const newVar: IQuestionAnswer[] = JSON.parse(item ?? "[]") ?? [];
        setAnswer(newVar);
        setTyping(true);
        interviewSendMessage(find, 3000, newVar, setAnswer, setTyping);
      }
      if (preview && preview.length > 100) {
        setState("preview");
      }
    }
  }, [storedHistoryData]);

  function createFiles(extractedFiles: FileData[], data: IChat[]) {
    const id = props.param ?? generateUUID();
    postWebClient(`/create/${id}`, { data: extractedFiles })
      .then((value) => {
        setIFrameCount(iFrameCount + 1);
        if (value.url) {
          setProjectId({ ...projectId, url: value.url, id: id });
          let history = storedHistoryData.find((item) => item.id === id);
          setHistoryToLocalStorage(history, value, id);
          localStorage.setItem(id + "chatData", JSON.stringify(data));
          const dataFile: Array<FileData[]> = [...codes, extractedFiles];
          localStorage.setItem(id + "fileData", JSON.stringify(dataFile));
          setCodes(dataFile);
          setInputMessage("");
          setShow("");
        } else {
          const dataSet: IChat[] = [...data];
          dataSet.pop();
          dataSet.pop();
          setStoredData(dataSet);
          handleShowToast(
            "Something went wrong, and you will have to try again",
          );
        }
      })
      .catch((_) => {
        handleShowToast(
          "We're sorry, but there was an internal server error while processing your request.",
        );
      });
  }

  function setHistoryToLocalStorage(history: any, value: any, id: any) {
    if (history) {
      history.url = value.url;
      const data: HistoryItem[] = storedHistoryData.map((item) => {
        if (item.id === history.id) {
          return history;
        }
        return item;
      });
      setStoredHistoryData(data);
      localStorage.setItem("history", JSON.stringify(data));
    } else {
      const data: HistoryItem[] = [
        {
          id: id,
          name: "New Project " + (storedHistoryData.length + 1),
          url: value.url,
          type: null,
        },
        ...storedHistoryData,
      ];
      setStoredHistoryData(data);
      localStorage.setItem("history", JSON.stringify(data));
    }
  }

  function sendToServerBuildChatCV(
    description: string,
    info: string,
    count: number = 2,
  ) {
    let text: string = description ? "The job requirement. " + description : "";
    text += " . My current information " + info;
    const message: string = formatMessage(text, count);
    const userMessage: IChat = {
      role: "user",
      content: dataClean(message),
    };
    const data: IChat[] = [userMessage];
    postWebClient("/chat", {
      data: data.length > 5 ? [...data].slice(-5) : data,
    }).then((value) => {
      if (value.choices) {
        let extractFile = JSON.parse(value?.choices[0].message.content ?? {});
        const keys: Array<string> = Object.keys(extractFile);
        if (count != 4) {
          for (let key of keys) {
            localStorage.setItem(key, JSON.stringify(extractFile[key]));
          }
        }
        localStorage.setItem(
          "preview" + projectId.id,
          JSON.stringify(extractFile),
        );
        setProjectId({ ...projectId, url: "preview" });
        setState("preview");
        setShow("");
      } else {
        handleShowToast(
          "Something went wrong, and we could not process your request. Please try again later.",
        );
      }
      setTyping(false);
    });
  }

  function sendChatToServer() {
    const jobDescription =
      localStorage.getItem("job_description" + projectId.id) || "";
    const info = JSON.stringify(answer);
    const find = template.find((v: any) => v?.id === projectId.type);
    if (find) {
      sendToServerBuildChatCV(jobDescription, info);
    } else {
      handleShowToast(
        "Something went wrong, and we could not process your request. Please try again later.",
      );
    }
  }

  function sendComponentMessage() {
    setShow("loading");
    let preview: any = JSON.parse(
      localStorage.getItem("preview" + projectId.id) ?? "{}",
    );
    let bio: IBioData = JSON.parse(localStorage.getItem("bio") ?? "{}");
    let practical: IPractical = JSON.parse(
      localStorage.getItem("practical") ?? "{}",
    );
    let abilities = JSON.parse(localStorage.getItem("abilities") ?? "{}");
    let theoretical = JSON.parse(localStorage.getItem("theoretical") ?? "{}");
    let recognition = JSON.parse(localStorage.getItem("recognition") ?? "{}");
    let personality = JSON.parse(localStorage.getItem("personality") ?? "{}");
    let description =
      localStorage.getItem("job_description" + projectId.id) ?? "";
    const data = {
      bio,
      practical,
      abilities,
      theoretical,
      recognition,
      personality,
    };
    if (
      data.bio.description === preview?.bio?.description &&
      data.practical.experiences.toString().trim().toLowerCase() ==
        preview.practical.experiences.toString().trim().toLowerCase()
    ) {
      setTimeout(() => {
        preview = data;
        localStorage.setItem("preview" + projectId.id, JSON.stringify(preview));
        setShow("");
        setProjectId({ ...projectId, url: "preview" });
        setState("preview");
      }, 3000);
      return;
    }
    const info: string = JSON.stringify(data);
    let find = template.find((v: any) => v?.id === projectId.type);
    if (find) {
      sendToServerBuildChatCV(description, info, 4);
    } else {
      handleShowToast(
        "something went wrong and we could not processed, try again later.",
      );
    }
  }

  function sendMessage() {
    if (
      projectId.type &&
      projectId.type != "interview" &&
      inputMessage.toLowerCase().includes("generate") &&
      inputMessage.length < 20
    ) {
      let temp = template.find((value) => (value.id = projectId.type));
      let ques = answer.filter((value) => value.question);
      if (temp.question.length / 2 < ques.length) {
        const data = [
          ...answer,
          {
            name: "",
            type: "user",
            question: null,
            answer: inputMessage,
          } as IQuestionAnswer,
        ];
        setAnswer(data);
        setInputMessage("");
        setTyping(true);
        setTimeout(() => {
          const dataset = [
            ...answer,
            {
              name: "corrections",
              type: "chat",
              question:
                "If you find any mistakes or want to make corrections to your CV, please let me know here. You can also check it at the component section. I'm here to help!",
              answer: null,
            } as IQuestionAnswer,
          ];
          setTyping(false);
          setAnswer(dataset);
          localStorage.setItem(
            projectId.id + "cvData",
            JSON.stringify(dataset),
          );
          setTimeout(() => {
            setShow("loading");
            sendChatToServer();
          }, 2000);
        }, 3000);
      } else {
        setTyping(true);
        setInputMessage("");
        setTimeout(() => {
          setTyping(false);
          setAnswer([
            ...answer,
            {
              name: "",
              type: "chat",
              question:
                "I'm sorry, but I haven't received enough information to proceed with creating your resume (CV). Please provide any missing details, and once I have everything, I'll work on crafting your personalized CV!",
              answer: null,
            } as IQuestionAnswer,
          ]);
        }, 3000);
      }
      return;
    } else if (projectId.type && projectId.type == "interview") {
      const [state, chat] = validateInterview(answer, inputMessage);

      if (state) {
        const newData = [...answer];
        newData[newData.length - 1].answer = inputMessage;
        const data = [
          ...newData,
          {
            name: "",
            type: "user",
            question: null,
            answer: inputMessage,
          } as IQuestionAnswer,
        ];
        setAnswer(data);
        setInputMessage("");
        setTyping(true);
        interviewSendMessage(projectId, 3000, data, setAnswer, setTyping);
      } else {
        const dataMessage = [
          ...answer,
          {
            name: "error",
            type: "user",
            question: null,
            answer: inputMessage,
          } as IQuestionAnswer,
        ];
        setAnswer(dataMessage);
        setInputMessage("");
        setTyping(true);
        setTimeout(() => {
          const data = [...dataMessage, chat as IQuestionAnswer];
          setTyping(false);
          setAnswer(data);
        }, 3000);
      }
    } else if (inputMessage.length > 2) {
      if (projectId.type && projectId.type != "interview") {
        const data = [
          ...answer,
          {
            name: "",
            type: "user",
            question: null,
            answer: inputMessage,
          } as IQuestionAnswer,
        ];
        setAnswer(data);
        setInputMessage("");
        setTyping(true);
        chatSendMessage(projectId, 3000, data, setAnswer, setTyping);
      }
      if (!projectId.type) {
        setShow("loading");
        const userMessage: IChat = {
          role: "user",
          content: dataClean(
            formatMessage(inputMessage, projectId.url ? 1 : 0),
          ),
        };
        setStoredData([...storedData, userMessage]);
        sendToServer(
          [...storedData, userMessage],
          setStoredData,
          createFiles,
          handleShowToast,
        );
      }
    }
  }

  function getBioNme(): string {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem("bio") ?? "{}")?.name;
    }
    return "my Resume";
  }

  const componentRef = useRef(null);
  const downloadResume = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: getBioNme() + "'s resume" ?? "my_resume",
  });
  useEffect(() => {
    screenView("Builder page", "src/app/builder/page.tsx");
  }, []);

  function setDate(date: Date) {
    const dataOut: IQuestionAnswer[] = [...answer].map((value) => {
      if (value.name === "preferred_date") value.answer = JSON.stringify(date);
      return value;
    });
    const data = [
      ...dataOut,
      {
        name: "",
        type: "user",
        question: null,
        answer: "The preferred date for the mock interview set to : " + date,
      } as IQuestionAnswer,
    ];
    setAnswer(data);
    setInputMessage("");
    setTyping(true);
    interviewSendMessage(projectId, 3000, data, setAnswer, setTyping);
  }
  function panelSet(panels: IPanel) {
    const dataOut: IQuestionAnswer[] = [...answer].map((value) => {
      if (value.name === "panel_members") value.answer = JSON.stringify(panels);
      return value;
    });
    const data = [
      ...dataOut,
      {
        name: "",
        type: "user",
        question: null,
        answer:
          "I'm satisfied with the panelists that had been selected. Make an appointment right away.",
      } as IQuestionAnswer,
    ];
    setAnswer(data);
    setInputMessage("");
    setTyping(true);
    sendForAppointment(answer, projectId.id);
    //send invitation
    interviewSendMessage(projectId, 3000, data, setAnswer, setTyping);
  }

  return (
    <>
      <section className="row">
        <LeftNavComponent
          storedHistoryData={storedHistoryData}
          setStoredHistoryData={setStoredHistoryData}
          uuid={props.param}
        />

        <div className="col-lg-10 col-md-9 col-sm-12 p-0 m-0">
          <div className="p-0 m-0 border-top-sm h-100vh">
            <ActionsComponent
              setStoredData={setCodes}
              storedData={codes}
              projectId={projectId}
              setState={setState}
              state={state}
              download={downloadResume}
            />

            {["", "preview"].includes(state) && !projectId.type ? (
              <>
                {!projectId.url ? (
                  <WelcomeComponent key={1} sendMessage={setInputMessage} />
                ) : (
                  <FrameComponent key={iFrameCount} url={projectId.url} />
                )}
              </>
            ) : null}

            {state == "preview" && projectId.type ? (
              <div className="logo justify-content-center overflow-y-scroll h-95">
                <div className="w-75">
                  <div ref={componentRef} className="w-100">
                    <TemplateComponent content={projectId} />
                  </div>
                </div>
              </div>
            ) : null}

            {state == "component" &&
            projectId.type &&
            projectId.type != "interview" ? (
              <>
                <CreatorPageComponent
                  send={sendComponentMessage}
                  data={projectId}
                />
              </>
            ) : null}

            {state == "chat" && projectId.type ? (
              <>
                <ChatPageComponent
                  profileSet={() =>
                    profileSet(
                      answer,
                      setTyping,
                      projectId,
                      chatSendMessage,
                      setAnswer,
                    )
                  }
                  data={answer}
                  setDate={setDate}
                  panelSet={panelSet}
                  typing={typing}
                />
              </>
            ) : null}
          </div>
          <div className="input-controller col-lg-10 col-md-10 col-sm-12 logo justify-content-center">
            {(projectId.type && !["preview", "component"].includes(state)) ||
            (!projectId.type && ["preview", ""].includes(state)) ? (
              <div className="w-65 text-center">
                <div className="logo justify-content-center ">
                  <TextareaComponent
                    placeholder={"Enter a prompt here..."}
                    setintput={setInputMessage}
                    inputMessage={inputMessage}
                    sendMessage={sendMessage}
                    disable={typing}
                  />
                </div>
                <small className="font-weight-200 text-small hide-mobile text-secondary d-lg-block d-md-none">
                  ⚠️ Please be aware that Genie&apos;s responses may not always
                  be entirely accurate, particularly regarding the way you
                  structure your command.
                </small>
              </div>
            ) : null}
            <div className="hide-mobile">
              <NoteComponent />
            </div>
          </div>
        </div>
      </section>
      <div className="toaster" id="error-toast"></div>
      <LoaderComponent loading={show == "loading"} />
      {show == "toast" && (
        <ToastComponent background={"red"} message={message} />
      )}
    </>
  );
}
