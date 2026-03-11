import { Suspense } from "react";
import { PostInfo } from "./_components/post";

const detailPost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Detalhes do Post: {id}</h1>
      {/* Renderiza o Suspense enquanto o componente PostInfo está sendo carregado */}
      <Suspense fallback={<h1>Carregando...</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
};

export default detailPost;
