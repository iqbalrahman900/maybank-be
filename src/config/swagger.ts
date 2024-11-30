import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Maybank API',
      version: '1.0.0',
      description: 'API Products Maybank'
    },
    servers: [
      {
        url: 'http://13.213.59.244:3000',
        description: 'Production server'
      },
      {
        url: 'http://localhost:3000',
        description: 'Local Development'
      }
    ]
  },
  apis: [
    './src/routes/*.ts',
    './src/routes/*.js',
    './dist/routes/*.js',
    path.join(__dirname, '../routes/*.js')
  ]
};

export const specs = swaggerJsdoc(options);