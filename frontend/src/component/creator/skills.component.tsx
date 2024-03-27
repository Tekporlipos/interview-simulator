import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import React, { useState } from "react";
import ExperienceListComponent from "@/component/creator/experienceList.component";
import { ISkill } from "@/utlities/interfaces";

export default function SkillsComponent(props: any) {
  const [skill, setSkill] = useState<ISkill>({} as ISkill);
  function add(): void {
    props.setSkills([skill, ...(props.skills ?? [])]);
    setSkill({
      skill_name: "",
      level: "",
    });
  }

  function edit(at: number): void {
    let iExperiences = props.skills.filter(
      (value: ISkill, index: number) => index !== at,
    );
    let find = props.skills.find(
      (value: ISkill, index: number) => index === at,
    );
    if (find) {
      setSkill(find);
      props.setSkills([...iExperiences]);
    }
  }
  return (
    <div>
      <div className="flex-column  rounded my-2">
        {skill.skill_name ? (
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
        <div className="logo justify-content-between">
          <InputWithSVGComponent
            setData={setSkill}
            data={skill}
            type={"skill_name"}
            placeholder="Skill Name"
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
          <div>
            <select
              value={skill.level}
              onChange={(data) =>
                setSkill({ ...skill, level: data.currentTarget.value })
              }
              className="bg-dark px-5 input-focus-outline-none text-white font-weight-500"
            >
              <option value="" className="font-weight-100">
                ---Select Level---
              </option>
              <option value="Beginner" className="font-weight-300">
                Beginner
              </option>
              <option value="Novice" className="font-weight-300">
                Novice
              </option>
              <option value="Intermediate" className="font-weight-300">
                Intermediate
              </option>
              <option value="Advanced" className="font-weight-300">
                Advanced
              </option>
              <option value="Expert" className="font-weight-300">
                Expert
              </option>
            </select>
          </div>
        </div>
      </div>
      {props?.skills?.map((data: ISkill, index: number) => (
        <ExperienceListComponent
          edit={edit}
          at={index}
          name={data.skill_name}
          info={data.level}
          key={index}
        />
      ))}
    </div>
  );
}
