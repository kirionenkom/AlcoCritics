import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/utils/prisma";

export default async function Updatedrink(req: NextApiRequest, res: NextApiResponse) {
	try {
		const {id, update} = req.body
		const drink = await prisma.alcohol.update({where: {id}, data: update})
		if (!drink) {
			res.status(500).json("Ошибка 1")
		}
		res.json(drink)
	} catch (error) {
		res.status(500).json("Ошибка 2")
	}
}