import { useSpring, animated } from "@react-spring/web";
import getQuestionAndAnswers, {
  siteBuilderQuestions,
} from "@/utlities/question";
import React, { useState } from "react";
import FrequentAskCardComponent from "@/component/home/frequentAskCardComponent";
import ChatComponent from "@/component/note/chat.component";
import NewsComponent from "@/component/note/newsComponent";

export default function NoteChatFrameComponent(props: any) {
  const [at, setAt] = useState(-1);
  const [position, setPosition] = useState(0);
  const fade = useSpring({
    from: { height: "0", opacity: 0 },
    to: {
      height: props.heigth ? "75vh" : "0",
      opacity: props.heigth ? 1 : 0,
    },
  });

  function getState(position: number): String {
    switch (position) {
      case 0:
        return "Help";
      case 1:
        return "Feedback";
      case 2:
        return "News";
    }
    return "Help";
  }

  function getStateView(
    position: number,
  ): React.JSX.Element[] | React.JSX.Element {
    switch (position) {
      case 0:
        return (
          <div className="h-full overflow-y-scroll">
            {[...getQuestionAndAnswers(), ...siteBuilderQuestions()].map(
              (v, i) => (
                <FrequentAskCardComponent
                  click={setAt}
                  key={i}
                  at={at}
                  index={i}
                  a={v.answer}
                  q={v.question}
                />
              ),
            )}
          </div>
        );
      case 1:
        return <ChatComponent />;
      case 2:
        return <NewsComponent />;
    }
    return <div>Help</div>;
  }

  return (
    <animated.div
      style={fade}
      className="flex flex-col rounded-lg bg-black shadow-lg overflow-hidden w-full md:w-6/12 lg:w-4/12 xl:w-3/12 h-2/3 fixed  right-0 bottom-8 mb-5 ms-5 transition-3 text-white"
    >
      <div className="font-weight-500 fs-5 py-3 text-center">
        {getState(position)}
      </div>
      <div className="p-3 h-5/6">{getStateView(position)}</div>
      <div className="flex   justify-evenly px-3 items-center">
        <div
          className="a transition-3 flex flex-col justify-center items-center"
          onClick={() => setPosition(0)}
        >
          <svg
            fill="none"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>

          <div className="font-weight-200">Help</div>
        </div>

        <div
          className="a transition-3 flex flex-col justify-center items-center"
          onClick={() => setPosition(1)}
        >
          <svg
            fill="none"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>

          <div className="font-weight-200">Feedback</div>
        </div>

        <div
          className="a transition-3 flex flex-col justify-center items-center"
          onClick={() => setPosition(2)}
        >
          <svg
            fill="none"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>

          <div className="font-weight-200">News</div>
        </div>
      </div>
    </animated.div>
  );
}
