#!/bin/bash
ls | xargs -n1 | sed -e 's/\.jpg//' | xargs -n1 -I% convert -resize x400 %.jpg %.4.jpg

