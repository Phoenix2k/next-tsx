module.exports = {
  defaultPathMap: {},
  exportPathMap: async function() {
    return {
      '/': {
        page: '/'
      },
      '/about': {
        page: '/about'
      }
    };
  },
  exportTrailingSlash: false
};
