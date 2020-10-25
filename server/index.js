import {GraphQLServer} from 'graphql-yoga'
import { Prisma } from './prisma/generated/prisma-client'

import resolvers from './graphql/resolvers'

const prisma = new Prisma({
  endpoint: 'http://localhost:4466',
})

//graphql-yoga의 GraphQL 서버는 자동적으로 4000번에 열림
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  context: () => {  //context는 모든 resolver에서 불러쓸 수 있는 공통의 전달 객체들을 규정
    return {
      prisma
    };
  }
})


server.start(() => console.log("Graphql Server Running"))