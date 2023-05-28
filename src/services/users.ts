import prisma from "./prisma";
import user from "../interfaces/user";

export const createUser = async (data: user) => {
    const user = await prisma.user.create({
        data
    });
    return user;
}
export const getUser = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });
    return user;
}