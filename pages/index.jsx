import Head from "next/head";
import PostList from "../components/PostList";
import { createClient } from "contentful";
import { variables } from "../components/Variables";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: res.items,
    },
  };
}

function index({ posts }) {
  return (
    <main>
      <Head>
        <title>{variables.name}</title>
      </Head>
      <h2>{variables.name}</h2>
      <PostList posts={posts} />
    </main>
  );
}

export default index;
