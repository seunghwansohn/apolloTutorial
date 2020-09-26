import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'


const GET_MOVIES = gql`
  query {
    people {
      id
      name
      age
    }
  }
`
const Home = () => {
  const {data, loading, error} = useQuery(GET_MOVIES)
  console.log(data)
  return (
    <>
      낄낄
    </>
  )
}

export default Home