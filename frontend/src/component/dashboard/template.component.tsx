"use client";
import "./style.css";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function TemplateComponent(prop: any) {
  const [show, setShow] = useState(false);
  const fade = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: show ? 1 : 0,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, prop.timeout * 500);
  }, [prop.timeout]);
  return (
    <animated.div
      style={fade}
      className="col-lg-4 col-md-6 col-sm-12 p-3 template position-relative"
    >
      <div className="bg-dark p-4 flex-column mb-2">
        <Image
          src={prop?.data?.avatar}
          alt="tmp"
          className="w-full h-full"
          width="200"
          height="400"
        />
        <div className="flex-row justify-content-between align-middle align-content-center mt-3">
          <div className="bg-dark-c px-2 py-1 logo justify-content-center align-middle rounded-1 text-white font-weight-200">
            Premium
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              className="pt-1 pe-1"
              height="18"
              viewBox="0 0 32 32"
            >
              <circle
                cx="16"
                cy="16"
                r="16"
                fill={
                  prop.data.payment.premium
                    ? "green"
                    : prop.data.payment.premium === prop.data.premium
                    ? "blue"
                    : "#FF725E"
                }
              />
              <path
                fill="#fff"
                d="M9.093 1.952a1 1 0 0 1 1.814 0l1.86 4a1 1 0 0 0 .781.571l4.359.554a1 1 0 0 1 .562 1.723l-3.219 3.05a1 1 0 0 0-.294.912l.827 4.371a1 1 0 0 1-1.469 1.06l-3.828-2.131a1 1 0 0 0-.973 0l-3.827 2.13a1 1 0 0 1-1.469-1.06l.827-4.371a1 1 0 0 0-.294-.912L1.531 8.8a1 1 0 0 1 .562-1.72l4.359-.554a1 1 0 0 0 .781-.571z"
                transform="translate(6 6)"
              />
            </svg>
          </div>
          <div>
            {prop.data.tag.map((value: string) => (
              <span
                key={value}
                className="bg-dark-c px-2 me-1 py-1 rounded-1 text-uppercase text-white font-weight-200"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-1 text-white font-weight-900 text-uppercase">
        {prop?.data?.name}
      </div>
      <div className="pt-1 font-weight-100 text-white">
        {prop?.data?.description}
      </div>
      <div className="position-absolute  click-me">
        <div>
          <button
            disabled={
              !(
                prop.data.payment.premium ||
                prop.data.payment.premium === prop.data.premium
              )
            }
            onClick={() =>
              prop.data.payment.premium ||
              prop.data.payment.premium === prop.data.premium
                ? prop.onClick(prop?.data?.url + "/" + prop?.data?.id)
                : null
            }
            className="btn btn-danger  px-3 py-2 text-white"
          >
            Use This Template
          </button>
        </div>
      </div>
      <div className="bg-dark-light text-white rounded-5 px-4 py-2 text-capitalize position-absolute top-0 mt-4 me-2 font-weight-200">
        {prop.data.type}
      </div>
    </animated.div>
  );
}
