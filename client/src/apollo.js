import ApolloClient from 'apollo-boost'
//apollo-boost는 Apollo에서 제공하는 GraphQL 클라이언트 패키지

const client = new ApolloClient ({
  uri: 'http://localhost:4000',
  resolvers: { //클라이언트 전용 resolver
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
      },
      changeContents: (_, {id}, {cache}) => {
        console.log(id)
        cache.writeData({
          id: `Joke:${id}`,
          data: {
            value : 'shut off!'
          }
        })
      }
    }
  }
})

export default client