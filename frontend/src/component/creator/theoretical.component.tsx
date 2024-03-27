import ActionBottomComponent from "@/component/creator/actionBottomComponent";
import EducationComponent from "@/component/creator/education.component";
import PublicationsComponent from "@/component/creator/publications.component";
import { useEffect, useState } from "react";
import {
  EState,
  IEducation,
  IPublication,
  ISkill,
  ITheoretical,
} from "@/utlities/interfaces";

export default function TheoreticalComponent() {
  const [theoretical, setTheoretical] = useState<ITheoretical>(
    {} as ITheoretical,
  );

  useEffect(() => {
    let item = localStorage.getItem("theoretical");
    if (item) {
      let parse = JSON.parse(item);
      setTheoretical(parse);
    }
  }, []);
  function change(state: EState) {
    localStorage.setItem("theoretical", JSON.stringify(theoretical));
  }
  return (
    <div className="bg-dark flex-column justify-content-start px-3 pt-3">
      <div className="font-weight-500 text-white mb-2">Education:</div>
      <EducationComponent
        experience={theoretical.educations}
        setExperience={(data: [IEducation]) =>
          setTheoretical({ ...theoretical, educations: data })
        }
      />
      <div className="font-weight-500 text-white my-3">
        Publications and Presentations:
      </div>
      <PublicationsComponent
        certifications={theoretical.publications}
        setCertifications={(data: [IPublication]) =>
          setTheoretical({ ...theoretical, publications: data })
        }
      />

      <div className="mb-3 mt-3">
        <ActionBottomComponent onChange={change} />
      </div>
    </div>
  );
}
