import React from "react";
import Image from "next/image";
import { IPanel } from "@/utlities/interfaces";

export default function PanelMemberComponent(props: {
  panels: IPanel[];
  setPanels: any;
  setPanel: Function;
}) {
  function update(index: number) {
    const data: IPanel[] = [...props.panels];
    const t: boolean = !props.panels[index].selected;
    if ((t && dataCount(data) < 5) || !t) {
      data[index].selected = t;
      props.setPanels(data);
    }
  }

  function dataCount(data: IPanel[]): number {
    return data.filter((value) => value.selected).length;
  }

  return (
    <div className="logo justify-content-start">
      <div className="bg-danger left-chat p-4 font-weight-200 my-1">
        {props.panels ? (
          <div className="flex-column">
            {props.panels.map((v: IPanel, index: number) => (
              <Panel
                count={dataCount(props.panels)}
                data={v}
                setPanels={update}
                index={index}
                key={v.name}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Panel(props: {
  index: number;
  setPanels: any;
  data: IPanel;
  count: number;
}) {
  return (
    <div className="flex bg-gray-100  p-1 rounded mb-2 shadow">
      <Image
        className="rounded-bl-full object-cover rounded-br-full rounded-tr-full bg-red-500"
        alt={props.data.name}
        width="70"
        height="70"
        src={props?.data.profile}
      />
      <div className="flex flex-col ps-5">
        <div className="font-weight-300 text-lg line-1">{props?.data.name}</div>
        <div className="font-weight-200  line-1">{props?.data.expertise}</div>
        <div className="font-weight-100 line-2">{props?.data.description}</div>
      </div>
      <div className="p-2">
        <input
          className="ratio-21x9"
          title={
            !props?.data.selected && props.count == 5
              ? "You've reached the maximum number of panel members allowed."
              : ""
          }
          disabled={
            props?.data.name === "Genie AI" ||
            (!props?.data.selected && props.count == 5)
          }
          onChange={() => props.setPanels(props.index)}
          checked={props?.data.selected}
          type="checkbox"
        />
      </div>
    </div>
  );
}
