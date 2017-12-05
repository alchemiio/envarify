import findIndex from 'lodash.findindex';

import checkVariable from './checkVariable';
import logger from './logger';

const verifier = (paramVariables) => {

    let variables = paramVariables;

    if(!Array.isArray(paramVariables)){
        variables = [paramVariables];
    }


    let requiredMessages = [];
    let optionalMessages = [];

    //Process Required First
    variables.forEach(function(variable) {
        if (variable.isRequired === true) {
            requiredMessages.push(checkVariable(variable));
        }
    });

    requiredMessages.forEach(message => {
        logger(message);
    });

    //Process Optional Second
    variables.forEach(function(variable) {
        if (variable.isRequired === false) {
            optionalMessages.push(checkVariable(variable));
        }
    });

    optionalMessages.forEach(message => {
        logger(message);
    });

    const errorIndex = findIndex(requiredMessages, payload => {
        return payload.type == 'error';
    });

    if (errorIndex !== -1) {
        return {
            type: 'error',
            message:
                'Launch Prevented: A required Environment Variable was not defined.',
        };
    } else {
        return {
            type: 'info',
            message:
                'Launch Success: All required Environment Variables were defined.',
        };
    }
};

export default verifier;
