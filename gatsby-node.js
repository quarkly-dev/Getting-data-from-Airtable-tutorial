
exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
    createRedirect({
        fromPath: "/index",
        toPath: "/",
        isPermanent: true,
        redirectInBrowser: true,
    });
};
