import ActionBottomComponent from "@/component/creator/actionBottomComponent";
import VolunteerComponent from "@/component/creator/volunteer.component";
import SkillsComponent from "@/component/creator/skills.component";
import LanguageComponent from "@/component/creator/language.component";
import { useEffect, useState } from "react";
import {
  EState,
  IAbilities,
  IExperience,
  IHobby,
  ILanguage,
  IPractical,
  ISkill,
  IVolunteer,
} from "@/utlities/interfaces";
import HobbiesComponent from "@/component/creator/hobbies.component";

export default function AbilitiesComponent() {
  const [abilities, setAbilities] = useState<IAbilities>({} as IAbilities);

  useEffect(() => {
    let item = localStorage.getItem("abilities");
    if (item) {
      let parse = JSON.parse(item);
      setAbilities(parse);
    }
  }, []);
  function change(state: EState) {
    localStorage.setItem("abilities", JSON.stringify(abilities));
  }
  return (
    <div className="bg-dark flex-column justify-content-start px-3 pt-3">
      <div className="font-weight-500 text-white mb-2">Skills:</div>
      <SkillsComponent
        skills={abilities.skills}
        setSkills={(data: [ISkill]) =>
          setAbilities({ ...abilities, skills: data })
        }
      />
      <div className="font-weight-500 text-white my-3">Languages:</div>
      <LanguageComponent
        languages={abilities.languages}
        setLanguages={(data: [ILanguage]) =>
          setAbilities({ ...abilities, languages: data })
        }
      />
      <div className="font-weight-500 text-white my-3">Volunteer Work:</div>
      <VolunteerComponent
        volunteers={abilities.volunteer}
        setVolunteers={(data: [IVolunteer]) =>
          setAbilities({ ...abilities, volunteer: data })
        }
      />
      <div className="font-weight-500 text-white my-3">
        {" "}
        Hobbies and Interests:
      </div>
      <HobbiesComponent
        hobbies={abilities.hobbies}
        setHobbies={(data: [IHobby]) =>
          setAbilities({ ...abilities, hobbies: data })
        }
      />

      <div className="mb-3 mt-3">
        <ActionBottomComponent onChange={change} />
      </div>
    </div>
  );
}
