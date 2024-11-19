import React, { Suspense } from "react";
import { WordLength } from "./WordLength";
import { RecentWords } from "./RecentWord";
import { Streak } from "./Streak";
import RandomWord from "./RandomWord";

const DashboardCardGroup = () => {
  return (
    <div className="flex justify-evenly gap-5 w-full ">
      <div>
        <Suspense fallback={<h1>Loading....</h1>}>
          <WordLength />
        </Suspense>
      </div>
      <div>
        <RecentWords />
      </div>
      <div>
        <RandomWord />
      </div>
      <div>
        <Streak />
      </div>
    </div>
  );
};

export default DashboardCardGroup;
