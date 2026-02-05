import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/create-user.use-cases";

export class ApiController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async createUser(req: Request, res: Response) {
    try {
      const { name, email, labData } = req.body;
      const user = await this.createUserUseCase.execute(name, email, labData);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno guardando datos" });
    }
  }
}