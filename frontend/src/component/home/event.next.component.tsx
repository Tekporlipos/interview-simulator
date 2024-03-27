import Image from "next/image";
import React from "react";

export default function EventNextComponent() {
  return (
    <div className="bg-red-600 w-full rounded-2xl overflow-hiddener cursor-pointer shadow-lg transition hover:shadow-2xl">
      <Image
        width="300"
        style={{ width: "100%" }}
        className="h-44"
        height="200"
        src="https://img.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_74855-10172.jpg?w=2000"
        alt="event"
      />
      <div className="flex flex-row flex-sm-row-c bg-danger p-2 gap-2">
        <div className="flex flex-col justify-content-center p-2 align-content-center">
          <div className="text-bold text-black text-center">Jan</div>
          <div className="text-bold text-white font-weight-600 text-2xl">2</div>
        </div>
        <div className="flex-column p-2 text-white">
          <div className="font-weight-500 mb-2 text-capitalize">
            Beta version
          </div>
          <div className="font-weight-100">
            Don&apos;t miss out on this limited-time offer. Mark your calendars
            and be part of the future of digital empowerment!
          </div>
        </div>
      </div>
    </div>
  );
}
