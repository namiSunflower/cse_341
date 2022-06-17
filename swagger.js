const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Temple API',
      description: 'This API shows a list of different temples',
    },
    host: '//polar-spire-69659.herokuapp.com',
    schemes: ['http'],
  };

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);