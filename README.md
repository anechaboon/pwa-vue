# vue-pwa-example

Just an example on how to set up some PWA functionality with custom Service-workers 
in a project created by Vue CLI.

How to get PWA functionality running?
Run `yarn build`, and serve the `dist` folder over https (for example using npm package
http-server). Hit `https://localhost:8080` and you should be able to get:
- install prompts
- notifications when new content is available

(to get the new content notifications, try to add some comments in `/dist/service-worker.js`,
and reload the server deployment.)

This repo belongs with the Medium article on [Vue PWA's](https://medium.com/@kobededecker/vue-pwa-example-298a8ea953c9).




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
