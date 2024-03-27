"use client";
import "./style.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react"; // Import useRef

export default function LoaderComponent(prop: any) {
  const [progress, setProgress] = useState(0);
  const loadingIntervalRef = useRef<NodeJS.Timeout | undefined>(undefined); // Create a useRef for loadingInterval

  useEffect(() => {
    if (prop.loading) {
      loadingIntervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 95) {
            return prevProgress + Math.random() * 3 + 1;
          } else {
            clearInterval(loadingIntervalRef.current);
            return 99.99;
          }
        });
      }, 700);
    } else {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
      setProgress(0);
    }
  }, [prop.loading]);

  function reload() {
    window.location.reload();
  }

  const display = prop.loading ? "flex" : "none";

  return (
    <div className="loading" style={{ display: display }}>
      <div className="flex-column loading-content">
        <div className="text-center">
          <Image width="297" height="231" src="/loading.gif" alt="loading" />
        </div>
        <div className="font-weight-500 p-1 h4">Processing your build</div>
        <progress max="100" value={progress}></progress>
        <div className="font-weight-200 p-1">
          Take a moment to reflect on the modifications you have made. Allow
          yourself a minute for contemplation.
        </div>
        <div className="font-weight-500 p-1">
          During this testing phase, there might be some delays in the build
          process.
        </div>
        <div className="font-weight-500 p-1">
          {String(progress).substring(0, 5).trim()}%
        </div>
        <button
          onClick={reload}
          className="btn btn-outline-secondary m-1 text-white"
        >
          Stop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>restart-off</title>
            <path
              fill="white"
              d="M20.8,22.7L16.6,18.5C14.9,19.7 12.9,20.2 10.9,19.9L11.4,17.9C12.7,18 14,17.7 15.1,17L1.1,3L2.4,1.7L16.5,15.8L17.9,17.2L22.1,21.4L20.8,22.7M12,6C13.5,6 15.1,6.6 16.2,7.8C18,9.6 18.4,12.2 17.5,14.4L19,15.9C20.7,12.9 20.2,9 17.6,6.4C16.1,4.8 14,4 12,4V0.7L7.9,4.7L12,8.8V6M6.6,9.4L5.1,7.9C3.3,11 3.7,15 6.3,17.7C7.1,18.4 8,19 9,19.4L9.5,17.4C8.9,17.1 8.3,16.7 7.7,16.2C5.9,14.4 5.5,11.6 6.6,9.4Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
