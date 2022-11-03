import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-repository";

export const productsRouter = Router()

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.title?.toString())
    res.status(201).send(foundProducts)
})

productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = productsRepository.getProductById(+req.params.id)
    if (product) {
        res.status(201).send(product)
    } else res.send(404)
})

productsRouter.post('/', (req: Request, res: Response) => {
    if (req.body.title) {
        res.send(productsRepository.createProduct(req.body.title))
    } else res.send(404)
})

productsRouter.put('/:id', (req: Request, res: Response) => {
    let product = productsRepository.updateProduct(+req.params.id, req.body.title)
    if (product) {
        res.status(204).send(product)
    } else res.send(404)
})

productsRouter.delete('/:id', (req: Request, res: Response) => {
    let product = productsRepository.deleteProduct(+req.params.id)
    product ? res.status(204) : res.status(404)
})