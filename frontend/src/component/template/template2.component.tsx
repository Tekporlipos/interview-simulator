import {
  IConnect,
  ICv,
  IEducation,
  IExperience,
  ILanguage,
  IProjects,
  ISkill,
  IVolunteer,
} from "@/utlities/interfaces";
import "./style.css";
import formatInternationalPhoneNumber, {
  getCleanedDomainAndPath,
  getDomainName,
} from "@/utlities/functions";
import IconsComponent from "@/component/template/Icons";
import Image from "next/image";

export default function Template2Component(props: { data: ICv }) {
  return (
    <div className="parent bg-white m-0 p-0 position-relative">
      <div
        className="box-50 position-absolute bg-primary-light left-0"
        style={{ top: "15vh" }}
      ></div>
      <div
        className="box-50 position-absolute bg-primary-light right-0"
        style={{ top: "15vh" }}
      ></div>
      <div className="row ">
        <div className="col-5 pe-5 pt-4">
          <div>
            <div className="h2 m-0 p-0 font-weight-900">
              {props.data?.bio?.name}
            </div>
            <div className="font-weight-500 text-primary text-capitalize">
              {props.data?.bio?.title}
            </div>
            <div className="pt-1">
              <div className="font-weight-300 fs-7 lh-sm">
                {props?.data?.bio?.description}
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 pt-4">
          <div className="logo justify-content-center w-100">
            <div className="text-center">
              <div className="profile">
                <Image
                  alt="profile"
                  className="rounded-100 border-primary border border-5"
                  src={
                    props?.data?.bio?.profile_picture
                      ? props?.data?.bio?.profile_picture
                      : "/FjU2lkcWYAgNG6d.jpg"
                  }
                  width="150"
                  height="150"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 pt-3 ps-5">
          <div className="flex-column justify-content-end pt-3">
            <div className="m-0 p-0">
              <ul className="m-0 p-0">
                {props.data?.bio?.email_address ? (
                  <li className="logo justify-content-end py-1 font-weight-300 fs-7">
                    <a
                      className="text-decoration-none text-dark text-end ps-1"
                      href={props.data?.bio?.email_address ?? ""}
                    >
                      {props.data?.bio?.email_address?.substring(0, 24)}
                    </a>
                    <IconsComponent name="email" />
                  </li>
                ) : null}
                {props.data?.bio?.phone_number ? (
                  <li className="logo justify-content-end py-1 font-weight-300 fs-7">
                    <a
                      className="text-decoration-none text-dark text-end ps-1"
                      href={props.data?.bio?.phone_number ?? ""}
                    >
                      {formatInternationalPhoneNumber(
                        props.data?.bio?.phone_number?.substring(0, 24),
                      )}
                    </a>
                    <IconsComponent name="tell" />
                  </li>
                ) : null}
                {props.data?.bio?.location ? (
                  <li className="logo justify-content-end py-1 font-weight-300 fs-7">
                    <a
                      className="text-decoration-none text-dark text-end ps-1"
                      href={props.data?.bio?.location ?? ""}
                    >
                      {props.data?.bio?.location?.substring(0, 24)}
                    </a>
                    <IconsComponent name="location" />
                  </li>
                ) : null}
                {props?.data?.personality.length > 0
                  ? props?.data?.personality?.map((v: IConnect, i: number) => (
                      <li
                        key={i}
                        className="font-weight-300 fs-7 logo justify-content-end py-1 text-end "
                      >
                        <a
                          className="text-decoration-none text-dark ps-1"
                          href={v.link}
                        >
                          {getCleanedDomainAndPath(v.link)?.substring(0, 25)}
                        </a>
                        <IconsComponent name={getDomainName(v.link)} />
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <hr className="bg-primary my-2" />
      </div>

      {props?.data?.practical?.experiences ? (
        <>
          <div
            className="box-50 position-absolute bg-primary left-0"
            style={{ top: "48vh" }}
          ></div>
          <div
            className="box-50 position-absolute bg-primary right-0"
            style={{ top: "48vh" }}
          ></div>
        </>
      ) : null}

      {props?.data?.theoretical?.educations ? (
        <>
          <div
            className="box-50 position-absolute bg-primary left-0"
            style={{ top: "81vh" }}
          ></div>
          <div
            className="box-50 position-absolute bg-primary right-0"
            style={{ top: "81vh" }}
          ></div>
        </>
      ) : null}
      <div className="row">
        <div className="col-6 pe-5">
          <div className="text-uppercase font-weight-500 text-bold h5 p-0 m-0">
            WORK EXPERIENCE
          </div>
          <ul className="list-group list-unstyled pe-0 me-0">
            {props?.data?.practical?.experiences?.map(
              (d: IExperience, i: number) => (
                <li key={i} className="experience pb-2 list-style-color">
                  <div className="text-capitalize font-weight-500 text-bold mb-0">
                    {d.job_title}
                  </div>
                  <div className="text-capitalize font-weight-400 mb-0">
                    {d.company_name}
                  </div>
                  <div className="logo justify-content-between font-weight-600 fs-7 fst-italic text-primary-light">
                    <div>
                      {d.date_start?.join("-")} -{" "}
                      {Array.isArray(d.date_end)
                        ? d.date_end.join("-")
                        : d.date_end}
                    </div>
                    <div className="font-weight-300 fs-7 mt-1 pe-2">
                      {d.location}
                    </div>
                  </div>

                  <div className="font-weight-500 text-primary-light text-capitalize fs-7">
                    Achievements/Tasks:
                  </div>
                  <ul className="font-weight-300 fs-7 m-0 py-0 ps-0 pe-3">
                    {d.descriptions?.map((v) => <li key={v}>{v}</li>)}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="col-6 ps-5">
          <div className="text-uppercase font-weight-500 text-bold h5 m-0 p-0">
            SKILLS
          </div>
          <div className="font-weight-300 flex-wrap justify-content-start">
            {props?.data?.abilities?.skills?.map((v: ISkill, i: number) => (
              <div className="rounded-3 bg-light-dark py-1 px-2 m-1" key={i}>
                {" "}
                {v.skill_name}{" "}
              </div>
            ))}
          </div>

          {props?.data?.practical?.projects ? (
            <div>
              <div className="text-uppercase font-weight-500 text-bold h5 m-0 pt-2">
                PERSONAL PROJECTS
              </div>
              <div className="font-weight-300 fs-7 me-2 pe-1">
                {props?.data?.practical?.projects?.map(
                  (d: IProjects, i: number) => (
                    <li className="pb-1" key={i}>
                      {" "}
                      {d.project_name} &#x2015; {d.date_start?.join("-")} -{" "}
                      {Array.isArray(d.date_end)
                        ? d.date_end.join("-")
                        : d.date_end}{" "}
                    </li>
                  ),
                )}
              </div>
            </div>
          ) : null}

          {props?.data?.abilities?.volunteer ? (
            <div>
              <div className="text-uppercase font-weight-500 text-bold h5 m-0 pt-2">
                VOLUNTEER EXPERIENCE
              </div>
              <div className="font-weight-300 fs-7">
                <ul className="m-0 p-0 list-unstyled">
                  {props?.data?.abilities?.volunteer?.map(
                    (d: IVolunteer, i: number) => (
                      <li className="pb-2" key={i}>
                        <div className="text-capitalize font-weight-600 text-bold mb-0">
                          {d.voluntary_name}
                        </div>
                        <div className="text-capitalize font-weight-400 mb-0">
                          {d.company_name}
                        </div>
                        <div className="logo justify-content-between font-weight-600 fs-7 fst-italic text-primary-light">
                          <div>
                            {d.date_start?.join("-")} -{" "}
                            {Array.isArray(d.date_end)
                              ? d.date_end.join("-")
                              : d.date_end}
                          </div>
                        </div>
                        <div className="font-weight-500 text-primary-light text-capitalize fs-7">
                          Achievements/Tasks:
                        </div>
                        <ul className="font-weight-300 fs-7 m-0 p-0">
                          {d.description}
                        </ul>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          ) : null}

          {props?.data?.theoretical?.educations ? (
            <div>
              <div className="text-uppercase font-weight-500 text-bold h5 m-0 pt-2">
                EDUCATION
              </div>
              <div className="font-weight-300 fs-7">
                <ul className="m-0 p-0 list-unstyled">
                  {props?.data?.theoretical?.educations?.map(
                    (d: IEducation, i: number) => (
                      <li className="pb-2" key={i}>
                        <div className="text-capitalize font-weight-600 text-bold mb-0">
                          {d.program_name}
                        </div>
                        <div className="text-capitalize font-weight-400 mb-0">
                          {d.institution_name}
                        </div>
                        <div className="logo justify-content-between font-weight-600 fs-7 fst-italic text-primary-light">
                          <div>
                            {d.date_start?.join("-")} -{" "}
                            {Array.isArray(d.date_end)
                              ? d.date_end.join("-")
                              : d.date_end}
                          </div>
                          <div className="font-weight-300 fs-7 mt-1 pe-2">
                            {d.location}
                          </div>
                        </div>
                        <div className="font-weight-500 text-primary-light text-capitalize fs-7">
                          Achievements/Courses:
                        </div>
                        <ul className="font-weight-300 fs-7 m-0 p-0">
                          {d.description}
                        </ul>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          ) : null}

          {props?.data?.abilities?.languages ? (
            <div>
              <div className="text-uppercase font-weight-500 text-bold h5 m-0 pt-2">
                LANGUAGES
              </div>
              <div className="font-weight-300 fs-7">
                <ul className="m-0 p-0 list-unstyled row">
                  {props?.data?.abilities?.languages?.map(
                    (d: ILanguage, i: number) => (
                      <div className="px-0 pb-2 m-0 col-6" key={i}>
                        <div>{d.language_name}</div>
                        <div className="text-primary-light">{d.level}</div>
                      </div>
                    ),
                  )}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
