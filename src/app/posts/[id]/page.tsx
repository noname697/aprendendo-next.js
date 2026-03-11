import { DataProps } from "../page";

const detailPost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: DataProps = await response.json();

  return (
    <div>
      <h1>Detalhes do Post: {id}</h1>

      <h2>{data.title}</h2>
      <h2>{data.body}</h2>
    </div>
  );
};

export default detailPost;
