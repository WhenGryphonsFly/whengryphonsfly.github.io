#!/bin/bash

# $1 is directory, #2 is subdirectories and filename, $3 is password
read -s password
staticrypt "./$1_decrypted/$2" $password --config false --noremember --output ./$1/$2 --title "Password Protected"
