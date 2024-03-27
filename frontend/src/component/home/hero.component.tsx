import "../shared/style.css";
import "../overwrite.css";
import "./css/home-style.css";
import { GetStartedComponent } from "@/component/shared/getStarted.component";
import React from "react";
import Image from "next/image";

export default function HeroComponent() {
  return (
    <section className="relative container px-5 pt-32 md:pt-16 lg:pt-32 flex md:flex-row flex-col z-0">
      <div className="flex-1 flex flex-col text-black align-middle justify-center">
        <div className="absolute w-full">
          <div className="h-16 w-16 bg-red-600/80 absolute right-0 md:right-32 -mt-8"></div>
          <div className="h-6 w-6 bg-yellow-500 ms-16 md:ms-24 mt-11"></div>
          <div className="h-6 w-6 bg-blue-300 right-0 absolute md:right-64"></div>
          <div className="h-20 w-20 bg-green-500/70 mt-16 "></div>
          <div className="h-10 w-10 bg-indigo-600 mt-1 absolute right-0 md:right-36"></div>
        </div>
        <div className="lg:mx-32 mx-5 md:mt-20 text-center md:text-left">
          <div className="font-extralight  font-weight-600 text-3xl md:text-4xl">
            Powering the Job seekers
          </div>
          <div className="font-extralight mt-2 font-weight-200 text-2xl md:text-3xl">
            Perfect your interview skills with AI-driven panels.
          </div>
          <div className="font-extralight mt-2 font-weight-200 text-lg md:text-xl">
            Elevate your professional journey with InterviewSimulator!
          </div>
          <div className="flex justify-center md:justify-start mt-12 mb-8">
            <GetStartedComponent />
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/6 flex justify-center items-center transition hover:animate-pulse cursor-pointer hover:scale-110">
        <div className="w-3/4 md:w-full rounded-xl overflow-hidden ">
          <Image
            className="w-full h-full"
            width="700"
            height="500"
            src="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/preview.png?alt=media&token=e0f3bf92-d3a2-427b-aabc-35fb3c02b5dd"
            alt="preview"
          />
        </div>
      </div>
    </section>
  );
}
