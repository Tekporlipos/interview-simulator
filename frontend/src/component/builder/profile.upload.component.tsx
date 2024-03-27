import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "@/utlities/builder-script";
import { EState, IBioData } from "@/utlities/interfaces";

export default function ProfileUploadComponent(props: any) {
  const [bioData, setBioData] = useState<IBioData>({} as IBioData);

  useEffect(() => {
    let item = localStorage.getItem("bio");
    if (item) {
      let parse = JSON.parse(item);
      setBioData(parse);
    }
  }, []);

  function onError() {
    setBioData({ ...bioData, profile_picture: null });
  }

  const handleImageChange = (event: any) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const data = URL.createObjectURL(selectedFile as File);
      setBioData({ ...bioData, profile_picture: data });

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
          setBioData({ ...bioData, profile_picture: data.url });
          localStorage.setItem(
            "bio",
            JSON.stringify({ ...bioData, profile_picture: data.url }),
          );
          props.profileSet();
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div className="w-50 logo justify-content-startt">
      <div className="logo justify-content-center position-relative">
        <Image
          alt="profile_picture"
          className="m-2 avatar bg-danger left-chat"
          width="170"
          height="170"
          onError={onError}
          src={bioData?.profile_picture ?? "/FjU2lkcWYAgNG6d.jpg"}
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
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="profile"
              className="d-none"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
