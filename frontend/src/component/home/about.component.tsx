import React from "react";

export default function AboutComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative px-5 container w-full overflow-hidden mt-12">
      <div className="absolute w-full top-0 mt-5">
        <div className="h-8 w-8 bg-indigo-500/60 md:ms-24" />
        <div className="absolute md:right-32 right-2 h-8 w-8 bg-blue-300" />
        <div className="h-20 w-14 md:w-32 md:right-2 bg-green-500 absolute right-0 mt-16" />
      </div>
      <div className="text-2xl md:text-5xl lg:w-3/4 flex-1 font-weight-400 lg:mt-28">
        Analyzes Simulated Data with Genie AI Builder Tool
      </div>
      <div className="mx-5 md:container relative">
        <div className="grid grid-cols-2 font-weight-400 ">
          <div className="flex flex-row py-3">
            <svg
              className="me-2 fill-green-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />
            </svg>
            <div>InterviewSimulator report on mock interview</div>
          </div>
          <div className="flex flex-row py-3">
            <svg
              className="me-2 fill-blue-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />
            </svg>
            <div>24/7 up time</div>
          </div>
          <div className="flex flex-row py-3">
            <svg
              className="me-2 fill-yellow-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />
            </svg>
            <div> Local cache for fast response</div>
          </div>
          <div className="flex flex-row py-3">
            <svg
              className="me-2 fill-indigo-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />
            </svg>
            <div>Secure and Controlled Data</div>
          </div>
          <div className="flex flex-row py-3">
            <svg
              className="me-2 fill-indigo-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />
            </svg>
            <div>Advanced Protection</div>
          </div>
          <div className="flex flex-row py-3">
            <svg
              className="me-2 fill-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82M18.09,6.08L19.5,7.5L13,14L9.21,10.21L10.63,8.79L13,11.17" />
            </svg>
            <div>No personal data sharing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
