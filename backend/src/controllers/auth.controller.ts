
import { Request, Response } from "express";
import { AppDataSource } from "../config/datasource";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(User);
  const user = await repo.findOneBy({ email: req.body.email });

  if (!user) return res.status(400).json({ message: "User not found" });

  // const match = await bcrypt.compare(req.body.password, user.password);
  // if (!match) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id, role: user.role }, "SECRET_KEY", { expiresIn: "1d" });
  res.json({ token, role: user.role });
};
