#!/bin/#!/usr/bin/env bash
#echo "Starting Push"
git add *
git status

CURRENTDATE=`date +"%d-%m-%Y %T"`
COMMITMESSAGE="Regular back up Date:"$CURRENTDATE

#echo Date: {$COMMITMESSAGE}

git commit -m "$COMMITMESSAGE"
echo $gitKey
#git push https://EvanPatrick423:$gitKey@github.com/EvanPatrick423/nodeShowcase.git
