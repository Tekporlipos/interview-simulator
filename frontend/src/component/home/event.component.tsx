import "./css/home-style.css";
import React from "react";
import EventNextComponent from "@/component/home/event.next.component";

export default function EventComponent() {
  return (
    <div className="px-5 md:container mb-5 mt-12">
      <div className="text-lg font-weight-700 text-bold mb-4">Events</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-col">
        <EventNextComponent />
      </div>
    </div>
  );
}
