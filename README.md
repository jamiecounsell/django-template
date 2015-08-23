#Think4 Procurement and Contracting

## Starting up

Starting up is easy. Just clone the repository, install dependencies, and run `manage.py`.

###Prerequisites
The following are required:

* `npm`
* `bower`
* `pip`
* `brew`, `apt-get`, or `yum`

### Installation

* Clone the repository:

```
$ git clone git@github.com:jamiecounsell/procurement.git
$ cd procurement/
```

* [Install PostgreSQL](#installing-postgresql)

* Install dependencies:

```
$ npm install
$ bower install
$ pip install -r requirements.txt
```
* Configure the [.env file](#env)  

* Run the server:

```
$ ./app/manage.py
```

## .env

A .env file is required to configure system-wide settings. The format of the file is below. For strings containing spaces, use quotations. Avoid spaces between the key and the value.

```
SECRET_KEY=
DEBUG=

# Databases
default.ENGINE='django.db.backends.postgresql_psycopg2'
default.NAME=
default.USER=
default.PASSWORD=
default.HOST=
default.PORT=
```

## Installing PostgreSQL

###OSX
* Install PostgreSQL for devel support

   ```
   $ brew install postgresql
   ```
* Configure PostgreSQL or use [postgresqpp](http://postgresapp.com/) (recommended)

* Add configuration to `.env`.