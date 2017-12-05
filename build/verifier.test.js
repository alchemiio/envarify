'use strict';

var _verifier = require('./verifier');

var _verifier2 = _interopRequireDefault(_verifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Verifier with Node Envs Set', function () {

    beforeEach(function () {
        process.env.REQUIRED_ENVIRONMENTAL_VARIABLE = 'ipsum';
        process.env.OPTIONAL_ENVIRONMENTAL_VARIABLE = 'ipsum';
    });

    afterEach(function () {
        delete process.env.REQUIRED_ENVIRONMENTAL_VARIABLE;
        delete process.env.OPTIONAL_ENVIRONMENTAL_VARIABLE;
    });

    test("Verifier returns correct 'error' payload type, when REQUIRED ENVIRONMENTAL VARIABLE IS NOT SET.", function () {

        var variable = { key: 'OTHER_REQUIRED_ENVIRONMENTAL_VARIABLE', isRequired: true };
        var result = (0, _verifier2.default)(variable);

        expect(result.type).toEqual('error');
    });

    test("Verifier returns correct 'info' payload type, when REQUIRED ENVIRONMENTAL VARIABLE IS SET.", function () {

        var variable = { key: 'REQUIRED_ENVIRONMENTAL_VARIABLE', isRequired: true };
        var result = (0, _verifier2.default)(variable);

        expect(result.type).toEqual('info');
    });
});