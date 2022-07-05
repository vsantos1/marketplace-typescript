import express from 'express'
import { router } from './routes/routes'

//REQUESTS TO JSON
const server = express()

//MIDDLEWARE REQUESTS DO TIPO JSON
server.use(express.json())

server.use(router)
//LOCALHOST PROT 3000
server.get('/', (request, response) => {
  return response.json({
    message: 'Hello world,from backend',
    status_code: '200',
    tecnologies: '@Typescript-prisma-mysql-docker'
  })
})

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running up at %d ', 3000)
})
