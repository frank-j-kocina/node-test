#! /bin/bash

pgrep -f "node index.js" | xargs kill
