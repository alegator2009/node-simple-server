## Test task
<p>
Author: Osinniy Oleg<br>
Telegram: @olegosinniy
</p>

## Getting Started

1. Use npm ver 16 in nvm or install it
```
nvm use 16
```
2. Install modules
```
npm install
```
3. Install docker and create mysql DB container
```
docker run --name test-mysql -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=backend_test_task -d mysql
```
Or change config for your database
``
./config/config.json
``
4. Run migrations
```
npx sequelize-cli db:migrate
```
5. Run seeders
```
npx sequelize-cli db:seed:all
```

## API + docs
Run ``npm run api``</br>
Docs url: http://localhost:3000/api/v1/doc/

## Worker
Run ``npm run cron``</br>
Airtable invite url:</br>
https://airtable.com/invite/l?inviteId=invzoscsYCMRmvC5K&inviteToken=2408edece35c1222f32dde615bd4bab6a80b31512a39e9d0276e4f73d893f5de&utm_medium=email&utm_source=product_team&utm_content=transactional-alerts

## You must give me this job :)
![alt text](https://i.gifer.com/33fX.gif)
