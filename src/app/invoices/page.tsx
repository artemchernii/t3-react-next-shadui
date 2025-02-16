import { db } from "~/server/db";

const Invoices = async () => {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <div>
      <span>Invoices</span>
      {posts.map((post) => (
        <div key={post.id}>
          <span>{post.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Invoices;
