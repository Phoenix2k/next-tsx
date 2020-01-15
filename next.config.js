module.exports = {
  exportTrailingSlash: false,
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  },
  defaultPathMap: {}
};
