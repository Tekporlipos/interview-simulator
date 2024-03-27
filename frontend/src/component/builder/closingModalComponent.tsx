import Image from "next/image";
import Link from "next/link";
import { timeSince } from "@/utlities/question";
import React from "react";

export default function ClosingModalComponent() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full absolute bg-white z-50">
      <div className="text-left  w-full  md:w-1/3 flex flex-col bg-gray-100/20 p-5 rounded-lg">
        <div className="font-weight-700 text-2xl mb-2">
          Congratulations, You Made It!
        </div>
        <div className="font-weight-300">
          <span className="font-weight-500">
            Congratulations! You&apos;ve reached the end of the interview!
          </span>{" "}
          <br /> Your dedication and effort have led you through each step,
          showcasing your skills and abilities along the way. Take pride in your
          accomplishments and know that your hard work has not gone unnoticed.
          As you reflect on your experience, remember the valuable insights
          gained and lessons learned.
          <div className="mt-5">
            <span className="font-weight-500">
              Your feedback matters greatly to us!
            </span>{" "}
            <br />
            Your feedback plays a crucial role in helping us improve and tailor
            our services to better meet your needs. We value your thoughts,
            opinions, and suggestions, as they guide us in making meaningful
            enhancements. Thank you for taking the time to share your valuable
            feedback with us. We genuinely appreciate it!
          </div>
          <br />
          <a
            href="mailTo:genieaibuilder@gmail.com"
            className="text-blue-500"
            target="_blank"
          >
            {" "}
            Feedback
          </a>
          <Link href="/" className="text-decoration-none text-blue-500 ps-5">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
