#!/bin/sh
#
# import zip from icomoon
#

filename=$1
import=./import

if [ ! -f $filename ]
then
  echo $filename does not exist
  exit 1
fi

echo
echo extracting $filename to $import
echo

unzip $filename -d $import

echo
echo cleaning up...

rm ./css/*
rm ./font/*
rm ./demo-files/*

echo
echo importing files...
echo

echo - move icomoon project file
mv $import/selection.json ./selection.json

echo - move demo files
mv $import/demo-files ./

echo - move font files
mv $import/fonts/* ./font

echo - build index.html
sed 's/style\.css/css\/podlove-font\.css/' $import/demo.html > $import/tmp1.html
sed 's/ie7\/ie7\.css/css\/podlove-font-ie7\.css/' $import/tmp1.html > index.html

echo - adapt paths and move the styles
sed 's/fonts\//..\/font\/$1/g' $import/style.css > css/podlove-font.css
mv $import/ie7/ie7.css ./css/podlove-font-ie7.css

echo
echo remove import folder...
rm -rf $import

