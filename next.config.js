module.exports = {
  async exportPathMap() {
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
