import Head from "next/head";
import Layout from "../components/layout";
import Board from "../components/board";
import { TOKEN, DATABASE_ID } from "../config";

export default function Home({ board }) {
  return (
    <Layout>
      <Head>
        <title>InBody Board</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/inbody-favicon.ico"></link>
      </Head>
      <div>
        <Board board={board} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  let board = null;
  board = await response.json();
  console.log(board);

  return {
    props: { board }, // will be passed to the page component as props
  };
}
