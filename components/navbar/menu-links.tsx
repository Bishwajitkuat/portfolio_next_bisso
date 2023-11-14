import Link from "next/link";
import React from "react";

export default function MenuLinks({
  ulClass,
  liClass,
}: {
  ulClass: string;
  liClass: string;
}) {
  return (
    <ul className={ulClass}>
      <Link href="">
        <li className={liClass}>Home</li>
      </Link>
      <Link href="">
        <li className={liClass}>About</li>
      </Link>
      <Link href="">
        <li className={liClass}>Skills</li>
      </Link>
      <Link href="">
        <li className={liClass}>Projects</li>
      </Link>
      <Link href="">
        <li className={liClass}>Contact</li>
      </Link>
    </ul>
  );
}
