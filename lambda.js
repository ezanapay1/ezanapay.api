"use strict";
const awsLambdaFastify = require('@fastify/aws-lambda');
const main = require('./src/app');
const proxy = awsLambdaFastify(main());
exports.handler = proxy;
