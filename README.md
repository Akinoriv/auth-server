## Project setup

```
npm install
```

### Run

```
node server.js
```

### Run on AWS

https://github.com/Unitech/pm2

```
pm2 start server.js
```

#### kikoff port

```
lsof -i tcp:8080
kill -9 28163; // check in table first
```

### mysql

```
mysql -u root -p
```

#### mysql >

```
show databases;
use authbd;
describe users;
select * from users;
```

<!-- change password mysql -->

https://stackoverflow.com/questions/17975120/access-denied-for-user-rootlocalhost-using-password-yes-no-privileges
