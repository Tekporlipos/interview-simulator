import {
  ICv,
  IEducation,
  IExperience,
  IHobby,
  ILanguage,
  IProjects,
  ISkill,
  IVolunteer,
} from "@/utlities/interfaces";
import formatPhoneNumber, { getDateMonth } from "@/utlities/functions";
import IconsComponent from "@/component/template/Icons";
import Image from "next/image";

export default function Template3Component(props: { data: ICv }) {
  return (
    <div className="parent bg-white position-relative">
      <div className="logo justify-content-between">
        <div>
          <div
            className="h2 m-0 p-0 fst-italic mb-2"
            style={{ fontFamily: "cursive", fontWeight: "700" }}
          >
            {props.data?.bio?.name}
          </div>
          <li className="logo justify-content-start font-weight-200 py-1 fs-7">
            <IconsComponent name="location" />
            <a
              className="text-decoration-none text-dark me-1 text-end"
              href={props.data?.bio?.location ?? ""}
            >
              {props.data?.bio?.location?.substring(0, 24)}
            </a>
          </li>
          <li className="logo justify-content-start py-1">
            <IconsComponent name="tell" />
            <a
              className="text-decoration-none font-weight-200 me-1 text-dark text-end"
              href={props.data?.bio?.phone_number ?? ""}
            >
              {formatPhoneNumber(
                props.data?.bio?.phone_number?.substring(0, 24).trim() ?? "",
              )}
            </a>
          </li>
          <li className="logo justify-content-start font-weight-200 py-1 fs-7">
            <IconsComponent name="email" />
            <a
              className="text-decoration-none text-dark me-1 text-end"
              href={props.data?.bio?.email_address ?? ""}
            >
              {props.data?.bio?.email_address?.substring(0, 24)}
            </a>
          </li>
        </div>
        <div className="text-center">
          <div className="profile rounded-100 ">
            <Image
              alt="profile"
              className="rounded-100 "
              src={
                props?.data?.bio?.profile_picture
                  ? props?.data?.bio?.profile_picture
                  : "/FjU2lkcWYAgNG6d.jpg"
              }
              width="120"
              height="120"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex-column mb-2">
          <div className="h6 m-0 p-0">PROFILE</div>
          <div
            className="bg-black"
            style={{ width: "50px", height: "6px" }}
          ></div>
        </div>
        <div className="font-weight-200 fs-7 text-justify">
          {props?.data?.bio?.description}
        </div>
      </div>

      <div className="mt-2">
        <div className="flex-column mb-2">
          <div className="h6 m-0 p-0">PROFESSIONAL EXPERIENCE</div>
          <div
            className="bg-black"
            style={{ width: "50px", height: "6px" }}
          ></div>
        </div>
        <ol className="font-weight-200 fs-7 list-unstyled p-0">
          {props?.data?.practical?.experiences?.map(
            (d: IExperience, i: number) => (
              <li key={i} className="experience pb-1 list-style-color row">
                <div className="col-3">
                  <div className="font-weight-200 fs-7">
                    <div>
                      {d.date_start.length > 1
                        ? getDateMonth(d.date_start[0]) + "-" + d.date_start[1]
                        : d.date_start}{" "}
                      &#x2015;{" "}
                      {Array.isArray(d.date_end)
                        ? d.date_end.length > 1
                          ? getDateMonth(d.date_end[0]) + "-" + d.date_end[1]
                          : d.date_end
                        : d.date_end}
                    </div>
                    <div>{d.location}</div>
                  </div>
                </div>
                <div className="col-9">
                  <div className="text-capitalize font-weight-200">
                    <span className="font-weight-400">{d.company_name}</span> ,{" "}
                    {d.job_title}
                  </div>
                  <div className="font-weight-300 text-capitalize fs-7">
                    Achievements:
                  </div>
                  <ul className="font-weight-200 fs-7 m-0 py-0 ps-0 pe-3">
                    {d.descriptions?.map((v) => <li key={v}>{v}</li>)}
                  </ul>
                </div>
              </li>
            ),
          )}
        </ol>
      </div>

      <div className="mt-2">
        <div className="flex-column mb-2">
          <div className="h6 m-0 p-0">EDUCATION</div>
          <div
            className="bg-black"
            style={{ width: "50px", height: "6px" }}
          ></div>
        </div>
        <ol className="font-weight-200 fs-7 list-unstyled p-0">
          {props?.data?.theoretical?.educations?.map(
            (d: IEducation, i: number) => (
              <li key={i} className="experience pb-3 list-style-color row">
                <div className="col-3">
                  <div className="font-weight-200 fs-7">
                    {d.date_start && d.date_start.length > 1
                      ? getDateMonth(d.date_start[0]) + "-" + d.date_start[1]
                      : d.date_start}{" "}
                    &#x2015;{" "}
                    {Array.isArray(d.date_end)
                      ? d.date_end.length > 1
                        ? getDateMonth(d.date_end[0]) + "-" + d.date_end[1]
                        : d.date_end
                      : d.date_end}
                    <div>{d.location}</div>
                  </div>
                </div>
                <div className="col-9">
                  <div className="text-capitalize font-weight-200">
                    <span className="font-weight-400">
                      {d.institution_name}
                    </span>{" "}
                    , {d.program_name}
                  </div>
                  <div className="font-weight-200 fs-7 m-0 py-0 ps-0">
                    {d.description}
                  </div>
                </div>
              </li>
            ),
          )}
        </ol>
      </div>
      {props?.data?.practical?.projects ? (
        <div className="mt-2">
          <div className="flex-column mb-2">
            <div className="h6 m-0 p-0">PERSONAL PROJECTS</div>
            <div
              className="bg-black"
              style={{ width: "50px", height: "6px" }}
            ></div>
          </div>
          <ol className="font-weight-200 fs-7 list-unstyled p-0">
            {props?.data?.practical?.projects?.map(
              (d: IProjects, i: number) => (
                <li key={i} className="experience pb-1 list-style-color row">
                  <div className="col-3">
                    <div className="font-weight-200 fs-7">
                      <div>
                        {d.date_start && d.date_start.length > 1
                          ? getDateMonth(d.date_start[0]) +
                            "-" +
                            d.date_start[1]
                          : d.date_start}{" "}
                        &#x2015;{" "}
                        {Array.isArray(d.date_end)
                          ? d.date_end.length > 1
                            ? getDateMonth(d.date_end[0]) + "-" + d.date_end[1]
                            : d.date_end
                          : d.date_end}
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="text-capitalize font-weight-200">
                      <span className="font-weight-400">{d.project_name}</span>
                    </div>
                    <div className="font-weight-200 fs-7 m-0 py-0 ps-0">
                      {d.project_description}
                    </div>
                    {d.description ? <hr /> : null}
                    <div className="font-weight-200 fs-7 m-0 py-0 ps-0">
                      {d.description}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ol>
        </div>
      ) : null}

      {props?.data?.abilities?.volunteer ? (
        <div className="mt-2">
          <div className="flex-column mb-2">
            <div className="h6 m-0 p-0">VOLUNTEER EXPERIENCE</div>
            <div
              className="bg-black"
              style={{ width: "50px", height: "6px" }}
            ></div>
          </div>
          <ol className="font-weight-200 fs-7 list-unstyled p-0">
            {props?.data?.abilities?.volunteer?.map(
              (d: IVolunteer, i: number) => (
                <li key={i} className="experience pb-1 list-style-color row">
                  <div className="col-3">
                    <div className="font-weight-200 fs-7">
                      <div>
                        {d.date_start && d.date_start.length > 1
                          ? getDateMonth(d.date_start[0]) +
                            "-" +
                            d.date_start[1]
                          : d.date_start}{" "}
                        &#x2015;{" "}
                        {Array.isArray(d.date_end)
                          ? d.date_end.length > 1
                            ? getDateMonth(d.date_end[0]) + "-" + d.date_end[1]
                            : d.date_end
                          : d.date_end}
                      </div>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="text-capitalize font-weight-200">
                      <span className="font-weight-400">{d.company_name}</span>{" "}
                      , {d.voluntary_name}
                    </div>
                    <div className="font-weight-200 fs-7 m-0 py-0 ps-0">
                      {d.description}
                    </div>
                  </div>
                </li>
              ),
            )}
          </ol>
        </div>
      ) : null}

      {props?.data?.abilities?.skills?.length > 0 ? (
        <div className="mt-2">
          <div className="flex-column mb-2">
            <div className="h6 m-0 p-0">SKILLS</div>
            <div
              className="bg-black"
              style={{ width: "50px", height: "6px" }}
            ></div>
          </div>
          <ul className="font-weight-200 flex-wrap justify-content-start pe-3">
            {props?.data?.abilities?.skills?.map((v: ISkill, i: number) => (
              <li className="ps-4" key={i}>
                {v.skill_name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {props?.data?.abilities?.languages?.length > 0 ? (
        <div className="mt-2">
          <div className="flex-column mb-2">
            <div className="h6 m-0 p-0">LANGUAGES</div>
            <div
              className="bg-black"
              style={{ width: "50px", height: "6px" }}
            ></div>
          </div>
          <ol className="font-weight-200 flex-wrap justify-content-start list-unstyled p-0 m-0">
            {props?.data?.abilities?.languages?.map(
              (v: ILanguage, i: number) => (
                <li
                  className="border rounded-2 border-secondary  py-1 px-2 m-1"
                  key={i}
                >
                  {v.language_name}
                </li>
              ),
            )}
          </ol>
        </div>
      ) : null}

      {props?.data?.abilities?.hobbies?.length > 0 ? (
        <div className="mt-2">
          <div className="flex-column mb-2">
            <div className="h6 m-0 p-0">INTERESTS</div>
            <div
              className="bg-black"
              style={{ width: "50px", height: "6px" }}
            ></div>
          </div>
          <ul className="font-weight-200 flex-wrap justify-content-start pe-3">
            {props?.data?.abilities?.hobbies?.map((v: IHobby, i: number) => (
              <li className="ps-4" key={i}>
                {v.hobbies_name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
