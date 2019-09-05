# errorhandler-ts-webpack-err
mvp to reproduce the errorhandler webpack error

# Steps to Reproduce
1. clone the repo
1. `npm install`
1. `npm test`

It should build the bundle into `dist/bundle.js` and attempt to execute it, after which it will immeditely fail on the `errorhandler` import.
