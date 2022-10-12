#!/bin/bash

PATH_TO_APP_FOLDER="/var/website/companyPlaceholdervms/backend"

cd "${PATH_TO_APP_FOLDER}"

npm run queue/listen/dev
