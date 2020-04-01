# (API) Security Plus
Backend for Security Plus app

## Getting Started

### Prerequisites

you need to have the following packages installed

```
Node and yarn
```

for install consult: 
* [Node](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/)

### Installing

```
git clone git@github.com:CleytonRR/security-.git
```
After:
```
cd security-/
```
then, install all dependencies
```
yarn install
```
when finished, create the .env file in the root folder, follow the instructions for creating

<img src='/src/img/img_readmi.png' height="500" width="500">

## Running the tests

For run the automated tests and sync database  use:
```
yarn test
```

## Running API

for run API use:

```
yarn start
```

## How to use

We have this routes
[POST] -> /user
[POST] -> /login
[POST] -> /newCall

[GET] -> /calls

[PUT] -> /changecall

**example build with [Insomnia](https://insomnia.rest/download/)**

**/user**
router use is a router which make create a new users
accepts email,  password , CPF, age and master in json format
<br />

**usage example:** 
<br />

<img src='/src/img/user.png' height="500" width="500">
<br />

**password** - should have length minimal 8 a character have a character caps lock, number and character special

**/login**
in this route should receive an email and password valid and return a token for authenticate and return master with true or false
<br />

**example**

<br />
<img src='/src/img/login.png' height="500" width="500">
<br />

**Authorization **
For authorization use token generated during login use: 

<img src='/src/img/authorization.png' height="500" width="500">


**/newcall**
<br />
this route is protected to access it, a token that was generated during login must pass in the request header.
This router create new calls this route should receive title, description,  status, latitude e longitude

**example**
<br />

<img src='/src/img/newcall.png' height="500" width="500">

**[GET] -> /calls**
<br />
This route has two possible returns, if the user is a master it returns all open calls, if the logged in user is a normal user it returns all cases created by him

**example**
<br />

<img src='/src/img/calls.png' height="500" width="500">

**[PUT] -> /changecall**
<br />
This route close a call, this route should receive id for call
**example**
<br />

<img src='/src/img/changecalls.png' height="500" width="500">

## Built With

* [Express](https://expressjs.com/) - The web framework used
* [Sequelize](https://sequelize.org/) - ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL
* [Bcrypt](https://mochajs.org/) - used for transform password in a hash
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Module for generator tokens
* [Mocha](https://mochajs.org/) - used for testing
* [Supertest](https://www.npmjs.com/package/supertest) - used to make requests in the api inside the test suite

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)



