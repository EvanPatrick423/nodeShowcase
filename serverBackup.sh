#!/bin/#!/usr/bin/env bash

git add --all
git status

CURRENTDATE=`date +"%d-%m-%Y %T"`
COMMITMESSAGE="Regular back up Date:"$CURRENTDATE


git commit -m "$COMMITMESSAGE"

git push https://EvanPatrick423:$gitKey@github.com/EvanPatrick423/MinecraftServer.git
