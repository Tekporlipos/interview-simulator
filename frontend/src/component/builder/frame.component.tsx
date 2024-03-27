import React, { useEffect, useRef } from "react";

export default function FrameComponent(prop: any) {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.src = prop.url;
    }
  }, [prop.url]);
  return (
    <iframe
      ref={ref}
      className="ps-4 bg-light frame"
      width="100%"
      height="100%"
      src={prop.url}
    />
  );
}
