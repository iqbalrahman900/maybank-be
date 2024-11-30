"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./config/swagger");
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://localhost:27017/productdb')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.specs));
app.use('/api/products', product_routes_1.default);
app.use(error_middleware_1.errorHandler);
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
