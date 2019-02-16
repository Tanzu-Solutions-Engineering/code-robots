#!/usr/bin/env bash
SDM_HOME=/Users/jwilliams/atomist/projects/jwilliams-pivotal/code-robots
npm install -g @atomist/cli
atomist create sdm

cp -rp ./@atomist ${SDM_HOME}/node_modules

atomist start --local