import React from "react";
import { Any } from "@react-spring/web";

export default function TailwindModalComponent(props: {
  title: React.JSX.Element;
  content: React.JSX.Element;
  action: Function;
  actions: { 1: string; 2: string };
}) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div
                className="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                {props.title}
              </div>
              <div className="mt-2">
                <div className="text-sm text-gray-500">{props.content}</div>
              </div>
            </div>
            {props.actions ? (
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                {props.actions["2"] ? (
                  <button
                    type="button"
                    onClick={() => props.action(false, "next")}
                    className="inline-flex w-full a justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    {props.actions["2"]}
                  </button>
                ) : null}
                {props.actions["1"] ? (
                  <button
                    type="button"
                    onClick={() => props.action(false, "cancel")}
                    className="mt-3 inline-flex a w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    {props.actions["1"]}
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
