import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold mt-9 text-6xl">404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link href="/">Voltar para home</Link>
    </div>
  );
};

export default NotFound;
