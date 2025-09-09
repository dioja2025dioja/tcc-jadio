import Background from "../assets/Background.png"
import VideoImg from "../assets/Video.png"
import { Header } from "../components/Header"
import Usuario from "../assets/Usuario.png"
import { Link } from "react-router"

export function Instrucoes() {
  return (
    <main className="dark:bg-[var(--color-bg-grey)] min-h-screen p-6 sm:p-10"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "var(--color-white)",
    }}>
       <header className="">
      


    <Header />
  </header>


      
      <h1 className="text-[var(--color-grey)] font-semibold text-center pt-6 pb-2 text-2xl md:text-3xl">
        Instruções de Uso - Jadio
      </h1>
      <h2 className="text-[var(--color-grey)] font-medium text-center mx-6 md:mx-10 text-lg md:text-xl mb-10">
        Manual passo a passo para ativar e usar o seu peixe robótico ecológico
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 px-6 md:px-12">
        <div className="text-[var(--color-grey)] text-justify text-base md:text-lg flex-1">
          <p className="font-semibold mb-2">Passo 1: Ligar o Protótipo</p>
          <p className="mb-4">
            Pressione o botão de energia localizado na parte superior do peixe
            até o LED acender. Aguarde alguns segundos até que o sistema
            inicialize completamente.
          </p>

          <p className="font-semibold mb-2">Passo 2: Conexão com o Aplicativo</p>
          <p className="mb-4">
            Baixe o aplicativo (Android e iOS). Ligue o app, ative o Bluetooth
            no seu celular e toque em "Conectar Dispositivo” e selecionar.
          </p>

          <p className="font-semibold mb-2">Passo 3: Escolha do Local</p>
          <p className="mb-4">Posicione o peixe suavemente na piscina</p>

          <p className="font-semibold mb-2">Passo 4: Acompanhamento pelo app</p>
          <p className="mb-4">
            Veja ao vivo a quantidade de lixo recolhido. Acompanhe e controle a
            rota do peixe e visualize os pontos
          </p>

          <p className="font-semibold mb-2">Passo 5: Retirada e limpeza</p>
          <p>
            Use o app para chamar o peixe de volta após a coleta. Retire e
            descarte a cápsula de resíduos adequadamente.
          </p>
        </div>

    
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-center font-semibold text-lg md:text-xl mb-4">
            VIDEO DEMONSTRATIVO:
          </h2>
          <img
            src={VideoImg}
            alt="Vídeo demonstrativo"
            className="w-full max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>


    </main>
  )
}
