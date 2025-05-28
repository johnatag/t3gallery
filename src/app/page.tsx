import Link from "next/link";
import { Gallery } from "./components/gallery.component";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap">
        {
          posts.map((post) => (
            <div key={post.id}>{post.name}</div>
          ))
        }
        <Gallery />
      </div>
    </main>
  );
}