const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Name',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      { url: 'http://localhost:3000' }

    ],
    components: {
  securitySchemes: {
    tokenAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'Use format: yourAccessToken',
    },
  },
},

    security: [
      {
        tokenAuth: [],
      },
    ],
  },
  apis: ['./Admin/routes/*.js', './User/routes/*.js'], // JSDoc route paths
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };