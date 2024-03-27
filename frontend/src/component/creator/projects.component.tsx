import TextAreaComponent from "@/component/creator/textArea.component";
import InputWithSVGComponent from "@/component/creator/inputWithSVG.component";
import DateComponent from "@/component/creator/date.component";
import React, { useState } from "react";
import ExperienceListComponent from "@/component/creator/experienceList.component";
import { IProjects } from "@/utlities/interfaces";

export default function ProjectsComponent(props: any) {
  const [project, setProject] = useState<IProjects>({} as IProjects);

  function add(): void {
    props.setProjects([project, ...(props.projects ?? [])]);
    setProject({
      project_name: "",
      date_start: ["", ""],
      date_end: ["", ""],
      project_description: "",
      description: "",
    });
  }
  function edit(at: number): void {
    let iExperiences = props.projects.filter(
      (value: IProjects, index: number) => index !== at,
    );
    let find = props.projects.find(
      (value: IProjects, index: number) => index === at,
    );
    if (find) {
      setProject(find);
      props.setProjects([...iExperiences]);
    }
  }

  return (
    <div>
      <div className="flex-column rounded my-2">
        {project.project_name ? (
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
          setData={setProject}
          data={project}
          type={"project_name"}
          placeholder="Project Name"
          className="font-weight-500"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="gray"
              fillRule="evenodd"
              d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
              clipRule="evenodd"
            />
          </svg>
        </InputWithSVGComponent>
        <DateComponent
          setStartData={(data: string[]) =>
            setProject({ ...project, date_start: data })
          }
          setEndData={(data: string[] | string) =>
            setProject({ ...project, date_end: data })
          }
          startDate={project.date_start ?? ["", ""]}
          endDate={project.date_end ?? ["", ""]}
        />
        <div className="mb-3 p-1 justify-content-start align-middle border-bottom">
          <TextAreaComponent
            setintput={(data: string) =>
              setProject({ ...project, project_description: data })
            }
            inputMessage={project.project_description}
            placeholder="Brief Description of Project"
          />
        </div>
        <div className="mb-3 p-1 justify-content-start align-middle">
          <TextAreaComponent
            setintput={(data: string) =>
              setProject({ ...project, description: data })
            }
            inputMessage={project.description}
            placeholder="Brief Description of Your Role and Contributions"
          />
        </div>
      </div>
      {props?.projects?.map((data: IProjects, index: number) => (
        <ExperienceListComponent
          edit={edit}
          at={index}
          name={data?.project_name}
          info={data?.project_description}
          key={index}
        />
      ))}
    </div>
  );
}
