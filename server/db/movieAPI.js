import fetch from "node-fetch" 

const API_URL = "https://api.chucknorris.io/jokes/categories"
const getCategories = (rating) =>{
  let REQ_URL = API_URL;
  let returnCategories = []
    return fetch(REQ_URL)
    .then(res => res.json())
    .then(json => json.map(str => {
      let category = {category : str}
      returnCategories.push(category)
    }))
    .then(() => returnCategories)
}

export default getCategories