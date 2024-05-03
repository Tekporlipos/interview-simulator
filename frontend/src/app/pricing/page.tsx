"use client";

import HeadComponent from "@/component/shared/head.component";
import React, {useRef, useState} from "react";
import FooterComponent from "@/component/shared/footer.component";
import {InterviewIcon} from "@/icons/interviewIcon";
import {TeacherIcon} from "@/icons/teacherIcon";
import {FeedbackIcon} from "@/icons/feedbackIcon";
import {plan, subscription} from "@/utlities/cv-genie-questions";
import {formatCurrency} from "@/utlities/functions";
import {ActiveIcon} from "@/icons/activeIcon";
import {NotActiveIcon} from "@/icons/notActiveIcon";
import Link from "next/link";

export default function PricingComponent() {
  const [getIndex, setIndex] = useState(0)
  const activePlan = plan[getIndex];


  function getParams(feature:string,active:string) {
    switch (feature) {
      case "Lifelike interview simulations":
        return (["Advance"].includes(active)?"4 Mock Interviews"+"@45 minutes":["Business"].includes(active)?"15 Mock Interviews"+"@60 minutes":"2 Mock Interviews"+"@30 minutes")
      case "Interview history":
        return active === "Starter"?"local":"cloud"
      case "Comprehensive interview and career coaching sessions":
        return ["Advance"].includes(active)?"2 Interview and Career Coaching@30 minutes":["Business"].includes(active)?"10 Interview and Career Coaching@45 minutes":["Pro"].includes(active)?"1 Interview and Career Coaching@30 minutes":"1 Interview and Career Coaching@15 minutes"
      case "Personalized feedback reports":
        return ["Advance"].includes(active)?"(Detailed report)":["Business"].includes(active)?"(Detailed report)":["Pro"].includes(active)?"(Report overview)":""
    }
  }
  return (
    <div>
      <HeadComponent state="price" />
      <div className="md:container mx-5 flex flex-col my-24">
        <div className="text-red-500 font-weight-400">Pricing</div>
        <div className="font-weight-700 text-4xl mt-2">
          Unlock unlimited possibilities.
        </div>
        <div className="bg-red-500/5 hover:bg-red-500/50"><div className="bg-red-500" /></div>
        <div className="bg-green-500/5 hover:bg-green-500/50"><div className="bg-green-500" /></div>
        <div className="bg-yellow-500/5 hover:bg-yellow-500/50"><div className="bg-yellow-500" /></div>
        <div className="bg-blue-500/5 hover:bg-blue-500/50"><div className="bg-blue-500" /></div>
        <div className="font-weight-300 mt-2 w-1/2">
          Select your ideal plan and elevate your interview preparation. Enjoy
          advanced features and personalized support tailored to your success.
          <div className="text-red-500 font-weight-400">Start today!</div>
        </div>
        <div className="flex gap-8 mt-5 font-weight-300 content-center">
          <div className="flex gap-3 items-center">
            <InterviewIcon/>
            <div>Interview</div>
          </div>
          <div className="flex gap-3 items-center">
            <TeacherIcon/>
            Coaching
          </div>
          <div className="flex gap-3 items-center">
            <FeedbackIcon/>
            FeedBack
          </div>
        </div>

        <div className="flex flex-col-reverse mt-5 lg:flex-row lg:mt-0">
          <div className="flex-1 flex flex-col justify-center py-4">
            <div className="w-full border">


              {plan.map((value,index)=> <div onClick={()=>setIndex(index)} className={`transition cursor-pointer hover:bg-${value.color}/50 bg-${value.color}/5`}>
                <div className="px-8 py-4">
                  <div className="flex justify-between items-center">
                    <div className="font-weight-700 text-xl cursor-pointer">{value.name}</div>
                    {value.name==="Starter Plan"?<div className={`shadow rounded-xl transition cursor-not-allowed bg-${value.color} text-white px-3 py-2 border text-sm`}>
                      Default plan
                    </div>:<Link
                        // href={`/pricing/checkout/${value.id}`}
                        href="#"
                        onClick={() => alert("We're sorry, but the upgrade subscription feature is currently unavailable. Please check back later for updates. Thank you for your understanding!")}
                        className={`shadow cursor-pointer z-50 transition rounded-xl px-3 py-2 border text-sm text-white hover:${value.color}/5 bg-${value.color} `}>
                      Upgrade Plan
                    </Link>}

                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                      {value.name==="Starter Plan"?<del className="text-xl font-weight-500">{formatCurrency(value.price,value.currency)}</del>:<div className="text-xl font-weight-500">{formatCurrency(value.price,value.currency)}</div>}
                      <div className="font-weight-200 text-sm">
                        {value.note}
                      </div>
                    </div>
                    <div className="font-weight-300 text-sm line-3">
                      {value.description}
                    </div>
                  </div>
                </div>
                <hr/>
              </div>)}

            </div>
          </div>

          <div className={`flex-1 border p-8 rounded-xl border-${activePlan.color}/5 bg-${activePlan.color}/5 shadow-lg shadow-${activePlan.color}`}>
            <div className="font-weight-400 mb-2 text-red-500">{activePlan.name}</div>
            <div className="flex flex-col">

              <div className="flex gap-2 items-center">
                {activePlan.name ==="Starter Plan"?<del className="text-2xl font-weight-500">
                  {formatCurrency(activePlan.price, activePlan.currency)}
                </del>:<div className="text-2xl font-weight-500">
                  {formatCurrency(activePlan.price, activePlan.currency)}
                </div>}
                <div className="font-weight-200 text-sm cursor-not-allowed">
                  {activePlan.note}
                </div>
              </div>

              <div className="font-weight-300 text-sm">
                {activePlan.description}
              </div>
            </div>
            <hr className="my-10" />


            {subscription.map(value => <div className="flex mb-5">
              <div className="w-1/6">{value.domains.includes(activePlan.name.split(" ")[0])?<ActiveIcon/>:<NotActiveIcon/>}</div>

              <div className="font-weight-300 w-5/6">
                <span className="font-weight-500">{value.name} —</span>

                {
                  // @ts-ignore
                  value.description(getParams(value.name,activePlan.name.split(" ")[0]))
                }
              </div>
            </div>)}

            <div className={`rounded-xl border bg-${activePlan.color} p-5 text-white`}>
              <div className="flex gap-5">
                <ActiveIcon/>
                <div className="font-weight-200">
                  <span className="font-weight-400">
                    Over {subscription.filter(value=> value.domains.includes(activePlan.name.split(" ")[0])).length} interview simulation features to unlock —
                  </span>{" "}
                  everything you need for realistic practice sessions. Perfect for honing your skills and acing those interviews!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
