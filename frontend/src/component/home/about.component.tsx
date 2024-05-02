"use client";
import React, {useEffect, useRef, useState} from "react";
import MemberComponent from "@/component/home/member.component";
import {
  getEnablers,
  getInterviewCoach,
  getPanelMembers,
} from "@/utlities/cv-genie-questions";
import Image from "next/image";

export default function AboutComponent() {
    const [panels, setPanels] = useState(getPanelMembers());
    const [interView, setInterView] = useState(getInterviewCoach());
    const [enablers, setEnablers] = useState(getEnablers());
    const [isPlaying, setIsPlaying] = useState<string | undefined>();
    const [audioUrl, setAudioUrl] = useState<string | undefined>();
    const audio = useRef<HTMLAudioElement>();


    useEffect(()=>{
        audio.current = new Audio();
    },[])

    const playAudio = (link: string) => {
        if (audio.current && audioUrl !== link) {
            audio.current.src = link;
            audio.current.play();
            setAudioUrl(link);
        }
        setIsPlaying(link);
        audio.current && audio.current.addEventListener("ended", () => {
            setIsPlaying(undefined);
        });
    };

  return (
    <div className="flex flex-col justify-center items-center py-10 mx-5 md:container">
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Leadership</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4">
        <MemberComponent isPlaying={isPlaying} playAudio={playAudio} data={panels[0]} />
      </div>
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Panel Members</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {panels.slice(1).map((value) => (
          <MemberComponent isPlaying={isPlaying} playAudio={playAudio} key={value.name} data={value} />
        ))}
      </div>
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Interview Coaches</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {interView.map((value) => (
          <MemberComponent isPlaying={isPlaying} playAudio={playAudio} key={value.name} data={value} />
        ))}
      </div>
      <div className="flex flex-col mt-14 mb-5 justify-center items-center">
        <div className="font-weight-700 text-2xl">Enablers</div>
        <Image width="200" height="10" alt="bar" src="/bar.png" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center content-center justify-center">
        {enablers.map((value) => (
          <MemberComponent isPlaying={isPlaying} playAudio={playAudio} key={value.name} data={value} />
        ))}
      </div>
    </div>
  );
}
