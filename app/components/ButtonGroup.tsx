"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

export function ButtonGroup() {
  return (
    <div className="px-2 py-5 ">
      <div className="p-2 bg-green-100  rounded-md flex gap-5 w-fit border border-black ">
        <Link className="" href="/dashboard" color="green">
          Dashboard
        </Link>
        <Link href="/dashboard/words" color="green">
          Words
        </Link>
        <Link href="quizzes" color="green">
          Quizzes
        </Link>
        <Link href={"deck"} color="green">
          Deck
        </Link>
      </div>
    </div>
  );
}
