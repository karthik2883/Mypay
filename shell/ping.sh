#!/bin/bash
## Notification
while true;
do
   nc -vz localhost 8545
  if [ $? -eq 0 ]
  then    
     echo "working geth 1";
     sleep 3s
 else
    echo " /******** exit geth **********/" $?   
    sendemail -l email.log     \
      -f "from@mail.com"   \
      -u "geth went down "     \
      -t "to@mail" \
      -m "Hello world geth is down " \
      -s "smtp.gmail.com:587"  \
      -o tls=yes \
      -xu "gmailusername" \
      -xp "gmailpassword" \
      -o message-file="mailbody.txt"
    exit 0
 fi
done