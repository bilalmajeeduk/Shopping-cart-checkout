const assert = require('chai').assert;
var should = require('chai').should()
const app = require('../src/main');

describe('Shopping checkout ', function () {

    it('input quantity must be number', function () {
        let result = app.calculateOfferBuyOneGetOne(5)
        assert.typeOf(result, 'number')
    })
    it('buy one get one', function () {
        let result = app.calculateOfferBuyOneGetOne(1)
        assert.typeOf(result, 'number')
    })
    it('buy one get one multiple items', function () {
        let result = app.calculateOfferBuyOneGetOne(5)
        assert.strictEqual(result, 9.33);
    })
    it('bulk purchase, if item quantity is 3 or more price drop to £4.50 each', function () {
        let result = app.calculateOfferBulkPurchase(3)
        assert.strictEqual(result, 13.50);
    })
    it('bulk purchase, if item quantity is less than 3 charge full price', function () {
        let result = app.calculateOfferBulkPurchase(2)
        assert.strictEqual(result, 10);
    })


})