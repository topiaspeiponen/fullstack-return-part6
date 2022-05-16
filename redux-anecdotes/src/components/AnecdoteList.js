import { useDispatch, useSelector} from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        let anecdotes = [...state.anecdotes]
        if (state.filter) {
            anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        }
        const sortedAnecdotes = anecdotes.sort((anecdoteA, anecdoteB) => anecdoteB.votes - anecdoteA.votes)
        return sortedAnecdotes
      })
    
    const dispatch = useDispatch()
    
    const vote = (anecdote) => {
        dispatch(addVote(anecdote))
        dispatch(setNotification(`you voted ${anecdotes.find(item => item.id === anecdote.id).content}`, 3))
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList