#!/bin/bash
ls | xargs -n1 | sed -e 's/\.jpg//' | xargs -n1 -I% convert -thumbnail 200 %.jpg %.thumb.jpg

