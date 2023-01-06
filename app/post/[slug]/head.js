import { variables } from "../../Variables";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default async function Head({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });
  const res = { post: items[0] };
  const post = res.post;
  const { title, coverImage, excerpt } = post.fields;
  const seoTitle = variables.name + " — " + title;
  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={excerpt} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={excerpt} />
      <meta
        property="og:image"
        content={"https:" + coverImage.fields.file.url}
      />
      <meta property="twitter:card" content="summary_large_image" />
    </>
  );
}
