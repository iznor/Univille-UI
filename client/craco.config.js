const path = require('path');

module.exports = {
    webpack: {
        resolve: {
            fallback: {
                "process": require.resolve("process/browser")
            }
        }
    }
};
