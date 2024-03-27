import "./style.css";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { IQuestionAnswer } from "@/utlities/interfaces";
import LeftChartComponent from "@/component/builder/left.chart.component";
import RightChatComponent from "@/component/builder/rightChatComponent";
import ProfileUploadComponent from "@/component/builder/profile.upload.component";
export default function ChatPageComponent(props: any) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [props?.data]);

  return (
    <div className="overflow-y-scroll h-85" ref={chatContainerRef}>
      <div className="container">
        <div className="my-4 ms-3 transition-3">
          {props?.data?.map((v: IQuestionAnswer, i: number) =>
            v.type != "user" ? (
              <LeftChartComponent
                profileSet={props?.profileSet}
                dateSet={props?.setDate}
                panelSet={props?.panelSet}
                data={v}
                key={i}
              />
            ) : (
              <RightChatComponent data={v} key={i} />
            ),
          )}
          {props?.typing ? (
            <div className="w-50">
              <div className="logo justify-content-start">
                <div className="bg-danger left-chat text-end py-2 px-4 text-white font-weight-200">
                  <div className="logo justify-content-end align-middle">
                    <div className="ps-1">Typing</div>
                    <Image
                      className="mt-2"
                      width="100"
                      height="10"
                      src="/throbber.gif"
                      alt={"loading"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="d-sm-block d-md-none">
        <br />
        <br />{" "}
      </div>
    </div>
  );
}
