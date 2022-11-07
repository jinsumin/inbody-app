import Link from "next/link";
import React from "react";

const BoardItems = ({ data }) => {
  const title = data.properties.title.title[0].plain_text;
  const contents = data.properties.contents.rich_text[0].plain_text;
  const start = data.properties.Date.date.start;
  // const end = data.properties.Period.date.end;

  return (
    <div className="w-full bg-white flex flex-row justify-items-center place-items-center border-b-4 border-rose-400">
      <div className="w-full bg-slate-400 text-center">
        {title}
      </div>
      <div className="w-full text-center">
        {contents}
      </div>
      <div className="w-full text-center">
        {start}
      </div>
    </div>
  );
};

export default BoardItems;
