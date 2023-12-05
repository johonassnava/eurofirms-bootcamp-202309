import toggleLikePost from '../logic/toggleLikePost'
import deletePost from '../logic/deletePost'
import toggleSavePost from '../logic/toggleSavePost'

import Button from './Button'

function Post(props) {
    const post = props.post

    function handleLikeClick() {
        try {
            toggleLikePost(window.sessionUserId, post.id)

            props.onLikeClick()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeleteClick() {
        const confirmed = confirm('Delete post?')

        if (confirmed)
            try {
                deletePost(sessionUserId, post.id)

                props.onDeleteClick()
            } catch (error) {
                alert(error.message)
            }
    }

    function handleSaveClick() {
        try {
            toggleSavePost(window.sessionUserId, post.id)

            props.onSaveClick()
        } catch (error) {
            alert(error.message)
        }
    }
    
    return <article key={post.id} className="post">
        <h3>{post.author.name}</h3>

        <img className="post-image"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        <p>{post.text}</p>

        <Button onClick={handleLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

        <Button onClick={handleSaveClick}>{(post.saved ? '⭐️' : '✩')}</Button>

        {post.author.id === window.sessionUserId ? <Button onClick={handleDeleteClick}>Delete</Button> : null}
    </article>
}

export default Post