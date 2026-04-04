import { Request, Response } from "express"
import { AppError } from "../utils/app-error.js"
import { z } from "zod"

export class ProductsController {
  /*
  index - GET para listar vários registros.
  show - GET para exibir um regristro específico.
  create - POST para criar um registro.
  update - PUT para atualizar um registro.
  remove - DELETE para deletar um registro.
  */

  index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {

    // Validação
    const bodySchema = z.object({ 
      name: z.string({ required_error: "Nome é obrigatório!"}).trim()
      .min(6, {message: "Name must be 6 or more characters."}),
      price: z.number({ required_error: "Preço é obrigatório!"})
      .positive({message: "Price must be positive!"})
      .gte(100),
      description: z.string().nullish()
    })

    const { name, price, description } = bodySchema.parse(request.body)

    /*
    if(!name) {
      throw new AppError("Nome do produto é obrigatório!", 400)
    }

    if(name.trim().length < 6) {
      throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres!")
    }

    if(!price) {
      throw new AppError("Preço do produto é obrigatório!", 400)
    }
    */
    
    // throw new Error("Erro ao tentar criar um produto!")
    // throw new AppError("Erro ao tentar criar um produto!")

    response.status(201).json({  name, price, description, user_id: request.user_id  })
  }
}