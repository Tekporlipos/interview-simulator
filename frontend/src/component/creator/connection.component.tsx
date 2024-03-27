import TextAreaComponent from "@/component/creator/textArea.component";
import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import React, { useState } from "react";
import ExperienceListComponent from "@/component/creator/experienceList.component";
import { IConnect, IHobby } from "@/utlities/interfaces";
import { getDomainName } from "@/utlities/functions";

export default function ConnectionComponent(props: any) {
  const [connect, setConnect] = useState<IConnect>({} as IConnect);

  function add(): void {
    props.setHobbies([connect, ...(props.hobbies ?? [])]);
    setConnect({
      link: "",
    });
  }
  function edit(at: number): void {
    let iExperiences = props.hobbies.filter(
      (value: IHobby, index: number) => index !== at,
    );
    let find = props.hobbies.find(
      (value: IHobby, index: number) => index === at,
    );
    if (find) {
      setConnect(find);
      props.setHobbies([...iExperiences]);
    }
  }
  return (
    <div>
      <div className="flex-column  rounded my-2">
        {connect.link ? (
          <div onClick={add} className="logo justify-content-end">
            <svg
              width="32"
              height="32"
              className="text-success mt-2 ms-2 a"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : null}

        <div className="mb-3 p-1 justify-content-start align-middle">
          <TextAreaComponent
            setintput={(data: string) => setConnect({ ...connect, link: data })}
            inputMessage={connect.link}
            placeholder="Website Link"
          />
        </div>
      </div>
      {props?.hobbies?.map((data: IConnect, index: number) => (
        <ExperienceListComponent
          edit={edit}
          at={index}
          name={getDomainName(data.link) ?? "Invalid"}
          info={data.link?.substring(0, 30) + "..."}
          key={index}
        />
      ))}
    </div>
  );
}
