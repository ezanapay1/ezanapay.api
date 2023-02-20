'use strict';


const app = require('./src/index.ts');
const serverless = require('serverless-http');

module.exports.hello = serverless(app);