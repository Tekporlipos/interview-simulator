import Image from "next/image";
import React from "react";
import { PanelMember } from "@/utlities/interfaces";

export function OtherPanelComponent(props: {
  data: PanelMember[];
  talking: string;
}) {
  return (
    <div className="relative h-1/5 md:h-1/4">
      <div className="bg-black/10 md:bg-black rounded-lg h-full w-full flex flex-col justify-center items-center">
        {props.data.find((value) => value.name == props.talking) ? (
          <div className="absolute left-0 top-0">
            <Image src="/giphy.gif" height="50" width="100" alt="Talkng" />
          </div>
        ) : null}
        <div className="flex items-center justify-center relative">
          {props.data.map((value, index) => getPanelCard(value, index))}
        </div>
        <div className="position-absolute bottom-10 text-white text-bold text-center">
          {props.data.length} Others
        </div>
      </div>
    </div>
  );
}

function getPanelCard(value: any, index: number) {
  return (
    <div
      key={index}
      className={`m-2 h-20 w-20 md:h-28 md:w-28 flex justify-center relative rounded-full items-center overflow-hidden bg-gray-700 ${
        index === 0 ? "left-6" : "right-6"
      }`}
    >
      <Image
        alt="profile_picture"
        className="w-full h-full object-cover"
        width="90"
        height="90"
        src={value.profile}
      />
    </div>
  );
}
