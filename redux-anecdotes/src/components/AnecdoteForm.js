import { useDispatch } from 'react-redux'
import { appendAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        anecdoteService.createNew(anecdote).then((createdAnecdote) => {
            dispatch(appendAnecdote(createdAnecdote))
            dispatch(createNotification(`created ${anecdote}`))
            setTimeout(() => {
                dispatch(removeNotification())
            }, 5000)
        })
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote" />
                </div>
                <button>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm