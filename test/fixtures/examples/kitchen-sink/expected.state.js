module.exports = {
  "entry": {
    "client": [
      "/Users/Eric/Projects/ericclemmons/terse-webpack/src/client.js"
    ]
  },
  "loader": {
    ".js": [
      {
        "loader": "babel",
        "exclude": /node_modules/,
        "query": {
          "cacheDirectory": true
        }
      }
    ],
    ".json": [
      {
        "loader": "json"
      }
    ],
    ".css": [
      {
        "loader": "style"
      },
      {
        "loader": "css",
        "query": {
          "localIdentName": "[name]-[local]--[hash:base64:5]"
        }
      }
    ],
    ".jpg": [
      {
        "loader": "url",
        "query": {
          "limit": 8192
        }
      }
    ],
    ".png": [
      {
        "loader": "url",
        "query": {
          "limit": 8192
        }
      }
    ]
  },
  "modules": [
    "/Users/Eric/Projects/ericclemmons/terse-webpack/lib",
    "node_modules"
  ],
  "output": {
    "path": "/Users/Eric/Projects/ericclemmons/terse-webpack/build/client"
  },
  "plugin": {
    "webpack.DefinePlugin": [
      {
        "__CLIENT__": true,
        "__ENV__": "\"development\"",
        "__SERVER__": false,
        "process.env.NODE_ENV": "\"development\""
      }
    ],
    "npm-install-webpack-plugin": []
  },
  "sourcemap": "cheap-module-eval-source-map",
  "target": "web",
}
