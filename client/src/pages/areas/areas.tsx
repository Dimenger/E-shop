import { PostContent } from "@/widgets/post-content/post-content";

export const Areas = () => {
  return (
    <div>
      <h1>Areas List</h1>

      <div>
        <PostContent page="areas" />
      </div>
      <br />
      <div>List of Ancets</div>
      <div style={{ color: "red", fontSize: "50px" }}>Ancet</div>
    </div>
  );
};
