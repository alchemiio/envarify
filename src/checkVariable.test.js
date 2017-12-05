import checkVariable from './checkVariable';

describe('checkVariable with environment variable set', () => {
    beforeEach(() => {
        process.env['REQUIRED_ENVIRONMENTAL_VARIABLE'] = 'VALUE';
    });

    afterEach(() => {
        delete process.env['REQUIRED_ENVIRONMENTAL_VARIABLE'];
    });

    test('Success payload will be returned if required Node Environmental Variable is set', () => {
        const variable = {
            key: 'REQUIRED_ENVIRONMENTAL_VARIABLE',
            isRequired: true,
        };

        const result = checkVariable(variable);

        expect(result.type).toEqual('info');
        expect(result.message).toEqual(
            'Required process.env.REQUIRED_ENVIRONMENTAL_VARIABLE was loaded.',
        );
    });
});

describe('checkVariable with environment variable not set', () => {

    test('Error payload will be returned if required Node Environmental Variable is not set', () => {
        const variable = {
            key: 'REQUIRED_ENVIRONMENTAL_VARIABLE',
            isRequired: true,
        };

        const result = checkVariable(variable);

        expect(result.type).toEqual('error');
        expect(result.message).toEqual(
            'Required process.env.REQUIRED_ENVIRONMENTAL_VARIABLE not loaded.'
        );
    });
});
