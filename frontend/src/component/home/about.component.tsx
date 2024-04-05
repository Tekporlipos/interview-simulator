"use client";
import React, { useState } from "react";
import MemberComponent from "@/component/home/member.component";
import {
  getEnablers,
  getInterviewCoach,
  getPanelMembers,
} from "@/utlities/cv-genie-questions";
import Image from "next/image";

export default function AboutComponent() {
  const [panels, setPanels] = useState(getPanelMembers);
  const [interView, setInterView] = useState(getInterviewCoach);
  const [enablers, setEnablers] = useState(getEnablers);
  return (
    <div className="flex flex-col justify-center items-center py-10 mx-5 md:container">
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Leadership</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4">
        <MemberComponent data={panels[0]} />
      </div>
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Panel Members</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {panels.slice(1).map((value) => (
          <MemberComponent key={value.name} data={value} />
        ))}
      </div>
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Interview Coaches</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {interView.map((value) => (
          <MemberComponent key={value.name} data={value} />
        ))}
      </div>
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Enablers</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center content-center justify-center">
        {enablers.map((value) => (
          <MemberComponent key={value.name} data={value} />
        ))}
      </div>
    </div>
  );
}
