module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                wrap: "77rem",
            },
            colors: {
                "pir-gray": {
                    100: "#f5f5f5",
                    200: "#ebebeb",
                    300: "#d6d6d6",
                    400: "#adadad",
                    500: "#858585",
                    600: "#333333",
                    700: "#1f1f1f",
                    800: "#141414",
                    900: "#0a0a0a",
                },
                "pir-green": "#6ece9d",
                "pir-green-hover": "#91dab4",
                "pir-beige": "#faf8f5",
                "pir-yellow": "#ffce3d",
                "pir-yellow-hover": "#ffe082",
                "pir-red": "#e87b7b",
                "pir-blue": "#73b1f0",
            },
            fontFamily: {
                display: ["DM Sans", "sans-serif"],
            },
            maxWidth: {
                "35r": "35rem",
                "75r": "75rem",
            },
        },
    },
    plugins: [],
};
