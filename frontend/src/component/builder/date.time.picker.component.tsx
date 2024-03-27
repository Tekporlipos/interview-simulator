import React, { useState, useEffect } from "react";

export default function DateTimePickerComponent(props: any) {
  // Calculate the current date and time
  const currentDate = new Date().toISOString().slice(0, 16);

  // Calculate the default date as one day from now
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 1);

  // Calculate the default time as one hour from now
  defaultDate.setHours(defaultDate.getHours() + 1);

  const defaultDateFormatted = defaultDate.toISOString().slice(0, 16);

  // Calculate the maximum allowed date as one week from the current date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);
  const maxDateFormatted = maxDate.toISOString().slice(0, 16);

  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(
    JSON.parse(props.mutable) ?? defaultDateFormatted,
  );
  const [error, setError] = useState("");

  // Validation function
  const validateDateTime = (dateString: string) => {
    const selectedDateTime = new Date(dateString);
    const currentDateTime = new Date();
    const fifteenMinutesFromNow = new Date();
    fifteenMinutesFromNow.setMinutes(fifteenMinutesFromNow.getMinutes() + 15);

    if (
      selectedDateTime < currentDateTime ||
      selectedDateTime < fifteenMinutesFromNow
    ) {
      setError(
        "Please select a date and time that is not earlier than today and is at least 15 minutes from now.",
      );
      return;
    }

    props.setDate(selectedDateTime);
  };
  return (
    <div className="logo justify-content-start">
      <div className="bg-danger left-chat text-end p-4 text-white font-weight-200 my-1">
        <div className="logo">
          <div>
            <input
              className="bg-danger focus-ring-danger border-0 text-white"
              type="datetime-local"
              disabled={props.mutable}
              value={selectedDate}
              min={currentDate}
              max={maxDateFormatted}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          {!props.mutable ? (
            <div
              onClick={() => validateDateTime(selectedDate)}
              className="btn btn-secondary btn-sm me-2"
            >
              Set
            </div>
          ) : null}
        </div>
        <div className={"text-white"}>{error}</div>
      </div>
    </div>
  );
}
