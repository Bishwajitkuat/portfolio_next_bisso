import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

export default function ConnectLinks({
  ulClass,
  liClass,
}: {
  ulClass: string;
  liClass: string;
}) {
  return (
    <ul className={ulClass}>
      <li className={liClass}>
        <Link href="https://www.linkedin.com/in/bishwajitkuat/" target="_blank">
          <FaLinkedinIn />
        </Link>
      </li>
      <li className={liClass}>
        <Link href="https://github.com/Bishwajitkuat" target="_blank">
          <FaGithub />
        </Link>
      </li>
      <li className={liClass}>
        <Link href="mailto:bishwajitkuat@gmail.com">
          <AiOutlineMail />
        </Link>
      </li>
      <li className={liClass}>
        <Link href="https://www.facebook.com/Bishwajitkuat" target="_blank">
          <FaFacebookF />
        </Link>
      </li>
    </ul>
  );
}
