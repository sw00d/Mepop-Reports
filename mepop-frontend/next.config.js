module.exports = {
  target: 'serverless',
  webpack (config, { dev }) {
    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }
    return config
  }
}
