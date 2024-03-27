"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export function GetStartedComponent() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative z-50">
      <Link
        href="/booking"
        onClick={() => setLoading(false)}
        className="flex flex-row a transition justify-between hover:bg-red-700 bg-red-500 w-44 shadow-lg rounded-full align-middle p-3"
      >
        <div className="font-light text-white">Mock Interview</div>
        <div className="rounded-full bg-red-950 p-1 animate-bounce">
          {loading ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          ) : (
            <Image
              className=""
              src={"/loading-circle.gif"}
              alt={"loader"}
              width="18"
              height="24"
            />
          )}
        </div>
      </Link>
    </div>
  );
}
