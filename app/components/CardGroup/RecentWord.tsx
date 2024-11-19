"use client";
import { useUser } from "@clerk/nextjs";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

interface props {
  word: string;
}
export function RecentWords() {
  const { user } = useUser();
  const [data, setData] = useState<props[] | []>([]);
  async function fetchWordLength() {
    const response = await fetch(
      `http://localhost:4000/api/user/words/recent?id=${user?.id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.recentWords);
      setData(data.recentWords);
    }
  }

  useEffect(() => {
    if (user) {
      fetchWordLength();
    }
  }, [user?.id]);

  console.log(data);

  return (
    <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between gap-5">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Recent Words
        </h5>
        <a
          href="/dashboard/words"
          className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-1 sm:py-1">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                {data &&    
                  data?.map((item,index) => (
                    <p key={index} className="truncate text-xl font-medium text-gray-900 dark:text-white underline cursor-pointer   ">
                      {item.word}
                    </p>
                  ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
