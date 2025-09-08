import { Link } from "react-router";
import Home from "../assets/home-03.png"
import Usuario from "../assets/Usuario.png"

export function Login() {
    return (
        
        <header>
             <button className="w-fit ml-3 mt-3 bg-[var(--color-bluehover)] flex border-none ">
                <Link to={"../Home"}><img className="size-1px" src={ Home } alt="" /> </Link>
            </button>

            <div className="bg-[var(--color-bluehover)] min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-grey-800 to-grey-700 px-4">
            <div className="bg-[var(--color-white)] opacity-75 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl text-center text-[var(--color-blue)] font-bold uppercase">
                    Entrar
                </h1>

                <p className="text-center font-extralight text-[var(--color-grey)] mt-2 text-sm">
                    Seja bem-vindo (a) de volta! entre na sua conta
                </p>

                <form className="mt-6 space-y-4">
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite seu e-mail:" 
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-70 text-gray-800 placeholder-gray-600 outline-none"
                        />
                    </div>

                    <div>
                        <input 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            placeholder="Digite sua senha:" 
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-70 text-gray-800 placeholder-gray-600 outline-none"
                        />
                    </div>

                    <div>
                        <button type="submit"className="w-full uppercase bg-[var(--color-blue)] hover:bg-[var(--color-bluehover)] text-[var(--color-white)] py-2 px-4 rounded-full">Entrar</button>
                    </div>
                </form>

                <p className="text-center font-extralight text-[var(--color-grey)] mt-4">Não possui uma conta?</p>

                <button>
                    <p ></p>
                    <Link className="text-[var(--color-blue)]" to={"./Cadastro"}>Cadastre-se</Link>
                </button>
            </div>
        </div>
        </header>
        

        
    )
}
