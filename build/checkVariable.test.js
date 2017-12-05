'use strict';

var _checkVariable = require('./checkVariable');

var _checkVariable2 = _interopRequireDefault(_checkVariable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('checkVariable with environment variable set', function () {
    beforeEach(function () {
        process.env['REQUIRED_ENVIRONMENTAL_VARIABLE'] = 'VALUE';
    });

    afterEach(function () {
        delete process.env['REQUIRED_ENVIRONMENTAL_VARIABLE'];
    });

    test('Success payload will be returned if required Node Environmental Variable is set', function () {
        var variable = {
            key: 'REQUIRED_ENVIRONMENTAL_VARIABLE',
            isRequired: true
        };

        var result = (0, _checkVariable2.default)(variable);

        expect(result.type).toEqual('info');
        expect(result.message).toEqual('Required process.env.REQUIRED_ENVIRONMENTAL_VARIABLE was loaded.');
    });
});

describe('checkVariable with environment variable not set', function () {

    test('Error payload will be returned if required Node Environmental Variable is not set', function () {
        var variable = {
            key: 'REQUIRED_ENVIRONMENTAL_VARIABLE',
            isRequired: true
        };

        var result = (0, _checkVariable2.default)(variable);

        expect(result.type).toEqual('error');
        expect(result.message).toEqual('Required process.env.REQUIRED_ENVIRONMENTAL_VARIABLE not loaded.');
    });
});