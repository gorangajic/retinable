#!/bin/bash
webpack=node_modules/.bin/webpack
NODE_ENV=production $webpack lib/retinable.js dist/retinable.js
NODE_ENV=production COMPRESS=1 $webpack lib/retinable.js dist/retinable.min.js
