#!/bin/bash

PATH_TO_APP_FOLDER="/home/loremine/workspace/vms/vms1/companyPlaceholder-vms/companyPlaceholder-vms/backend"

cd "${PATH_TO_APP_FOLDER}"

npm run queue/listen/local
