//controller product maybank
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await ProductService.getInstance().getAll();
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product = await ProductService.getInstance().getById(req.params.id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product = await ProductService.getInstance().create(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product = await ProductService.getInstance().update(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await ProductService.getInstance().delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}