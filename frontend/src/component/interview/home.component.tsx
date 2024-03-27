"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { grammarList } from "@/utlities/grammarList";
import { getInitialsFromUsername } from "@/utlities/question";
import { getRandomColor } from "@/utlities/functions";

export function HomeComponent(props: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
  const [isStartCountDown, setStartCountDown] = useState<boolean>(false);
  const answer = useRef<string>("");
  const colors = useRef<string>("red");
  const answerDraft = useRef<string>("");
  const submitted = useRef<boolean>(false);
  const recognition = useRef<typeof SpeechRecognition | null>(null);
  const SpeechRecognition =
    typeof window !== "undefined" &&
    ((window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition);

  useEffect(() => {
    if (props.videoPermission) {
      startCamera();
    }
  }, [props.videoPermission]);

  useEffect(() => {
    colors.current = getRandomColor();
  }, []);

  useEffect(() => {
    if (submitted.current) {
      setTimeout(() => {
        submitted.current = false;
        if (answer.current.length < 5) return;
        setIsListening(false);
        setStartCountDown(false);
        props.getResponse(answer.current);
        answer.current = "";
      }, 1500);
    }
  }, [submitted.current]);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOn(true);
        }
      })
      .catch((error) => {
        setIsCameraOn(false);
        console.error("Error accessing the camera:", error);
      });
  };

  const stopCamera = () => {
    if (!videoRef.current?.srcObject) {
      setIsCameraOn(true);
      startCamera();
      return;
    }
    if (videoRef.current) {
      const stream: MediaStream = videoRef.current.srcObject as MediaStream;
      if (stream) {
        const tracks: MediaStreamTrack[] = stream.getTracks();
        tracks.forEach((track: MediaStreamTrack) => {
          track.stop();
        });
        videoRef.current.srcObject = null;
      }
    }
    setIsCameraOn(false);
  };
  function startCountDown() {
    if (!isStartCountDown) {
      setStartCountDown(true);
      setTimeout(() => {
        const element: any = document.querySelector(".speech-text");
        const data = element ? element.innerText : "";
        if (
          !isListening &&
          answer.current.length < 5 &&
          !recognizedText &&
          data?.length < 5
        ) {
          noAnswerFunction();
        }
      }, 90 * 1000);
    }
  }

  function startWithTalkingCountDown() {
    setTimeout(() => {
      stopRecognition();
    }, 60 * 1000);
  }

  function noAnswerFunction() {
    props.getResponse(
      "I appreciate the question, and while I don't have the exact answer at the moment, I'm eager to learn and adapt.",
    );
    setStartCountDown(false);
  }

  const handleSpeechRecognition = () => {
    // startWithTalkingCountDown();
    setRecognizedText("");
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      if (!recognition.current) {
        recognition.current = new SpeechRecognition();
        recognition.current.continuous = true;
        recognition.current.interimResults = true;
        recognition.current.lang = "en-GB";
        if ("SpeechGrammarList" in window) {
          // @ts-ignore
          const speechRecognitionList: any = new SpeechGrammarList();
          const customGrammar = `
            #JSGF V1.0;
            grammar custom;
            public <customPhrase> = (${grammarList}) {weight=2;};
            `;
          speechRecognitionList.addFromString(customGrammar, 1);
          recognition.current.grammars = speechRecognitionList;
        }
        recognition.current.onstart = () => {
          setIsListening(true);
        };
        recognition.current.onresult = (event: any) => {
          let interimTranscript = "";
          for (let i = 0; i < event.results.length; i++) {
            const result = event.results[i][0].transcript;
            if (!event.results[i].isFinal) {
              interimTranscript += result + " ";
            }
          }
          if (!interimTranscript && answerDraft.current) {
            answer.current += " " + answerDraft.current;
          }
          answerDraft.current = interimTranscript;
          setRecognizedText(interimTranscript);
        };
        recognition.current.onerror = (event: any) => {
          setIsListening(false);
        };
      }
      startRecognition();
    }
  };

  const startRecognition = () => {
    if (recognition && recognition.current) {
      setRecognizedText("");
      try {
        recognition.current.start();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const stopRecognition = () => {
    if (recognition && recognition.current) {
      recognition.current.stop();
      submitted.current = true;
      setIsListening(false);
    }
  };

  const style = isListening ? "mic-dark" : "mic-red";
  return (
    <div className="relative">
      <div className="bg-dark rounded m-3 overflow-hidden shadow-2xl">
        <div className="flex-column justify-content-center align-middle image-center h-94vh w-full">
          {isCameraOn ? (
            <video
              ref={videoRef}
              className="object-cover h-full w-full relative"
              autoPlay
              playsInline
              muted
              width="100%"
              height="100%"
            />
          ) : (
            <div
              style={{ backgroundColor: colors.current }}
              className={`rounded-full h-28 w-28 avatar text-white fst-italic p-1 text-rounded`}
            >
              {getInitialsFromUsername(props?.data?.fullName)}
            </div>
          )}
        </div>

        <div className="absolute w-full top-1 pt-2 text-white text-bold ps-1">
          <span className="font-weight-700">{props.step?.name}</span>
          <p className="font-weight-200">{props.step?.description}</p>
        </div>
        <div className="absolute bottom-32 text-white text-bold font-weight-700 ps-1">
          {props?.data?.fullName}
        </div>
        <div className="absolute speech-text bottom-24 text-white text-bold font-weight-300 pe-2 bg-black/80 me-2 rounded-lg px-2">
          {isListening ? recognizedText : ""}
        </div>
      </div>
      <div className="w-v100 flex  justify-center items-center">
        {!recognizedText ? (
          <div className="flex bg-red-900 justify-start z-50">
            {props.speacker === "interviewee" ? (
              <div className="absolute bottom-24 ms-7 text-white font-weight-300">
                <div className="bg-black/80 p-2 rounded-t-lg rounded-br-lg text-wrap">
                  {props.speacker === "interviewee" && !isListening
                    ? "Unmute yourself if you are taking"
                    : null}
                  {props.speacker === "interviewee" && isListening
                    ? "When you are done talking, please mute yourself to allow the panel members to continue."
                    : null}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        <button
          className={
            "s-100 w-12 h-12 a mic  z-40 rounded-full mx-2 shadow-2xl " + style
          }
          onClick={
            isListening
              ? stopRecognition
              : props.speacker === "interviewee"
              ? handleSpeechRecognition
              : () => null
          }
        >
          {!recognizedText &&
          props.speacker === "interviewee" &&
          !isListening ? (
            <svg className="w-6 h-6" viewBox="0 0 61 60" fill="none">
              <path
                d="M30.5 35C34.7192 35 38.125 31.65 38.125 27.5V12.5C38.125 8.35 34.7192 5 30.5 5C26.2808 5 22.875 8.35 22.875 12.5V27.5C22.875 31.65 26.2808 35 30.5 35Z"
                fill="white"
              />
              <path
                d="M43.208 27.5C43.208 34.4 37.5147 40 30.4997 40C23.4847 40 17.7913 34.4 17.7913 27.5H12.708C12.708 36.325 19.3418 43.575 27.958 44.8V52.5H33.0413V44.8C41.6576 43.575 48.2913 36.325 48.2913 27.5H43.208Z"
                fill="white"
              />
              <rect
                width="58.577"
                height="5.69727"
                rx="2.84864"
                transform="matrix(0.621903 -0.783094 0.792967 0.609265 10.167 50.8713)"
                fill="white"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" className="w-6 h-6">
              <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" fill="white" />
              <path
                fill="white"
                d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z"
              />
            </svg>
          )}
        </button>
        <button
          className={`s-100 w-12 h-12 a mic  z-40 rounded-full mx-2 shadow-2xl ${
            isCameraOn ? "mic-dark" : "mic-red"
          }`}
          onClick={stopCamera}
        >
          {isCameraOn ? (
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <title>Camera</title>
              <path d="M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <title>Camera</title>
              <path d="M3.41,1.86L2,3.27L4.73,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16C16.21,18 16.39,17.92 16.55,17.82L19.73,21L21.14,19.59L12.28,10.73L3.41,1.86M5,16V8H6.73L14.73,16H5M15,8V10.61L21,16.61V6.5L17,10.5V7A1,1 0 0,0 16,6H10.39L12.39,8H15Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
