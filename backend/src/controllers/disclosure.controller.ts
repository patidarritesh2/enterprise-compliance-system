
import { Request, Response } from "express";
import { AppDataSource } from "../config/datasource";
import { Disclosure } from "../entities/Disclosure";

export const createDisclosure = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Disclosure);
  const disclosure = repo.create(req.body);
  await repo.save(disclosure);
  res.json(disclosure);
};

export const getDisclosures = async (_: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Disclosure);
  res.json(await repo.find());
};

export const approveDisclosure = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Disclosure);
  await repo.update(req.params.id, { status: "APPROVED" });
  res.json({ message: "Approved" });
};
