import HeadComponent from "@/component/shared/head.component";
import FooterComponent from "@/component/shared/footer.component";
import React from "react";


export default function Home() {
  return (
      <div className="">
        <HeadComponent/>
        <div className="text-4xl mt-20 font-weight-600 container">Report</div>
        <div className="flex justify-between container gap-5 my-5">
          <div
              className="bg-gray-200 rounded p-3 w-1/4 h-24 flex-row content-center justify-center shadow shadow-gray-400">
            interview Sessions
          </div>
          <div
              className="bg-gray-200 rounded p-3 w-1/4 h-24 flex-row content-center justify-center shadow shadow-gray-400">Coaching
            Sessions
          </div>
          <div
              className="bg-gray-200 rounded p-3 w-1/4 h-24 flex-row content-center justify-center shadow shadow-gray-400">Total
            Attended Sessions
          </div>
        </div>
        <div className="container table">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
            <tr className="text-left border-b border-gray-300 ">
              <th className="px-4 py-2 border-r border-gray-300">Name</th>
              <th className="px-4 py-2 border-r border-gray-300">Title</th>
              <th className="px-4 py-2 border-r border-gray-300">Status</th>
              <th className="px-4 py-2 border-r border-gray-300">Date</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b border-gray-300 cursor-pointer hover:bg-gray-100 transition">
              <td className="px-4 py-2 border-r border-gray-300">John Doe</td>
              <td className="px-4 py-2 border-r border-gray-300">Project A</td>
              <td className="px-4 py-2 border-r border-gray-300">Active</td>
              <td className="px-4 py-2 border-r border-gray-300">2024-05-14</td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
  );
}
