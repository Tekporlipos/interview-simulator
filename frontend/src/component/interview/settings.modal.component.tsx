"use client";
import React, { useState } from "react";
import { getTodayDDMMYY } from "@/utlities/functions";
import { AuthModalComponent } from "@/component/auth/auth.modal.component";
import Link from "next/link";

type DeviceLabels = {
  [key: string]: string;
};
export default function SettingsModalComponent(props: any) {
  const [settings, setSettings] = useState<string>("video");
  const [error, setError] = useState<any>({});
  const [errorVideo, setErrorVideo] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [deviceLiable, setDeviceLiable] = useState<DeviceLabels>({});
  const startAudio = () => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        props.permission.current = [...props.permission.current, "microphone"];
        getDeviceNames();
      })
      .catch((error) => {
        props.permission.current = [...props.permission.current].filter(
          (value) => value !== "microphone",
        );
        setError({
          microphone:
            "Microphone access denied. Please allow audio access to listen to Microphone. ",
        });
      });
  };

  function getDeviceNames() {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const updatedDeviceLabels = devices.reduce(
        (acc: DeviceLabels, device) => {
          acc[device.kind] = device.label;
          return acc;
        },
        {},
      );

      setDeviceLiable((prevState) => ({
        ...prevState,
        ...updatedDeviceLabels,
      }));
    });
  }
  function getRecognition() {
    const isEdgeOrEdg =
      /Edg/.test(navigator.userAgent) || /Edge/.test(navigator.userAgent);
    if (
      "webkitSpeechRecognition" in window &&
      !isEdgeOrEdg &&
      !("brave" in navigator)
    ) {
      props.permission.current = [...props.permission.current, "recognition"];
      setTimeout(() => {
        setError({
          recognition: "",
        });
      }, 500);
    } else {
      props.permission.current = props.permission.current.filter(
        (value: any) => value !== "recognition",
      );
      setTimeout(() => {
        setError({
          recognition:
            "Speech synthesis isn't supported in your browser. For the best experience, try using Google Chrome or Safari.",
        });
      }, 500);
    }
  }

  function start() {
    setModal(false);
    setTimeout(() => {
      props.setPermissions(true);
      props.setStage(4);
    }, 1000);
  }
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        props.permission.current = [...props.permission.current, "video"];
        getDeviceNames();
      })
      .catch((error) => {
        props.permission.current = [...props.permission.current].filter(
          (value) => value !== "video",
        );
        setErrorVideo(true);
        setError({
          video:
            "Voice access denied. Please allow audio access to listen to voice. ",
        });
      });
  };

  const check = (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
  React.useEffect(() => {
    setCount(Number(localStorage.getItem("book" + getTodayDDMMYY())));
  }, []);

  return (
    <div>
      {count > 2 && <AuthModalComponent />}
      {modal ? (
        <div
          className={`absolute w-full h-full z-50 ${modal ? "bg-white" : ""}`}
        >
          <div className="flex flex-col p-5 justify-center items-center h-full w-full absolute ">
            <div className="text-left  w-full  md:w-3/4 lg:w-2/4 flex flex-col">
              <div className="font-weight-700 text-2xl mb-2">Settings</div>
              <div className="font-weight-300 mb-7">
                <span className="font-weight-500">
                  Welcome to the Settings section!
                </span>{" "}
                <br /> Here, we make sure you have everything you need for a
                smooth interview process. Verify that you have the appropriate
                access by going over each component.
              </div>
            </div>
            <div className="w-full md:w-3/4 lg:w-2/4 bg-gray-100 p-1 md:p-5 rounded overflow-hidden z-3">
              <div className=" font-weight-700 text-xl p-2">Components</div>
              <div className="grid grid-cols-4 md:grid-cols-3">
                <div className="col-span-2 md:col-span-1 h-full md:h-100 pe-1 md:pe-5 border-r-2 overflow-x-hidden border-danger border-start ">
                  <div
                    className={
                      " p-3 hover-card a rounded-xl my-1 md:my-3 transition-3 font-weight-300 flex justify-between " +
                      (settings === "video"
                        ? "bg-red-900 text-white fill-white stroke-white"
                        : " stroke-green-500")
                    }
                    onClick={() => setSettings("video")}
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        className="h-6 w-6 me-1 "
                        stroke={settings != "video" ? "black" : ""}
                        viewBox="0 0 24 24"
                      >
                        <title>Video</title>
                        <path d="M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z" />
                      </svg>
                      <div>Video</div>
                    </div>
                    {props.permission.current.includes("video") ? check : null}
                  </div>
                  <div
                    className={
                      "p-3 hover-card a rounded-xl my-1 md:my-3 transition-3 font-weight-300 logo   justify-between " +
                      (settings === "microphone"
                        ? "bg-red-900 text-white fill-white stroke-white"
                        : " stroke-green-500")
                    }
                    onClick={() => setSettings("microphone")}
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        className="h-6 w-6 me-1 "
                        stroke={settings != "microphone" ? "black" : ""}
                        viewBox="0 0 24 24"
                      >
                        <title>Microphone</title>
                        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                      </svg>
                      <div>Microphone</div>
                    </div>
                    {props.permission.current.includes("microphone")
                      ? check
                      : null}
                  </div>
                  <div
                    className={
                      "p-3 hover-card a rounded-xl my-1 md:my-3 transition-3 font-weight-300 logo  justify-between " +
                      (settings === "audio"
                        ? "bg-red-900 text-white fill-white stroke-white"
                        : " stroke-green-500")
                    }
                    onClick={() => setSettings("audio")}
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        className="h-6 w-6 me-1 "
                        stroke={settings != "audio" ? "black" : ""}
                        viewBox="0 0 24 24"
                      >
                        <title>Audio</title>
                        <path d="M12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12M12,20A5,5 0 0,1 7,15A5,5 0 0,1 12,10A5,5 0 0,1 17,15A5,5 0 0,1 12,20M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M17,2H7C5.89,2 5,2.89 5,4V20A2,2 0 0,0 7,22H17A2,2 0 0,0 19,20V4C19,2.89 18.1,2 17,2Z" />
                      </svg>
                      <div>Audio</div>
                    </div>
                    {props.permission.current.includes("audio") ? check : null}
                  </div>
                  <div
                    className={
                      "p-3 hover-card a rounded-xl my-1 md:my-3 transition-3 font-weight-300 logo  justify-between  " +
                      (settings === "recognition"
                        ? "bg-red-900 text-white fill-white stroke-white"
                        : " stroke-green-500")
                    }
                    onClick={() => setSettings("recognition")}
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        className="h-6 w-6 me-1 "
                        stroke={settings != "recognition" ? "black" : ""}
                        viewBox="0 0 24 24"
                      >
                        <title>Recognition</title>
                        <path d="M9,5A4,4 0 0,1 13,9A4,4 0 0,1 9,13A4,4 0 0,1 5,9A4,4 0 0,1 9,5M9,15C11.67,15 17,16.34 17,19V21H1V19C1,16.34 6.33,15 9,15M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z" />
                      </svg>
                      <div>Recognition</div>
                    </div>
                    {props.permission.current.includes("recognition")
                      ? check
                      : null}
                  </div>
                  <div
                    className={
                      "p-3 hover-card a rounded-xl my-1 md:my-3 transition-3 font-weight-300 logo  justify-between  " +
                      (settings === "voice"
                        ? "bg-red-900 text-white fill-white stroke-white"
                        : " stroke-green-500")
                    }
                    onClick={() => setSettings("voice")}
                  >
                    <div className="flex justify-center items-center">
                      <svg
                        className="h-6 w-6 me-1 "
                        stroke={settings != "voice" ? "black" : ""}
                        viewBox="0 0 24 24"
                      >
                        <title>Voice Engine</title>
                        <path d="M16.75 4.36C18.77 6.56 18.77 9.61 16.75 11.63L15.07 9.94C15.91 8.76 15.91 7.23 15.07 6.05L16.75 4.36M20.06 1C24 5.05 23.96 11.11 20.06 15L18.43 13.37C21.2 10.19 21.2 5.65 18.43 2.63L20.06 1M9 4C11.2 4 13 5.79 13 8S11.2 12 9 12 5 10.21 5 8 6.79 4 9 4M13 14.54C13 15.6 12.71 18.07 10.8 20.83L10 16L10.93 14.12C10.31 14.05 9.66 14 9 14S7.67 14.05 7.05 14.12L8 16L7.18 20.83C5.27 18.07 5 15.6 5 14.54C2.6 15.24 .994 16.5 .994 18V22H17V18C17 16.5 15.39 15.24 13 14.54Z" />
                      </svg>
                      <div>Voice Engine</div>
                    </div>
                    {props.permission.current.includes("voice") ? check : null}
                  </div>
                </div>

                <div className="col-span-2 px-3 ">
                  <div className=" font-weight-400 text-xl mb-5 capitalize">
                    {settings}
                  </div>
                  {settings == "audio" ? (
                    <div className="flex justify-between">
                      <div className="font-weight-300 px-1 md:px-5 py-2 hidden md:block">
                        {deviceLiable["audiooutput"] ?? "Not Available"}
                      </div>
                      <div>
                        <label
                          htmlFor="audio"
                          className="me-2 a flex justify-between"
                          onClick={() => props.playAudio(null)}
                        >
                          <svg
                            fill="none"
                            className="me-2"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            width="24"
                            height="24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                            />
                          </svg>
                          Test
                        </label>
                      </div>
                    </div>
                  ) : null}

                  {settings == "microphone" ? (
                    <div>
                      <div className="flex justify-between">
                        <div className="font-weight-300 px-1 max-w-sm text-wrap md:px-5 py-2 mt-2 hidden md:block">
                          {deviceLiable["audioinput"] ?? "Not Available"}
                        </div>
                        <div>
                          <div
                            className="mt-3 a px-2 py-1 transition-3 flex gap-1 hover:border-red-500 border-red-950 border-2 rounded-xl"
                            onClick={startAudio}
                          >
                            Get Permission
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {settings == "recognition" ? (
                    <div>
                      <div className="flex justify-between">
                        <div className="font-weight-300 px-1 md:px-5 py-2 mt-2 hidden md:block">
                          System Voice to Text
                        </div>
                        <div>
                          <div
                            className="mt-3 a px-2 py-1 transition-3 flex gap-1 hover:border-red-500 border-red-950 border-2 rounded-xl"
                            onClick={getRecognition}
                          >
                            Get Permission
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {settings == "video" ? (
                    <div>
                      <div className="flex justify-between">
                        <div className="font-weight-300 px-1  md:px-5 py-2 mt-2 hidden md:block">
                          {deviceLiable["videoinput"] ?? "Not Available"}
                        </div>
                        <div>
                          <div
                            className="mt-3 a px-2 py-1  transition-3 flex gap-1 hover:border-red-500 border-red-950 border-2 rounded-xl"
                            onClick={startVideo}
                          >
                            Get Permission
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {settings == "voice" ? (
                    <div className="flex justify-between">
                      <div className="font-weight-300 px-1 md:px-5 py-2 mt-2 hidden md:block">
                        Genie Text to Voice Engine
                      </div>
                      <label
                        htmlFor="audio"
                        className="mt-3 a  flex justify-between"
                        onClick={() => props.playAudio("Test human voice")}
                      >
                        <svg
                          fill="none"
                          className="me-2"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          width="24"
                          height="24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                          />
                        </svg>
                        Test
                      </label>
                    </div>
                  ) : null}
                  <div className="text-red-500 max-w-md text-wrap font-weight-300 mt-3">
                    {error[settings]}{" "}
                    {error[settings] && (
                      <div>
                        Alternatively, consider upgrading your subscription plan
                        to access this feature. Check out our pricing{" "}
                        <Link href="/pricing" className="text-blue-500">
                          here.
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end just m-3">
                <button
                  disabled={
                    (errorVideo
                      ? !(
                          Array.from(new Set([...props.permission.current]))
                            .length == 4
                        )
                      : !(
                          Array.from(new Set([...props.permission.current]))
                            .length == 5
                        )) || count > 2
                  }
                  className={` px-5 py-3 ${
                    (errorVideo
                      ? !(
                          Array.from(new Set([...props.permission.current]))
                            .length == 4
                        )
                      : !(
                          Array.from(new Set([...props.permission.current]))
                            .length == 5
                        )) || count > 2
                      ? "bg-gray-300 text-black cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-500 text-white"
                  } rounded font-weight-300 transition`}
                  onClick={start}
                >
                  Start Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
