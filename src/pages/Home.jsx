import { HeaderHome } from "../components/HeaderHome"
import { Link } from "react-router"

import checkImg from "../assets/Check.png"
import PexeImg from "../assets/Pexe.png"
import Background from "../assets/Background.png"
import Usuario from "../assets/Usuario.png"

export function Home() {
  return (
    <main className="relative min-h-screen px-6 sm:px-12 py-8 overflow-hidden dark:bg-[var(--color-bg-grey)]">
      
      <header>

         
          

          <header className="">
            <HeaderHome />
          </header>
        </header>


      
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-10">
        
        <div className="text-[var(--color-grey)]">
          <h1 className="font-semibold text-2xl md:text-3xl mb-2">
            Conheça o <span className="text-[var(--color-blue)]">projeto</span>
          </h1>
          <p className="font-bold text-xl mb-1">JADIO</p>
          <p className="mb-6 text-justify">
            Um aliado da natureza, feito para limpar nossos rios e lagos!
          </p>

          <h2 className="font-semibold text-lg md:text-xl mb-4">
            Por que o JADIO é diferente?
          </h2>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <img src={checkImg} alt="Check" className="w-5 h-5" />
              <p>Ecológico e silencioso</p>
            </li>
            <li className="flex items-center gap-2">
              <img src={checkImg} alt="Check" className="w-5 h-5" />
              <p>Inteligente na coleta de resíduos</p>
            </li>
            <li className="flex items-center gap-2">
              <img src={checkImg} alt="Check" className="w-5 h-5" />
              <p>Design que imita um peixe real</p>
            </li>
            <li className="flex items-center gap-2">
              <img src={checkImg} alt="Check" className="w-5 h-5" />
              <p>Monitoramento via app em tempo real</p>
            </li>
          </ul>

          <h2 className="font-semibold text-lg md:text-xl mb-2">
            Baixe agora o app EcoApp
          </h2>
          <p className="mb-6 text-justify">
            Tenha controle, veja estatísticas e acompanhe a limpeza dos seus rios
            com o nosso aplicativo. Faça parte da mudança com apenas um clique.
          </p>

          <button className="bg-[var(--color-blue)] hover:bg-[var(--color-bluehover)] text-[var(--color-white)] font-bold py-3 px-6 rounded-full">
            Baixar o app - EcoApp
          </button>
        </div>
      </section>

     
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
        
        <img
          src={PexeImg}
          alt="Ondas"
          className="mr-40 h-auto w-auto object-contain translate-x-20"
        />
        
       
      </div>
    </main>
  )
}
