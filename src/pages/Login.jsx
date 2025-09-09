import { Link } from "react-router"
import BgLoginImg from "../assets/bg-login.png"

export function Login() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${BgLoginImg})` }}
    >
      
      <div className="bg-white/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md border border-white">
        <h1 className="text-xl md:text-2xl text-center text-[var(--color-blue)] dark:text-[var(--color-grey)] font-bold uppercase">
          ENTRAR
        </h1>

        <p className="text-center font-extralight text-[var(--color-grey)] mt-2 text-xs md:text-sm">
          Seja bem-vindo (a) de volta! entre na sua conta
        </p>

    
        <form className="mt-6 space-y-4">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail:"
              className="w-full px-3 py-2 md:px-4 md:py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
          </div>

          <div>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite sua senha:"
              className="w-full px-3 py-2 md:px-4 md:py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full uppercase bg-[var(--color-blue)] hover:bg-[var(--color-bluehover)] text-[var(--color-white)] py-2 md:py-3 px-4 rounded-full cursor-pointer dark:bg-[var(--color-grey)] transition"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 text-sm md:text-base">
          <p className="font-extralight text-[var(--color-grey)]">
            Não possui uma conta?
          </p>
          <Link
            className="text-[var(--color-blue)] font-medium dark:text-[var(--color-grey)] hover:underline"
            to={"./Cadastro"}
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </main>
  )
}
