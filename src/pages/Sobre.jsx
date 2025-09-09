import FernandoImg from "../assets/Fernando.jpg"
import GabiImg from "../assets/Gabi.jpg"
import TavaresImg from "../assets/Tavares.png"
import RyanImg from "../assets/Ryan.jpg"
import HenriqueImg from "../assets/Henrique.jpg"
import { Header } from "../components/Header"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"
import InstaImg from "../assets/insta.png"
import BackgroundImg from "../assets/Background.png"

export function Sobre() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden dark:bg-[var(--color-bg-grey)] dark:text-[var(--color-white)]">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Título */}
      <h1 className="text-[var(--color-grey)] text-center font-semibold mb-4 pt-10 text-2xl">
        Quem Somos?
      </h1>
      <p className="text-[var(--color-grey)] text-center font-normal mb-10 px-6 sm:px-12 md:px-20 lg:px-40">
        Somos cinco estudantes do Colégio Adventista UNASP. Este site faz parte
        do nosso TCC, que tem como foco a sustentabilidade. Criamos o projeto
        JADIO, um robô que ajuda a limpar rios e lagos, e o app EcoApp, que
        permite acompanhar tudo em tempo real. Queremos mostrar que a tecnologia
        pode ser uma aliada do meio ambiente.
      </p>

      {/* Equipe */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 pb-16">
        {[
          { img: FernandoImg, nome: "Fernando Azevedo", user: "@feacostaa" },
          { img: GabiImg, nome: "Gabrielle Costa", user: "@gabiietz_" },
          { img: TavaresImg, nome: "Gustavo Tavares", user: "@gutoarcangelo" },
          { img: RyanImg, nome: "Ryan Kavamoto", user: "@vg.japa" },
          { img: HenriqueImg, nome: "Henrique Alves", user: "@r3cky3lves" },
        ].map((pessoa, i) => (
          <div key={i} className="flex flex-col items-center text-center max-w-[150px]">
            <img
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-2"
              src={pessoa.img}
              alt={pessoa.nome}
            />
            <p className="text-[var(--color-grey)] font-medium text-sm sm:text-base">
              {pessoa.nome}
            </p>
            <div className="flex items-center gap-1 text-xs sm:text-sm">
              <img src={InstaImg} alt="Instagram" className="w-4 h-4" />
              <p>{pessoa.user}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ondas */}
      
    </main>
  )
}
