#!/bin/bash

npm install
./node_modules/.bin/vue init . build

cd build
npm install
npm test
npm run build
npm run dev



