import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
export default function ContactDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="pt-12">
      <h2 className="text-center text-xl pb-12">Contact Details</h2>
      <p className="py-6">
        Following are some of the contact details. Please feel free to reach out
        through any of the following media.
      </p>
      <ul className="grid gap-2  break-all">
        <li className="grid">
          <strong>Name</strong> <span>Bishwajit Das</span>
        </li>
        <li className="grid">
          <strong>Email</strong> bishwajitkuat@gmail.com
        </li>
        <li className="grid">
          <strong>LinkedIn</strong>
          <Link
            className="hover:text-[#5651e5]"
            href="https://www.linkedin.com/in/bishwajitkuat/"
            target="_blanck"
          >
            https://www.linkedin.com/in/bishwajitkuat/
          </Link>
        </li>
        <li className="grid">
          <strong>GitHub</strong>
          <Link
            className="hover:text-[#5651e5]"
            href="https://github.com/Bishwajitkuat"
            target="_blanck"
          >
            https://github.com/Bishwajitkuat
          </Link>
        </li>
        <li className="grid">
          <strong>Resume</strong>
          <Link
            className="hover:text-[#5651e5]"
            href="/resume_bishwajit_web_development.pdf"
            target="_blanck"
          >
            https://bisso-portfolio.vercel.app/resume_bishwajit_web_development.pdf
          </Link>
        </li>
      </ul>
    </div>
  );
}
