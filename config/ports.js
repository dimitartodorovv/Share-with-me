const config = {
    development: {
        port: process.env.PORT || 3500
    },
    production: {
        port: 80
    }
};

module.exports = config[process.env.NODE_ENV.trim()]