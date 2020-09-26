import React from 'react';
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import {Link} from 'react-router-dom'

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
        category = category.category
        return (
          <div>
            <Link to = {`/${category}`}>
              {category}
            </Link>
          </div>

        )
      })}
    </>
  )
}

export default Home