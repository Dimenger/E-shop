import { POSTS } from "./model/posts";

type PageName = keyof typeof POSTS;

interface PostContentProps {
  page: PageName;
}

export const PostContent = ({ page }: PostContentProps) => {
  const dataArray = POSTS[page];

  if (!dataArray) return null;

  return (
    <>
      {dataArray.map((item) => (
        <div key={item.id} style={{ marginBottom: "40px" }}>
          <h2 style={{ textIndent: "40px" }}>{item.title}</h2>
          {item.content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              style={{
                textIndent: "40px",
                marginBottom: "10px",
                textAlign: "justify",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};
