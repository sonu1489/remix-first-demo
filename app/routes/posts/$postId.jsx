import { redirect } from "@remix-run/node";
import { useParams, useLoaderData,Link } from "@remix-run/react";
import { db } from "~/utils/db.server";
export const loader = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });
  if (!post) throw new Error("post not found");
  const data = { post };
  return data;
};
export const action = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get("_method") === "delete") {
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });
    if (!post) throw new Error("post not found");
    await db.post.delete({ where: { id: params.postId } });
    return redirect("/posts");
  }
};

const Post = () => {
  const { post } = useLoaderData();
  // const params = useParams()
  return (
    // <div>Post id {params.postId}</div>
    <div>
      <div className="page-header">
        <h1>{post.title}</h1>
        <Link to="/posts" classNamebtn btn-reverse>
          Back
        </Link>
      </div>
      <div className="page-content">{post.body}</div>
      <div className="page-footer">
        <form method="POSt">
          <input type="hidden" name="_method" value="delete" />
          <button className="btn btn-delete">delete</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
