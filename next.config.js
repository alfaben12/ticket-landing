module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["i.postimg.cc"],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};
