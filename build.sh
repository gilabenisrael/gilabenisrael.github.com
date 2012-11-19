#!/bin/bash
cd bootstrap
npm install
make bootstrap
cd ..
cp -r bootstrap/bootstrap/* assets/
cp bootstrap/js/*.js assets/js