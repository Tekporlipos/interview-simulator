import React from "react";

export default function ExperienceListComponent(props: any) {
  return (
    <div className="justify-content-between logo bg-black rounded p-2 mb-2">
      <div>
        <div className="text-white font-weight-400">{props.name}</div>
        <div className="text-white font-weight-200">
          {props.info ? props.info.substring(0, 40) + "..." : "..."}
        </div>
      </div>
      <div>
        <svg
          onClick={() => props.edit(props.at)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
  );
}
