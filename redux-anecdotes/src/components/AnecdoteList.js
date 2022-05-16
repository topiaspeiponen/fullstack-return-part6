import { useDispatch, useSelector} from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        console.log('state ', state)
        let anecdotes = [...state.anecdotes]
        if (state.filter) {
            anecdotes = anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        }
        const sortedAnecdotes = anecdotes.sort((anecdoteA, anecdoteB) => anecdoteB.votes - anecdoteA.votes)
        return sortedAnecdotes
      })
    
    const dispatch = useDispatch()
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id))
        dispatch(createNotification(`you voted ${anecdotes.find(anecdote => anecdote.id === id).content}`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
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