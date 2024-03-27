import TextAreaComponent from "@/component/creator/textArea.component";
import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import React, { useState } from "react";
import ExperienceListComponent from "@/component/creator/experienceList.component";
import { IHobby } from "@/utlities/interfaces";

export default function HobbiesComponent(props: any) {
  const [hobby, setHobby] = useState<IHobby>({} as IHobby);

  function add(): void {
    props.setHobbies([hobby, ...(props.hobbies ?? [])]);
    setHobby({
      hobbies_name: "",
      description: "",
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
      setHobby(find);
      props.setHobbies([...iExperiences]);
    }
  }
  return (
    <div>
      <div className="flex-column  rounded my-2">
        {hobby.hobbies_name ? (
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
        <InputWithSVGComponent
          setData={setHobby}
          data={hobby}
          type={"hobbies_name"}
          placeholder="hobby or interest"
          className="font-weight-500"
          underline={true}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="gray"
              fillRule="evenodd"
              d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </InputWithSVGComponent>
        <div className="mb-3 p-1 justify-content-start align-middle">
          <TextAreaComponent
            setintput={(data: string) =>
              setHobby({ ...hobby, description: data })
            }
            inputMessage={hobby.description}
            placeholder="Other information"
          />
        </div>
      </div>
      {props?.hobbies?.map((data: IHobby, index: number) => (
        <ExperienceListComponent
          edit={edit}
          at={index}
          name={data.hobbies_name}
          info={data.description?.substring(0, 30) + "..."}
          key={index}
        />
      ))}
    </div>
  );
}
