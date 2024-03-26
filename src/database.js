const database = process.env.DATABASE_ADDRESS;
const databaseRoute = (route) => {
  console.log('database', database);
  return database + route
}

export { database, databaseRoute }
