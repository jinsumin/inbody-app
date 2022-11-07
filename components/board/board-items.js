import Link from "next/link";
import React from "react";

const BoardItems = ({ data }) => {
  const title = data.properties.title.title[0].plain_text;
  const contents = data.properties.contents.rich_text[0].plain_text;
  const start = data.properties.Period.date.start;
  const end = data.properties.Period.date.end;

  return (
    <div className="project-card">
      <Link href={`${link}`}>
        <a target="_blank" rel="noopener noreferrer">
          <div>
            {title}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BoardItems;
