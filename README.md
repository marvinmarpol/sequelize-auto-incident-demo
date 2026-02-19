# Sequelize-Auto CLI Incident Demo

## Goal
Demonstrate how removing a FK in the database changes generated ORM associations.

## Steps

1. Install dependencies:
   npm install

2. Change configuration in scripts/config.js

3. Initialize DB (with FK):
   npm run init-db

4. Generate models from DB:
   npm run generate-models

5. Start server:
   npm run start
   -> http://localhost:3000/users (works)

6. Simulate DBA removing FK:
   npm run drop-fk

7. Regenerate models:
   npm run generate-models

8. Restart server:
   npm run start
   -> Association may disappear because FK no longer exists

This shows how sequelize-auto makes ORM dependent on current DB structure.
