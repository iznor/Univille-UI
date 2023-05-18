module.exports = {
  apps : [{
    name   : "univille-fs",
    script : "./build/index.js",
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}
