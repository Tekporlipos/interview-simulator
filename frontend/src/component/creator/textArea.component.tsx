import { ChangeEvent, useRef } from "react";

export default function TextAreaComponent(props: any) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    props.setintput(value);

    // Auto-resize the textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };
  return (
    <textarea
      ref={textareaRef}
      value={props.inputMessage}
      onChange={handleTextareaChange}
      className="placeholder-white align-self-center text-white font-weight-200 bg-dark border-0 border-dark w-100 auto-resize-textarea scroll-bar-hide"
      placeholder={props.placeholder}
    ></textarea>
  );
}
