import { Link } from "react-router"
import { ThemeContext } from "../context/ThemeContent"
import { useContext} from "react"

import SolImg from "../assets/sol.png"
import LuaImg from "../assets/lua.png"
import Menu from "../assets/Menu.png"
import Home from "../assets/home-03.png"
import Usuario from "../assets/Usuario.png"

export function HeaderHome(){
    const { theme, toggle } = useContext(ThemeContext)

    return(

      <main>

        <div className="flex">

          <button className="flex right-0 mt-3">
            <Link to={"/Login"}><img className="size-1px " src={ Usuario } alt="" /> </Link>
          </button>
        </div>
        
            

          <header className=" flex justify-center items-center">
            <div className="max-w-xs mx-auto px-4 sm:px-6 lg-px flex justify-center">
              <div className="flex jusitfy-between h-16 justify-center">

                <div className="flex items-center justify-center">
                  <div className="min-width-xs hidden md:block justify-center">
                    <div className=" wl-10 flex items-center space-x-4 justify-center">
                      <Link className="hover:bg-[var(--color-bluehover)] hover:text-[var(--color-white)] text-[var(--color-grey)] px-5 py-2 item-center rounded-full text-xl font-medium transition duration-300 ease-in-out" to={"../Materiais"}>Materiais</Link>
                      <Link className="hover:bg-[var(--color-bluehover)] hover:text-[var(--color-white)] text-[var(--color-grey)] px-5 py-2 rounded-full text-xl font-medium transition duration-300 ease-in-out" to={"../Instrucoes"}>Instruções</Link>
                      <Link className="hover:bg-[var(--color-bluehover)] hover:text-[var(--color-white)] text-[var(--color-grey)] px-5 py-2 rounded-full text-xl font-medium transition duration-300 ease-in-out" to={"../Sobre"}>Sobre</Link>
                      <Link className="hover:bg-[var(--color-bluehover)] hover:text-[var(--color-white)] text-[var(--color-grey)] px-5 py-2 rounded-full text-xl font-medium transition duration-300 ease-in-out" to={"../Jogo"}>Jogo</Link>
                      <Link className="hover:bg-[var(--color-bluehover)] hover:text-[var(--color-white)] text-[var(--color-grey)] px-5 py-2 rounded-full text-xl font-medium transition duration-300 ease-in-out" to={"../Referencias"}>Referências</Link>
                      
                      <button onClick={toggle} className="flex ml-3 items-center justify-center w-10 h-10 rounded-full bg-[var(--color-bluehover)] cursor-pointer">
                        {theme === 'dark' ? (
                            <img className="h-6 w-6" src={SolImg} alt="Light Mode" />
                        ) : (
                            <img className="h-6 w-6" src={LuaImg} alt="Dark Mode" />
                        )}
                      </button>
                      
                    </div>
                  </div>
                </div>

             

              </div>
            </div>

            <div className=" flex md:hidden   mr-3 ">
                <button id="menuButton" type="button" className="inline-flex -mt-10 mb-10 p-2 justify-center items-center rouhded-md text-gray-400 hover:text-white focus:outline-none focus:text-white transition duration-300 ease-in-out" aria-label="Menu" aria-expanded="false">
                  <img className=" -mt-10" src= {Menu} alt=""></img>
                </button>
            </div>

            <div id="menu-open" className="before:fixed before:h-full before:2-full before:top-0 before:left-0 before:z-[calc(var(--index)+1)] hidden ">
              <div className="flex px-3 pt-3 pd-5 sm:px-3 justify-center bg-[var(--color-bluehover)] z-[calc(var(--index)+999) flex-col ">
                <Link className="hover:bg-[var(--color-bluehover)] text-[var(--color-white)] block px-4 py-3 rounded-md text-base font-medium transition duration-300 ease-in-out" to={"../Materiais"}>Materiais</Link>
                <Link className="hover:bg-[var(--color-bluehover)] text-[var(--color-white)] block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out" to={"../Instrucoes"}>Instruções</Link>
                <Link className="hover:bg-[var(--color-bluehover)] text-[var(--color-white)] block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out" to={"../Sobre"}>Sobre</Link>
                <Link className="hover:bg-[var(--color-bluehover)] text-[var(--color-white)] block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out" to={"../Jogo"}>Jogo</Link>
                <Link className="hover:bg-[var(--color-bluehover)] text-[var(--color-white)] block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out" to={"../Referencias"}>Referências</Link>
              </div>
            </div>
          </header>
      </main>
            

        
    )
} 