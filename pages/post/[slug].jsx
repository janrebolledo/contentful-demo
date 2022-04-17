import React from "react";
import { createClient } from "contentful";
import { marked } from "marked";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "post" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: { post: items[0] },
  };
}

function ProjectPage({ post }) {
  const { title, coverImage, date, content } = post.fields;
  return (
    <main>
      <Link href="/">&larr; back</Link>
      <h1>{title}</h1>
      <p>project date: {date}</p>
      {coverImage && (
        <img src={coverImage.fields.file.url} alt={coverImage.fields.title} />
      )}
      <div
        className="project-content"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </main>
  );
}

export default ProjectPage;
