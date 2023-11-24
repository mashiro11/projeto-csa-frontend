//const database = 'https://csa-strapi-backend.herokuapp.com/'
const database = 'http://localhost:1337/api/'
//const database = 'http://127.0.0.1:1337'

const databaseRoute = (route) => {
  return database + route
}

export { database, databaseRoute }
