/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // distDir: 'dist',
    // output: 'export', // Export as a static site

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
