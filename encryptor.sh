#!/bin/bash

# $1 is directory, #2 is subdirectories and filename
echo "Enter password:"
read -s password
echo "Confirm password:"
read -s passwordCheck

if [[ $password == $passwordCheck ]]; 
then staticrypt "./$1_decrypted/$2" $password --config false --noremember --output ./$1/$2 --title "Password Protected"; echo "Success!";
else echo "Passwords do not match!";
fi
