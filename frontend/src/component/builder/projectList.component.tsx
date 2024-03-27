import React, { useRef, useState } from "react";
import { HistoryItem } from "@/utlities/builder-script";
import { useRouter } from "next/navigation";
export default function ProjectListComponent(prop: any) {
  const ref = useRef<HTMLDivElement>(null); // Set the correct type for the ref
  const [change, changeState] = useState("");
  const router = useRouter();
  function load(id: string) {
    if (id) router.replace("/builder/" + id);
  }
  const style = prop.uuid === prop.data.id ? "bg-danger" : "bg-dark-c";

  function setChange() {
    const updatedHistoryData = prop.storedHistoryData.map(
      (value: HistoryItem) => {
        if (value.id === prop.data.id) {
          return { ...value, name: ref.current?.innerText ?? value.name }; // Corrected update
        }
        return value;
      },
    );
    prop.setStoredHistoryData(updatedHistoryData);
    localStorage.setItem("history", JSON.stringify(updatedHistoryData));
    changeState("");
  }

  function deleteProject() {
    const updatedHistoryData = prop.storedHistoryData.filter(
      (value: HistoryItem) => value.id !== prop.data.id,
    );
    localStorage.setItem("history", JSON.stringify(updatedHistoryData));
    prop.setStoredHistoryData(updatedHistoryData);
    if (prop.data.id === prop.uuid) router.replace("/builder");
  }

  return (
    <div
      className={
        "rounded-1 flex-row p-2 logo justify-content-between align-middle mb-2 " +
        style
      }
    >
      <div className="flex-row a" onClick={() => load(prop.data.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10.5 7.5C10.5 7.76522 10.3946 8.01957 10.2071 8.20711C10.0196 8.39464 9.76522 8.5 9.5 8.5H3.5L1.5 10.5V2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5H9.5C9.76522 1.5 10.0196 1.60536 10.2071 1.79289C10.3946 1.98043 10.5 2.23478 10.5 2.5V7.5Z"
            stroke="#F8F8F8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          ref={ref}
          className="text-white font-weight-300 px-2 line-1"
          contentEditable={change === "edit"}
        >
          {prop.data.name}
        </div>
      </div>

      <div className="a">
        {change != "edit" ? (
          <svg
            onClick={() => changeState("edit")}
            width="24"
            height="24"
            viewBox="0 0 12 12"
            fill="white"
          >
            <path
              d="M8.25 1.75011C8.44891 1.5512 8.7187 1.43945 9 1.43945C9.13929 1.43945 9.27721 1.46689 9.4059 1.52019C9.53458 1.57349 9.65151 1.65162 9.75 1.75011C9.84849 1.8486 9.92662 1.96553 9.97992 2.09422C10.0332 2.2229 10.0607 2.36083 10.0607 2.50011C10.0607 2.6394 10.0332 2.77733 9.97992 2.90601C9.92662 3.0347 9.84849 3.15162 9.75 3.25011L3.5 9.50011L1.5 10.0001L2 8.00011L8.25 1.75011Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <div>
            <svg
              onClick={deleteProject}
              className="a delete"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>delete</title>
              <path
                fill="white"
                d="M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M6 9V19H14V9H6M13.5 4H17V6H3V4H6.5L7.5 3H12.5L13.5 4M19 17V15H21V17H19M19 13V7H21V13H19Z"
              />
            </svg>
            <svg
              onClick={setChange}
              className="a save"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>Save</title>
              <path
                fill="white"
                d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
