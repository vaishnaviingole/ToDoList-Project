const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    (req, res) => {
        const { taskId } = req.params; // Extract the taskId from the route parameter
  
        // Build the target URL with the taskId
        const targetUrl = `http://localhost:8080/api/completeTODoItem/${taskId}`;
  
        // Proxy the request to the dynamically constructed target URL
        createProxyMiddleware({
          target: targetUrl,
          changeOrigin: true,
        })(req, res);
      }
    );
};