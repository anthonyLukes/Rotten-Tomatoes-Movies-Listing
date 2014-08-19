#!/bin/bash

# For building on a Mac environment
# This does not require installation of nodejs as a prerequisite

# Build script path
BUILD=build-main.js

# r.js path
RJS=tools/node_modules/r/r.js

# Node paths
NODE_32=tools/mac/node32/bin/node;
NODE_64=tools/mac/node/bin/node;

# OS bit value
BIT=$(getconf LONG_BIT);

if [ $BIT == 64 ]
    then
        NODE=$NODE_64;
    else
        NODE=$NODE_32
fi

# Run node command
$NODE $RJS -o $BUILD