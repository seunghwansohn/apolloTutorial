import ApolloClient from 'apollo-boost'

const client = new ApolloClient ({
  uri: 'http://localhost:4000',
  resolvers: {
    Joke: {
      favorite: () => false
    }
  }
})

export default client