import { Request, Response } from "express";
import { prisma } from "../Database/prismaClient";
import { ProductInfo } from "../Database/ProductsInfo";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { product_name, price, description, product_url }: ProductInfo = request.body;

    const AddNewProduct = await prisma.product.create({
      data: {
        product_name,
        price,
        description,
        product_url,
      },
    });

    return response.status(200).json({
      message: {
        status: "Product created sucessifuly",
        product_data: AddNewProduct,
      },
    });
  }
}
