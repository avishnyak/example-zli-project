export const OPTS = {
    name: 'secrets',
    description: 'Commands for fetching/updating secrets from secret store',
    options: [
        {
            name: 'fetch-all',
            description: 'Fetch all secrets from store',
            type: OPTION_TYPES.BOOLEAN,
        },
        {
            name: 'password',
            description: 'Password for secret store',
            type: OPTION_TYPES.PASSWORD,
            required: true,
        }
    ]
}

useOpts(() => {
    echo('DO THE THING TO FETCH');
}, 'fetchAll', 'password');

echo(`You should see this output whether or not you provide the fetch options`);

