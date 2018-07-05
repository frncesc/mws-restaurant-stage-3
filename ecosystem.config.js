module.exports = {
  apps : [{
    name: "restaurants",
    script: "./app.js",
    watch: true,
    env: {
      "NODE_ENV": "production",
    },
  }],
}

