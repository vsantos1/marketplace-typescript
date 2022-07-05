import { Request, Response } from 'express'
import { prisma } from '../Database/prismaClient'
import { ProductInfo } from '../Database/ProductsInfo'

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const {
      id,
      product_name,
      description,
      product_url,
      price,
      updated_at
    }: ProductInfo = await request.body

    if (!id) {
      return response.status(400).json('Error id is mandatory!')
    }

    const ProductDoesntExist = await prisma.product.findUnique({
      where: {
        id
      }
    })
    if (!ProductDoesntExist) {
      return response.status(404).json('This product doesnt exists.')
    }

    const UpdateProduct = await prisma.product.update({
      where: {
        id
      },
      data: {
        product_name,
        description,
        product_url,
        price,
        updated_at
      }
    })

    return response.status(200).json(UpdateProduct)
  }
}
