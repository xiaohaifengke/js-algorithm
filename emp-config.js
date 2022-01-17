const withVue3 = require('@efox/emp-vue3')
const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ProjectRootPath = path.resolve('./')
const { getConfig } = require(path.join(ProjectRootPath, './src/config'))
// const svgoLoaderConfigs = require(path.join(ProjectRootPath, './src/icons/svgo-loader.conf'))

const resolve = function (dir) {
  return path.join(process.cwd(), dir)
}
module.exports = withVue3(({ config, env, empEnv }) => {
  const confEnv = env === 'production' ? 'prod' : 'dev'
  const conf = getConfig(empEnv || confEnv)
  const port = conf.port
  const publicPath = conf.publicPath
  config.output.publicPath(publicPath)
  config.resolve.alias.set("@", resolve("datastructures"))
  config.resolve.alias.set("datastructures", resolve("datastructures"))
  config.devServer.port(port)
  // set svg-sprite-loader
  config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
  config.plugin("stylelint").use(StylelintPlugin, [{
    files: ['src/**/*.vue', 'src/styles/**/*.((s(c|a)|c)ss)'],
    fix: true
  }])
  // 配置 index.html
  config.plugin('html').tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: '智慧森防',
        // 远程调用项目的文件链接
        files: {
          js: [],
        },
      },
    }
    return args
  })
})
