#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
  echo 'build with prefix-paths'
  gatsby build --prefix-paths
else 
  echo 'build without prefix-paths'
  gatsby build
fi