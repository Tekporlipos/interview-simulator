"use client";
import React, { useState } from "react";
export default function InstantFormComponent(props: {
  data: any;
  type: boolean;
  setData: Function;
}) {
  const [click, setClick] = useState(false);

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="space-y-4 w-full mt-5"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Full Name <span className="text-red-800">*</span>
        </label>
        <input
          required={true}
          type="text"
          placeholder="John Dzikunu"
          onChange={(data) => props.setData("full_name", data)}
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="job_title"
          className="block text-sm font-medium text-gray-600"
        >
          Job Title <span className="text-red-800">*</span>
        </label>
        <input
          type="text"
          required={true}
          placeholder="Senior Accountant"
          onChange={(data) => props.setData("position", data)}
          id="job_title"
          name="job_title"
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="job_description"
          className="block text-sm font-medium text-gray-600"
        >
          Job Description
        </label>
        <textarea
          id="job_description"
          placeholder="Enter job description to get the rigth questions."
          onChange={(data) => props.setData("description", data)}
          name="job_description"
          className="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>
      {props.type ? (
        <div>
          <div>
            <label
              htmlFor="schedule_date"
              className="block text-sm font-medium text-gray-600"
            >
              Schedule Date
            </label>
            <input
              type="datetime-local"
              id="schedule_date"
              onChange={(data) => props.setData("date", data)}
              name="schedule_date"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              placeholder="dzikunujohn36@gmail.com"
              type="email"
              onChange={(data) => props.setData("recipient", data)}
              id="recipient"
              name="recipient"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>
      ) : null}
      <div className="w-full h-0.5 rounded-lg bg-gray-700/50 relative">
        <div className="absolute -top-2.5 text-center w-full text-black/80">
          {" "}
          <span
            onClick={() => setClick(!click)}
            className="px-2 a text-blue-500 rounded-lg bg-white"
          >
            Advance
          </span>{" "}
        </div>
      </div>
      {click ? (
        <div>
          <div>
            <label
              htmlFor="job_questions"
              className="block text-sm font-medium text-gray-600"
            >
              Pre-Questions
            </label>
            <textarea
              id="job_questions"
              placeholder="Enter questions here..."
              onChange={(data) => props.setData("questions", data)}
              name="job_description"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>

          <div className="mt-3">
            <label
              htmlFor="job_resume"
              className="block text-sm font-medium text-gray-600"
            >
              Your CV(Resume) content:
            </label>
            <textarea
              id="job_resume"
              placeholder="Enter your CV(resume) content here..."
              onChange={(data) => props.setData("resume", data)}
              name="job_description"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
        </div>
      ) : null}
    </form>
  );
}
