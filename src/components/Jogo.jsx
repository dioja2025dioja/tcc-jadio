import JogoImg from "../assets/Jogo.png";
import PaginaJogoImg from "../assets/PaginaJogo.png";
import { Header } from "../components/Header";
import Usuario from "../assets/Usuario.png";
import { Link } from "react-router";

export function Jogo() {
  return (
    <main
      className="min-h-screen p-6 sm:p-10"
      style={{
        backgroundImage: `url(${PaginaJogoImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "var(--color-white)",
      }}
    >
     <header> <button className="ml-3 mt-3"> <Link to={"./Login"}><img className="size-1px" src={ Usuario } alt="" /> </Link> </button> <Header /> </header>

      <div className="max-w-6xl mx-auto bg-[rgba(0,0,0,0.3)] rounded-lg p-6 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Texto */}
        <div className="md:w-1/2 text-justify">
          <h1 className="font-semibold text-[var(--color-blue)] text-4xl mb-2">
            EcoShark
          </h1>
          <p className="font-medium text-[var(--color-white)] mb-8">
            Salve os oceanos jogando com o tubarão mais consciente do planeta!
          </p>

          <div className="mb-6">
            <p className="font-semibold text-[var(--color-blue)] mb-1">
              Como Funciona
            </p>
            <p className="font-medium text-[var(--color-white)]">
              Colete lixo e desvie de armadilhas
            </p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-[var(--color-blue)] mb-1">
              Personagem
            </p>
            <p className="font-medium text-[var(--color-white)]">
              Você joga como o EcoShark!
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--color-blue)] mb-1">Objetivo</p>
            <p className="font-medium text-[var(--color-white)]">
              Passe de fase e limpe o mar!
            </p>
          </div>
        </div>

        {/* Imagem e botão */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={JogoImg}
            alt="EcoShark"
            className="rounded-lg border-4 border-[var(--color-blue)] max-w-full h-auto mb-6"
          />
          <button className="text-[var(--color-white)] py-3 px-8 rounded-lg bg-[var(--color-blue)] font-semibold hover:bg-[var(--color-bluehover)] cursor-pointer w-full max-w-xs text-center">
            Download Game
          </button>
        </div>
      </div>
    </main>
  );
}
