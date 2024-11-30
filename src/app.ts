import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger';
import productRoutes from './routes/product.routes';
import { errorHandler } from './middleware/error.middleware';

const app: Application = express();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/maybank';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb:27017/maybank';


mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/products', productRoutes);
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));