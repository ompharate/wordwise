"use client";
import { useUser } from "@clerk/nextjs";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
type props = {
  word: string;
  receivedText: string;
} | null;

const RandomWord = () => {
  const { user } = useUser();
  const [data, setData] = useState<props>(null);
  async function fetchWordLength() {
    const response = await fetch(
      `http://localhost:4000/api/user/words/random?id=${user?.id}`,
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
        Word For You
      </h5>
      <p className="font-semibold text-xl text-gray-700 dark:text-gray-400">
        {data?.word}
      </p>

      <Markdown>{data?.receivedText}</Markdown>
    </Card>
  );
};

export default RandomWord;
