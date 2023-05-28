import bcrypt from "bcrypt";
import { Response, Request, NextFunction } from "express";
import { createUser, getUser } from "../services/users";

export default class UserController {
    public async create(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await createUser(req.body);
            res.status(200).send(user);
        } catch (e) {
            res.status(400).send(e);
        }
    }
    public async get(req: Request<{id: string}>, res: Response, next: NextFunction) {
        try {
            console.log(req.params)
            const user = await getUser(parseInt(req.params.id));
            res.status(200).send(user);
        } catch (e) {
            res.status(400).send(e);
        }
    }
}