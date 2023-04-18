#!/bin/#!/usr/bin/env bash
#echo "Starting Push"
git add *
git status

CURRENTDATE=`date +"%d-%m-%Y %T"`
COMMITMESSAGE="Regular back up Date:"$CURRENTDATE

#echo Date: {$COMMITMESSAGE}

git commit -m "$COMMITMESSAGE"
git push origin
EvanPatrick423
$gitKey
