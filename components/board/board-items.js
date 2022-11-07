import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const BoardItems = ({ data }) => {
  const title = data.properties.title.title[0].plain_text;
  const contents = data.properties.contents.rich_text[0].plain_text;
  const start = data.properties.Date.date.start;
  // const end = data.properties.Period.date.end;

  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full justify-items-center items-center object-center">
      <div className="w-full h-10 bg-white flex flex-row justify-items-center place-items-center border-2 border-rose-400 rounded-full shadow-lg">
        <div className="w-full text-center">{title}</div>
        <div className="w-1/3 text-center">{start}</div>
        <div className="mr-3">
          <Image
            // className="object-cover object-center rounded"
            alt="arrow-down"
            src="/arrow-down.png"
            width={30}
            height={30}
            onClick={() => setVisible(!visible)}
          />
        </div>
      </div>
      <div className="text-center justify-items-center items-center bg-slate-100 rounded-b-2xl mx-1">
        {visible && <div className="h-60 p-20 mt-2">{contents}</div>}
      </div>
    </div>
  );
};

export default BoardItems;
