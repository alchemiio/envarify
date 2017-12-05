const checkVariable = (variable)=>{

    var variableName = variable.key;
    var isRequired = variable.isRequired;


    if(variable.isRequired === true){
        if(!process.env[variable.key]){
            return {
                type:'error',
                message:'Required process.env.'+variable.key+' not loaded.'
            }
        }else{
            return {
                type:'info',
                message:'Required process.env.'+variable.key+' was loaded.'
            }
        }
    }else{
        if(!process.env[variable.key]){
            return {
                type:'warn',
                message:'Optional process.env.'+variable.key+' not loaded.'
            }
        }
        else{
            return {
                type:'info',
                message:'Optional process.env.'+variable.key+' was loaded.'
            }
        }
    }
}

export default checkVariable;