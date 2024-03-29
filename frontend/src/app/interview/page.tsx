"use client";
import React, { useEffect, useRef, useState } from "react";
import { PanelComponent } from "@/component/interview/panelComponent";
import { OtherPanelComponent } from "@/component/interview/other.panel.component";
import { HomeComponent } from "@/component/interview/home.component";
import {
  getClosingQuestion,
  getClosingRemarkQuestion,
  getInterviewClosingStage,
  getInterviewSteps,
  getInterviewTechStage,
  getIntroduction,
  interviewPrompt,
} from "@/utlities/cv-genie-questions";
import { EmailRequest, PanelMember } from "@/utlities/interfaces";
import {
  filterIntroduction,
  getAudioLink,
  getDataOfRequestObject,
  getDatOfRequest,
  getTimeLeft,
  noIntroductionMessage,
  playTrack,
} from "@/utlities/functions";

import {
  dataClean,
  getWebclient,
  IChat,
  postWebClient,
} from "@/utlities/builder-script";
import SettingsModalComponent from "@/component/interview/settings.modal.component";
import AccessModalComponent from "@/component/interview/access.modal.component";
import {
  isWithin15FromNow,
  isWithin30MinutesFromNow,
} from "@/utlities/question";
import Image from "next/image";
import ClosingModalComponent from "@/component/builder/closingModalComponent";
import NetworkStatus from "@/component/shared/NetworkStatus.component";
import { mapToEmailRequest } from "@/lib/helpers/RequestExtractor";
import {Socket} from "net";

