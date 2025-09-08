import BackgroundImg from "../assets/Background.png"
import LinkPretoImg from "../assets/LinkPreto.png"
import { Header } from "../components/Header"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"


export function Referencias(){
    return (
       <main>
         <header>

            <button className="ml-3 mt-3">
                <Link to={"./Login"}><img className="size-1px" src={ Usuario } alt="" /> </Link>
            </button>
            
            <Header />
         </header>

            <h1 className="flex font-semibold text-[var(--color-grey)] justify-center text-2xl pt-10">Página de Referências </h1>
            <div className="py-10 ">
                <div className="flex justify-center py-5">
                    <img src= {LinkPretoImg} alt="" />
                    <link rel="stylesheet" href="https://tailwindcss.com/docs/font-size" />
                    <p>(PDF) SISTEMA DE MONITORAMENTO AUTOMATIZADO PARA CONTROLE DE QUALIDADE DE ÁGUA EM SISTEMA AQUAPÔNICO</p>
                </div>
                
                <div className="flex justify-center py-5">
                    <img src= {LinkPretoImg} alt="" />
                    <link rel="stylesheet" href="https://tailwindcss.com/docs/font-size" />
                    <p>(PDF) Sistema de monitoramento da qualidade da água usando internet das coisas</p>
                </div>
                
                <div className="flex justify-center py-5">
                    <img src= {LinkPretoImg} alt="" />
                    <link rel="stylesheet" href="https://tailwindcss.com/docs/font-size" />
                    <p>https://www.modlabupenn.org/wp-content/uploads/2022/02/Knizhnik_UR_2020.pdf</p>
                </div>

                <div className="flex justify-center py-5">
                    <img src= {LinkPretoImg} alt="" />
                    <link rel="stylesheet" href="https://tailwindcss.com/docs/font-size" />
                    <p>https://www.modlabupenn.org/wp-content/uploads/2022/02/Knizhnik_UR_2020.pdf</p>
                </div>
            </div>
            
            <img src= {BackgroundImg} alt="" />
            <img src= {BackgroundImg} alt="" />
                   
       </main>
    )
}
