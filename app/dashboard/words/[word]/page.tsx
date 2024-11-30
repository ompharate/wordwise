"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface prop {
  text: string;
}

const WordDetail = () => {
  const [wordDetails, setWordDetails] = useState<prop | null>(null);
  const params = useParams();

  const fetchWordDetails = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/word/info?word=${params?.word}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const data = await response.json();
      setWordDetails(data);
      console.log(data);
    } else {
      console.error("Error fetching word details");
    }
  };
  useEffect(() => {
    fetchWordDetails();
  }, [params?.word]);
  return (
    <div className="max-w-7xl mx-auto">
      <Markdown>{wordDetails?.text}</Markdown>
    </div>
  );
};

export default WordDetail;
