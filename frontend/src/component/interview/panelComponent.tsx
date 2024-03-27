import Image from "next/image";
import { PanelMember } from "@/utlities/interfaces";
import { getInitialsFromUsername } from "@/utlities/question";

export function PanelComponent(props: { data: PanelMember; talking: string }) {
  return (
    <div className="pb-1 h-1/5 md:h-1/4 relative overflow-hidden">
      <div className="bg-black/10 md:bg-black w-full h-full rounded-lg flex flex-col justify-center items-center">
        {props.talking === props.data.name ? (
          <div className="absolute left-0 top-0">
            <Image src="/giphy.gif" height="50" width="100" alt="Talkng" />
          </div>
        ) : null}
        <div className="flex justify-center image-center items-center">
          {props?.data?.profile ? (
            <div className="m-2 h-20 w-20 md:h-32 md:w-32 flex justify-center rounded-full items-center overflow-hidden bg-gray-700 ">
              <Image
                alt="profile_picture"
                width="130"
                className="w-full h-full object-cover"
                height="130"
                src={props?.data?.profile}
              />
            </div>
          ) : (
            <div className="rounded-100 m-2 avatar bg-danger text-white fst-italic p-1 text-rounded">
              {getInitialsFromUsername(props.data.name)}
            </div>
          )}
        </div>
        <div className="position-absolute bottom-10 text-white text-bold">
          {props?.data?.name}
        </div>
      </div>
    </div>
  );
}
