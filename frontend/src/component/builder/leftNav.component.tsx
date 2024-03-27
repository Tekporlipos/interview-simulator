import LogoComponent from "@/component/shared/logo.component";
import ProjectListComponent from "@/component/builder/projectList.component";
import { HistoryItem } from "@/utlities/builder-script";
import { generateUUID } from "@/utlities/functions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LeftNavComponent(props: any) {
  const router = useRouter();
  const [toggle, setToggle] = useState("hide-mobile");
  function createNewProject(): void {
    const uuid: string = generateUUID();
    const newProject: HistoryItem = {
      id: uuid,
      name: `New Project ${props.storedHistoryData.length + 1}`,
      url: null,
      type: null,
    };
    props.setStoredHistoryData([newProject, ...props.storedHistoryData]);
    localStorage.setItem(
      "history",
      JSON.stringify([newProject, ...props.storedHistoryData]),
    );
    router.replace("/builder/" + uuid);
  }
  return (
    <div className="col-lg-2 col-md-3 sm-12 bg-dark h-100vh py-3 px-4 flex-column justify-content-between">
      <div className="">
        <div className="logo justify-content-between">
          <LogoComponent />
          <div>
            <svg
              onClick={() =>
                setToggle(toggle == "hide-mobile" ? "" : "hide-mobile")
              }
              fill="white"
              className="a hide-desktop"
              width="34px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <br />
        <div
          onClick={createNewProject}
          className="rounded-5 bg-secondary inline-div text-white py-1 px-3 d-inline mt-3 a hover:bg-gray-600 "
        >
          <span>+</span> Add Project
        </div>

        <div className={toggle}>
          <h4 className="text-white mt-5 ">Recent</h4>
          <div className="flex-column">
            {props.storedHistoryData.map((value: HistoryItem) => (
              <ProjectListComponent
                key={value.id}
                data={value}
                uuid={props.uuid}
                storedHistoryData={props.storedHistoryData}
                setStoredHistoryData={props.setStoredHistoryData}
              />
            ))}
          </div>
        </div>
      </div>
      <div>Account</div>
    </div>
  );
}
