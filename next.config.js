const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: 'default-src https://vitals.vercel-insights.com'
    }
]

module.exports = {
    poweredByHeader: false,
    images: {
        //loader: 'cloudinary',
        domains: [
            'https://still-depths-15850.herokuapp.com',
            'still-depths-15850.herokuapp.com',
            'res.cloudinary.com'
        ]
    }
    /*,
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' }
        }
    }
    */
}