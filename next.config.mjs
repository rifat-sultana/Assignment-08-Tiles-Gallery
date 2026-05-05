/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  // bundler: 'webpack',
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
  
// };

// export default nextConfig;
