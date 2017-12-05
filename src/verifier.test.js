import verifier from './verifier';

describe('Verifier with Node Envs Set', ()=>{

    beforeEach(()=>{
        process.env.REQUIRED_ENVIRONMENTAL_VARIABLE = 'ipsum';
        process.env.OPTIONAL_ENVIRONMENTAL_VARIABLE = 'ipsum';
    })

    afterEach(() => {
        delete process.env.REQUIRED_ENVIRONMENTAL_VARIABLE;
        delete process.env.OPTIONAL_ENVIRONMENTAL_VARIABLE;
    });


    test("Verifier returns correct 'error' payload type, when REQUIRED ENVIRONMENTAL VARIABLE IS NOT SET.", ()=>{

        const variable = {key:'OTHER_REQUIRED_ENVIRONMENTAL_VARIABLE', isRequired:true};
        const result = verifier(variable);

        expect(result.type).toEqual('error');
    });

    test("Verifier returns correct 'info' payload type, when REQUIRED ENVIRONMENTAL VARIABLE IS SET.", ()=>{

        const variable = {key:'REQUIRED_ENVIRONMENTAL_VARIABLE', isRequired:true};
        const result = verifier(variable);

        expect(result.type).toEqual('info');

    });

})