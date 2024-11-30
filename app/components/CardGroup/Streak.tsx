"use client";
import { useUser } from "@clerk/nextjs";
import { Rating } from "flowbite-react";
import { useEffect, useState } from "react";

type props = {
  streak: number;
} | null;

export function Streak() {
  const { user } = useUser();
  const [data, setData] = useState<props>(null);
  async function fetchWordLength() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/words/streak?id=${user?.id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
  }

  useEffect(() => {
    if (user) {
      fetchWordLength();
    }
  }, [user?.id]);
  return (
    <Rating>
      <Rating.Star />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {data?.streak}
      </p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
       
        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
      >
        Day Streak
      </a>
    </Rating>
  );
}