import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const anecdote = asObject(content)
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const addVote = async (anecdote) => {
    const newAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
    }
    const response = await axios.put(`${baseUrl}/${newAnecdote.id}`, newAnecdote)
    return response.data
}

const exports = {
    getAll,
    createNew,
    addVote
}

export default exports