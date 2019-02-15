#!/usr/bin/env bash
cd ./backend-banking/
./mvnw clean package

cd ../backend-banking-legacy/
mvn clean package

cd ../backend-investments/
./mvnw clean package

cd ../backend-linesofcredit
./mvnw clean package

cd ../web-gateway
npm install

cd ../web-gui
npm run build

cd ..

cf push -f manifest.yml --vars-file variables.yml