export default function Home(props: any): React.JSX.Element {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(0);
  const [speaker, setSpeaker] = useState<string>("");
  const permission = useRef<string[]>([]);
  const message = useRef<string>();
  const [permissions, setPermissions] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [access, setAccess] = useState<boolean>(true);
  const interview = useRef<EmailRequest>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  let startIndex = useRef(0);
  let [reply, setReplyValue] = useState(0);
  let [error, setError] = useState(false);
  const [interviewQuestions, setInterviewQuestions] = useState<any[]>();
  const interviewAnswers = useRef<any[]>([]);
  const conversation = useRef<IChat[]>();
  const callbackData = useRef<{data:IChat[],type:string}|null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [step, setStep] = useState<
    {
      expertise: unknown;
      name: string;
      description: string;
    }[]
  >();
  const socketRef = useRef<Socket | null>(null);
  useEffect(() => {
    socketRef.current = require('socket.io-client')(process.env['NEXT_PUBLIC_BACK_SERVER_URL']??'');
    socketRef.current?.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
    socketRef.current?.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
    socketRef.current?.on("error",(e:Error)=>{
      setError(true);
    })
    socketRef.current?.on('chatAI', (message) => {
      console.log(message)
      callback(message,callbackData.current);
    });
  }, []);


  useEffect(() => {
    setInterval(
      () => {
        if (interview.current) {
          if (!isWithin30MinutesFromNow(interview?.current.date)) {
            setAccess(false);
            setPermissions(false);
          }
        }
      },
      5 * 60 * 1000,
    );
  }, []);

  useEffect(() => {
    if (!interview.current) {
      getWebclient("send-email/" + props?.data?.params?.id).then(
        (data: any) => {
          if (data) {
            const value: EmailRequest = mapToEmailRequest(data);
            if (value.interviewId) {
              setInterviewQuestions(
                filterIntroduction(
                  value.panelMembers,
                  getIntroduction(value.position),
                ),
              );
              interview.current = value;
              if (!isWithin30MinutesFromNow(value.date)) setAccess(false);
              let interviewIntroSteps = getInterviewSteps();
              let strings = value.panelMembers.map(
                (value1) => value1.expertise,
              );
              let interviewTechStage = getInterviewTechStage().filter(
                (value1) => strings.includes(value1.expertise),
              );
              let interviewClosingStage = getInterviewClosingStage();
              setStep([
                ...interviewIntroSteps,
                ...interviewTechStage,
                ...interviewClosingStage,
              ]);
            } else {
              setAccess(false);
            }
          } else {
            setAccess(false);
          }
        },
      );
    }
  }, [props?.data?.pathname]);

  function callback(value:any,data:{data:IChat[],type:string}|null) {
    if (data){
      if (value?.message) {
        data.data.push({
          role: value?.message.role,
          content: value?.message.content,
        });
        conversation.current = data.data;
        getDataOfRequestObject(value, audioRef, setSpeaker, 0, data.type);
        } else {
          setError(true);
        }
    }else {
        getDatOfRequest(
          value,
          setInterviewQuestions,
          startIndex,
          audioRef,
          setSpeaker,
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    if (permissions && !isOffline) {
      if (
        stage === 1 &&
        audioRef.current &&
        interviewQuestions &&
        interviewQuestions.length > 0
      ) {
        const endedListener = () => {
          startIndex.current++;
          if (startIndex.current >= interviewQuestions.length) {
            setStage(2);
            setSpeaker("interviewee");
            startIndex.current = 0;
            audioRef.current?.removeEventListener("ended", endedListener);
          } else {
            playTrack(
              getAudioLink(
                interviewQuestions[startIndex.current].question,
                interviewQuestions[startIndex.current].panel_name,
              ),
              interviewQuestions[startIndex.current].panel_name,
              audioRef,
              setSpeaker,
              0,
            );
          }
        };
        audioRef.current?.addEventListener("ended", endedListener);
        playTrack(
          getAudioLink(
            interviewQuestions[startIndex.current].question,
            interviewQuestions[startIndex.current].panel_name,
          ),
          interviewQuestions[startIndex.current].panel_name,
          audioRef,
          setSpeaker,
        );
      } else if (stage === 2) {
        if (message.current) {
          setStage(3);
          setSpeaker("");
          setInterviewQuestions(undefined);
        } else {
          setSpeaker("interviewee");
        }
      } else if (stage === 3 && audioRef.current && message.current) {
        if (message.current.length > 5) {
          if (
            interviewQuestions &&
            startIndex.current >= interviewQuestions.length
          ) {
            startIndex.current = 0;
            setInterviewQuestions(undefined);
            setStage(4);
            return;
          }
          if (!interviewQuestions) {
            const userMessage: IChat = {
              role: "user",
              content: dataClean(
                interviewPrompt(0, {
                  introduction: message.current,
                  requirement: interview.current?.description,
                  position: interview.current?.position,
                  panels: JSON.stringify(interview.current?.panelMembers),
                }),
              ),
            };
            socketRef.current?.emit('chatAI', { data: [userMessage] });
            callbackData.current = null;
            message.current = "";
            setLoading(true);
          } else if (startIndex.current > 0) {
            interviewAnswers.current = [
              ...interviewAnswers.current,
              {
                question: interviewQuestions[startIndex.current - 1].question,
                answer: message.current,
              },
            ];
            message.current = "";
            playTrack(
              getAudioLink(
                interviewQuestions[startIndex.current].question,
                interviewQuestions[startIndex.current].panel_name,
              ),
              interviewQuestions[startIndex.current].panel_name,
              audioRef,
              setSpeaker,
              100,
            );
          }
          const endedListener = () => {
            setSpeaker("interviewee");
            startIndex.current = interviewAnswers.current.length + 1;
          };
          audioRef.current?.addEventListener("ended", endedListener);
        } else {
          playAudio(noIntroductionMessage(), 2);
        }
      } else if (
        step &&
        stage >= 4 &&
        stage < step?.length - 2 &&
        audioRef.current
      ) {
        const data: IChat[] = [...(conversation.current ?? [])];
        let panelMembers;
        if (!conversation.current) {
          if (stage === 4) {
            panelMembers = interview.current?.panelMembers.find(
              (v) => v.name === "David Wilson" || v.name === "John Smith",
            );
          } else {
            let stepElement = step[stage];
            panelMembers = interview.current?.panelMembers?.find(
              (v) => v.expertise === stepElement.expertise,
            );
          }
          if (!panelMembers)
            panelMembers = interview.current?.panelMembers.find(
              (v) => v.name === "Genie AI",
            );
          if (panelMembers) {
            const userMessage: IChat = {
              role: "user",
              content: dataClean(
                interviewPrompt(
                  1,
                  {
                    requirement: interview.current?.description,
                    position: interview.current?.position,
                    panels: JSON.stringify({
                      panel_name: panelMembers.name,
                      expertise: panelMembers.expertise,
                    }),
                  },
                  step[stage].name,
                ),
              ),
            };
            data.push(userMessage);
            const endedListener = () => {
              setSpeaker("interviewee");
              audioRef.current?.removeEventListener("ended", endedListener);
            };
            getQuestion(data, endedListener);
          } else {
            setAccess(false);
          }
        } else if (conversation.current?.length % 2 === 0 && message.current) {
          const userMessage: IChat = {
            role: "user",
            content: message.current,
          };
          data.push(userMessage);
          if (
            data.length > 30 ||
            (interview.current?.date &&
              !isWithin15FromNow(
                interview.current?.date,
                getTimeLeft(step.length - 5, stage - 3),
              ))
          ) {
            conversation.current = undefined;
            setStage((prevState) => prevState + 1);
            message.current = undefined;
          } else {
            const endedListener = () => {
              setSpeaker("interviewee");
              audioRef.current?.removeEventListener("ended", endedListener);
            };
            getQuestion(data, endedListener);
          }
        } else {
          setSpeaker("interviewee");
        }
      } else if (step && stage == step?.length - 2 && audioRef.current) {
        if (message.current) {
          let panelMembers = interview.current?.panelMembers.find(
            (v) => v.name === "Genie AI",
          );
          if (panelMembers) {
            const data: IChat[] = [];
            const userMessage: IChat = {
              role: "user",
              content: dataClean(
                interviewPrompt(
                  2,
                  {
                    requirement: interview.current?.description,
                    position: interview.current?.position,
                    panels: JSON.stringify({
                      panel_name: panelMembers.name,
                      expertise: panelMembers.expertise,
                    }),
                    question: message.current,
                  },
                  step[stage].name,
                ),
              ),
            };
            data.push(userMessage);
            const endedListener = () => {
              audioRef.current?.removeEventListener("ended", endedListener);
              setStage((prevState) => prevState + 1);
            };
            getQuestion(data, endedListener, "answer");
          }
        } else {
          playTrack(
            getAudioLink(
              getClosingQuestion().question,
              getClosingQuestion().panel_name,
            ),
            getClosingQuestion().panel_name,
            audioRef,
            setSpeaker,
            2000,
          );
          const endedListener = () => {
            setSpeaker("interviewee");
            message.current = undefined;
            audioRef.current?.removeEventListener("ended", endedListener);
          };
          audioRef.current?.addEventListener("ended", endedListener);
        }
      } else if (step && stage == step?.length - 1 && audioRef.current) {
        const data = getClosingRemarkQuestion();
        playTrack(
          getAudioLink(data.question, data.panel_name),
          data.panel_name,
          audioRef,
          setSpeaker,
          1000,
        );
        const endedListener = () => {
          setTimeout(() => {
            setIsDone(true);
          }, 3000);
          audioRef.current?.removeEventListener("ended", endedListener);
        };
        audioRef.current?.addEventListener("ended", endedListener);
      }
    }
    audioRef.current?.addEventListener("error", () => setError(true));
  }, [stage, permissions, message.current, interviewQuestions, reply]);

  function getQuestion(
    data: any,
    callback: EventListener,
    type: string = "question",
  ) {
    if (data.length > 0) {
      setLoading(true);
      socketRef.current?.emit('chatAI', { data: data });
      callbackData.current = {data:data,type:type};
      audioRef.current?.addEventListener("ended", callback);
    }
  }
  const playAudio = (words: string | null, stage: number = 0) => {
    if (words && audioRef.current) {
      audioRef.current.src = getAudioLink(words, "alloy");
    } else if (audioRef.current) {
      audioRef.current.src = "/test.mp3";
    }
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setSpeaker("Genie AI");
            permission.current = [
              ...permission.current,
              !words ? "audio" : "voice",
            ];
          })
          .catch((error) => {
            setError(true);
            permission.current = [...permission.current].filter(
              (value) => value !== (!words ? "audio" : "voice"),
            );
          });
        audioRef.current?.addEventListener("ended", () => {
          setSpeaker(stage !== 0 ? "interviewee" : "");
          audioRef.current?.removeEventListener("ended", () => null);
        });
      }
    }, 1000);
  };
  function getResponse(messages: string) {
    if (messages) {
      message.current = messages.trim();
      setSpeaker("");
    }
  }

  function setReply() {
    setReplyValue((prevState) => prevState + 1);
    setLoading(false);
    setError(false);
  }
  return (
    <div className="h-v100 overflow-hidden bg-black/80 w-full relative">
      <div className="opacity-0">
        <audio
          id="audio"
          ref={audioRef}
          className="absolute top-50 pe-5 me-5"
          controls
          src="/test.mp3"
        ></audio>
      </div>
      {access ? (
        <SettingsModalComponent
          setPermissions={setPermissions}
          permission={permission}
          playAudio={playAudio}
          setStage={setStage}
        />
      ) : (
        <AccessModalComponent data={interview.current?.date} />
      )}
      {isDone ? <ClosingModalComponent /> : null}
      <div className="grid grid-cols-12 h-v100">
        <div className="col-span-12 md:col-span-10 h-100">
          <HomeComponent
            isListening={isListening}
            setIsListening={setIsListening}
            step={step ? step[stage] : null}
            data={interview.current}
            videoPermission={permission.current.includes("video")}
            getResponse={getResponse}
            speacker={speaker}
          />
          {loading ? (
            <Image
              className="absolute z-50 top-0 right-0"
              src={"/loading-circle.gif"}
              alt={"loader"}
              width="50"
              height="50"
            />
          ) : null}
        </div>
        {interview.current && interview.current?.panelMembers?.length > 0 ? (
          <div className="absolute h-full w-1/3 right-2 top-10 md:top-0 md:relative md:w-full md:col-span-2 h-v100">
            {[...interview.current?.panelMembers]
              .slice(
                0,
                interview.current.panelMembers.length > 4
                  ? 3
                  : interview.current.panelMembers.length,
              )
              .map((value: PanelMember) => (
                <PanelComponent
                  talking={speaker}
                  key={value.name}
                  data={value}
                />
              ))}
            {interview.current.panelMembers.length > 4 ? (
              <OtherPanelComponent
                talking={speaker}
                data={[...interview.current?.panelMembers].slice(
                  3,
                  interview.current?.panelMembers.length,
                )}
              />
            ) : null}
          </div>
        ) : null}
      </div>
      {error ? (
        <div
          onClick={setReply}
          className="absolute text-red-800 z-50 pe-2 right-2 md:right-1/4 bottom-10 flex flex-col justify-center items-center a"
        >
          <svg
            width="32"
            className="fill-red-500"
            height="32"
            viewBox="0 0 24 24"
          >
            <title>replay</title>
            <path d="M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0 20,13A8,8 0 0,0 12,5Z" />
          </svg>
          <div className="font-weight-900 text-red-500">Reply</div>
        </div>
      ) : null}
      <NetworkStatus setIsOffline={setIsOffline} isOffline={isOffline} />
    </div>
  );
}
