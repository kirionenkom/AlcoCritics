import prisma from "@/utils/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function Drinks(req: NextApiRequest, res: NextApiResponse) {
	const alcohols = await prisma.alcohol.findMany()
	res.end(JSON.stringify(alcohols))
}