import { NextApiHandler } from "next";
import { prisma } from "@/server/db";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") return res.send(404);

  const timeZones = await prisma.timeZone.findMany();

  return res.status(200).json({ message: "success", data: { timeZones } });
};

export default handler;
