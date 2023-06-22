import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/utils/prisma";

export default async function NewDrink(req: NextApiRequest, res: NextApiResponse) {
	try {
		const data = req.body
		const drink = await prisma.alcohol.create({data: data})
		if (!drink) {
			res.status(500).json("Ошибка 1")
		}
		res.json(drink)
	} catch (error) {
		res.status(500).json("Ошибка 2")
	}
}