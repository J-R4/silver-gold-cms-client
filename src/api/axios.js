import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://silver-and-gold.herokuapp.com/'
})

export default instance
