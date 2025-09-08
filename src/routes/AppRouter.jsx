import { Routes, Route} from "react-router"


import { Home } from "../pages/Home"
import { Materiais } from "../pages/Materiais"
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
            <Route path="/Instrucoes" element={<Instrucoes />} />
            <Route path="/Instrucoes/Login" element={<Login/>} />
            <Route path="/Instrucoes/Login/Cadastro" element={<Cadastro/>} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Jogo" element={<Jogo />} />
            <Route path="/Referencias" element={<Referencias />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Login/Cadastro" element={<Cadastro />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Home/Login" element={<Login />} />
        </Routes>
    )
}