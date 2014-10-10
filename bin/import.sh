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

echo extracting $filename to $import

unzip $filename -d $import

# clean-up before

echo cleaning up...
rm ./css/*
rm ./font/*

# import icomoon

echo importing files...
mv $import/demo.html ./index.html

mv $import/fonts/* ./font

mv $import/style.css ./css/podlovefont.css
mv $import/ie7/ie7.css ./css/podlovefont-ie7.css

# clean-up after

echo remove import folder
rm -rf $import
