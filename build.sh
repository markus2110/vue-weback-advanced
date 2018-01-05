#!/bin/bash

P1=$1

npm install
./node_modules/.bin/vue init . build


if [ "$P1" == "run" ]; then
    cd build
    npm install
    npm run dev
fi