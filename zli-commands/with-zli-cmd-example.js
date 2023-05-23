
export const OPTS = {
    name: 'with-zli-cmd-example',
    description: 'An example of how to use withZliCmd()',
}

withZliCmd(secretsCmd => {
    secretsCmd({fetchAll: true, password: 1234});
}, 'secrets.js');

debug(Object.keys(CMD));
