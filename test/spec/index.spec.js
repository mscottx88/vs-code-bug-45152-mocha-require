'use strict';

const sinon = require('sinon');
const expect = require('chai').expect;

const index = require('../../index');

describe('index', () => {
  let sandbox;

  let stubCallback;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();

    stubCallback = sandbox.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('foo', () => {
    it('takes a callback and calls it back!', () => {
      index.foo(stubCallback);
      expect(stubCallback).calledOnce.and.calledWithExactly();
    });
  });
});
