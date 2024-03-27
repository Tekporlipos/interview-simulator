import ActionBottomComponent from "@/component/creator/actionBottomComponent";
import { useEffect, useState } from "react";
import { EState, IConnect } from "@/utlities/interfaces";
import ConnectionComponent from "@/component/creator/connection.component";

export default function PersonalityComponent() {
  const [connects, setConnects] = useState<IConnect[]>([] as IConnect[]);

  useEffect(() => {
    let item = localStorage.getItem("personality");
    if (item) {
      let parse = JSON.parse(item);
      setConnects(parse);
    }
  }, []);
  function change(state: EState) {
    localStorage.setItem("personality", JSON.stringify(connects));
  }
  return (
    <div className="bg-dark flex-column justify-content-start px-3 pt-3">
      <div className="font-weight-500 text-white mb-2">
        Connection and Portfolio:
      </div>
      <ConnectionComponent hobbies={connects} setHobbies={setConnects} />

      <div className="mb-3 mt-3">
        <ActionBottomComponent onChange={change} />
      </div>
    </div>
  );
}
