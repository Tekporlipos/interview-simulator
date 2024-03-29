import "../overwrite.css";
import Link from "next/link";
import { ConnectComponent } from "@/component/shared/ConnectComponent";
import React from "react";
import { FollowUs } from "@/component/home/FollowUs";
import AcceptComponent from "@/component/home/accept.component";
import NoteComponent from "@/component/note/note.component";
export default function FooterComponent() {
  return (
    <address>
      <div className="bg-black py-10 px-5 text-white">
        <div className="flex flex-col container">
          <div className="flex flex-row gap-10">
            <div className="font-weight-300">Follow us</div>
            <FollowUs />
          </div>
          <hr className="mt-5" />
          <div className="flex mt-10 justify-between">
            <div className="flex flex-col gap-1 md:flex-row md:gap-10">
              <Link href="https://www.genieaibuilder.com" className="font-weight-500 text-xl">GenieAIBuilder</Link>
              <Link href="/policy" className="font-weight-200">
                Privacy and Terms
              </Link>
              <Link href="" className="font-weight-200">
                About Us
              </Link>
              <Link href="" className="font-weight-200">
                Other Products
              </Link>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <svg
                fill="none"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <div className="font-weight-200">Help</div>
            </div>
          </div>
        </div>
      </div>
      <AcceptComponent />
      <NoteComponent />
    </address>
  );
}
