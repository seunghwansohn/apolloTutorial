import fetch from "node-fetch" 

const API_URL = "https://api.chucknorris.io/jokes/"
export const getCategories = (rating) =>{
  let REQ_URL = API_URL + "categories";
  let returnCategories = []
    return fetch(REQ_URL)
    .then(res => res.json())
    .then(json => json.map(str => {
      let category = {category : str}
      returnCategories.push(category)
    }))
    .then(() => returnCategories)
}

export const getJoke = (category) => {
  let REQ_URL = API_URL + `random?category=${category}`;
  let returnJoke = {}
  return fetch(REQ_URL)
  .then(res => res.json())
}