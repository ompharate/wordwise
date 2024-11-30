"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar className="bg-[#3BC14A] text-white" fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          WordWise
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
}
