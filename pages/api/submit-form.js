// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TOKEN, DATABASE_ID } from "../../config";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { title, contents } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        Title: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        Contents: {
          rich_text: [
            {
              text: {
                content: contents,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: "Sucess!!!" });
  } catch (error) {
    res.status(500).json({ msg: "there was an error" });
  }
}
