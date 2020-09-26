import ApolloClient from 'apollo-boost'

const client = new ApolloClient ({
  uri: 'http://localhost:4000',
  resolvers: {
    Joke: {
      favorite: () => false
    },
    Mutation: {
      addFavorite: (_, {id}, {cache}) => {
        console.log(id)
        cache.writeData({
          id: `Joke:${id}`,
          data: {
            favorite : true
          }
        })
      }
    }
  }
})

export default client