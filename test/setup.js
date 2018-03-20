'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.config.includeStack = true;
