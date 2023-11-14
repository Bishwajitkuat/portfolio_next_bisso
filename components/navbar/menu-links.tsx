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
      <Link href="/">
        <li className={liClass}>Home</li>
      </Link>
      <Link href="/about">
        <li className={liClass}>About</li>
      </Link>
      <Link href="/skills">
        <li className={liClass}>Skills</li>
      </Link>
      <Link href="/projects">
        <li className={liClass}>Projects</li>
      </Link>
      <Link href="/contact">
        <li className={liClass}>Contact</li>
      </Link>
    </ul>
  );
}
