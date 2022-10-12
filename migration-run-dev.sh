#!/bin/bash

for d in /var/website/companyPlaceholdervms/backend/modules/companyPlaceholder/*; do
  if [ -d "$d" ]; then
	cd $d
 	
echo ; echo " Running Migration in" $d; echo ;

    ENVIRONMENT="dev" npx sequelize-cli db:migrate
	
  fi
done 
