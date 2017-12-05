'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.envarify = undefined;

var _verifier = require('./verifier');

var _verifier2 = _interopRequireDefault(_verifier);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var envarify = function envarify(variables) {

    var result = (0, _verifier2.default)(variables);

    (0, _logger2.default)(result);

    if (result.type === 'error') {
        (0, _logger2.default)({ type: 'error', message: 'Terminating Application' });
        process.exit(1);
    }
};

exports.envarify = envarify;