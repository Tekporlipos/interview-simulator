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

export default function PricingCheckout() {
  const [getIndex, setIndex] = useState(0)
  const activePlan = plan[getIndex];
  return (
    <div>
      <HeadComponent state="price" />
      <div className="h-full grid grid-cols-3 mt-20 mb-5 container hv-75">
        <div className="box-right h-full bg-yellow-500 ">
            <div className="">Please enter your details</div>
            <div>We collect this information to help combat fraud, and to keep your payment secure.</div>
        </div>
        <div className="col-span-2 bg-red-500">r</div>
      </div>


      <FooterComponent />
    </div>
  );
}
