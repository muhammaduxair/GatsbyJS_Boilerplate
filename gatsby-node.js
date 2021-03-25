/*
exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "product",
    component: require.resolve(`./src/templates/product.tsx`),
    context: {
      name: "Product Page",
      desc: "My Name is Uzair And I am JAMStack Developer.",
    },
  });
};
*/

// only client route baby step 07
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/product/)) {
    page.matchPath = "/product/*";
    // Update the page.
    createPage(page);
  }
};
