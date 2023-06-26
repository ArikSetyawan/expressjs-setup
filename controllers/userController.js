import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUsers = async (req, res) => {
    let users = await prisma.user.findMany()
    let data_return = {status: 'success', data: users}
    res.status('200').json(data_return)
}
