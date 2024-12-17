/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        CONVERTKIT_FORM_ID: '7383840',
        CONVERTKIT_API_KEY: 'OkPhSKjNl04tilbYMuSU-C29gdXdTMAHF3QRyUu09_c'
    }
}

module.exports = nextConfig 