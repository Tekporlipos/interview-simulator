"use client";
import "./css/home-style.css";
import "../overwrite.css";
import FrequentAskCardComponent from "./frequentAskCardComponent";
import getQuestionAndAnswers from "@/utlities/question";
import { useState } from "react";
export default function FrequentAskQuestionsComponent() {
  const [at, setAt] = useState(0);

  return (
    <div className="container mt-5">
      <div className="text-center text-lg font-weight-700 text-bold">
        Frequent Ask Questions
      </div>
      <div className="justify-content-center mb-10">
        <p className="text-center text-sm font-weight-200 mb-3 w-50">
          Discover quick answers to commonly asked questions about
          GenieBuilder&apos;s features, subscriptions, and more.
        </p>
      </div>

      <div className="flex-row justify-content-center mx-3 md:container">
        <div className="justify-content-column-around w-75">
          {getQuestionAndAnswers().map((v, i) => (
            <FrequentAskCardComponent
              click={setAt}
              key={i}
              at={at}
              index={i}
              a={v.answer}
              q={v.question}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
