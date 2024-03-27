import React from "react";
import { IQuestionAnswer } from "@/utlities/interfaces";

export default function RightChatComponent(props: { data: IQuestionAnswer }) {
  return (
    <div className="logo justify-content-end">
      <div className="logo justify-content-end w-50">
        <div className="bg-dark right-chat text-end p-4 text-white font-weight-200">
          {props.data.answer}
        </div>
      </div>
    </div>
  );
}
