import React from "react";
import QuestionCardComponent from "@/component/builder/questionCard.component";
import { siteBuilderExamples, siteBuilderQuestions } from "@/utlities/question";

// eslint-disable-next-line react/display-name
const WelcomeComponent = React.memo((props: any) => {
  return (
    <div className="overflow-y-scroll h-100vh">
      <div className="row pt-3 px-3">
        {siteBuilderExamples().map((value: any, i: number) => (
          <QuestionCardComponent
            sendMessage={props.sendMessage}
            key={value.title}
            timeout={i}
            question={value.title}
            answer={value.example}
          />
        ))}
      </div>
    </div>
  );
});

export default WelcomeComponent;
