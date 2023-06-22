import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/utils/prisma";

export default async function Id(req: NextApiRequest, res: NextApiResponse) {
	try {
		let { id } = req.query
		if (Array.isArray(id)) {
			id = id[0]
		}
		const drink = await prisma.alcohol.delete({where: {id}})
		if (!drink) {
			res.status(500).json("Ошибка 1")
		}
		res.json(drink)
	} catch (error) {
		res.status(500).json("Ошибка 2")
	}
}