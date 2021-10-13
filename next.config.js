module.exports = {
    poweredByHeader: false,
    images: {
        //loader: 'cloudinary',
        domains: [
            'https://still-depths-15850.herokuapp.com',
            'still-depths-15850.herokuapp.com',
            'res.cloudinary.com'
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
}