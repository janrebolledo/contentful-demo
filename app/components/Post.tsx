import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

async function Post({ post }) {
  const { title, slug, coverImage, date, excerpt } = post.fields;
  const { base64, img } = await getPlaiceholder(
    "https:" + coverImage.fields.file.url
  );
  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={img}
        alt={coverImage.fields.title}
        width={16}
        height={9}
        sizes="80vw"
        placeholder="blur"
        blurDataURL={base64}
      />
      <small>{date}</small>
      <p>{excerpt}</p>
      <Link href={`/post/${slug}`}>Read More &rarr;</Link>
    </div>
  );
}

export default Post;
