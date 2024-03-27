import DateInputComponent from "@/component/creator/dateInput.component";

export default function DateComponent(props: any) {
  function fEnd(data: string[] | string) {
    props.setEndData(data);
  }
  function fStart(data: string[]) {
    props.setStartData(data);
  }
  return (
    <div className="row h-20px mb-4 logo p-1 justify-content-evenly align-middle ">
      <div className="col-8 row text-secondary">
        <DateInputComponent
          date={props.startDate ?? ["", ""]}
          setDate={fStart}
        />
        <div className="col-2 fst-italic font-weight-300 text-secondary text-center">
          {" "}
          to
        </div>
        {props.endDate === "Present" ? (
          props.endDate
        ) : (
          <DateInputComponent date={props.endDate ?? ["", ""]} setDate={fEnd} />
        )}
      </div>
      <div className="col-4 logo justify-content-end align-middle">
        <div className="ps-2">
          <input
            checked={props.endDate === "Present"}
            onChange={(event) =>
              fEnd(event.currentTarget.checked ? "Present" : [])
            }
            type="checkbox"
          />
        </div>
        <div className="font-weight-300 text-secondary">Present</div>
      </div>
    </div>
  );
}
