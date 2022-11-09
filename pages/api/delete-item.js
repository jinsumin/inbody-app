// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TOKEN } from "../../config";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { page_id, archived } = JSON.parse(req.body);
    await notion.pages.update({
      page_id: page_id,
      archived: archived,
    });
    res.status(201).json({ msg: "Sucess!!!" });
  } catch (error) {
    res.status(500).json({ msg: "there was an error" });
  }
}
