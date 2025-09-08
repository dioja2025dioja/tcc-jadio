import { Header } from "../components/Header"
import { Link } from "react-router"


import checkImg from "../assets/Check.png"
import PexeImg from "../assets/Pexe.png"
import BackgroundImg from "../assets/Background.png"
import Usuario from "../assets/Usuario.png"





export function Home() {

  return (
      <main>

        <header>

          <button className="ml-3 mt-3">
            <Link to={"./Login"}><img className="size-1px" src={ Usuario } alt="" /> </Link>
          </button>

          <header className="">
            <Header />
          </header>
        </header>
        
        <h1 className="font-semibold">Conheça o Projeto</h1>
        <p className="font-regular">jaDIO</p>

        <p className="font-regular">Um aliado da natureza, feito para limpar suas piscinas!</p>

        <h2 className="font-semibold">Por que o JADIO é diferente?</h2>

        <div>
          <img src={checkImg} alt="" />
          <p className="font-regular">Ecológico e silencioso</p>
        </div>
        
       <div>
          <img src= {checkImg} alt=""></img>
          <p className="font-regular">Inteligente na coleta de resíduos</p>
       </div>
        
       <div>
          <img src= {checkImg} alt=""></img>
          <p className="font-regular">Design que imita um peixe real</p>
       </div>
        
        <div>
          <img src= {checkImg} alt=""></img>
          <p className="font-regular">Monitoramento via app em tempo real</p>
        </div>

        <h2 className="font-semibold">Baixe agora o app jApp</h2>

        <p className="font-regular">Tenha controle, veja estatísticas e acompanhe a limpeza de suas piscinas com o nosso aplicativo. Faça parte da mudança com apenas um clique.</p>
        
        <button className="bg-[var(--color-blue)] hover:bg-[var(--color-bluehover)] text-[var(--color-white)] font-bold py-3 px-6 rounded-full ">Baixar o app -JApp</button>
        <img className="" src= {PexeImg} alt="" />
        <img className="" src= {BackgroundImg} alt="" />
      </main>
  )
}