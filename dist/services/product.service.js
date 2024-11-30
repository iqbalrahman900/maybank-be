"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("../models/product.model");
const AppError_1 = require("../utils/AppError");
class ProductService {
    constructor() { }
    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_model_1.ProductModel.find();
            if (!products.length)
                throw new AppError_1.AppError('No products found', 404);
            return products;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.ProductModel.findById(id);
            if (!product)
                throw new AppError_1.AppError('Product not found', 404);
            return product;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield product_model_1.ProductModel.create(data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.ProductModel.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true
            });
            if (!product)
                throw new AppError_1.AppError('Product not found', 404);
            return product;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.ProductModel.findByIdAndDelete(id);
            if (!product)
                throw new AppError_1.AppError('Product not found', 404);
        });
    }
}
exports.ProductService = ProductService;
