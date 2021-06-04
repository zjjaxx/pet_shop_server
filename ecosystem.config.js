// const path=require("path")
module.exports = {
    apps: [
      {
        name: 'pet_shop',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './index.js',
        // script:'server/index.js',
        env:{
          "NODE_ENV":"production"
        },
        // args: `-c ${path.join(__dirname, '/nuxt.config.js')} start`,
        error_file:"./pm2_output/pm2_err.log",
        out_file:"./pm2_output/pm2_out.log"
      }
    ]
}
