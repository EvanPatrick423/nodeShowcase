#!/bin/#!/usr/bin/env bash
#echo "Starting Push"
git add --all
git status

CURRENTDATE=`date +"%d-%m-%Y %T"`
COMMITMESSAGE="Regular back up Date:"$CURRENTDATE

#echo Date: {$COMMITMESSAGE}

git commit -m "$COMMITMESSAGE"

git push https://EvanPatrick423:$gitKey@github.com/EvanPatrick423/nodeShowcase.git
