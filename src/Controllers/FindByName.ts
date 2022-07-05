import { Request, Response } from 'express'
import { prisma } from '../Database/prismaClient'

export class FindByNameController {
  async handle(request: Request, response: Response) {
    const query = request.query['q'].toString()
    const product_name = query

    const GetProductByName = await prisma.product.findUnique({
      where: {
        product_name
      },
      select: {
        product_name: true,
        price: true,
        bar_code: true,
        description: true
      }
    })

    if (GetProductByName === null) {
      return response
        .status(404)
        .json({ message: 'Product not found, try another.' })
    }

    return response.status(200).json(GetProductByName)
  }
}

// const GetProduct = await prisma.product
//       .findFirst({
//         where: {
//           product_name
//         },
//         select: {
//           product_name: true,
//           price: true,
//           bar_code: true,
//           description: true
//         }
//       })
//       .catch(() => response.json('404 not found'))
