import {
  ICv,
  IEducation,
  IExperience,
  ILanguage,
  ISkill,
} from "@/utlities/interfaces";
import "./style.css";
import Image from "next/image";
import formatInternationalPhoneNumber from "@/utlities/functions";

export default function Template1Component(props: { data: ICv }) {
  return (
    <div className="row bg-white parent">
      <div className="col-4 border-right border-primary pe-0 ps-2 m-0">
        <div className="logo justify-content-center w-100">
          <div className="text-center">
            <div className="profile">
              <Image
                alt="profile"
                className="rounded-100 border-primary border"
                src={
                  props?.data?.bio?.profile_picture
                    ? props?.data?.bio?.profile_picture
                    : "/FjU2lkcWYAgNG6d.jpg"
                }
                width="130"
                height="130"
              />
            </div>
          </div>
        </div>
        <div className="m-0 mt-3">
          <div className="h4 font-weight-700 m-0 p-0">
            {props.data?.bio?.name?.split(" ").splice(0, -1).join(" ")}
          </div>
          <div className="h3 m-0 p-0">
            {
              props.data?.bio?.name?.split(" ")[
                props.data?.bio?.name.length - 1
              ]
            }
          </div>
        </div>
        <div className="font-weight-500 fs-6  m-0 p-0 text-uppercase">
          {props.data?.bio?.title}
        </div>
        <address className="font-weight-300 m-0 text-small py-2 text-primary">
          <small>
            Address - {props?.data?.bio?.email_address}
            <br />
            Tell -{" "}
            {formatInternationalPhoneNumber(
              props?.data?.bio?.phone_number ?? "",
            )}{" "}
            <br />
            Location - {props?.data?.bio?.location} <br />
          </small>
        </address>
        <div className="text-uppercase font-weight-500 h4 mt-1"> Summary </div>
        <div className="p-2 bg-light">
          <small className="font-weight-300">
            {props?.data?.bio?.description}
          </small>
        </div>
        {props?.data?.abilities?.skills ? (
          <>
            <div className="text-uppercase font-weight-500 h4 pb-1 mt-3">
              SKILLS
            </div>
            <div className="font-weight-300">
              <ul className="fs-6 pe-3">
                {props?.data?.abilities?.skills
                  .splice(0, 5)
                  ?.map((v: ISkill, i: number) => (
                    <li key={i}> {v.skill_name} </li>
                  ))}
              </ul>
            </div>
          </>
        ) : null}

        <div className="text-uppercase font-weight-500 h4 pb-1 mt-3">
          Languages
        </div>
        <div className="font-weight-300">
          <ul className="fs-6 pe-3">
            {props?.data?.abilities?.languages
              ?.splice(0, 5)
              .map((v: ILanguage, i: number) => (
                <li key={i}> {v.language_name} </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-8 py-0 pe-2 m-0">
        <div className="experience-section">
          <div className="bg-light-dark text-uppercase font-weight-500 p-0 m-0 h4 pe-2">
            Experience
          </div>
          <ul className="list-group list-unstyled p-0 m-0">
            {props?.data?.practical?.experiences?.map(
              (d: IExperience, i: number) => (
                <li key={i} className="experience">
                  <div className="bg-light text-capitalize font-weight-500 mt-1 pe-2">
                    {d.job_title},{" " + d.company_name}
                  </div>
                  <small className="font-weight-600 fs-8 pe-2">
                    {d.date_start?.join("-")} -{" "}
                    {Array.isArray(d.date_end)
                      ? d.date_end.join("-")
                      : d.date_end}
                  </small>
                  <div className="font-weight-300 fs-7 mt-1 pe-2">
                    {d.location}
                  </div>
                  <div className="font-weight-500 pe-2 text-capitalize fs-7 mt-1">
                    Achievements/Tasks:
                  </div>
                  <ul className="font-weight-300 fs-7">
                    {d.descriptions?.map((v) => <li key={v}>{v}</li>)}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="education-section">
          <div className="bg-light-dark text-uppercase font-weight-500 h4 mt-2 mb-1 pe-2">
            Education
          </div>
          <ul className="list-group list-unstyled pe-0 me-0">
            {props?.data?.theoretical?.educations?.map(
              (v: IEducation, i: number) => (
                <li key={i} className="education">
                  <div className="bg-light text-capitalize font-weight-500 pe-2">
                    {v.program_name},{" " + v.institution_name}
                  </div>
                  <small className="font-weight-600 fs-8 pe-2">
                    {v.date_start?.join("-")} -{" "}
                    {Array.isArray(v.date_end)
                      ? v.date_end.join("-")
                      : v.date_end}{" "}
                    &#x2015; {v.location}
                  </small>
                  <p className="font-weight-300 fs-7 mt-1 pe-2">
                    {v.description}
                  </p>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="reference-section">
          <div className="bg-light-dark text-uppercase font-weight-500 h4 mt-1 pe-2">
            References
          </div>
          <p className="font-weight-500 fs-7 mt-1 pe-2 ">
            Available upon request
          </p>
        </div>
      </div>
    </div>
  );
}
