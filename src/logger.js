import chalk from 'chalk';

const log = console.log;
const error = console.error;
const warn = console.warn;

const logger = (payload)=>{

    if(payload.type === 'error'){
        error(chalk.red(payload.message))
    }else if(payload.type === 'warn'){
        warn(chalk.yellow(payload.message))
    }else if (payload.type === 'info'){
        log(chalk.blue(payload.message))
    }else{
        log(chalk.green(payload.message))
    }


}

export default logger;