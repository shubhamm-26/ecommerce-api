const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        info: {
            title: 'E-Commerce API',
            version: '1.0.0',
            description: 'API documentation for an e-commerce application',
        },
    },
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
