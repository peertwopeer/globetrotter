
## Setup

- Checkout to the git local branch.
- Configure the local.env file with your local configuration (Your local IP address and ports), The local.env file is situated at backend/config/env/ folder.
- Switch your local nodejs version to 14.18.1 and run npm install command on both frontend and backend folders.
- Change the db volumes path to your local path in docker-compose.local.yaml file.
- Run the docker-compose command to run the app locally,

`command: docker-compose -f docker-compose.local.yaml up --build --force-recreate`

### Notes:

DB server and Mail server are running on docker containers.

Mail server web interface can access through http://0.0.0.0:1080/ this url.

To run the db migrations please execute the script file migration-run-local.sh

To send emails in queue please execute the script file mail-queue-local.sh

```
Docker version 20.10.1
Docker compose version 1.25.4
```
