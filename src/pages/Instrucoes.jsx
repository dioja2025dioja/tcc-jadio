import BackgroundImg from "../assets/Background.png"
import VideoImg from "../assets/Video.png"
import { Header } from "../components/Header"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"


export function Instrucoes () {
  return (
     <main>
      <header className="">
      

          <button className="ml-3 mt-3">
            <Link to={"./Login"}><img className="size-1px" src={ Usuario } alt="" /> </Link>
          </button>

        <Header />
      </header>

        <h1 className="text-[var(--color-grey)] font-semibold mb-3 text-center pt-9 pb-4 text-3xl">Instruções de Uso - Jadio</h1>
        <h2 className="text-[var(--color-grey)] font-medium mb-5 text-center ml-10 mr-10 text-xl">Manual passo a passo para ativar e usar o seu peixe robótico ecológico</h2>
        
      <div className="text-[var(--color-grey)]  py-10  flex-col text-justify min-width-xs ml-10 mr-10 text-xl">
        <p className="font-semibold mb-2 ">Passo 1: Ligar o Protótipo</p>
        <p className="mb-4  justify-center">Pressione o botão de energia localizado na parte superior do peixe até o LED acender.   
        Aguarde alguns segundos até que o sistema inicialize completamente.</p>

        <p className="font-semibold mb-2">Passo 2: Conexão com o Aplicativo</p>
        <p className="mb-4 ">Baixe o aplicativo (Android e ios). 
          Ligue o app, ative o Bluetooth no seu celular e toque em "Conectar Dispositivo” e selecionar.</p>

        <p className="font-semibold mb-2">Passo 3: Escolha do Local</p>
        <p className="mb-4 ">Posicione o peixe suavemente na piscina</p>

        <p className="font-semibold mb-2">Passo 4: Acompanhamento pelo app</p>
        <p className="mb-4 ">Veja ao vivo a quantidade de lixo recolhido. 
          Acompanhe e controle a rota do peixe e visuailze os pontos</p>

        <p className="font-semibold mb-2">Passo 5: Retirada e limpeza</p>
        <p className="">Use o app para chamar o peixe de volta após a coleta.
        Retire e descarte a capsula de residuos adequadamente.</p>
      </div>

      <div>
      <img className="" src= {BackgroundImg} alt="" />


        <h2 className="text-center">VIDEO DEMONSTRATIVO:</h2>
        <img src= {VideoImg} alt="" />
      </div>
     
     </main>
  )
}