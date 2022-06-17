const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'My Contacts API',
      description: 'This API shows a list of close family and friends',
    },
    host: 'polar-spire-69659.herokuapp.com',
    schemes: ['https'],
  };

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);