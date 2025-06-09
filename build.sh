#!/bin/bash

# this will not work in powershell (as far as I can tell)

echo "starting"

# make sure you have one called armbuilder!
docker buildx use armbuilder

if [ "$1" = "prod" ]; then
    docker buildx build --platform linux/arm64 --push -f Dockerfile -t thomasmcnamara7/productivity-tool-frontend:manual --build-arg ENV=production .
elif [ "$1" = "dev" ]; then
    docker buildx build --platform linux/arm64 --push -f Dockerfile -t thomasmcnamara7/productivity-tool-frontend:manual --build-arg ENV=development .
else
    echo "image not recognized"
    exit 1
fi