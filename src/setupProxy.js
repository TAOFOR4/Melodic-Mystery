const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware("/track.get", {
        target: 'https://api.musixmatch.com/ws/1.1',
        changeOrigin: true,
      })
    );
    app.use(
        createProxyMiddleware("/track.lyrics.get", {
          target: 'https://api.musixmatch.com/ws/1.1',
          changeOrigin: true,
        })
      );
  };