#!/usr/bin/env bash

BASE_DIR=data
PROJECTS="ino productcatalog taskbox cashbox wakacje"
BRANCHES="master test"
VERSIONS=`seq 1 1 1` # first step last

rm -rvf $BASE_DIR

for PROJECT in $PROJECTS
do
    for BRANCH in $BRANCHES
    do
        for VERSION in $VERSIONS
        do
            DIR=$BASE_DIR/$PROJECT/$BRANCH/$VERSION
            CREATED_AT=`date +'%Y-%m-%d %H:%M:%S'`
            CREATED_BY='Piotr Okrój'
            FILE=$DIR/config.ini

            mkdir -p $DIR

            cat ./src/header.txt > $FILE

            sed -i "s/__PROJECT__/$PROJECT/" $FILE
            sed -i "s/__BRANCH__/$BRANCH/" $FILE
            sed -i "s/__VERSION__/$VERSION/" $FILE
            sed -i "s/__CREATED_AT__/$CREATED_AT/" $FILE
            sed -i "s/__CREATED_BY__/$CREATED_BY/" $FILE

            cat ./src/config.ini >> $FILE
        done
    done


done
