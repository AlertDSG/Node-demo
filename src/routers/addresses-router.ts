import {Request, Response, Router} from "express";

const addresses = [{id: 1,value: "Nezalej 12"}, {id: 2, value: "Slobodskaya 1"}]

export const addressesRouter = Router()

addressesRouter.get('/', (req: Request, res: Response) => {
    res.status(201).send(addresses)
})