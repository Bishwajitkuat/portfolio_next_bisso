import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

function ExperiencePage() {
  return (
    <div className="w-full">
      <div className="px-4 md:px-16 pt-8 md:pt-12 max-w-[1240px] mx-auto text-gray-700  h-full">
        <p className="uppercase md:pb-20 text-center text-[3rem] tracking-widest text-[#5651e5]">
          Experiences
        </p>
        <div className="py-8">
          {/* <div className="bg-gradient-to-br from-blue-500 via-red-500 to-green-500 rounded-xl p-[1px] shadow-[10px_0_60px_-15px_rgba(0,0,0,0.3)] ">
            <div className="bg-[#cbd5e1] rounded-xl  ">
              <h2 className=" text-center text-2xl uppercase tracking-widest py-8">
                Experiences
              </h2> */}
          <ul className="p-8 grid gap-8">
            <li>
              <h3 className="text-[1.1rem] mb-[0.5rem] font-semibold tracking-wide text-blue-700">
                <p className="uppercase">Full-stack development program</p>
                <p className="text-slate-950 font-light"> Training</p>
              </h3>
              <Link
                href="https://www.integrify.io/"
                target="_blank"
                className="flex items-center gap-[0.5rem] text-blue-900 hover:text-purple-400"
              >
                <FaMapMarkerAlt /> Integrify Academy, Helsinki, Finland
              </Link>
              <div className="flex items-center gap-[0.5rem] text-blue-900">
                <FaRegClock />
                June 2024 - October 2024 (5 months)
              </div>
              <div>
                <ul className="ps-[3rem] list-disc">
                  <li>
                    Build e-commerce front end with React, Type-Script,
                    React-Query
                  </li>
                  <li>
                    Build e-commerce backend API with C#, .NET core and
                    PostgreSQL
                  </li>
                  <li>
                    Implemented clean architecture and test driven development
                  </li>
                  <li>
                    Implemented authentication and authorization with jwt access
                    tokens and refresh tokens
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h3 className="text-[1.1rem] mb-[0.5rem] font-semibold tracking-wide text-blue-700">
                <p className="uppercase">Full-stack development Intern</p>
                <p className="text-slate-950 font-light">Internship</p>
              </h3>
              <Link
                href="https://www.unelmaplatforms.com/"
                target="_blank"
                className="flex items-center gap-[0.5rem] text-blue-900 hover:text-purple-400"
              >
                <FaMapMarkerAlt /> Unelma Platforms Oy, Espoo, Finland
              </Link>
              <div className="flex items-center gap-[0.5rem] text-blue-900">
                <FaRegClock />
                <p>Mar 2024 - Jun 2024 (4 months)</p>
              </div>
              <div>
                <ul className="ps-[3rem] list-disc">
                  <li>
                    Upgraded Codeigniter 3 project to Codeigniter 4 Restful API
                    and React for the front end
                  </li>
                  <li>
                    Implemented React Query for global state management in the
                    front end.
                  </li>
                  <li>
                    Implemented and integrated shield authentication and
                    authorization
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h3 className="text-[1.1rem] mb-[0.5rem] font-semibold tracking-wide text-blue-700">
                <p className="uppercase">Fullstack Developer</p>
                <p className="text-slate-900 font-light">Internship</p>
              </h3>
              <div className="flex items-center gap-[0.5rem] text-blue-900">
                <FaMapMarkerAlt />
                <p>
                  <Link
                    href="https://www.bc.fi/"
                    target="_blank"
                    className=" hover:text-purple-400"
                  >
                    Helsinki Business College
                  </Link>{" "}
                  &{" "}
                  <Link
                    href={"https://wunder.io/"}
                    target="_blank"
                    className=" hover:text-purple-400"
                  >
                    Wunder.io
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-[0.5rem] text-blue-900">
                <FaRegClock />
                Oct 2023 - Dec 2023 (3 months)
              </div>
              <div>
                <ul className="ps-[3rem] list-disc">
                  <li>
                    Developed expertise in Next.js by creating and styling
                    components, routes, and APIs
                  </li>
                  <li>
                    Proficient in Drupal CMS, specializing in creating content
                    types, configuration modifications, and data fetching
                  </li>
                  <li>
                    Utilized Zod in Next.js for data validation and cleanup,
                    ensuring data integrity throughout the project
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h3 className="text-[1.1rem] mb-[0.5rem] font-semibold tracking-wide text-blue-700">
                <span className="uppercase">Production Specialist</span>{" "}
                <span className="text-slate-950 font-light">Full-time</span>
              </h3>
              <Link
                href={"https://swappie.com/fi/"}
                target="_blank"
                className="flex items-center gap-[0.5rem] text-blue-900"
              >
                <FaMapMarkerAlt />
                <p>Swappy Oy</p>
              </Link>
              <div className="flex items-center text-blue-900 gap-[0.5rem]">
                <FaRegClock />
                <p>May 2022 - August 2022 (4 months)</p>
              </div>
              <div>
                <div className="flex items-center">
                  <IoMdBriefcase />
                  <p className="ms-[0.5rem] inline">
                    I diagnosed and repaired iPhones.
                  </p>
                </div>
              </div>
            </li>
            {/* <li>
          <h3 className="text-[1.1rem] mb-[0.5rem] font-semibold tracking-wide text-blue-700">
            Restaurant worker
          </h3>
          <div className="flex gap-[0.5rem]">
            <FaMapMarkerAlt />
            <p>Fafa's Oopera & Fafa's Iso Roba, Helsinki.</p>
          </div>
          <div className="flex gap-[0.5rem]">
            <FaRegClock />
            <p>Jul 2021 - Mar 2023</p>
          </div>
          <div>
            <div className="">
              <IoMdBriefcase />
              <p className="ms-[0.5rem] inline">
                I worked as a part-time worker and gained experience in managing
                the restaurant, taking orders, customer service and food
                preparation.
              </p>
            </div>
          </div>
        </li> */}
            <li>
              <h3 className="text-[1.1rem] mb-[0.5rem] font-semibold tracking-wide text-blue-700">
                <span className="uppercase"> MS Thesis trainee</span>{" "}
                <span className="text-slate-950 font-light">Internship</span>
              </h3>
              <Link
                href={
                  "https://www.helsinki.fi/en/researchgroups/asteraceae-developmental-biology-and-secondary-metabolism"
                }
                target="_blank"
                className="flex items-center text-blue-900 gap-[0.5rem]"
              >
                <div>
                  <FaMapMarkerAlt />
                </div>

                <div className="">
                  <p>
                    Asteraceae developmental biology and secondary metabolism
                    laboratory
                  </p>
                  <p>Department of Agriculture and Forestry</p>
                  <p> University of Helsinki</p>
                </div>
              </Link>
              <div className="flex items-center text-blue-900 gap-[0.5rem]">
                <FaRegClock />
                <p>May 2019 - Dec 2020 (1.5 years)</p>
              </div>
              <ul className="ps-[3rem] list-disc">
                <li>
                  I gained experience in experiment planning, biological
                  experiments, data analysis, and thesis writing.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
}

export default ExperiencePage;
