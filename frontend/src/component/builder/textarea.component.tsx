"use client";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export default function TextareaComponent(props: any) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (props?.inputMessage?.length > 0) props.sendMessage();
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `70px`;
      }
    }
  };
  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    props.setintput(value);

    // Auto-resize the textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [props]);
  return (
    <div className="bg-dark rounded-5 z-50 shadow flex flex-row justify-between items-center overflow-hidden position-relative w-full">
      <textarea
        ref={textareaRef}
        autoFocus={!props.disable}
        value={props.inputMessage}
        onKeyDown={handleKeyDown}
        onChange={handleTextareaChange}
        className="placeholder:text-black rounded px-1 z-50 align-self-center text-black bg-dark border-0 border-dark w-full auto-resize-textarea me-3 mt-3 mb-1 scroll-bar-hide p-right"
        placeholder={props.placeholder}
        disabled={props.disable}
      ></textarea>
      <div className="c-position-r-b-2 a">
        <svg
          onClick={() =>
            props?.inputMessage?.length > 0 ? props.sendMessage() : null
          }
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M5.19256e-07 1.5317C-9.24566e-05 1.26733 0.0719739 1.00744 0.209184 0.777327C0.346394 0.547218 0.544074 0.35473 0.782979 0.218599C1.02188 0.0824682 1.29387 0.00733403 1.57247 0.00051025C1.85107 -0.00631354 2.12679 0.0554056 2.37278 0.17966L23.1435 10.6484C23.4022 10.7788 23.6185 10.9735 23.7694 11.2117C23.9203 11.4499 24 11.7225 24 12.0004C24 12.2783 23.9203 12.5509 23.7694 12.7891C23.6185 13.0273 23.4022 13.222 23.1435 13.3524L2.37117 23.8212C2.12511 23.9451 1.84942 24.0065 1.57091 23.9995C1.29241 23.9924 1.02058 23.917 0.781871 23.7808C0.543159 23.6445 0.345692 23.4519 0.20868 23.2218C0.0716682 22.9917 -0.000222921 22.7319 5.19256e-07 22.4676V15.5681C-2.72566e-05 15.2108 0.131622 14.8648 0.372158 14.59C0.612694 14.3151 0.946976 14.1286 1.31714 14.0629L12.9131 12.0004L1.31714 9.9379C0.946976 9.87217 0.612694 9.68573 0.372158 9.41086C0.131622 9.13599 -2.72566e-05 8.78998 5.19256e-07 8.43275V1.5317Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
