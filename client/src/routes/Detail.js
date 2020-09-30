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

//서버로 보내는 쿼리의 경우 이렇게 그냥 각 콤포넌트에서 
//gql문법만 구성해서 쏴주면 됨.
const SAVE_JOKE = gql`
  mutation saveJoke($id: String!){
    saveJoke(id: $id) {
      id
    }
  }
`

const ADD_FAVORITE = gql`
  mutation addFavorite($id: int!) {
    addFavorite(id: $id) @client
  }
`
const CHANGE_CONTENTS = gql`
  mutation changeContents($id: int!) {
    changeContents(id: $id) @client
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
  const [changeContents] = useMutation(CHANGE_CONTENTS, {
    variables: {id : joke.id} 
  })
  const [saveJoke] = useMutation(SAVE_JOKE, {
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
          <button onClick = {() => changeContents(joke.id)}>shut off!</button>
          <button onClick = {() => saveJoke(joke.id)}>saveJoke</button>

        </>
      }

    </>
  )
}

export default Detail