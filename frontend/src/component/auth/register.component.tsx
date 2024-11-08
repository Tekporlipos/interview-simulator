"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MaskUnmaskComponent } from "@/component/auth/mask.unmask.component";

export function RegisterComponent(props: { login?: boolean }) {
  const [mask, setMask] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });

  function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (props.login) {
      //login
      alert("We're sorry, but the login feature is currently unavailable. Please try again later. Thank you for your understanding!");
    } else {
      //register
      alert("We're sorry, but the registration feature is currently unavailable. Please try again later. Thank you for your understanding!");
    }
  }


  return (
    <div className="md:border-2 p-10 rounded-xl shadow">
      <form
        onSubmit={submitData}
        className="flex flex-col items-center container"
      >
        <div className="font-weight-700 text-xl">
          {props.login ? "Log in" : "Sign Up"}
        </div>
        <div className="flex justify-stretch gap-5 mt-10 w-full">
          <div className="flex-1 justify-center cursor-pointer bg-gray-200 px-7 py-3 rounded-lg shadow hover:bg-gray-300 transition flex items-center gap-2">
            <svg
              className="w-8 h-8"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Google
          </div>
          <div className="flex-1 justify-center cursor-pointer bg-gray-200 px-7 py-3 rounded-lg shadow hover:bg-gray-300 transition flex items-center gap-2">
            <svg
              className="w-8 h-8"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
            Facebook
          </div>
        </div>
        <div className="w-full h-0.5 rounded-lg bg-gray-700/50 relative mt-10">
          <div className="absolute -top-2.5 text-center w-full text-black/50">
            {" "}
            <span className="px-2 rounded-lg bg-white">OR</span>{" "}
          </div>
        </div>

        <div className="w-full">
          {!props.login && (
            <div className="flex flex-col mt-5">
              <div className="mb-1 font-semibold text-lg">Name</div>
              <input
                required={true}
                type="text"
                name="name"
                className="p-3 w-full border border-black rounded-lg focus:border-black focus:outline-0"
              />
            </div>
          )}
          <div className="flex flex-col mt-5">
            <div className="mb-1 font-semibold text-lg">Email</div>
            <input
              required={true}
              type="email"
              name="email"
              className="p-3 w-full border border-black rounded-lg focus:border-black focus:outline-0"
            />
          </div>
          <div className="flex flex-col justify-center mt-5">
            <div className="mb-1 font-semibold text-lg">Password</div>
            <div className="items-center flex border border-black rounded-lg p-1">
              <input
                required={true}
                name="password"
                type={mask ? "password" : "text"}
                className="p-2 w-full focus:border-transparent focus:outline-0"
              />
              <button onClick={() => setMask(!mask)}>
                <MaskUnmaskComponent mask={mask} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center mt-5">
          <input
            required={true}
            value={data.agree ? "on" : "off"}
            onChange={(value) => setData({ ...data, agree: !data.agree })}
            className="h-4 w-4 "
            type="checkbox"
          />
          <div className="font-weight-300">
            I agree with InterviewSimulator{" "}
            <Link className="text-blue-500" href="/privacy">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link className="text-blue-500" href="/privacy">
              terms
            </Link>
            .
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-red-500 text-white hover:bg-red-700 text-center py-4 font-weight-300 capitalize mt-5"
        >
          {props.login ? "Log in" : "Create Account"}
        </button>

        <div className="font-weight-300 mt-5">
          {" "}
          {props.login
            ? "Don't have and account"
            : "Already have an account?"}{" "}
          <Link
            className="text-blue-500"
            href={props.login ? "/auth/register" : "/auth"}
          >
            {props.login ? "register" : "Login"}
          </Link>
        </div>
      </form>
    </div>
  );
}
