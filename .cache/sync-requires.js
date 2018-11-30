// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/json/404.json"),
  "index.json": require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/json/index.json"),
  "page-2.json": require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/json/page-2.json"),
  "404-html.json": require("/Users/davidkrajewski/Desktop/coding/react/mobius-site/.cache/json/404-html.json")
}