import TextAreaComponent from "@/component/creator/textArea.component";
import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import DateComponent from "@/component/creator/date.component";
import React, { useState } from "react";
import ExperienceListComponent from "@/component/creator/experienceList.component";
import { IExperience } from "@/utlities/interfaces";
import TextAreaListComponent from "@/component/creator/textAreaList.component";

export default function ExperienceComponent(props: any) {
  const [singleExperience, setSingleExperience] = useState<IExperience>(
    {} as IExperience,
  );
  function add(): void {
    props.setExperience([singleExperience, ...(props.experiences ?? [])]);
    setSingleExperience({
      job_title: "",
      company_name: "",
      date_start: ["", ""],
      date_end: ["", ""],
      location: "",
      descriptions: [],
    });
  }

  function edit(at: number): void {
    let iExperiences = props.experiences.filter(
      (value: IExperience, index: number) => index !== at,
    );
    let find = props.experiences.find(
      (value: IExperience, index: number) => index === at,
    );
    if (find) {
      setSingleExperience(find);
      props.setExperience([...iExperiences]);
    }
  }

  return (
    <div>
      <div className="flex-column rounded my-2">
        {singleExperience.job_title ? (
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
          setData={setSingleExperience}
          data={singleExperience}
          type={"job_title"}
          placeholder="Job Title"
          className="font-weight-500"
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
          setData={setSingleExperience}
          data={singleExperience}
          type={"company_name"}
          placeholder="Company Name"
          className="font-weight-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill="gray"
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
            />
            <path
              fill="gray"
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
            />
          </svg>
        </InputWithSVGComponent>
        <DateComponent
          setStartData={(data: string[]) =>
            setSingleExperience({ ...singleExperience, date_start: data })
          }
          setEndData={(data: string[] | string) =>
            setSingleExperience({ ...singleExperience, date_end: data })
          }
          startDate={singleExperience.date_start ?? ["", ""]}
          endDate={singleExperience.date_end ?? ["", ""]}
        />
        <InputWithSVGComponent
          setData={setSingleExperience}
          data={singleExperience}
          type={"location"}
          placeholder="Location (City, State/Province, Country)"
          className="font-weight-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill="gray"
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </InputWithSVGComponent>
        <div className="mb-3 p-1 justify-content-start align-middle">
          <TextAreaListComponent
            setintput={(data: [string]) =>
              setSingleExperience({ ...singleExperience, descriptions: data })
            }
            inputMessage={singleExperience.descriptions}
            placeholder="Brief Description of Responsibilities and Achievements"
          />
        </div>
      </div>
      {props?.experiences?.map((data: IExperience, index: number) => (
        <ExperienceListComponent
          edit={edit}
          at={index}
          name={data.job_title}
          info={data.company_name}
          key={index}
        />
      ))}
    </div>
  );
}
