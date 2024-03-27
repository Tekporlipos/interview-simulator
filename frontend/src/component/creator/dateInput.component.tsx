"use client";

export default function DateInputComponent(props: any) {
  return (
    <div className="col-5 logo justify-content-center">
      <div className="col-5">
        <div className="border-bottom-dotted text-center">
          <input
            type="text"
            maxLength={2}
            value={props.date[0]}
            onChange={(event) =>
              props.setDate([event.currentTarget.value, props.date[1]])
            }
            placeholder="MM"
            className="placeholder-white w-100 fst-italic font-weight-100 input-focus-outline-none bg-dark text-white"
          />
        </div>
      </div>
      <div className="col-2 text-white text-bold text-center">/</div>
      <div className="col-5">
        <div className="border-bottom-dotted text-center">
          <input
            value={props.date[1]}
            maxLength={4}
            onChange={(event) =>
              props.setDate([props.date[0], event.currentTarget.value])
            }
            type="text"
            placeholder="YYYY"
            className="placeholder-white w-100 fst-italic font-weight-100 input-focus-outline-none bg-dark text-white"
          />
        </div>
      </div>
    </div>
  );
}
