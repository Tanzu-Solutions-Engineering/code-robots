#!/usr/bin/env bash
cd ./backend-banking/
./mvnw clean package

cd ../backend-investments/
./mvnw clean package

cd ../backend-linesofcredit
./mvnw clean package

cd ..