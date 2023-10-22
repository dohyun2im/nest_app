## Using brew

```
# install mysql
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ brew install mysql
$ brew services start mysql
$ mysql_secure_installation
$ mysql -u root -p
$ create database db;
$ show databases;
```

## .env.dev / .env.prod

```
DB_HOST=yourhost
DB_PORT=yourport
DB_NAME=db-name
DB_USER=db-user
DB_PASSWORD=db-pw
JWT_SECRET=yoursecret
```

## Installation

```bash
$ npm install yarn -g
$ yarn set version berry
$ yarn
$ add vscode extension ZipFs
$ yarn dlx @yarnpkg/sdks vscode
```

## Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API DOCS

```
http://localhost:8080/api-docs
```
