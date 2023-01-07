import React from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { marked } from "marked";
import { getPlaiceholder } from "plaiceholder";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "post" });

  return res.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

async function ProjectPage({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  const res = { post: items[0] };
  const post = res.post;
  const { title, coverImage, date, content } = post.fields;
  const { base64, img } = await getPlaiceholder(
    "https:" + coverImage.fields.file.url
  );
  return (
    <main>
      <h1>{title}</h1>
      <p>Post Date: {date}</p>
      <Image
        src={img}
        alt={coverImage.fields.title}
        width={16}
        height={9}
        sizes="80vw"
        placeholder="blur"
        blurDataURL={base64}
      />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </main>
  );
}

export default ProjectPage;
