import verifier from './verifier';
import logger from './logger';

const envarify = (variables)=>{

    const result = verifier(variables);

    logger(result);

    if(result.type === 'error'){
        logger({type:'error', message:'Terminating Application'});
        process.exit(1);
    }
}


export {envarify};