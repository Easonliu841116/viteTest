import axios from 'axios'

function fetchGet (url) {
  return axios({
    baseURL: `${window.origin}`,
    method: 'GET',
    url
  })
}

async function testGet() {
  const { data } = await fetchGet('https://jsonplaceholder.typicode.com/todos/1')
  document.querySelector('#inject').innerHTML = `
    <pre>${data.completed}</pre>
  `
}

testGet()
