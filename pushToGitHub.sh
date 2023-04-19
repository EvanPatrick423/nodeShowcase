#!/bin/#!/usr/bin/env bash

COMMITMESSAGE=$1


git commit -m "$COMMITMESSAGE"

git push https://EvanPatrick423:$gitKey@github.com/EvanPatrick423/nodeShowcase.git
