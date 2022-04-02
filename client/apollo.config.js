module.exports = {
  client: {
    includes: ['./src/stores/schema.js'],
    service: {
      name: 'client',
      service: 'client',
      url: 'http://localhost:3001/graphql'
    }
  }
};
