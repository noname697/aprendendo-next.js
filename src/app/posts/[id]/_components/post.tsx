import { DataProps } from "../../page";

export const PostInfo = async ({id}: {id: string}) => {

      await new Promise(resolve => setTimeout(resolve, 4000))

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: DataProps = await response.json();
  return (
    <div>
      <h2>{data.title}</h2>
      <h2>{data.body}</h2>
    </div>
  );
};