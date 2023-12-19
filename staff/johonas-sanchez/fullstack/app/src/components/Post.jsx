import Button from "../library/Button"

import logic from '../logic'

function Post(props) {
   console.log("Post")

   const post = props.post

   function handlePostLikeToggled() {
      try {
         logic.toggleLikePost(post.id, (error) => {
            if (error) {
               props.onError(error)

               return
            }

            props.onPostLikeToggled()
         })
      } catch (error) {
         props.onError(error)
      }
   }

   function handlePostDeleted() {
      const confirmed = confirm("Delete post?")

      if (confirmed)
         try {
            logic.deletePost(post.id, (error) => {
               if (error) {
                  props.onError(error)

                  return
               }

               props.onPostDeleted()
            })
         } catch (error) {
            props.onError(error)
         }
   }

   function handlePostSaveToggled() {
      try {
         logic.toggleSavePost(post.id, (error) => {
            if (error) {
               props.onError(error)

               return
            }

            props.onPostSaveToggled()
         })
      } catch (error) {
         props.onError(error)
      }
   }

   return (
      <article className="flex flex-col p-[.5rem] bg-[ghostwhite] hover:bg-[lightgray]">
         <h3 className="self-start">{post.author.name}</h3>

         <img className="max-w-[300px]" src={post.image} alt={post.imageDescription} title={post.imageDescription} />

         <p>{post.text}</p>

         <div className="flex">
            <Button onClick={handlePostLikeToggled} title={post.liked ? "Unlike" : "Like"} aria-label={post.liked ? "Unlike" : "Like"}>
               {(post.liked ? "❤️" : "🩶") + " " + post.likes.length + " likes"}
            </Button>

            <Button onClick={handlePostSaveToggled} title={post.saved ? "Unsave" : "sSave"} aria-label={post.saved ? "Unsave" : "Save"}>
               {post.saved ? "⭐️" : "✩"}
            </Button>

            {post.author.id === logic.getLoggedInUserId() ? (
               <Button title="Delete" aria-label="Delete" onClick={handlePostDeleted}>
                  🗑️
               </Button>
            ) : null}
         </div>
      </article>
   )
}

export default Post
