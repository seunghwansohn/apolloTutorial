import React from 'react';
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'

import {gql} from 'apollo-boost'


const GET_JOKES = gql`
  query {
    getJoke(category:"animal") {
      url
      value
    }
  }
`

const Detail = () => {
  const {id} = useParams();
  const {data, loading, error, refetch} = useQuery(GET_JOKES)
  const joke = data ? data.getJoke : {url : '', value :''}
  console.log(data)
  return (
    <>
      {loading ? 
        "loading"
        :
        <>
          <div>{id}</div>
          <div>{joke.url}</div>
          <div>{joke.value}</div>
          <button onClick = {() => refetch()}>refetch</button>
        </>
      }

    </>
  )
}

export default Detail