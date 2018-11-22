// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/davidkrajewski/Desktop/coding/react/my-app/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/davidkrajewski/Desktop/coding/react/my-app/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/davidkrajewski/Desktop/coding/react/my-app/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/davidkrajewski/Desktop/coding/react/my-app/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/davidkrajewski/Desktop/coding/react/my-app/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/davidkrajewski/Desktop/coding/react/my-app/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/davidkrajewski/Desktop/coding/react/my-app/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/davidkrajewski/Desktop/coding/react/my-app/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/davidkrajewski/Desktop/coding/react/my-app/.cache/layouts/index.js")
}