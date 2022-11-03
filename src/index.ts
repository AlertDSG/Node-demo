import express, {Request, Response} from "express"
import bodyParser from "body-parser";
import {addressesRouter} from "./routers/addresses-router";
import {productsRouter} from "./routers/products-router";

const app = express()
app.use(bodyParser())

const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello!';
    res.send(helloMessage)
})

app.use('/addresses', addressesRouter)
app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})