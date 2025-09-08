import Home from "../assets/home-03.png"

export function Cadastro () {
    return (

        
        <header>
            <button className="w-fit ml-3 mt-3 bg-[var(--color-bluehover)] flex border-none ">
                
            </button>
        
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-grey-800 to-grey-700 px-4 bg-[var(--color-bluehover)]">
            <div className="bg-[var(--color-white)] opacity-75 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl text-center text-[var(--color-blue)] font-bold uppercase">
                CADASTRA-SE
                </h1>

                <p className="text-center font-extralight text-[var(--color-grey)] mt-2 text-sm">
                Olá seja bem-vindo (a)! crie uma conta para se juntar a nós
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
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite seu e-mail:" 
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-70 text-gray-800 placeholder-gray-600 outline-none"
                        />
                    </div>
                   
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
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Digite seu e-mail:" 
                            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-70 text-gray-800 placeholder-gray-600 outline-none"
                        />
                    </div>


                    <div>
                        <button type="submit"className="w-full uppercase bg-[var(--color-blue)] hover:bg-[var(--color-bluehover)] text-[var(--color-white)] py-2 px-4 rounded-full">CADASTRA-SE</button>
                    </div>
                </form>

                <p className="text-center font-extralight text-[var(--color-grey)] mt-4">Já possui uma conta?</p>

                <button>
                    
                </button>
            </div>
        </div>
        </header>
    )
}
