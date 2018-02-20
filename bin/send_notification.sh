#!/bin/bash

curl -H "Content-Type: application/json" -X POST https://exp.host/--/api/v2/push/send -d '{
  "to": "ExponentPushToken[4sp40_Oo8HRdL1VNWEfcqd]",
  "title":"hello",
  "body": "world"
}'
