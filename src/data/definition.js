export default {
  "application": {
    "assetscache": "19661021153344",
    "env": "prod",
    "debug": false,
    "locale": "pl",
    "locales": "pl,en",
    "name": "INO2015",
    "short_name": "ino2015",
    "version": 1,
    "description": "System zarz\u0105dzania potrzebami klient\u00f3w",
    "secret": "d41d8cd98f00b204e9800998ecf8427e",
    "url": "http:\/\/ino.enovatis.pl",
    "api.url": "http:\/\/ino.enovatis.pl",
    "frontend.url": "http:\/\/frontend.enovatis.pl",
    "product.api.url": "http:\/\/productcatalog.enovatis.pl",
    "ep.url": "http:\/\/easypartner.pl",
    "asterisk.api.url": "http:\/\/api.asterisk.l:8080",
    "enovatis.api.url": "http:\/\/api.enovatis.pl\/api\/rpc.json",
    "taskbox.api.url": "http:\/\/taskbox.enovatis.pl",
    "cashbox.url": "http:\/\/beta.cashbox.enovatis.pl\/api",
    "checkservice": true,
    "allowMultipleLogins": false,
    "offer.firstminute.name": "First Minute",
    "offer.firstminute.enabled": true,
    "offer.firstminute.from": "2017-04-21",
    "offer.firstminute.to": "2017-10-31",
    "offer.firstminute.id": -4,
    "offer.custom.0.name": "Przedsprzeda\u017c",
    "offer.custom.0.enabled": true,
    "offer.custom.0.from": "2017-11-01",
    "offer.custom.0.to": "2018-03-30",
    "offer.custom.0.id": -10
  },
  "offer_list_pager": {
    "limit": 10,
    "length": 10,
    "max_pages": 10
  },
  "merlin": {
    "email": "sales@easygo.pl"
  },
  "break_time": {
    "maxDuration": 3000
  },
  "evcall": {
    "login": true
  },
  "reservation": {
    "fixed.enabled": true,
    "fake": false,
    "webformDelay": 300,
    "webformSession": 1800,
    "dopCancel": true
  },
  "synchronisation": {
    "easypartner": true,
    "easypartnerPayments": true
  },
  "online": {
    "providers": [
      740,
      17,
      10907,
      11010,
      1588,
      11003,
      105,
      79,
      1135,
      1711,
      1505,
      249,
      552,
      11207,
      11211,
      11213
    ]
  },
  "exceptions": {
    "providers": [
      11201,
      10965,
      11009
    ]
  },
  "providers": {
    "email": "kontrahenci@enovatis.pl"
  },
  "sixpayment": {
    "serviceUrl": "https:\/\/secure.przelewy24.pl",
    "returnUrl": "http:\/\/gate.enovatis.pl\/gate.php",
    "merchantId": 28974,
    "crcKey": "c048084eb3875b72"
  },
  "brands": [],
  "websocket": {
    "enabled": true
  },
  "aftersale": {
    "dopEmail": "dop@wakacje.pl",
    "email": "dop@wakacje.pl",
    "notificationEmail": "koordynatorzy@enovatis.pl"
  },
  "mailer": {
    "spool": true,
    "host": "mail.enovatis.pl",
    "port": 25,
    "security": "",
    "username": "",
    "password": "",
    "from.email": "ino2015@enovatis.pl",
    "from.name": "INO2015 BOK"
  },
  "asterisk": {
    "office": 270,
    "dop": 555,
    "log": true
  },
  "database": {
    "adapter": "Postgresql",
    "host": "postgres-master.l",
    "username": "app_ino",
    "password": "2nTGHGhqr3$9zkW?",
    "dbname": "ino"
  },
  "admdatabase": {
    "adapter": "Postgresql",
    "host": "postgres-master.l",
    "username": "app_ino",
    "password": "2nTGHGhqr3$9zkW?",
    "dbname": "ino"
  },
  "sourcedatabase": {
    "adapter": "mysql",
    "charset": "utf8",
    "host": "db-slave",
    "username": "ino",
    "password": "rGg58k5rZ736",
    "dbname": "wakacje2"
  },
  "sourcedatabasemaster": {
    "adapter": "mysql",
    "charset": "utf8",
    "host": "db-master",
    "username": "ino",
    "password": "rGg58k5rZ736",
    "dbname": "wakacje2"
  },
  "sourcedatabaseslavelong": {
    "adapter": "mysql",
    "charset": "utf8",
    "host": "db-slave-long",
    "dbname": "wakacje2",
    "username": "ino",
    "password": "rGg58k5rZ736"
  },
  "postfixdatabase": {
    "adapter": "mysql",
    "charset": "utf8",
    "host": "db-ino-dev.l",
    "username": "plorenc",
    "password": "ahTahv7iem3s",
    "dbname": "postfix"
  },
  "eastdatabase": {
    "adapter": "Postgresql",
    "host": "postgres-dev.l",
    "username": "east_adm",
    "password": "IGh3eiLe2zoo",
    "dbname": "east"
  },
  "gridFS": {
    "server.hosts": [
      "gridfs-1.l",
      "gridfs-2.l",
      "gridfs-3.l"
    ],
    "server.replicaSet": "rsgrid",
    "database.attachments": "emails",
    "database.documents": "static",
    "collections.attachments": "attachments",
    "collections.documents": "documents-ino",
    "server.connectTimeoutMS": 150,
    "server.wTimeoutMS": 20000,
    "server.w": 2,
    "server.readPreference": "primaryPreferred",
    "server.journal": "true"
  },
  "sysadmin": {
    "email": "admin@enovatis.pl",
    "phone": "+48583001673"
  },
  "dirs": {
    "config": "\/config",
    "modules": "\/modules",
    "libs": "\/libs",
    "tasks": "\/tasks",
    "cache": "\/cache",
    "tests": "\/..\/tests",
    "logs": "\/..\/logs",
    "web": "\/..\/public",
    "translations": "\/config\/translations"
  },
  "session": {
    "name": "INO2015",
    "type": "database",
    "table": "session",
    "table_value": "session_value",
    "inactivity_logout": 28800,
    "inactivity_check": 60
  },
  "security": {
    "rounds": 32
  },
  "pager": {
    "limit": 100,
    "length": 16
  },
  "logging": [],
  "ldap": {
    "hostname": "ldap:\/\/ldap.l",
    "bad_password_count": 5,
    "password_valid_in_days": 30
  },
  "fail_login": [],
  "currency": {
    "currency": [
      "USD",
      "EUR"
    ]
  },
  "urls": {
    "nbp_average": "http:\/\/www.nbp.pl\/kursy\/xml\/LastA.xml",
    "nbp_sell_purchase": "http:\/\/www.nbp.pl\/kursy\/xml\/LastC.xml"
  },
  "scheduled_contact": {
    "hours.1.min": "08:30",
    "hours.1.max": "21:30",
    "hours.2.min": "08:30",
    "hours.2.max": "21:30",
    "hours.3.min": "08:30",
    "hours.3.max": "21:30",
    "hours.4.min": "08:30",
    "hours.4.max": "21:30",
    "hours.5.min": "08:30",
    "hours.5.max": "21:30",
    "hours.6.min": "08:30",
    "hours.6.max": "21:30",
    "hours.7.min": "10:00",
    "hours.7.max": "21:30"
  },
  "holiday_mode": {
    "objections": false,
    "survey": false,
    "additionalInfo": false
  }
}