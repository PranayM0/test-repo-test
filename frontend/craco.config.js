const path = require("path");
require("dotenv").config();

const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === "true",
  enableVisualEdits: process.env.REACT_APP_ENABLE_VISUAL_EDITS === "true",
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      if (config.disableHotReload) {
        webpackConfig.devServer = {
          ...webpackConfig.devServer,
          hot: false,
          liveReload: false,
        };
      }
      return webpackConfig;
    },
  },
  devServer: (devServerConfig) => {
    if (config.enableVisualEdits && typeof setupDevServer === "function") {
      return setupDevServer(devServerConfig);
    }
    return devServerConfig;
  },
};
