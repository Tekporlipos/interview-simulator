"use client";

import HeadComponent from "@/component/shared/head.component";
import React from "react";
import FooterComponent from "@/component/shared/footer.component";

export default function PricingComponent() {

  return (
      <div>
        <HeadComponent state="price" />
        <div className="md:container mx-5 flex flex-col my-24">
          <div className="text-red-500 font-weight-400">Pricing</div>
          <div className="font-weight-700 text-4xl mt-2">Unlock unlimited possibilities.</div>
          <div className="font-weight-300 mt-2 w-1/2">Select your ideal plan and elevate your interview preparation. Enjoy advanced features and personalized support tailored to your success. Start today!</div>
        <div className="flex gap-5 mt-5 font-weight-300">
          <i>Analytics</i>
          <i>Analytics</i>
          <i>Analytics</i>
        </div>

          <div className="flex flex-col-reverse mt-5 lg:flex-row lg:mt-0">
            <div className="flex-1 flex flex-col justify-center py-4">
              <div className="w-full border">
                <div className="px-8 py-4">
                  <div className="flex justify-between items-center">
                    <div className="font-weight-300">Marketing</div>
                    <div className="rounded-xl px-3 py-2 border text-sm">Get Package</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                      <div className="text-xl font-weight-500">$149</div>
                      <div className="font-weight-200 text-sm">Plus local taxes</div>
                    </div>
                    <div className="font-weight-300 text-sm">Heroes, feature sections, newsletter sign up forms — all of the components you need to build beautiful marketing websites.</div>
                  </div>
                </div>
                <hr/>

                <div className="px-8 py-4">
                  <div className="flex justify-between items-center">
                    <div className="font-weight-300">Marketing</div>
                    <div className="rounded-xl px-3 py-2 border text-sm">Get Package</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                      <div className="text-xl font-weight-500">$149</div>
                      <div className="font-weight-200 text-sm">Plus local taxes</div>
                    </div>
                    <div className="font-weight-300 text-sm">Heroes, feature sections, newsletter sign up forms — all of the components you need to build beautiful marketing websites.</div>
                  </div>
                </div>
                <hr/>

                <div className="px-8 py-4">
                  <div className="flex justify-between items-center">
                    <div className="font-weight-300">Marketing</div>
                    <div className="rounded-xl px-3 py-2 border text-sm">Get Package</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                      <div className="text-xl font-weight-500">$149</div>
                      <div className="font-weight-200 text-sm">Plus local taxes</div>
                    </div>
                    <div className="font-weight-300 text-sm">Heroes, feature sections, newsletter sign up forms — all of the components you need to build beautiful marketing websites.</div>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex-1 border p-8 rounded-xl border-red-500/5 bg-red-500/5 shadow">
              <div className="font-weight-400 mb-2 text-red-500">Marketing</div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <div className="text-2xl font-weight-500"><del>$149</del></div>
                  <div className="font-weight-200 text-sm cursor-not-allowed">Plus local taxes</div>
                </div>
                <div className="font-weight-300 text-sm">Heroes, feature sections, newsletter sign up forms — all of the components you need to build beautiful marketing websites.</div>
              </div>
              <hr className="my-10"/>
              <div className="flex gap-5 mb-5">
                <i>Icon</i>
                <div className="font-weight-300">
                  <span className="font-weight-500">Over 500+ components —</span> everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <i>Icon</i>
                <div className="font-weight-300">
                  <span className="font-weight-500">Over 500+ components —</span> everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <i>Icon</i>
                <div className="font-weight-300">
                  <span className="font-weight-500">Over 500+ components —</span> everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <i>Icon</i>
                <div className="font-weight-300">
                  <span className="font-weight-500">Over 500+ components —</span> everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
                </div>
              </div>

              <div className="flex gap-5 mb-5">
                <i>Icon</i>
                <div className="font-weight-300">
                  <span className="font-weight-500">Over 500+ components —</span> everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
                </div>
              </div>
              <div className="rounded-xl border bg-red-500 p-5 text-white">
                <div className="flex gap-5">
                  <i>Icon</i>
                  <div className="font-weight-200">
                    <span className="font-weight-400">Over 500+ components —</span> everything you need to build beautiful application UIs, marketing sites, ecommerce stores, and more.
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
