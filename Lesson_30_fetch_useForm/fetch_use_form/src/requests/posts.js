export const getPosts = (callback) => {
  fetch('https://dummyjson.com/posts')
    .then(resp => resp.json())
    .then(json => callback(json.posts))
}

export const addPost = (body, callback) => {
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
})
.then(res => res.json())
.then(json => callback(json));
}
