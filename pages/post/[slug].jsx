import React from "react";
import Head from "next/head";
import { createClient } from "contentful";
import { marked } from "marked";
import Link from "next/link";
import { variables } from "../../components/Variables";

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
  const { title, coverImage, date, content, excerpt } = post.fields;
  return (
    <main>
      <Head>
        <title>
          {variables.name} — {title}
        </title>
        <meta name="description" content={excerpt} />
        {/* Facebook Tags */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content={variables.name + " — " + title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={"https:" + coverImage.fields.file.url}
        />

        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={variables.name + " — " + title}
        />
        <meta property="twitter:description" content={excerpt} />
        <meta
          property="twitter:image"
          content={"https:" + coverImage.fields.file.url}
        />
      </Head>
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
