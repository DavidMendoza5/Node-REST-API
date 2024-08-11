# NodeJS API
## Node API with express, sequelize and postgres
## Before running the project
- Create a .env file based on .env.example: `cp .env.example .env`
- Create a config.js file based on sequelice-cli-config-example.js: `cp src/database/sequelice-cli-config-example.js src/database/config.js`
### Run the project:
- Docker: 
    `docker-compose up`
- Local:
    - Install postgreSql to connect this project with a database or use a docker container and create a data base: `docker run -d --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5434:5432 postgres`
    - Install dependencies with the following command: `npm install`
    - Running the server: `npm run dev`
#### Default user credentials are the same you added on .env file:
```
email: DEFAULT_EMAIL
password: DEFAULT_PASSWORD
```