const sequelizeInstance = require("./config");

(async () => {
  await sequelizeInstance.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT
    );
  `);

  await sequelizeInstance.query(`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title TEXT,
      userId INTEGER,
      FOREIGN KEY(userId) REFERENCES users(id)
    );
  `);

  await sequelizeInstance.query(`INSERT INTO users (name) VALUES ('John Doe');`);
  await sequelizeInstance.query(`INSERT INTO posts (title, userId) VALUES ('Hello World', 1);`);

  console.log("Database initialized WITH FK.");
  process.exit();
})();