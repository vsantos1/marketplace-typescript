import { Router } from 'express'
import { CreateProductController } from '../Controllers/CreateProduct'
import { SearchProductController } from '../Controllers/SearchProducts'
import { UpdateProductController } from '../Controllers/UpdateProduct'
import { DeleteProductController } from '../Controllers/DeleteProduct'
import { FindByNameController } from '../Controllers/FindByName'

const router = Router()

const CreateProduct = new CreateProductController()
const SearchProducts = new SearchProductController()
const UpdateProduct = new UpdateProductController()
const DeleteProduct = new DeleteProductController()
const FindProduct = new FindByNameController()

router.get('/products', SearchProducts.handle)
router.get('/search', FindProduct.handle)

router.post('/products', CreateProduct.handle)
router.put('/product/:id', UpdateProduct.handle)
router.delete('/product/:id', DeleteProduct.handle)

export { router }
