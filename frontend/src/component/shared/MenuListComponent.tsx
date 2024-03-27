import Link from "next/link";
import React from "react";

export function MenuListComponent() {
  return (
    <div className=" flex flex-col md:flex-row uppercase font-weight-300 ">
      <div className="mt-5 a">
        <div className="hover:underline flex justify-between">
          <div>For Job Seekers</div>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
        <ul className="flex flex-col font-weight-200 text-xs mx-3">
          <Link href="/booking" className="mt-4 flex justify-between">
            <div>Interview Simulator</div>{" "}
            <svg width="16" height="16" viewBox="0 0 24 24">
              <title>solar-panel</title>
              <path d="M4,2H20A2,2 0 0,1 22,4V14A2,2 0 0,1 20,16H15V20H18V22H13V16H11V22H6V20H9V16H4A2,2 0 0,1 2,14V4A2,2 0 0,1 4,2M4,4V8H11V4H4M4,14H11V10H4V14M20,14V10H13V14H20M20,4H13V8H20V4Z" />
            </svg>
          </Link>
          <Link href="#" className="mt-4 flex justify-between">
            <div>Resume Builder</div>{" "}
            <svg width="16" height="16" viewBox="0 0 24 24">
              <title>office-building-cog-outline</title>
              <path d="M17 13C16.87 13 16.76 13.09 16.74 13.21L16.55 14.53C16.25 14.66 15.96 14.82 15.7 15L14.46 14.5C14.35 14.5 14.22 14.5 14.15 14.63L13.15 16.36C13.09 16.47 13.11 16.6 13.21 16.68L14.27 17.5C14.25 17.67 14.24 17.83 14.24 18S14.25 18.33 14.27 18.5L13.21 19.32C13.12 19.4 13.09 19.53 13.15 19.64L14.15 21.37C14.21 21.5 14.34 21.5 14.46 21.5L15.7 21C15.96 21.18 16.24 21.35 16.55 21.47L16.74 22.79C16.76 22.91 16.86 23 17 23H19C19.11 23 19.22 22.91 19.24 22.79L19.43 21.47C19.73 21.34 20 21.18 20.27 21L21.5 21.5C21.63 21.5 21.76 21.5 21.83 21.37L22.83 19.64C22.89 19.53 22.86 19.4 22.77 19.32L21.7 18.5C21.72 18.33 21.74 18.17 21.74 18S21.73 17.67 21.7 17.5L22.76 16.68C22.85 16.6 22.88 16.47 22.82 16.36L21.82 14.63C21.76 14.5 21.63 14.5 21.5 14.5L20.27 15C20 14.82 19.73 14.65 19.42 14.53L19.23 13.21C19.22 13.09 19.11 13 19 13H17M18 16.5C18.83 16.5 19.5 17.17 19.5 18S18.83 19.5 18 19.5C17.16 19.5 16.5 18.83 16.5 18S17.17 16.5 18 16.5M10 5H12V7H10V5M16 7H14V5H16V7M14 9H16V11H14V9M10 9H12V11H10V9M13.11 23H2V1H20V11.29C19.37 11.11 18.7 11 18 11V3H4V21H10V17.5H11.03C11 17.67 11 17.83 11 18C11 19.96 11.81 21.73 13.11 23M8 15H6V13H8V15M8 11H6V9H8V11M8 7H6V5H8V7M6 17H8V19H6V17M10 13H12V14.41C11.89 14.6 11.78 14.8 11.68 15H10V13Z" />
            </svg>
          </Link>
        </ul>
      </div>

      <div className="mt-5 a">
        <div className="hover:underline flex justify-between">
          <div>Resources</div>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <title>menu-down</title>
            <path d="M7,10L12,15L17,10H7Z" />
          </svg>
        </div>
        <ul className="flex flex-col font-weight-200 text-xs mx-3">
          <Link href="#" className="mt-4 flex justify-between">
            <div>Interview Reports</div>{" "}
            <svg width="16" height="16" viewBox="0 0 24 24">
              <title>chart-arc</title>
              <path d="M16.18,19.6L14.17,16.12C15.15,15.4 15.83,14.28 15.97,13H20C19.83,15.76 18.35,18.16 16.18,19.6M13,7.03V3C17.3,3.26 20.74,6.7 21,11H16.97C16.74,8.91 15.09,7.26 13,7.03M7,12.5C7,13.14 7.13,13.75 7.38,14.3L3.9,16.31C3.32,15.16 3,13.87 3,12.5C3,7.97 6.54,4.27 11,4V8.03C8.75,8.28 7,10.18 7,12.5M11.5,21C8.53,21 5.92,19.5 4.4,17.18L7.88,15.17C8.7,16.28 10,17 11.5,17C12.14,17 12.75,16.87 13.3,16.62L15.31,20.1C14.16,20.68 12.87,21 11.5,21Z" />
            </svg>
          </Link>
          <Link href="#" className="mt-4 flex justify-between">
            <div>Activities</div>{" "}
            <svg width="16" height="16" viewBox="0 0 24 24">
              <title>clipboard-text-clock-outline</title>
              <path d="M21 11.11V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.11C12.37 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.37 21 11.11M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M5 19V5H7V7H17V5H19V9.68C18.09 9.25 17.08 9 16 9H7V11H11.1C10.5 11.57 10.04 12.25 9.68 13H7V15H9.08C9.03 15.33 9 15.66 9 16C9 17.08 9.25 18.09 9.68 19H5M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z" />
            </svg>
          </Link>
        </ul>
      </div>
      <Link href="#" className="mt-5 hover:underline">
        Pricing
      </Link>

      <Link
        href="#"
        className="mt-5 w-full bg-red-500 text-center text-white font-weight-200 py-2 hover:bg-red-600 rounded-lg"
      >
        Log In
      </Link>
    </div>
  );
}
