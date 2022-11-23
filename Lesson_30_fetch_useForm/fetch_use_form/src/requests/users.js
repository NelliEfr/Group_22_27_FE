export const getUsers = (callback) => {
  fetch('https://dummyjson.com/users')
    .then(resp => resp.json())
    .then(json => callback(json.users))
}

export const addUser = (body, callback) => {
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(resp => resp.json())
  .then(json => callback(json))
}
