import { useLoaderData,Link } from "@remix-run/react";
import {db} from "~/utils/db.server"
export const loader = async() => {
  const data = {
    posts:  await db.post.findMany({
      take:20,
      select:{id: true, title:true, createdAt:true},
      orderBy:{createdAt:"desc"}
    }),
    // [
    //   { id: 1, title: "post 1", body: "this is test" },
    //   { id: 2, title: "post 3", body: "this is test" },
    //   { id: 3, title: "post 3", body: "this is test" },
    // ],
  };
  return data;
};

const PostItem = () => {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>posts</h1>
      <Link to="/posts/newposts" className="btn">NEw Posts</Link>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostItem;
