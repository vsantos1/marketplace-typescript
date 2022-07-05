import { Request, Response } from 'express'
import { prisma } from '../Database/prismaClient'

export class SearchProductController {
  async handle(request: Request, response: Response) {
    const GetProduct = await prisma.product
      .findMany()
      .catch(() => response.status(404).json('404 not found'))
    return response.status(200).json(GetProduct)
  }
}
