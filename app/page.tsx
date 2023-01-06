import PostList from "./components/PostList";
import React from "react";

import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default async function Page() {
  const res = await client.getEntries({ content_type: "post" });

  const posts = res.items;

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <PostList posts={posts} />
    </div>
  );
}
