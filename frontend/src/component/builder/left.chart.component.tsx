import React from "react";
import { IQuestionAnswer } from "@/utlities/interfaces";
import ProfileUploadComponent from "@/component/builder/profile.upload.component";
import DateTimePickerComponent from "@/component/builder/date.time.picker.component";
import PanelMemberComponent from "@/component/builder/panel.member.component";

export default function LeftChartComponent(props: {
  profileSet: Function;
  dateSet: Function;
  panelSet: Function;
  data: IQuestionAnswer;
}) {
  return (
    <div className="w-50">
      <div className="logo justify-content-start">
        <div className="bg-danger left-chat text-end p-4 text-white font-weight-200 my-1">
          {props.data.question}
        </div>
      </div>
      {getDataElement(props.data.name, props)}
    </div>
  );
}

function getDataElement(name: string, props: any): any {
  switch (name) {
    case "bio_profile":
      return <ProfileUploadComponent profileSet={props.profileSet} />;
    case "preferred_date":
      return (
        <DateTimePickerComponent
          mutable={props.data.answer}
          setDate={props.dateSet}
        />
      );
    case "panel_members":
      return (
        <PanelMemberComponent
          panels={props.data.answer}
          setPanel={props.panelSet}
          setPanels={() => null}
        />
      );
    default:
      return null;
  }
}
