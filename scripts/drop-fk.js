const sequelizeInstance = require("./config");

(async () => {

  await sequelizeInstance.query(`
    CREATE TABLE posts_new (
      id SERIAL PRIMARY KEY,
      title TEXT,
      userId INTEGER
    );
  `);

  await sequelizeInstance.query(`
    INSERT INTO posts_new (id, title, userId)
    SELECT id, title, userId FROM posts;
  `);

  await sequelizeInstance.query(`DROP TABLE posts;`);
  await sequelizeInstance.query(`ALTER TABLE posts_new RENAME TO posts;`);

  console.log("Foreign key REMOVED from posts table.");
  process.exit();
})();
