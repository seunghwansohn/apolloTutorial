import {GraphQLServer} from 'graphql-yoga'
import { Prisma } from './prisma/generated/prisma-client'

import resolvers from './graphql/resolvers'

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
})

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  context: () => {
    return {
      prisma
    };
  }
})


server.start(() => console.log("Graphql Server Running"))