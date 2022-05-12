import { useDispatch, useSelector} from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import { addVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => {
    const sortedAnecdotes = state.sort((anecdoteA, anecdoteB) => anecdoteB.votes - anecdoteA.votes)
    return sortedAnecdotes
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App