import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-13672.firebaseio.com/'
})