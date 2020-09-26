import React from 'react';
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'

import {gql} from 'apollo-boost'

const GET_JOKES = gql`
  query getJoke($category: String!){
    getJoke(category: $category) {
      url
      value
    }
  } 
`

const Detail = () => {
  const {id} = useParams();
  const {data, loading, error, refetch} = useQuery(GET_JOKES, {
    variables: {category : id} //변수를 담아 보낼땐 이렇게 함
  })
  const joke = data ? data.getJoke : {url : '', value :''}
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
          {/* <button onClick = {() => addFavorite()}>favorite</button> */}
        </>
      }

    </>
  )
}

export default Detail