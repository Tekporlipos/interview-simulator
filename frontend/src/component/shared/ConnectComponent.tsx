import React from "react";
import { FollowUs } from "@/component/home/FollowUs";

export function ConnectComponent() {
  return (
    <div className="px-5 md:container">
      <div className="mt-5 w-full flex flex-row justify-between font-weight-200">
        <small className="font-extralight font-weight-200">
          <a
            href="https://www.genieaibuilder.com/"
            target="_blank"
            className=""
          >
            GenieAiBuilder
          </a>
        </small>
        <FollowUs />
      </div>
    </div>
  );
}
