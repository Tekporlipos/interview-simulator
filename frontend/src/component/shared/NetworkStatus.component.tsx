import React, { useEffect, useState } from "react";
import Image from "next/image";

function NetworkStatus(props: any) {
  useEffect(() => {
    const handleNetworkStatusChange = () => {
      props.setIsOffline(!navigator.onLine);
    };

    // Add event listeners when the component mounts
    window.addEventListener("offline", handleNetworkStatusChange);
    window.addEventListener("online", handleNetworkStatusChange);

    // Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("offline", handleNetworkStatusChange);
      window.removeEventListener("online", handleNetworkStatusChange);
    };
  }, []);

  return (
    <div>
      {props.isOffline ? (
        <div
          className="flex bg-red-500 p-3 rounded-lg absolute top-0 w-full md:w-1/3"
          role="alert"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              fill="#f8d7da"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <div className="text-white ps-2">
            You lost your network connection. Trying to reconnect...
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NetworkStatus;
