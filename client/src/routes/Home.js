import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'


const GET_CATEGORIES = gql`
  query { 
    getCategories {
      category
    }
  }
`
const Home = () => {
  const {data, loading, error} = useQuery(GET_CATEGORIES)
  const categories = data ? data.getCategories : []
  return (
    <>
      {categories.map(category => {
        return (
          <div>
            {category.category}
          </div>
        )
      })}
    </>
  )
}

export default Home