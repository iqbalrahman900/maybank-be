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
exports.ProductController = void 0;
const product_service_1 = require("../services/product.service");
class ProductController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_service_1.ProductService.getInstance().getAll();
                res.json(products);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_service_1.ProductService.getInstance().getById(req.params.id);
                res.json(product);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_service_1.ProductService.getInstance().create(req.body);
                res.status(201).json(product);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_service_1.ProductService.getInstance().update(req.params.id, req.body);
                res.json(product);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_service_1.ProductService.getInstance().delete(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProductController = ProductController;
