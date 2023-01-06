import React from "react";
import Link from "next/link";
import Image from "next/image";

function Post({ post }) {
  const { title, slug, coverImage, date, excerpt } = post.fields;
  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={"https:" + coverImage.fields.file.url}
        alt={"https:" + coverImage.fields.title}
        width={16}
        height={9}
        sizes="70vw"
      />
      <small>{date}</small>
      <p>{excerpt}</p>
      <Link href={`/post/${slug}`}>Read More &rarr;</Link>
    </div>
  );
}

export default Post;
