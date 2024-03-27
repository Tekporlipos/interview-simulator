import EventCardComponent from "@/component/home/event.card.component";
import React from "react";
import Image from "next/image";
import EventNextComponent from "@/component/home/event.next.component";

export default function NewsComponent() {
  return (
    <div className="border-r-t-30 h-full rounded-3 shadow-lg flex-column overflow-hidden">
      <EventNextComponent />
    </div>
  );
}
