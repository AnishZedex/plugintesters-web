/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'theburnhambox.com',
            },
        ],
    },
}

module.exports = nextConfig
