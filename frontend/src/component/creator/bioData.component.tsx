import TextAreaComponent from "@/component/creator/textArea.component";
import ActionBottomComponent from "@/component/creator/actionBottomComponent";
import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import React, { useEffect, useState } from "react";
import ProfileComponent from "@/component/creator/profile.component";
import { EState, IBioData } from "@/utlities/interfaces";

export default function BioDataComponent() {
  const [bioData, setBioData] = useState<IBioData>({} as IBioData);
  function getTextArea(data: string) {
    const newData: IBioData = { ...bioData };
    newData.description = data;
    setBioData(newData);
  }

  useEffect(() => {
    let item = localStorage.getItem("bio");
    if (item) {
      let parse = JSON.parse(item);
      setBioData(parse);
    }
  }, []);

  function change(state: EState) {
    if (bioData) {
      localStorage.setItem("bio", JSON.stringify(bioData));
    }
  }
  return (
    <div className="bg-dark flex-column justify-content-start px-3 pt-3">
      <ProfileComponent
        setData={setBioData}
        data={bioData}
        type={"profile_picture"}
      />

      <InputWithSVGComponent
        setData={setBioData}
        data={bioData}
        type={"name"}
        placeholder="Full Name"
        className="font-weight-500"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill="gray"
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </InputWithSVGComponent>
      <InputWithSVGComponent
        setData={setBioData}
        data={bioData}
        type={"title"}
        placeholder="Job Title"
        className="font-weight-200"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="gray"
            d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"
          />
          <path
            fill="gray"
            d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"
          />
          <path
            fill="gray"
            d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"
          />
        </svg>
      </InputWithSVGComponent>
      <InputWithSVGComponent
        setData={setBioData}
        data={bioData}
        type={"phone_number"}
        placeholder="Phone Number"
        className="font-weight-200"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill="gray"
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
      </InputWithSVGComponent>

      <InputWithSVGComponent
        setData={setBioData}
        data={bioData}
        type={"email_address"}
        placeholder="Email Address"
        className="font-weight-200"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fill="gray"
            fillRule="evenodd"
            d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </InputWithSVGComponent>

      <InputWithSVGComponent
        setData={setBioData}
        data={bioData}
        type={"location"}
        placeholder="Location (City, State/Province, Country)"
        className="font-weight-200"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            fill="gray"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </InputWithSVGComponent>

      <div className="mb-3 p-1 justify-content-start align-middle border-bottom">
        <TextAreaComponent
          setintput={getTextArea}
          inputMessage={bioData.description}
          type={"description"}
          placeholder="A brief overview of your career goals and what you can bring to the role."
        />
      </div>
      <div className="mb-3">
        <ActionBottomComponent onChange={change} />
      </div>
    </div>
  );
}
