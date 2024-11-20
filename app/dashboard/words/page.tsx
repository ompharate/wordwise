"use client";
import { useUser } from "@clerk/nextjs";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

interface props {
  word: string;
}
const Page = () => {
  const { user } = useUser();
  const [data, setData] = useState<props[] | []>([]);
  async function fetchWordLength() {
    const response = await fetch(
      `http://localhost:4000/api/user/words?id=${user?.id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.words);
      setData(data.words);
    }
  }

  useEffect(() => {
    if (user) {
      fetchWordLength();
    }
  }, [user?.id]);

  console.log(data);

  return (
    <Card className="max-w-7xl mx-auto">
      <div className="mb-4 flex items-center justify-between gap-5">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Saved Words
        </h5>
      
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-1 sm:py-1">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex flex-wrap gap-5">
                {data &&
                  data?.map((item, index) => (
                    <div
                      key={index}
                      className="truncate text-xl font-medium text-gray-900 bg-gray-300 p-2 rounded-md dark:text-white underline cursor-pointer   "
                    >
                      {item.word}
                    </div>
                  ))}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Page;
