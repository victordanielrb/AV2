import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AeronavesPage from './pages/AeronavesPage'
import EtapasPage from './pages/EtapasPage'
import PecasPage from './pages/PecasPage'
import TestesPage from './pages/TestesPage'
import FuncionariosPage from './pages/FuncionariosPage'
import RelatoriosPage from './pages/RelatoriosPage'
import UsuarioPage from './pages/UsuarioPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/aeronaves" element={<AeronavesPage />} />
        <Route path="/etapas" element={<EtapasPage />} />
        <Route path="/pecas" element={<PecasPage />} />
        <Route path="/testes" element={<TestesPage />} />
        <Route path="/funcionarios" element={<FuncionariosPage />} />
        <Route path="/relatorios" element={<RelatoriosPage />} />
        <Route path="/usuario" element={<UsuarioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
