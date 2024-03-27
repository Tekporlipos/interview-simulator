"use Client";
import React, { useEffect, useState } from "react";
import {
  baseUrl,
  postFileWebClient,
  postWebClient,
} from "@/utlities/builder-script";
import Image from "next/image";
export default function ProfileComponent(props: any) {
  function onError() {
    props.setData({ ...props?.data, profile_picture: null });
  }

  const handleImageChange = (event: any) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const data = URL.createObjectURL(selectedFile as File);
      props.setData({ ...props.data, profile_picture: data });

      // Create a FormData object
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Make a POST request to the /upload endpoint
      fetch(baseUrl + "/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          props.setData({ ...props.data, profile_picture: data.url });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div className="logo justify-content-center position-relative">
      <Image
        alt="profile_picture"
        className="rounded-100 m-2 avatar"
        width="90"
        height="90"
        onError={onError}
        src={props?.data?.profile_picture ?? "/FjU2lkcWYAgNG6d.jpg"}
      />
      <div className="logo justify-content-center position-absolute top-50 ">
        <label htmlFor="profile">
          <svg
            className="a"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            onChange={handleImageChange}
            type="file"
            accept="image/*"
            id="profile"
            className="d-none"
          />
        </label>
      </div>
    </div>
  );
}
