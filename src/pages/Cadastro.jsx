import { Link } from "react-router"
import BgLoginImg from "../assets/bg-login.png"

export function Cadastro() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${BgLoginImg})` }}
    >
      <div className="bg-white/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-lg border border-white">
        <h1 className="text-xl md:text-2xl text-center text-[var(--color-blue)] dark:text-[var(--color-grey)] font-bold uppercase">
          Cadastra-se
        </h1>

        <p className="text-center font-extralight text-[var(--color-grey)] mt-2 text-xs md:text-sm">
          Olá seja bem-vindo (a)! Crie uma conta para se juntar a nós
        </p>

        <form className="mt-6 space-y-4">
          {/* Usuário */}
          <div>
            <input
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Digite o seu usuário:"
              className="w-full px-3 py-2 md:px-4 md:py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
          </div>

          {/* E-mail */}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite o seu e-mail:"
              className="w-full px-3 py-2 md:px-4 md:py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
          </div>

          {/* Confirme e-mail e senha lado a lado em telas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="Confirme o seu e-mail:"
              className="px-3 py-2 md:px-4 md:py-2 rounded-md bg-white w-full text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
            <input
              type="password"
              name="confirmSenha"
              id="confirmSenha"
              placeholder="Confirme sua senha:"
              className="px-3 py-2 md:px-4 md:py-2 rounded-md bg-white w-full text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
          </div>

          {/* Senha */}
          <div>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Digite a sua senha:"
              className="w-full px-3 py-2 md:px-4 md:py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 outline-none dark:text-[var(--color-grey)]"
            />
          </div>

          {/* Botão */}
          <div>
            <button
              type="submit"
              className="w-full uppercase bg-[var(--color-blue)] hover:bg-[var(--color-bluehover)] text-[var(--color-white)] py-2 md:py-3 px-4 rounded-full cursor-pointer dark:bg-[var(--color-grey)] transition"
            >
              Cadastrar-se
            </button>
          </div>
        </form>

        {/* Link de login */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 text-sm md:text-base">
          <p className="font-extralight text-[var(--color-grey)]">
            Já possui uma conta?
          </p>
          <Link
            className="text-[var(--color-blue)] font-medium dark:text-[var(--color-grey)] hover:underline"
            to={"../Login"}
          >
            Entrar
          </Link>
        </div>
      </div>
    </main>
  )
}
