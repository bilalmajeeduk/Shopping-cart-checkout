const assert = require('chai').assert;
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

})