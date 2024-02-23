module.exports = api => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isTest = api.env('test');
    // You can use isTest to determine what presets and plugins to use.

    return {
        presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-typescript',
        ],
    };
};
