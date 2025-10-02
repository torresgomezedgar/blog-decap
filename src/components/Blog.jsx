import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch dinámico usando Vite import.meta.glob
    const files = import.meta.glob("/src/content/posts/*.md", { as: "raw" });

    Promise.all(
      Object.values(files).map(loader => loader())
    ).then(contents => setPosts(contents));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, i) => (
        <article key={i}>
          <ReactMarkdown>{post}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
}
