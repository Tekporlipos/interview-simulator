"use client";

import ComponentComponent from "@/component/creator/component.component";
import ActionsComponent from "@/component/builder/actions.component";
import React, { useRef, useState } from "react";
import BioDataComponent from "@/component/creator/bioData.component";
import PracticalComponent from "@/component/creator/practical.component";
import AbilitiesComponent from "@/component/creator/abilities.component";
import TheoreticalComponent from "@/component/creator/theoretical.component";
import RecognitionComponent from "@/component/creator/recognition.component";
import PersonalityComponent from "@/component/creator/personality.component";
import { useReactToPrint } from "react-to-print";
import LoaderComponent from "@/component/builder/loader.component";
import ToastComponent from "@/component/shared/toast/toast.component";
import TemplateComponent from "@/component/template/templateComponent";
import { template } from "@/utlities/question";
import { formatMessage } from "@/utlities/builder-script";
import { IBioData } from "@/utlities/interfaces";
export default function Home(props: any) {
  const [show, setShow] = useState("");
  const [at, setAt] = useState(0);
  const [creator, setCreator] = useState("component");
  const [message, setMessage] = useState("");

  function sendMessage() {}

  function getBioNme(): string {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem("bio") ?? "{}")?.name;
    }
    return "my Resume";
  }

  function sendComponentMessage() {
    setShow("loading");
    let bio: IBioData = JSON.parse(localStorage.getItem("bio") ?? "{}");
    let practical = JSON.parse(localStorage.getItem("practical") ?? "{}");
    let abilities = JSON.parse(localStorage.getItem("abilities") ?? "{}");
    let theoretical = JSON.parse(localStorage.getItem("theoretical") ?? "{}");
    let recognition = JSON.parse(localStorage.getItem("recognition") ?? "{}");
    let personality = JSON.parse(localStorage.getItem("personality") ?? "{}");
    let oldCv = localStorage.getItem("old-cv") ?? "";
    let job_description = localStorage.getItem("job_description") ?? "";
    const info = {
      bio,
      practical,
      abilities,
      theoretical,
      recognition,
      personality,
    };
    const data =
      Object.values(bio).length > 2
        ? info
        : oldCv.length < 10
        ? oldCv + " " + info
        : oldCv;
    setCreator("instruction");
    setShow("loading");
    let find = template.find((v) => v.id === props.data.params.id);
    const message: string = formatMessage(
      (job_description
        ? job_description + " this is the job description. "
        : "") +
        JSON.stringify(data) +
        " " +
        find.content,
      3,
    );
    console.log(message);
  }

  const componentRef = useRef(null);
  const download = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: getBioNme() + "'s resume" ?? "my_resume",
  });
  return (
    <section className="transition-3">
      <div className="container-fluid mt-5 pt-3">
        {creator === "component" ? (
          <div className="row m-2">
            <ComponentComponent
              at={1}
              current={at}
              setAt={setAt}
              content={at === 1 ? <BioDataComponent /> : null}
              isActive={at === 1}
              name="Bio Data"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  fill="white"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            </ComponentComponent>

            <ComponentComponent
              at={2}
              current={at}
              setAt={setAt}
              isActive={at === 2}
              content={at === 2 ? <PracticalComponent /> : null}
              name="Practical"
            >
              <svg width="32px" height="32px" viewBox="0 0 41 41">
                <path
                  fill="white"
                  d="M40.7996 7.9L34.0996 1.2C33.7996 0.899998 33.2996 0.899998 32.9996 1.2L19.6996 14.5L9.99961 4.8C8.59961 3.4 6.69961 3.4 5.49961 4.6L2.7996 7.3C1.4996 8.6 1.49962 10.7 2.69962 11.9L12.3996 21.6L1.19961 32.8C0.899609 33.1 0.899609 33.6 1.19961 33.9L7.89961 40.6C8.09961 40.8 8.29961 40.8 8.49961 40.8C8.69961 40.8 8.89962 40.7 9.09962 40.6L20.2996 29.4L27.7996 36.9C27.8996 37 27.9996 37.1 28.0996 37.1L37.4996 40.4C37.5996 40.4 37.6996 40.5 37.6996 40.5C37.8996 40.5 38.0996 40.4 38.2996 40.3C38.4996 40.1 38.5996 39.7 38.4996 39.5L35.0996 30.2C35.0996 30.1 34.9996 30 34.8996 29.9L27.3996 22.4L40.6996 9.1C40.9996 8.8 40.9996 8.3 40.7996 7.9ZM3.89961 10.9C3.29961 10.3 3.29961 9.2 3.99961 8.5L6.59962 5.9C6.89962 5.6 7.19962 5.5 7.59962 5.5C8.09962 5.5 8.4996 5.7 8.7996 6.1L11.1996 8.5L6.19962 13.5L3.89961 10.9ZM17.5996 30.1L14.9996 27.5C14.6996 27.2 14.1996 27.2 13.8996 27.5C13.5996 27.8 13.5996 28.3 13.8996 28.6L16.4996 31.2L14.6996 32.9L13.4996 31.7C13.1996 31.4 12.6996 31.4 12.3996 31.7C12.0996 32 12.0996 32.5 12.3996 32.8L13.5996 34L11.8996 35.7L9.2996 33.1C8.9996 32.8 8.49962 32.8 8.19962 33.1C7.89962 33.4 7.89962 33.9 8.19962 34.2L10.7996 36.8L8.59962 39L3.09962 33.5L13.6996 22.9L19.1996 28.4L17.5996 30.1ZM7.39961 14.4L9.19963 12.6L29.9996 33.3L28.1996 35.2L7.39961 14.4ZM36.4996 38.4L29.8996 36.1L31.9996 34L34.1996 31.8L36.4996 38.4ZM33.2996 30.5L31.3996 32.4L10.4996 11.4L12.3996 9.5L33.2996 30.5ZM37.3996 10.3L36.1996 9.1C35.8996 8.8 35.3996 8.8 35.0996 9.1C34.7996 9.4 34.7996 9.9 35.0996 10.2L36.2996 11.4L34.5996 13.1L31.9996 10.5C31.6996 10.2 31.1996 10.2 30.8996 10.5C30.5996 10.8 30.5996 11.3 30.8996 11.6L33.4996 14.2L31.7996 15.9L30.5996 14.7C30.2996 14.4 29.7996 14.4 29.4996 14.7C29.1996 15 29.1996 15.5 29.4996 15.8L30.6996 17L28.9996 18.7L26.3996 16.1C26.0996 15.8 25.5996 15.8 25.2996 16.1C24.9996 16.4 24.9996 16.9 25.2996 17.2L27.8996 19.8L26.4996 21.2L20.9996 15.7L33.5996 3L39.0996 8.5L37.3996 10.3Z"
                />
              </svg>
            </ComponentComponent>

            <ComponentComponent
              at={3}
              current={at}
              setAt={setAt}
              isActive={at === 3}
              content={at === 3 ? <AbilitiesComponent /> : null}
              name="Abilites"
            >
              <svg width="32px" height="32px" viewBox="0 0 40 38">
                <path
                  fill="white"
                  d="M36.1 0.800003H3.9C1.7 0.800003 0 2.6 0 4.7V6.8C0 9 1.8 10.7 3.9 10.7H36.1C38.3 10.7 40 8.9 40 6.8V4.7C40 2.6 38.2 0.800003 36.1 0.800003ZM38 6.8C38 7.9 37.1 8.80001 36 8.80001H31.2V2.7H36.1C37.2 2.7 38.1 3.6 38.1 4.7L38 6.8Z"
                />
                <path
                  fill="white"
                  d="M36.1 14H3.9C1.8 14 0 15.8 0 18V20C0 22.2 1.8 23.9 3.9 23.9H36.1C38.3 23.9 40 22.1 40 20V18C40 15.8 38.2 14 36.1 14ZM38 20C38 21.1 37.1 22 36 22H30.4V16H36.1C37.2 16 38.1 16.9 38.1 18L38 20Z"
                />
                <path
                  fill="white"
                  d="M36.1 27.2H3.9C1.7 27.2 0 29 0 31.1V33.2C0 35.4 1.8 37.1 3.9 37.1H36.1C38.3 37.1 40 35.3 40 33.2V31.1C40 29 38.2 27.2 36.1 27.2ZM38 33.2C38 34.3 37.1 35.2 36 35.2V29.2H36.1C37.2 29.2 38.1 30.1 38.1 31.2L38 33.2Z"
                />
              </svg>
            </ComponentComponent>

            <ComponentComponent
              at={4}
              current={at}
              setAt={setAt}
              content={at === 4 ? <TheoreticalComponent /> : null}
              isActive={at === 4}
              name="Theoretical"
            >
              <svg width="32px" height="32px" viewBox="0 0 40 40">
                <path
                  d="M21.0004 25.9C23.817 25.9 26.1004 23.6167 26.1004 20.8C26.1004 17.9834 23.817 15.7 21.0004 15.7C18.1837 15.7 15.9004 17.9834 15.9004 20.8C15.9004 23.6167 18.1837 25.9 21.0004 25.9Z"
                  fill="white"
                />
                <path
                  d="M39.8 12C40.2 9.2 39.7 6.9 38.5 5.1C38.7 4.7 38.8 4.2 38.8 3.7C38.8 1.8 37.3 0.300003 35.4 0.300003C34.1 0.300003 33 1 32.4 2.1C29.1 1.9 25.1 3.1 21 5.5C14 1.3 7.6 0.900002 4.3 4.1C2.9 5.5 2.10001 7.6 2.10001 10.1C0.900006 10.7 0 11.9 0 13.3C0 15.2 1.49999 16.7 3.39999 16.7C3.39999 16.7 3.4 16.7 3.5 16.7C4.1 18.1 4.7 19.4 5.5 20.9C1.4 27.9 0.899997 34.3 4.2 37.7C5.6 39.1 7.7 39.9 10.2 39.9C13.3 39.9 17.1 38.8 21 36.5C24.9 38.7 28.7 39.9 31.8 39.9C34.3 39.9 36.3 39.2 37.8 37.7C41.1 34.4 40.6 28 36.5 20.9C38.2 17.7 39.4 14.7 39.8 12ZM31.9 3.8C32 5.6 33.5 7 35.3 7C35.9 7 36.6 6.8 37.1 6.5C37.8 7.8 38.1 9.5 37.7 11.6C37.4 13.8 36.5 16.3 35.1 18.9C33.5 16.5 31.7 14.3 29.5 12.1C27.3 9.9 25 8 22.7 6.5C26.2 4.7 29.4 3.8 31.9 3.8ZM5.3 16.1C6.3 15.5 6.8 14.4 6.8 13.2C6.8 11.5 5.49999 10.1 3.89999 9.80001C3.89999 8.00001 4.5 6.40001 5.5 5.40001C8 2.90001 13.2 3.30001 19 6.40001C16.6 8.00001 14.4 9.8 12.2 12C10 14.2 8.10001 16.5 6.60001 18.8C6.10001 18 5.7 17.1 5.3 16.1ZM5.60001 36.2C3.10001 33.7 3.50001 28.5 6.60001 22.8C8.20001 25.2 10 27.4 12.2 29.6C14.4 31.8 16.7 33.7 19 35.2C13.3 38.3 8.10001 38.7 5.60001 36.2ZM13.6 28.2C11.3 25.9 9.3 23.4 7.7 20.8C9.3 18.2 11.3 15.8 13.6 13.4C15.9 11.1 18.4 9.1 21 7.5C23.6 9.1 26 11.1 28.4 13.4C30.7 15.7 32.7 18.2 34.3 20.8C32.7 23.4 30.7 25.8 28.4 28.2C26.1 30.5 23.6 32.5 21 34.1C18.4 32.5 15.9 30.5 13.6 28.2ZM36.3 36.2C33.8 38.7 28.6 38.3 22.8 35.2C25.2 33.6 27.4 31.8 29.6 29.6C31.8 27.4 33.7 25.1 35.2 22.8C38.4 28.5 38.9 33.7 36.3 36.2Z"
                  fill="white"
                />
              </svg>
            </ComponentComponent>

            <ComponentComponent
              at={5}
              current={at}
              setAt={setAt}
              isActive={at === 5}
              content={at === 5 ? <RecognitionComponent /> : null}
              name="Recognition"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 34 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0001 18.3H10.9001L11.4001 17.5C11.6001 17.1 11.9001 16.8 12.3001 16.5L16.1001 9.5L11.5001 1C11.1001 0.200005 10.1001 -0.0999947 9.30011 0.200005L2.10013 2.90001C1.60013 3.00001 1.20013 3.40001 1.10013 3.90001C0.900128 4.40001 0.900109 4.90001 1.30011 5.40001L9.40012 18.2C9.50012 18.3 9.70012 18.3 10.0001 18.3Z"
                  fill="white"
                />
                <path
                  d="M32.9992 3.9C32.7992 3.4 32.3992 3 31.9992 2.8L24.7992 0.0999991C23.8992 -0.200001 22.9992 0.200002 22.5992 0.900002L14.6992 15.6C15.2992 15.6 15.7992 15.8 16.2992 16.1L17.0992 16.6L17.8992 16.1C18.4992 15.8 18.9992 15.6 19.6992 15.6C20.9992 15.6 22.1992 16.3 22.7992 17.4L23.2992 18.2H24.1992C24.3992 18.2 24.7992 18.2 24.9992 18.3L33.0992 5.5C33.0992 5 33.1992 4.4 32.9992 3.9Z"
                  fill="white"
                />
                <path
                  d="M27.4007 24.7L25.8007 23.7V21.8C25.8007 20.8 25.0007 20 24.0007 20H22.1007L21.1007 18.3C20.6007 17.4 19.5007 17.2 18.7007 17.7L16.9007 18.7L15.2007 17.7C14.3007 17.2 13.3007 17.5 12.8007 18.3L11.8007 20H10.0007C9.00067 20 8.20069 20.8 8.20069 21.8V23.7L6.50067 24.7C5.60067 25.2 5.40067 26.3 5.90067 27.1L6.90067 28.8L5.90067 30.5C5.40067 31.4 5.70067 32.4 6.50067 32.9L8.20069 33.9V35.8C8.20069 36.8 9.00067 37.6 10.0007 37.6H11.9007L12.9007 39.3C13.4007 40.2 14.5007 40.4 15.3007 39.9L17.0007 38.9L18.7007 39.9C19.0007 40.1 19.3007 40.1 19.6007 40.1C20.2007 40.1 20.8007 39.8 21.1007 39.2L22.1007 37.5H24.0007C25.0007 37.5 25.8007 36.7 25.8007 35.7V33.8L27.5007 32.9C28.4007 32.4 28.6007 31.3 28.1007 30.5L27.1007 28.8L28.1007 27.1C28.6007 26.2 28.3007 25.1 27.4007 24.7ZM23.8007 27.4L20.4007 29.9L21.7007 33.9C21.8007 34.2 21.7007 34.6 21.4007 34.9C21.2007 35 21.1007 35.1 20.9007 35.1C20.7007 35.1 20.6007 35 20.4007 34.9L17.0007 32.3L13.6007 34.8C13.3007 35 12.9007 35 12.6007 34.8C12.3007 34.6 12.2007 34.2 12.3007 33.8L13.6007 29.8L10.2007 27.3C9.90069 27.1 9.80067 26.7 9.90067 26.3C10.0007 26 10.3007 25.7 10.7007 25.7H14.9007L16.2007 21.7C16.3007 21.4 16.6007 21.1 17.0007 21.1C17.4007 21.1 17.7007 21.3 17.8007 21.7L19.1007 25.7H23.3007C23.7007 25.7 24.0007 25.9 24.1007 26.3C24.3007 26.8 24.1007 27.2 23.8007 27.4Z"
                  fill="white"
                />
              </svg>
            </ComponentComponent>

            <ComponentComponent
              at={6}
              current={at}
              setAt={setAt}
              isActive={at === 6}
              content={at === 6 ? <PersonalityComponent /> : null}
              name="Personality"
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1001 7.30001L11.1001 6.7C9.80008 6.1 8.20008 6.1 6.90008 6.7L5.90008 7.30001C5.40008 7.50001 5.30008 8.1 5.40008 8.5C5.60008 9 6.20008 9.1 6.60008 9L7.60008 8.4C8.40008 8 9.50008 8 10.2001 8.4L11.2001 9C11.4001 9.1 11.4001 9.1 11.7001 9.1C12.1001 9.1 12.3001 8.9 12.5001 8.5C12.7001 8.1 12.5001 7.50001 12.1001 7.30001Z"
                  fill="white"
                />
                <path
                  d="M30.5999 14.1C30.3999 13.6 29.8999 13.5 29.3999 13.7L28.3999 14.3C27.5999 14.7 26.5999 14.7 25.7999 14.3L24.7999 13.7C24.2999 13.5 23.7999 13.7 23.5999 14.1C23.3999 14.6 23.5999 15.1 23.9999 15.3L25.0999 15.9C25.6999 16.3 26.4999 16.5 27.1999 16.5C27.8999 16.5 28.5999 16.3 29.2999 15.9L30.2999 15.3C30.6999 15.1 30.7999 14.5 30.5999 14.1Z"
                  fill="white"
                />
                <path
                  d="M17.2008 20V0.900002C17.1008 0.400002 16.7008 0 16.2008 0H3.50078C2.00078 0 0.800781 1.2 0.800781 2.7V19.1C0.800781 27.6 7.70078 34.5 16.2008 34.5C16.8008 34.5 17.1008 34.1 17.1008 33.6V27.2C17.1008 26.6 16.7008 26.3 16.2008 26.3H13.5008C12.9008 26.3 12.6008 26.7 12.6008 27.2C12.6008 27.8 13.0008 28.1 13.5008 28.1H15.3008V32.7C8.20079 32.2 2.60078 26.3 2.60078 19.1V2.7C2.60078 2.1 3.00078 1.8 3.50078 1.8H15.3008V19C13.1008 18.6 10.9008 17.2 9.80079 15C9.60079 14.6 9.20079 14.4 8.80079 14.5C8.40079 14.6 8.20078 15 8.20078 15.4C8.30078 19.6 11.8008 24.5 16.3008 24.5C16.9008 24.5 17.2008 24.1 17.2008 23.6C17.2008 23 16.8008 22.7 16.3008 22.7C14.1008 22.7 12.1008 21.1 11.0008 18.9C12.5008 20.1 14.4008 20.8 16.3008 20.8C16.8008 20.8 17.2008 20.5 17.2008 20Z"
                  fill="white"
                />
                <path
                  d="M32.6004 5.39999H19.9004C19.3004 5.39999 19.0004 5.8 19.0004 6.3V19.9C19.0004 20.5 19.4004 20.8 19.9004 20.8H22.6004C23.2004 20.8 23.5004 20.4 23.5004 19.9C23.5004 19.3 23.1004 19 22.6004 19H20.8004V7.3H32.6004C33.2004 7.3 33.5004 7.69999 33.5004 8.19999V24.6C33.5004 31.8 27.9004 37.8 20.8004 38.2V28.2C23.2004 28.4 25.3004 29.6 26.3004 31.4C26.5004 31.8 26.9004 31.9 27.3004 31.8C27.7004 31.7 27.9004 31.3 27.9004 30.9C27.8004 27.1 24.3004 22.8 19.8004 22.8C19.2004 22.8 18.9004 23.2 18.9004 23.7C18.9004 24.3 19.3004 24.6 19.8004 24.6C22.0004 24.6 24.0004 26 25.1004 27.9C23.6004 27 21.7004 26.5 19.8004 26.5C19.2004 26.5 18.9004 26.9 18.9004 27.4V39C18.9004 39.2 19.0004 39.5 19.1004 39.6C19.2004 39.7 19.6004 40 19.8004 40C28.3004 40 35.2004 33.1 35.2004 24.6V8.19999C35.3004 6.59999 34.1004 5.39999 32.6004 5.39999Z"
                  fill="white"
                />
              </svg>
            </ComponentComponent>
            <div className="col-12 row mt-5">
              <div className="col-md-3"></div>
              <div className="flex-column col-md-6 col-sm-12">
                <div className="bg-secondary rounded  p-3 text-black text-center font-weight-300 shadow-lg mb-5">
                  Feel free to fill in the fields you prefer, but remember, the
                  more details you offer, the more accurate and personalized
                  your enhanced CV will become. If you&apos;re short on time, no
                  worries – GenieAI will step in to provide thoughtful
                  suggestions!
                </div>
                <div className="logo justify-content-center">
                  <button
                    className="btn btn-outline-danger text-white"
                    onClick={() => sendComponentMessage()}
                  >
                    BEGIN MAGIC
                  </button>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        ) : (
          <div className="logo justify-content-center">
            <div className="w-75">
              <div ref={componentRef} className="w-100">
                <TemplateComponent content={props.data.params.id} />
              </div>
            </div>
          </div>
        )}
      </div>
      <LoaderComponent loading={show == "loading"} />
      {show == "toast" && (
        <ToastComponent background={"#dc3545"} message={message} />
      )}
    </section>
  );
}
