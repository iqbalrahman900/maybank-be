"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../utils/AppError");
const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof AppError_1.AppError ? err.statusCode : 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};
exports.errorHandler = errorHandler;
