import Link from "next/link";

function Post({ post }) {
  const { title, slug, coverImage, date, excerpt } = post.fields;
  return (
    <div>
      <h2>{title}</h2>
      {coverImage && (
        <img src={coverImage.fields.file.url} alt={coverImage.fields.title} />
      )}
      <p>{date}</p>
      <p>{excerpt}</p>
      <Link href={`/post/${slug}`}>read more &rarr;</Link>
    </div>
  );
}

export default Post;
