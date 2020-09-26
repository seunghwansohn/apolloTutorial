/*

#person 추가

mutation{
  addPerson(name : "audrey" age : 24, gender : "female") {
    id
    name
    age
    gender
  }
}

#people 조회

query {
  people {
    id
    name
    age
    gender
  }
}

*/


//이 resolvers 코드를 보면 결국 resolver는 일반적인 자바스크립트 코드이고,
//GraphQLServer에 typeDefs(스키마)와 resovers를 넣어주면,
//GraphQLServer에 각 Query혹은 Mutation등을 넣을 때 스키마에 해당되면,
//거기에 해당되는 resover 코드를 자동으로 실행해주는 것임을 알 수 있음.

let people = [
  {
    id : 0,
    name : "Nicolas",
    age : 18,
    gender : "female"
  },
  {
    id : 1,
    name : "David",
    age : 21,
    gender : "male"
  }
]

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => people.filter(person => person.id === id)[0]
  },
  Mutation: {
    addPerson : (_,{name, age, gender}) => {
      const id = people.length
      const newPerson = {id, name, age, gender}
      people.push(newPerson)
      return newPerson
    },
    deletePerson: (_, {id}) => {
      const filteredPeople = people.filter(person => person.id !== id)
      people = filteredPeople
      return people
    }

  }
}

export default resolvers