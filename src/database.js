const database = process.env.REACT_APP_DATABASE_ADDRESS;
const databaseRoute = (route) => {
  console.log('database', database);
  return database + route
}

export { database, databaseRoute }
