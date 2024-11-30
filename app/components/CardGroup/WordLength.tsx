"use client";
import { useUser } from "@clerk/nextjs";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

type props = {
  totalLength: number;
} | null;

export function WordLength() {
  const { user } = useUser();
  const [data, setData] = useState<props>(null);
  async function fetchWordLength() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/words/len?id=${user?.id}`,
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
    <Card className="max-w-sm rounded-xl cursor-pointer">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Total Word Saved
      </h5>
      <p className="font-semibold text-xl text-gray-700 dark:text-gray-400">
        {data?.totalLength}
      </p>
    </Card>
  );
}
