"use client";
import HeadComponent from "@/component/shared/head.component";
import React, { useEffect, useState } from "react";
import TailwindModalComponent from "@/component/shared/modal/TailwindModalComponent";
import InstantFormComponent from "@/component/interview/InstantFormComponent";
import PanelMemberComponent from "@/component/builder/panel.member.component";
import { getPanelMembers } from "@/utlities/cv-genie-questions";
import { dataClean, postWebClient } from "@/utlities/builder-script";
import ToastComponent from "@/component/shared/toast/toast.component";
import {
  clearBookLocalStorage,
  generateUUID,
  getData,
  getTodayDDMMYY,
  validateJobPosition,
  validateUserName,
} from "@/utlities/functions";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "@/component/shared/footer.component";
import { AuthModalComponent } from "@/component/auth/auth.modal.component";

enum Stage {
  PanelMember = "1",
  InstantForm = "2",
  done = "3",
}

export default function Home(props: any) {
  const [action, setAction] = useState(false);
  const [type, setType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("red");
  const [title, setTitle] = useState(<div />);
  const [stage, setStage] = useState<Stage>(Stage.InstantForm);
  const [actions, setActions] = useState<any>({ 1: "Cancel", 2: "Next" });
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    full_name: "",
    recipient: "",
    interview_id: "",
    description: "",
    resume: "",
    questions: "",
    position: "",
    date: Date(),
    panel_members: [],
  });
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");
  const handleShowToast = (message: string, timeout = 3000) => {
    setMessage(message);
    setShow("toast");
    setTimeout(() => {
      setShow("");
    }, timeout); // Hide the toast after 3 seconds
  };

  const [panels, setPanels] = useState(getPanelMembers);
  const content = {
    1: (
      <PanelMemberComponent
        key={1}
        panels={panels}
        setPanels={setPanels}
        setPanel={() => null}
      />
    ),
    2: (
      <InstantFormComponent
        key={2}
        data={data}
        setData={setInputData}
        type={type}
      />
    ),
    3: (
      <div>
        An email has been sent to your inbox with instructions for your
        interview. Thank you for using InterviewSimulator&lsquo;s interview
        simulation!
      </div>
    ),
  };

  function setInputData(name: string, value: any) {
    setData((prevData) => ({ ...prevData, [name]: value.target.value }));
  }

  function setModal(value: boolean, modelType: any) {
    setStage(Stage.InstantForm);
    setAction(value);
    setTitle(<h1>Enter your basic information to start your interview.</h1>);
    if (modelType === "next") {
      if (
        validateUserName(data.full_name) &&
        validateJobPosition(data.position)
      ) {
        setTitle(<div>Choose panel members for your interview.</div>);
        setStage(Stage.PanelMember);
      } else {
        setTitle(
          <div className="text-red-800">
            Full Name or Job Title is not valid
          </div>,
        );
      }
      if (stage === Stage.PanelMember) {
        submit();
      } else {
        setAction(true);
      }
    }

    if (modelType === "schedule") {
      setType(true);
    } else {
      setType(false);
    }
    setActions({ 1: "Cancel", 2: "Next" });
  }

  function submit() {
    let iPanels = panels
      .filter((value) => value.selected)
      .map((value) => {
        return {
          name: value.name,
          expertise: value.expertise,
          description: value.description,
          email: value.email,
          profile: value.profile,
        };
      });
    const maxLent: number = 1900;
    const payload = getData(data, maxLent, iPanels);
    setLoading(true);
    postWebClient("send-email", payload)
      .then((data) => {
        const value = data.data;
        if (!value.id) throw Error("Something went wrong");
        let count = Number(localStorage.getItem("book" + getTodayDDMMYY()));
        localStorage.setItem("book" + getTodayDDMMYY(), String(count + 1));
        setState("blue");
        setLoading(false);
        handleShowToast(data.message, 10000);
        if (!value.recipient) {
          setTimeout(() => {
            window.location.href = " /interview/" + value.id;
          }, 1000);
        } else {
          setTitle(
            <div>
              {" "}
              <i>
                <svg width="24" height="24" fill="orange" viewBox="0 0 24 24">
                  <title>information-variant-circle-outline</title>
                  <path d="M12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29M9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z" />
                </svg>
              </i>{" "}
              {data.message}
            </div>,
          );
          setStage(Stage.done);
          setAction(true);
          setActions({ 1: "Close" });
        }
      })
      .catch((_) => {
        setState("red");
        setLoading(false);
        handleShowToast(
          "We're sorry, but there was an internal server error while processing your request.",
        );
      });
  }

  useEffect(() => {
    setTimeout(() => {
      const intCount = Number(localStorage.getItem("book" + getTodayDDMMYY()));
      setCount(intCount);
      intCount === 0 && clearBookLocalStorage();
    }, 1000);
  }, []);
  return (
    <div className="overflow-x-hidden">
      {count === 2 && <AuthModalComponent />}
      <HeadComponent />
      <div className="container px-5 mt-32 lg:mt-20">
        <div className="flex flex-col hv-75 lg:flex-row items-center justify-between">
          <div className="font-weight-300 ">
            <div className="font-light text-2xl md:text-4xl font-weight-400 mb-4 w-full lg:w-7/12">
              Access premium-quality mock interviews tailored to your needs.
            </div>
            <div className="font-extralight text-lg ">
              Empowering job seekers and HR professionals alike.
            </div>
            <div className="font-weight-200 text-sm text-gray-700 mt-6">
              {count}/2 interviews left today
            </div>
            <div className="flex flex-row">
              <div
                onClick={() => count < 2 && setModal(true, "instant")}
                className={` ${
                  count < 2
                    ? "bg-blue-500 hover:bg-blue-950 text-white cursor-pointer"
                    : "text-black bg-gray-100 cursor-not-allowed"
                } p-3 shadow  transition rounded me-3 flex`}
              >
                <svg
                  width="24"
                  height="24"
                  fill="white"
                  className="me-2"
                  viewBox="0 0 24 24"
                >
                  <title>plus</title>
                  <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
                Instant<span className="hidden md:block">-Interview</span>
              </div>
              <div
                onClick={() => setModal(true, "schedule")}
                className="p-3 shadow bg-red-500 rounded transition hover:bg-red-950 a text-white me-3 flex"
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  fill="white"
                  className="me-2"
                  viewBox="0 0 24 24"
                >
                  <title>calendar-arrow-right</title>
                  <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 19H5V8H19V19M12 17V15H8V12H12V10L16 13.5L12 17Z" />
                </svg>
                Schedule<span className="hidden md:block">-Interview</span>
              </div>
              {loading ? (
                <Image
                  className=""
                  src={"/loading-circle.gif"}
                  alt={"loader"}
                  width="50"
                  height="50"
                />
              ) : null}
            </div>
          </div>
          <Image
            width="480"
            className="w-full md:w-2/4 transition hover:animate-pulse cursor-pointer hover:scale-110"
            height="720"
            src="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/demo.png?alt=media&token=2bf29b76-0926-4460-8211-da325f63f8af"
            alt="demo"
          />
        </div>
        <hr className="mt-12" />
        <div className="font-weight-200  text-black/70 mb-1">
          Advanced Mock Interview Simulator, Powered by Gemini AI Model. Learn
          about our{" "}
          <Link className="a text-blue-500" href="/policy">
            Teams & conditions.
          </Link>
        </div>
      </div>
      <FooterComponent />
      {action ? (
        <TailwindModalComponent
          action={setModal}
          actions={actions}
          content={content[stage]}
          title={title}
        />
      ) : null}
      {show == "toast" && (
        <ToastComponent background={state} message={message} />
      )}
    </div>
  );
}
