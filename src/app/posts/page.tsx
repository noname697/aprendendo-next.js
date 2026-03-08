import Button from "@/components/button";

interface DataProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface Response {
  posts: DataProps[];
}

//Server Components

// Componente são renderizados pelo lado do servidor, o que me permite fazer requisições direto no corpo do componente
const PostsPage = async () => {
  const response = await fetch("https://dummyjson.com/posts");
  const data: Response = await response.json();

  console.log(data);

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Todos os posts
      </h1>

      <Button />

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

// Server Component > Client Component