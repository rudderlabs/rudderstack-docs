#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
  gatsby build --prefix-paths
else 
  gatsby build
fi