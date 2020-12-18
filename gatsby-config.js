
module.exports = {
    siteMetadata: {
        title: "Quarkly gatsby project",
        description: "",
        author: "@Артём Жигалин",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                include_favicon: false, // exclude favicons
            },
        },
        "gatsby-plugin-resolve-src",
        "gatsby-plugin-meta-redirect",
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // "gatsby-plugin-offline",
    ],
};