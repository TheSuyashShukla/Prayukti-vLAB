import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/ui"],
    webpack: (config) => {
        config.resolve.alias["react"] = path.resolve(__dirname, "node_modules", "react");
        config.resolve.alias["react-dom"] = path.resolve(__dirname, "node_modules", "react-dom");
        return config;
    },
};

export default nextConfig;
