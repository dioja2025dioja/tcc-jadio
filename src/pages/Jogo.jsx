import JogoImg from "../assets/Jogo.png"
import { Header } from "../components/Header"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"

import BackgroundImg from "../assets/Background.png"


export function Jogo(){
    return (
       <main className="">
         <header>

            <button className="ml-3 mt-3">
                <Link to={"./Login"}><img className="size-1px" src={ Usuario } alt="" /> </Link>
            </button>
            
            <Header />
         </header>
         
            <h1 className="font-semibold text-[var(--color-blue)] text-4xl">EcoShark</h1>
            <h2 className="font-medium text-[var(--color-white)] mb-5">Salve os oceanos jogando com o tubarão mais consciente 
            do planeta!</h2>

            <div>
                <p className="font-semibold text-[var(--color-blue)]">Como Funciona</p>
                <p className="font-medium text-[var(--color-white)] mb-5">Colete lixo e desvie de armadilhas</p>
            </div>
       
            <div>
                 <p className="font-semibold text-[var(--color-blue)]">Personagem</p>
                 <p className="font-medium text-[var(--color-white)] mb-5">Você joga como o EcoShark!</p>
            </div>
        
            <div>
                <p className="font-semibold text-[var(--color-blue)]">Objetivo</p>
                <p className="font-medium text-[var(--color-white)] mb-5">Passe de fase e limpe o mar!</p>
            </div>

        <img src={JogoImg}alt="" />
        <button className="text-[var(--color-white)] py-3 px-6 rounded-full bg-[var(--color-blue)] font-semibold  hover:bg-[var(--color-bluehover)] cursor-pointer">Download Game</button>
       </main>
    )
}
