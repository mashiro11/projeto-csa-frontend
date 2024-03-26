const database = process.env.REACT_APP_DATABASE_ADDRESS;
const databaseRoute = (route) => {
  return database + route
}

export { database, databaseRoute }
