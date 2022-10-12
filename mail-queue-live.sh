#!/bin/bash

PATH_TO_APP_FOLDER="/var/website/vms.companyPlaceholder.io/backend"

cd "${PATH_TO_APP_FOLDER}"

npm run queue/listen/live
