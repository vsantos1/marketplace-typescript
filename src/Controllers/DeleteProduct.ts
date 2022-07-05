import { Request, Response } from 'express';
import { prisma } from '../Database/prismaClient';
import { ProductInfo } from '../Database/ProductsInfo';

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id }: ProductInfo = await request.body;

    if (!id) {
      return response.status(404).json('ID is required!');
    }
    const ThisProductExists = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!ThisProductExists) {
      return response.status(404).json('This product doesnt exists');
    }

    const DeleteProduct = await prisma.product.delete({
      where: {
        id,
      },
    });

    return response.status(200).json({ message: 'Succesifuly deleted product', DeleteProduct });
  }
}
