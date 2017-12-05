'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash.findindex');

var _lodash2 = _interopRequireDefault(_lodash);

var _checkVariable = require('./checkVariable');

var _checkVariable2 = _interopRequireDefault(_checkVariable);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifier = function verifier(paramVariables) {

    var variables = paramVariables;

    if (!Array.isArray(paramVariables)) {
        variables = [paramVariables];
    }

    var requiredMessages = [];
    var optionalMessages = [];

    //Process Required First
    variables.forEach(function (variable) {
        if (variable.isRequired === true) {
            requiredMessages.push((0, _checkVariable2.default)(variable));
        }
    });

    requiredMessages.forEach(function (message) {
        (0, _logger2.default)(message);
    });

    //Process Optional Second
    variables.forEach(function (variable) {
        if (variable.isRequired === false) {
            optionalMessages.push((0, _checkVariable2.default)(variable));
        }
    });

    optionalMessages.forEach(function (message) {
        (0, _logger2.default)(message);
    });

    var errorIndex = (0, _lodash2.default)(requiredMessages, function (payload) {
        return payload.type == 'error';
    });

    if (errorIndex !== -1) {
        return {
            type: 'error',
            message: 'Launch Prevented: A required Environment Variable was not defined.'
        };
    } else {
        return {
            type: 'info',
            message: 'Launch Success: All required Environment Variables were defined.'
        };
    }
};

exports.default = verifier;