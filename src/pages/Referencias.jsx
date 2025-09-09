import BackgroundImg from "../assets/Background.png";
import LinkPretoImg from "../assets/LinkPreto.png";
import { Header } from "../components/Header";
import Usuario from "../assets/Usuario.png";
import { Link } from "react-router";

export function Referencias() {

  
  const referencias = [
    {
      text: "(PDF) SISTEMA DE MONITORAMENTO AUTOMATIZADO PARA CONTROLE DE QUALIDADE DE ÁGUA EM SISTEMA AQUAPÔNICO",
      url: "#",
    },
    {
      text: "(PDF) Sistema de monitoramento da qualidade da água usando internet das coisas",
      url: "#",
    },
    {
      text: "https://www.modlabupenn.org/wp-content/uploads/2022/02/Knizhnik_UR_2020.pdf",
      url: "https://www.modlabupenn.org/wp-content/uploads/2022/02/Knizhnik_UR_2020.pdf",
    },
    {
      text: "https://www.modlabupenn.org/wp-content/uploads/2022/02/Knizhnik_UR_2020.pdf",
      url: "https://www.modlabupenn.org/wp-content/uploads/2022/02/Knizhnik_UR_2020.pdf",
    },
  ];

  return (
    <main className="relative dark:bg-[var(--color-bg-grey)] min-h-screen overflow-hidden flex flex-col">
      
      <header>
        <Header />
      </header>
      
     




      
      <div className="relative z-10 flex flex-col items-center justify-start flex-1 pt-20 px-4">
        <h1 className="flex font-semibold text-[var(--color-grey)] justify-center text-2xl mb-10">
          Página de Referências
        </h1>

        <div className="flex flex-col items-center space-y-5 w-full max-w-3xl">
          {referencias.map((ref, index) => (
           <div
           key={index}
           className="flex items-center space-x-3 w-full p-3 rounded shadow"
         >
              <img
                className="w-6 h-6 flex-shrink-0"
                src={LinkPretoImg}
                alt="Link"
              />
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-200 focus:outline-none ${
                  index === 0 ? "text-justify break-words" : "whitespace-nowrap"
                } hover:underline`}
              >
                {ref.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
