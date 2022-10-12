#!/bin/bash

for d in /home/loremine/workspace/vms/vms1/companyPlaceholder-vms/companyPlaceholder-vms/backend/modules/companyPlaceholder/*; do
  if [ -d "$d" ]; then
	cd $d
 	
echo ; echo " Running Migration in" $d; echo ;

    ENVIRONMENT="local" npx sequelize-cli db:migrate
	
  fi
done 
