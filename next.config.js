const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: 'default-src https://vitals.vercel-insights.com'
    }
]

module.exports = {
    poweredByHeader: false,
    images: {
        domains: [
            'https://still-depths-15850.herokuapp.com',
            'still-depths-15850.herokuapp.com',
            'res.cloudinary.com'
        ]
    },
}