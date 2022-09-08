#!/bin/sh

# $1 is direcotry, #2 is subdirectories and filename, $3 is password
staticrypt "./$1_decrypted/$2" $3 --config false --noremember --output ./$1/$2 --title "Password Protected"
