import ExperienceComponent from "@/component/creator/experience.component";
import ActionBottomComponent from "@/component/creator/actionBottomComponent";
import CertificationsComponent from "@/component/creator/certifications.component";
import ProjectsComponent from "@/component/creator/projects.component";
import {
  EState,
  ICertifications,
  IExperience,
  IPractical,
  IProjects,
} from "@/utlities/interfaces";
import { useEffect, useState } from "react";

export default function PracticalComponent() {
  const [practical, setPractical] = useState<IPractical>({} as IPractical);

  useEffect(() => {
    let item = localStorage.getItem("practical");
    if (item) {
      let parse = JSON.parse(item);
      setPractical(parse);
    }
  }, []);

  function change(state: EState) {
    localStorage.setItem("practical", JSON.stringify(practical));
  }

  return (
    <div className="bg-dark flex-column justify-content-start px-3 pt-3">
      <div className="font-weight-500 text-white mb-2">Work Experience:</div>
      <ExperienceComponent
        experiences={practical.experiences}
        setExperience={(data: [IExperience]) =>
          setPractical({ ...practical, experiences: data })
        }
      />
      <hr />
      <div className="font-weight-500 text-white my-3">
        Certifications and Training:
      </div>
      <CertificationsComponent
        certifications={practical.certifications}
        setCertifications={(data: [ICertifications]) =>
          setPractical({ ...practical, certifications: data })
        }
      />
      <div className="font-weight-500 text-white my-3">Projects:</div>
      <ProjectsComponent
        projects={practical.projects}
        setProjects={(data: [IProjects]) =>
          setPractical({ ...practical, projects: data })
        }
      />

      <div className="mb-3 mt-3">
        <ActionBottomComponent onChange={change} />
      </div>
    </div>
  );
}
