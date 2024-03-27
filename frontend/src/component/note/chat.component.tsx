import ChatPageComponent from "@/component/builder/chat.page.component";
import React, { useEffect, useState } from "react";
import TextareaComponent from "@/component/builder/textarea.component";
import { convertDateToReadableTime } from "@/utlities/functions";
import { extractFiles, postWebClient } from "@/utlities/builder-script";

export default function ChatComponent() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<IFeed[]>([] as IFeed[]);

  useEffect(() => {
    let item = localStorage.getItem("feedback");
    if (item) {
      setMessages(JSON.parse(item));
    }
  }, []);

  function sendMessage() {
    if (inputMessage.length > 5) {
      let item = localStorage.getItem("userId");
      const da: IFeed = { message: inputMessage, date: Date(), sent: false };
      const data: IFeed[] = [...messages, da];
      localStorage.setItem("feedback", JSON.stringify(data));
      setMessages(data);
      setInputMessage("");
      postWebClient("feedback", {
        message: inputMessage,
        userId: item,
        submissionDate: Date.now(),
      }).then((r) => r);
    }
  }
  return (
    <div className="flex-column mb-3 position-relative h-full">
      <div className="h-85 overflow-y-scroll">
        {messages.length > 0 ? (
          messages.map((v: IFeed, index: number) => (
            <div
              key={index}
              className="bg-dark-c mb-2 p-2 rounded-3 w-100 overflow-x-hidden"
            >
              <div className="font-weight-300">{v.message}</div>
              <div className="font-weight-100 fs-7 mt-2">
                {convertDateToReadableTime(v.date)}
              </div>
            </div>
          ))
        ) : (
          <div>NO FEEDBACK</div>
        )}
      </div>
      <div className="font-weight-200 text-white logo py-2">
        <TextareaComponent
          placeholder="Help Genie imporove!"
          setintput={setInputMessage}
          inputMessage={inputMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

interface IFeed {
  message: string;
  sent: boolean;
  date: string;
}
