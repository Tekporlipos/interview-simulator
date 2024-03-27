"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AcceptComponent() {
  const [cookies, setCookies] = useState(false);

  React.useEffect(() => {
    const storedCookies = localStorage.getItem("cookies");
    if (storedCookies) {
      setCookies(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies", "true");
    setCookies(true);
  }

  return (
    !cookies && (
      <div className="fixed bottom-0 w-full bg-gray-600 px-5 py-2 flex justify-start items-center font-weight-300 text-white text-sm">
        This site uses cookies to deliver and enhance the quality of its
        services and to analyze traffic.
        <Link
          href="/policy#cookie-policy"
          className="transition bg-gray-950 px-3 py-1 ms-5 hover:bg-gray-800"
        >
          Learn more
        </Link>
        <button
          onClick={accept}
          className="transition bg-gray-950 px-3 py-1 ms-5 hover:bg-gray-800"
        >
          Okay, got it
        </button>
      </div>
    )
  );
}
