"use client";
import TopComponent from "@/component/dashboard/top.component";
import TemplateCardComponent from "@/component/dashboard/template.card.component";
import FooterComponent from "@/component/shared/footer.component";
import { useEffect, useState } from "react";
import Link from "next/link";
import HeadComponent from "@/component/shared/head.component";
import { useSpring, animated } from "@react-spring/web";
import { screenView } from "@/utlities/analytics";
import { goNextInterview } from "@/utlities/functions";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [state, setState] = useState("resume");
  const [cook, setCook] = useState(false);
  const slide = useSpring({
    from: { left: -2000 },
    to: {
      left: 0,
    },
  });

  function setCookie() {
    localStorage.setItem("cookies", "true");
    setCook(true);
  }

  useEffect(() => {
    screenView("Dashboard page", "src/app/dashboard/page.tsx");
    let item = localStorage.getItem("cookies");
    setCook(Boolean(item));
  }, []);
  return (
    <section>
      <HeadComponent hide={true} />
      <div className="c-container pt-5">
        <TopComponent />
        <div className="mb-2">
          <animated.div
            style={slide}
            className="bg-danger-light p-5 shadow-lg rounded-4 position-relative"
          >
            <div className="flex-wrap justify-content-start gap-5">
              <div className="flex-column justify-content-start a">
                <div className="font-weight-900 fs-5 text-white">
                  Resumes(CVs)
                </div>
                <div className="font-weight-200 text-white pb-2">
                  All levels of experience
                </div>
                <div
                  onClick={() => setState("resume")}
                  className={
                    "bars rounded-2 border border-5  bg-secondary " +
                    (state == "resume" ? "border-danger" : "border-secondary")
                  }
                ></div>
              </div>
              <div
                onClick={() => goNextInterview(router)}
                className="flex-column justify-content-start a"
              >
                <div className="font-weight-900 fs-5 text-white">
                  Mock Interview
                </div>
                <div className="font-weight-200 text-white pb-2">
                  Meet Our Mock Interview Expert
                </div>
                <div
                  className={
                    "bars rounded-2 border border-5  bg-secondary " +
                    (state == "interview"
                      ? "border-danger"
                      : "border-secondary")
                  }
                ></div>
              </div>
              <Link
                href="/builder"
                className="flex-column justify-content-start a text-decoration-none text-white"
              >
                <div className="font-weight-900 fs-5 text-white">
                  Website Builder
                </div>
                <div className="font-weight-200 text-white pb-2">
                  Start from scratch
                </div>
                <div
                  onClick={() => setState("web")}
                  className={
                    "bars rounded-2 border border-5 bg-secondary " +
                    (state == "web" ? "border-danger" : "border-secondary")
                  }
                ></div>
              </Link>
            </div>

            {state == "resume" ? (
              <div className="flex-column mt-5">
                <div className="h3 text-white text-bold">
                  Pick your template and get started
                </div>
                <div className="text-white font-weight-200">
                  Dive into our handpicked template selection and kickstart your
                  journey with GenieAIBuilder. Your canvas for websites,
                  interview success, and standout applications. It all begins
                  with the right template, tailored to your dreams and
                  ambitions. Unleash your creative potential today.
                </div>
              </div>
            ) : null}

            {state == "web" ? (
              <div className="flex-column mt-5">
                <div className="h3 text-white text-bold">
                  Empower Your Online Presence with GenieAIBuilder.
                </div>
                <div className="text-white font-weight-200">
                  Elevate your online presence with GenieAIBuilder&apos;s
                  diverse personal website builder, ranging from minimalism to
                  bold designs. Establish your unique personal brand
                  effortlessly and stand out in the job market. Alternatively,
                  with GenieAIBuilder, create a completely custom website from
                  scratch. Boost your online presence and leave a lasting
                  impression on potential employers and collaborators.
                </div>
              </div>
            ) : null}
          </animated.div>
        </div>
        {state == "resume" ? <TemplateCardComponent /> : null}
      </div>
      <FooterComponent />

      {!cook ? (
        <div className="position-fixed bg-dark rounded-4 shadow-lg z-3 w-75 p-3 m-1 bottom-0 logo justify-content-between">
          <div className="text-white alpha-5 font-weight-200">
            Welcome! We use cookies to enhance your browsing experience.
            Essential cookies are required for site functionality. We also use
            performance and analytics cookies. By using our site, you consent to
            cookie usage. Learn more in our{" "}
            <Link href="/policy" className="text-decoration-underline">
              Cookie Policy
            </Link>
            .
          </div>
          <div className="">
            <div className="btn btn-danger btn-lg m-1" onClick={setCookie}>
              Accept
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
