import {GraphQLServer} from 'graphql-yoga'
import { Prisma } from './prisma/generated/prisma-client'

import resolvers from './graphql/resolvers'

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
})


const test = async () => {
  const users = await prisma.users()
  await console.log(users)
}

// test()

const newUser = async ({name}) => {
  await console.log(name)
  await prisma.createUser({
    name: name,
  })
}

newUser({name :'brian'})
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  context: () => {
    return {
      token: 'foo',
    };
  }
})


server.start(() => console.log("Graphql Server Running"))