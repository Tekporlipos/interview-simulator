import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { func } from "prop-types";

export default function TextAreaListComponent(props: any) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState("");
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setMessage(value);

    // Auto-resize the textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      props.setintput([message, ...(props?.inputMessage ?? [])]);
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `70px`;
      }
    }
  };

  function handClick(at: number) {
    const find: string = props.inputMessage[at];
    setMessage(find);
    const data: [string] = props.inputMessage.filter(
      (v: string, i: number) => at !== i,
    );
    props.setintput(data);
  }

  return (
    <div className="flex-column">
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown} // Add this event handler
        className="placeholder-white align-self-center text-white font-weight-200 bg-dark border-0 border-dark w-100 auto-resize-textarea scroll-bar-hide"
        placeholder={props.placeholder}
      ></textarea>
      <ol className="mt-3">
        {props?.inputMessage?.map((v: string, at: number) => (
          <li className="font-weight-200 fs-6 text-white" key={v}>
            <div className="logo justify-content-between">
              <div>{v}</div>
              <div>
                <svg
                  onClick={() => handClick(at)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 12 12"
                  fill="white"
                >
                  <path
                    d="M8.25 1.75011C8.44891 1.5512 8.7187 1.43945 9 1.43945C9.13929 1.43945 9.27721 1.46689 9.4059 1.52019C9.53458 1.57349 9.65151 1.65162 9.75 1.75011C9.84849 1.8486 9.92662 1.96553 9.97992 2.09422C10.0332 2.2229 10.0607 2.36083 10.0607 2.50011C10.0607 2.6394 10.0332 2.77733 9.97992 2.90601C9.92662 3.0347 9.84849 3.15162 9.75 3.25011L3.5 9.50011L1.5 10.0001L2 8.00011L8.25 1.75011Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
