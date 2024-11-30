import { ProductModel, IProductDocument } from '../models/product.model';
import { IProduct } from '../interfaces/product.interface';
import { AppError } from '../utils/AppError';

export class ProductService {
  private static instance: ProductService;

  private constructor() {}

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getAll(): Promise<IProductDocument[]> {
    const products = await ProductModel.find();
    if (!products.length) throw new AppError('No products found', 404);
    return products;
  }

  async getById(id: string): Promise<IProductDocument> {
    const product = await ProductModel.findById(id);
    if (!product) throw new AppError('Product not found', 404);
    return product;
  }

  async create(data: IProduct): Promise<IProductDocument> {
    return await ProductModel.create(data);
  }

  async update(id: string, data: Partial<IProduct>): Promise<IProductDocument> {
    const product = await ProductModel.findByIdAndUpdate(id, data, { 
      new: true, 
      runValidators: true 
    });
    if (!product) throw new AppError('Product not found', 404);
    return product;
  }

  async delete(id: string): Promise<void> {
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) throw new AppError('Product not found', 404);
  }
}