import { Routes, Route} from "react-router"


import { Home } from "../pages/Home"
import { Materiais } from "../pages/Materiais/"
import { Instrucoes} from "../pages/Instrucoes"
import { Sobre } from "../pages/Sobre"
import { Jogo } from "../pages/Jogo"
import { Referencias } from "../pages/Referencias"
import { Login } from "../pages/Login"
import { Cadastro } from "../pages/Cadastro"


export function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Materiais" element={<Materiais />} />
            <Route path="/Materiais/Home" element={<Home />} />
            <Route path="/Materiais/Login" element={<Login />} />
            <Route path="/Materiais/Login/Cadastro" element={<Login />} />
            <Route path="/Instrucoes" element={<Instrucoes />} />
            <Route path="/Instrucoes/Home" element={<Home />} />
            <Route path="/Instrucoes/Login" element={<Login/>} />
            <Route path="/Instrucoes/Login/Cadastro" element={<Cadastro/>} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Sobre/Home" element={<Home />} />
            <Route path="/Sobre/Login" element={<Login />} />
            <Route path="/Sobre/Login/Cadastro" element={<Cadastro />} />
            <Route path="/Jogo" element={<Jogo />} />
            <Route path="/Jogo/Home" element={<Home />} />
            <Route path="/Jogo/Login" element={<Login/>} />
            <Route path="/Jogo/Login/Cadastro" element={<Cadastro />} />
            <Route path="/Referencias" element={<Referencias />} />
            <Route path="/Referencias/Home" element={<Home />} />
            <Route path="/Referencias/Login" element={<Login />} />
            <Route path="/Referencias/Login/Cadastro" element={<Cadastro />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Login/Home" element={<Home />} />
            <Route path="/Login/Cadastro" element={<Cadastro />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Cadastro/Home" element={<Home />} />
            <Route path="/Home/Login" element={<Login />} />
            <Route path="/Home/Login/Cadastro" element={<Cadastro/>} />
        </Routes>
    )
}