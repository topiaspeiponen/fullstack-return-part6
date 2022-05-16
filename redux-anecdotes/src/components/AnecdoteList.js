import { useDispatch, useSelector} from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        console.log('state ', state)
        const anecdotes = [...state.anecdotes]
        const sortedAnecdotes = anecdotes.sort((anecdoteA, anecdoteB) => anecdoteB.votes - anecdoteA.votes)
        return sortedAnecdotes
      })
    
    const dispatch = useDispatch()
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id))
    }

    return (
        <>
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
        </>
    )
}

export default AnecdoteList