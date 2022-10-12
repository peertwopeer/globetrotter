#!/bin/bash

for d in /var/website/vms.companyPlaceholder.io/backend/modules/companyPlaceholder/*; do
  if [ -d "$d" ]; then
	cd $d
 	
echo ; echo " Running Migration in" $d; echo ;

    ENVIRONMENT="production" npx sequelize-cli db:migrate
	
  fi
done 
