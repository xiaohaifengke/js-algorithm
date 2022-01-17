const env = process.env.EMP_ENV || 'dev'
const dev = {
  host: 'localhost',
  port: 5555,
  publicPath: '/',
  baseRemote: 'http://localhost:8006'
}
const prod = {
  host: '192.168.0.18',
  port: 5555,
  publicPath: '/',
  baseRemote: 'http://192.168.0.18:8006'
}
const configs = { dev, prod }
exports.getConfig = (env) => {
  return configs[env] || {}
}

exports.config = configs[env]
