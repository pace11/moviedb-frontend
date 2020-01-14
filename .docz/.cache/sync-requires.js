const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macos/Documents/Learn/React/moviedb-frontend/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/macos/Documents/Learn/React/moviedb-frontend/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/macos/Documents/Learn/React/moviedb-frontend/.docz/src/pages/404.js")))
}

