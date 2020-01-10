module.exports = {
  "publicPath": "/",
  "outputDir": "dist",
  "assetsDir": "./static",
  "filenameHashing": true,
  "lintOnSave": false,
  "productionSourceMap": true,
  "transpileDependencies": [
    "vuetify"
  ],
  "pwa": {
    "iconPaths": {
      "favicon32": "bluebee-logo.png",
      "favicon16": "bluebee-logo.png",
      "appleTouchIcon": "bluebee-logo.png",
      "maskIcon": "bluebee-logo.png",
      "msTileImage": "bluebee-logo.png"
    }
  },
  "css": {
    "loaderOptions": {}
  },
  "configureWebpack": {
    "devtool": "source-map"
  },
  "devServer": {
    "host": "192.168.0.10",
    "port": 8000,
    "compress": false,
    "overlay": {
      "warnings": false,
      "errors": true
    }
  }
}