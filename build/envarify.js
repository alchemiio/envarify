'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = envarify = function envarify(variables) {

    var failed = false;

    //Process Required First
    variables.forEach(function (variable) {

        var variableName = variable.key;
        var isRequired = variable.isRequired;

        if (variable.isRequired === true) {
            if (!process.env[variable.key]) {
                console.error('Error: required process.env.' + variable.key + ' not loaded.');
                failed = true;
            } else {
                console.log('required process.env.' + variable.key + ' was loaded.');
            }
        }
    });

    console.log('\n');
    //Process Optional Second
    variables.forEach(function (variable) {

        var variableName = variable.key;
        var isRequired = variable.required;

        if (variable.isRequired === false) {
            if (!process.env[variable.key]) {
                console.log('optional process.env.' + variable.key + ' not loaded.');
            } else {
                console.log('optional process.env.' + variable.key + ' was loaded.');
            }
        }
    });
    console.log('\n');

    if (failed) {
        console.error('A required ENV VAR was not defined.');
    }
};