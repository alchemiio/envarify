'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = console.log;
var error = console.error;
var warn = console.warn;

var logger = function logger(payload) {

    if (payload.type === 'error') {
        error(_chalk2.default.red(payload.message));
    } else if (payload.type === 'warn') {
        warn(_chalk2.default.yellow(payload.message));
    } else if (payload.type === 'info') {
        log(_chalk2.default.blue(payload.message));
    } else {
        log(_chalk2.default.green(payload.message));
    }
};

exports.default = logger;