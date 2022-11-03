const products = [{id: 1, productName: 'orange'}, {id: 2, productName: 'apple'}]

export const productsRepository = {
    findProducts(searchTerm: string | null | undefined) {
        if (searchTerm) {
            return products.filter(p => p.productName.indexOf(searchTerm) > -1)
        }
        return products
    },
    createProduct(title: string) {
        const newProduct = {
            id: +(new Date()),
            productName: title
        }
        products.push(newProduct)
        return newProduct
    },
    getProductById(id: number) {
        return products.find(p => p.id === id)
    },
    updateProduct(id: number, title: string) {
        let product = products.find(p => p.id === id)
        if (product) {
            product.productName = title
            return product
        }
    },
    deleteProduct(id: number) {
        let product = products.findIndex(p => p.id === id)
        if (product > -1) {
            products.splice(product, 1)
            return true
        } else return false
    }
}