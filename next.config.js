/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-native-svg"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all `react-native` imports to `react-native-web`
      "react-native": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = nextConfig; 