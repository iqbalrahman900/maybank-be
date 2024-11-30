import mongoose, { Document, Schema } from 'mongoose';
import { IProduct } from '../interfaces/product.interface';

export interface IProductDocument extends IProduct, Document {}

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be positive']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Electronics', 'Clothing', 'Food', 'Books']
  },
  description: String
}, { timestamps: true });

export const ProductModel = mongoose.model<IProductDocument>('Product', productSchema);