import ActionBottomComponent from "@/component/creator/actionBottomComponent";
import AchievementsComponent from "@/component/creator/achievements.component";
import { useEffect, useState } from "react";
import {
  EState,
  IAwards,
  IProjects,
  ITheoretical,
} from "@/utlities/interfaces";

export default function RecognitionComponent() {
  const [recognition, setRecognition] = useState<IAwards[]>([] as IAwards[]);
  useEffect(() => {
    let item = localStorage.getItem("recognition");
    if (item) {
      let parse = JSON.parse(item);
      setRecognition(parse);
    }
  }, []);
  function change(state: EState) {
    localStorage.setItem("recognition", JSON.stringify(recognition));
  }
  return (
    <div className="bg-dark flex-column justify-content-start px-3 pt-3">
      <div className="font-weight-500 text-white mb-2">Awards and Honors:</div>
      <AchievementsComponent
        achievements={recognition}
        setAchievement={(data: [IAwards]) => setRecognition(data)}
      />

      <div className="mb-3 mt-3">
        <ActionBottomComponent onChange={change} />
      </div>
    </div>
  );
}
