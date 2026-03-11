import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula de Next JS do zero!",
  description: "Aprendendo Next JS do zero com o sujeito programador",
  openGraph: {
    title: "Aprendendo Next JS com o sujeito programador no Youtube",
    description: "Aprendendo Next JS do zero com o sujeito programador",
    images: ["https://github.com/noname697.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const revalidate = 60;

const Home = () => {
  const ramdom = Math.random() * 10;
  return (
    <div>
      <h1>Olá Mundo!</h1>
      <h2>Número gerado: {ramdom}</h2>
    </div>
  );
};

export default Home;
