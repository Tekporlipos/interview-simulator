import TextAreaComponent from "@/component/creator/textArea.component";
import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import DateComponent from "@/component/creator/date.component";
import React, { useState } from "react";
import ExperienceListComponent from "@/component/creator/experienceList.component";
import { ICertifications } from "@/utlities/interfaces";

export default function CertificationsComponent(props: any) {
  const [certification, setCertification] = useState<ICertifications>(
    {} as ICertifications,
  );

  function add(): void {
    props.setCertifications([certification, ...(props.certifications ?? [])]);
    setCertification({
      certification_name: "",
      date_start: ["", ""],
      date_end: ["", ""],
      description: "",
    });
  }
  function edit(at: number): void {
    let iExperiences = props.certifications.filter(
      (value: ICertifications, index: number) => index !== at,
    );
    let find = props.certifications.find(
      (value: ICertifications, index: number) => index === at,
    );
    if (find) {
      setCertification(find);
      props.setCertifications([...iExperiences]);
    }
  }
  return (
    <div>
      <div className="flex-column rounded my-2">
        {certification.certification_name ? (
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
          setData={setCertification}
          data={certification}
          type={"certification_name"}
          placeholder="Certification Name"
          className="font-weight-500"
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
        <DateComponent
          setStartData={(data: string[]) =>
            setCertification({ ...certification, date_start: data })
          }
          setEndData={(data: string[] | string) =>
            setCertification({ ...certification, date_end: data })
          }
          startDate={certification.date_start ?? ["", ""]}
          endDate={certification.date_end ?? ["", ""]}
        />
        <div className="mb-3 p-1 justify-content-start align-middle">
          <TextAreaComponent
            setintput={(data: string) =>
              setCertification({ ...certification, description: data })
            }
            inputMessage={certification.description}
            placeholder="Brief Description of Certification"
          />
        </div>
      </div>
      {props?.certifications?.map((data: ICertifications, index: number) => (
        <ExperienceListComponent
          edit={edit}
          at={index}
          name={data.certification_name}
          info={data.description?.substring(0, 30) + "..."}
          key={index}
        />
      ))}
    </div>
  );
}
