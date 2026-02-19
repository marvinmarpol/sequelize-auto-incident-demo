# Sequelize-Auto CLI Incident Demo

Demonstrate how removing a FK in the database changes generated ORM associations.

## Steps

### 1. Install dependencies:
```shell
npm install
```

### 2. Change configuration in scripts/config.js
```javascript
// change this part
const host = "localhost";
const dialect = "postgres";
const dbName = "app_db";
const username = "admin";
const password = "admin123";
```

### 3. Initialize DB (with FK):
```shell
npm run init-db
```

### 4. Generate models from DB:
```shell
npm run generate-models
```

### 5. Start server:
```shell
npm run start
```

### 6. Try api request to http://localhost:3000/users
``` json
[
  {
    "id": 1,
    "name": "John Doe",
    "posts": [
      {
        "id": 1,
        "title": "Hello World",
        "userid": 1
      }
    ]
  }
]
```

### 7. Simulate DBA removing FK:
```shell
npm run drop-fk
```

### 8. Regenerate models:
```shell
npm run generate-models
```

### 9. Restart server:
```shell
npm run start
```

### 10. Retry api request to http://localhost:3000/users
```json
{
  "error": "posts is not associated to users!",
  "name": "SequelizeEagerLoadingError"
}
```

## Notes
1. Association may disappear because FK no longer exists
2. This shows how sequelize-auto makes ORM dependent on current DB structure.
