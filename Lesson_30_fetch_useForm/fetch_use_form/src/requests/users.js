export const getUsers = (callback) => {
  fetch('https://dummyjson.com/users')
    .then(resp => resp.json())
    .then(json => callback(json.users))
}
