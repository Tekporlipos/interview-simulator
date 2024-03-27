import { EState } from "@/utlities/interfaces";
import React, { useState } from "react";
import ToastComponent from "@/component/shared/toast/toast.component";

export default function ActionBottomComponent(props: any) {
  const [show, setShow] = useState("");
  function handler(data: EState) {
    props.onChange(data);
    setShow("toast");
    setTimeout(() => {
      setShow("");
    }, 3000);
  }
  return (
    <>
      <div className="logo justify-content-between">
        <div>
          <button
            onClick={() => handler(EState.SAVE)}
            className="btn btn-round px-4 btn-secondary"
          >
            Draft
          </button>
        </div>
      </div>
      {show == "toast" && (
        <ToastComponent
          background={"gray"}
          message={"Data saved successfully"}
        />
      )}
    </>
  );
}
