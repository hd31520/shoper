/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co", // Corrected hostname
            },
        ],
    },
};







export default nextConfig;
