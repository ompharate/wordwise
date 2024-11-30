"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useAuth, UserButton } from "@clerk/nextjs";

import { Clipboard } from "flowbite-react";
export default function DashHeader() {
  const auth = useAuth();
  return (
    <Navbar className="bg-[#3BC14A] text-white ">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
          WordWise
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="#" active>
          <div className="w-80">
            <div className="relative">
              <label htmlFor="npm-install" className="sr-only">
                Label
              </label>
              <input
                id="npm-install"
                type="text"
                className="col-span-8 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={auth.userId || ""}
                disabled
                readOnly
              />
              <Clipboard.WithIcon valueToCopy={auth.userId || ""} />
            </div>
          </div>
        </Navbar.Link>
        <Navbar.Link href="#" active>
          <UserButton />
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
