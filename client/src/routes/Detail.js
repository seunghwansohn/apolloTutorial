import React from 'react';
import {useParams} from 'react-router-dom'
import {useQuery, useMutation} from '@apollo/react-hooks'

import {gql} from 'apollo-boost'

const GET_JOKES = gql`
  query getJoke($category: String!){
    getJoke(category: $category) {
      id
      url
      value
      favorite @client
    }
  } 
`

const ADD_FAVORITE = gql`
  mutation addFavorite($id: int!) {
    addFavorite(id: $id) @client
  }
`

const Detail = () => {
  const {id} = useParams();
  const {data, loading, error, refetch} = useQuery(GET_JOKES, {
    variables: {category : id} //변수를 담아 보낼땐 이렇게 함
  })
  const joke = data ? data.getJoke : {url : '', value :''}
  const [addFavorite] = useMutation(ADD_FAVORITE, {
    variables: {id : joke.id} 
  })
  return (
    <>
      {loading ? 
        "loading"
        :
        <>
          <h1>{id}</h1>
          <div>{joke.id}</div>
          <div>{joke.url}</div>
          <div>{joke.value}</div>
          <button onClick = {() => refetch()}>refetch</button>
          <button onClick = {() => addFavorite(joke.id)}>favorite</button>
        </>
      }

    </>
  )
}

export default Detail