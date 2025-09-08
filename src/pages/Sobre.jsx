import FernandoImg from "../assets/Fernando.jpg"
import GabiImg from "../assets/Gabi.jpg"
import TavaresImg from "../assets/Tavares.png"
import RyanImg from "../assets/Ryan.jpg"
import HenriqueImg from "../assets/Henrique.jpg"
import { Header } from "../components/Header"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"

import BackgroundImg from "../assets/Background.png"



export function Sobre(){
    return (
        <main>
            <header>

                <button className="ml-3 mt-3">
                    <Link to={"./Login"}><img className="size-1px" src={ Usuario } alt="" /> </Link>
                </button>
                
                <Header />
            </header>
            
            <h1 className="flex text-[var(--color-grey)] justify-center font-semibold mb-6 pt-10 text-2xl">Quem Somos?</h1>
            <p  className=" text-[var(--color-grey)] font-regular mb-6"> Somos cinco estudantes do Colégio Adventista UNASP. Este site faz parte do nosso TCC, que tem como foco a sustentabilidade.Criamos o projeto JADIO, um robô que ajuda a limpar rios e lagos, e o app EcoApp, que permite acompanhar tudo em tempo real.Queremos mostrar que a tecnologia pode ser uma aliada do meio ambiente. </p>
           
            <div className="flex justify-evenly p-12">
                <div>
                    <img className=" w-32 h-32 rounded-full" src={FernandoImg} alt="" />
                    <p className="text-[var(--color-grey)] font-regular">Fernando Azevedo</p>
                    <button></button>
                </div>
                <div>
                    <img className="w-32 h-32 rounded-full" src={GabiImg} alt="" />
                    <p className="text-[var(--color-grey)] font-regular">Gabrielle Costa</p>
                    <button></button>
                </div>
                <div>
                    <img className="w-32 h-32 rounded-full" src={TavaresImg} alt="" />
                    <p className="text-[var(--color-grey)] font-regular">Gustavo Tavares</p>
                    <button></button>
                </div>
                <div>
                    <img className="w-32 h-32 rounded-full" src={RyanImg} alt="" />
                    <p className="text-[var(--color-grey)] font-regular">Ryan Kavamoto</p>
                    <button></button>
                </div>
                <div>
                    <img className="w-32 h-32 rounded-full" src={HenriqueImg} alt="" />
                    <p className="text-[var(--color-grey)] font-regular">Henrique Alves</p>
                    <button></button>
                </div>
            </div>

            <img src= {BackgroundImg} alt="" />
            <img src= {BackgroundImg} alt="" />
        </main>
    )
}
