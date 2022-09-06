 import { Link } from "@remix-run/react"
import { redirect } from "@remix-run/node"
import { db } from "~/utils/db.server"
export const action = async({request}) =>{
  const form   = await request.formData()
  const title = form.get('title')
  const body = form.get('body')

  const fields = {title,body}
  console.log(fields);
  // console.log(form);

// todo sumbit to database
const post = await db.post.create({
  data:fields 
})
  return redirect(`/posts/${post.id}`)
}


const NewPosts = () => {
  return (
    <>
    <div className="page-header">
      <h1>newPosts</h1>
      <Link to="/posts" className="btn btn-reverse">Back</Link>

      </div>
      <div className="page-content">
        <form method="POST">

          <div className="form-control">
            <label htmlfor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlfor="body">Post Body</label>
            <textarea name="body"  id="body" />
          </div>
          <button  type="submit" className="btn btn-block">Add POSt</button>
        </form>

      </div>

</>
    
  )
}

export function ErrorBoundary({error}){
  console.log(error);
  return (
    <Document>
      <layout>
      <h1>Error</h1>
      <pre>{error.message}</pre>
      </layout>
    
    </Document>
  )
}  
export default NewPosts