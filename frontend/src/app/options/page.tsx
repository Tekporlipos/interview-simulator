"use client";
import FooterComponent from "@/component/shared/footer.component";
import React, { useEffect, useState } from "react";
import TextAreaComponent from "@/component/creator/textArea.component";
import { useRouter } from "next/navigation";
import {
  baseUrl,
  dataClean,
  extractFiles,
  formatMessage,
  HistoryItem,
  IChat,
  postWebClient,
} from "@/utlities/builder-script";
import Image from "next/image";
import HeadComponent from "@/component/shared/head.component";
import { useSpring, animated } from "@react-spring/web";
import { screenView } from "@/utlities/analytics";
import { generateUUID, goNext } from "@/utlities/functions";
export default function Home(props: any) {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleImageChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setLoading("loading");
    if (selectedFile) {
      // Create a FormData object
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Make a POST request to the /upload endpoint
      fetch(baseUrl + "/read-file", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const oldCv = data.data;
          continueRequest(oldCv);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          setLoading("");
        });
    }
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
  });
  const fadeIn1 = useSpring({
    from: { opacity: 0 },
    to: {
      opacity:
        state === "question" || state === "description" || state === "active"
          ? 1
          : 0,
    },
  });

  function continueRequest(oldCv: string) {
    const userMessage: IChat = {
      role: "user",
      content: dataClean(formatMessage(oldCv, 2)),
    };
    if (oldCv && oldCv.length < 10) {
      setState("question");
      setLoading("");
    } else {
      sendToServer([userMessage]);
    }
  }

  function sendToServer(data: IChat[]) {
    postWebClient("/chat", {
      data: data.length > 5 ? [...data].slice(-5) : data,
    }).then((value) => {
      if (value.choices) {
        let extractFile = JSON.parse(value?.choices[0].message.content ?? {});
        const keys: Array<string> = Object.keys(extractFile);
        for (let key of keys) {
          localStorage.setItem(key, JSON.stringify(extractFile[key]));
        }
        setState("question");
        setLoading("");
      } else {
        throw new Error(JSON.stringify(value));
      }
    });
  }

  useEffect(() => {
    screenView("Options page", "src/app/options/page.tsx");
  }, []);
  return (
    <section>
      <HeadComponent hide={true} />
      <div className="container-sm pt-5 transition-3">
        {state === "" ? (
          <animated.div
            style={fadeIn}
            className="w-50 text-white font-weight-700 h1 my-5"
          >
            Building Your Awesome Resume(CV):{" "}
            <span className="text-danger">Where Should We Start?</span>
          </animated.div>
        ) : null}

        {state === "" ? (
          <div className="row">
            <div className="p-3 col-md-6 col-sm-12">
              <animated.div
                style={fadeIn}
                onClick={() => setState("question")}
                className="bg-dark a h-200px cards-hover rounded logo justify-content-start align-middle p-2"
              >
                <svg
                  width="48px"
                  height="48px"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-white m-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <div className="flex-column justify-content-start align-middle">
                  <div className="font-weight-500 text-white">
                    Create a New Resume.
                  </div>
                  <div className="font-weight-200 text-white">
                    Crafting Your Perfect Resume(CV). Add Your Info for
                    Personalization, or Let GenieAI Help!
                  </div>
                </div>
              </animated.div>
            </div>
            <div className="p-3 col-md-6 col-sm-12">
              <animated.label style={fadeIn} htmlFor="select">
                <div className="cards-hover h-200px a bg-dark rounded logo justify-content-start align-middle p-2">
                  {loading === "" ? (
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-white m-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                      />
                    </svg>
                  ) : (
                    <Image
                      className="mt-2"
                      src="/loading-circle.gif"
                      width="24"
                      height="24"
                      alt="loading"
                    />
                  )}

                  <div className="flex-column justify-content-start align-middle">
                    <div className="font-weight-500 text-white">
                      I Already Have a Resume(CV)
                    </div>
                    <div className="font-weight-200 text-white">
                      Already Have a Resume (CV)? No Problem! Let&apos;s
                      Collaborate to Elevate Your CV&apos;s Impact and Accuracy.
                    </div>
                  </div>
                </div>
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept="application/pdf"
                  id="select"
                  className="d-none"
                />
              </animated.label>
            </div>
          </div>
        ) : null}
        {state === "question" ||
        state === "description" ||
        state === "active" ? (
          <section>
            <animated.div style={fadeIn1} className=" my-5  text-center">
              <div className="logo justify-content-center">
                <div className="w-75 font-weight-500 fs-2 text-white">
                  Do you have a specific role in mind for the resume (CV)
                  you&apos;re creating?
                </div>
              </div>
              <div className="font-weight-300 fs-6 text-danger">
                Creating a personalized resume (CV) for each role is strongly
                recommended.
              </div>
            </animated.div>

            <div className="logo justify-content-center align-content-center">
              <div className="flex-column justify-content-center align-content-center">
                <div className="my-2">
                  <div className="bg-dark rounded cards-hover a flex-column justify-content-start align-middle p-2 transition-3">
                    <animated.div
                      style={fadeIn1}
                      className="flex-column justify-content-start align-middle p-2"
                      onClick={() => setState("description")}
                    >
                      <div className="font-weight-700 fs-6 text-white">
                        Yes, I have a particular role in mind.
                      </div>
                      <div className="font-weight-200 fs-6 text-white">
                        I&apos;ve got a specific role in mind for the resume.
                        Let&apos;s make it perfect!
                      </div>
                    </animated.div>
                    {state === "description" ? (
                      <div className="bg-dark p-3">
                        <TextAreaComponent
                          setintput={setDescription}
                          inputMessage={description}
                          placeholder="Please paste the job description and requirements for the role you're applying to."
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="my-2">
                  <div className="bg-dark  justify-content-start align-middle p-2 cards-hover a">
                    <animated.div
                      style={fadeIn1}
                      className="flex-column justify-content-start align-middle p-2 rounded logo"
                      onClick={() => setState("active")}
                    >
                      <div className="font-weight-700 fs-6 text-white">
                        I&apos;m looking for a general CV without a specific
                        role.
                      </div>
                      <div className="font-weight-200 fs-6 text-white">
                        I want a well-rounded CV that showcases my skills and
                        experiences without targeting a specific role.
                      </div>
                    </animated.div>
                  </div>
                </div>
                {state === "active" || description.length > 10 ? (
                  <div className="text-center logo justify-content-center mt-5">
                    <div>
                      <button
                        disabled={loading != ""}
                        onClick={() =>
                          goNext(setLoading, props, description, router)
                        }
                        className="btn-lg btn btn-danger px-5 logo"
                      >
                        Continue{" "}
                        {loading != "" ? (
                          <Image
                            src="/loading-circle.gif"
                            width="24"
                            height="24"
                            alt="loading"
                          />
                        ) : null}
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterComponent />
    </section>
  );
}
