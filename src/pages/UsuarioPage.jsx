import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { relatorios } from '../data/mock'
import './Page.css'
import './UsuarioPage.css'

export default function UsuarioPage() {
  const meusRelatorios = relatorios.slice(0, 3)

  return (
    <Layout title="Usuário">
      <div className="usuario-card">
        <h2 className="usuario-nome">Eduardo</h2>
        <p className="usuario-nivel">Administrador</p>

        <div className="usuario-form">
          <div className="modal-field">
            <label>Usuário</label>
            <input defaultValue="admin" placeholder="Digite seu usuário" />
          </div>
          <div className="modal-field">
            <label>Senha</label>
            <input type="password" defaultValue="admin123" placeholder="••••••••" />
          </div>
        </div>

        <div className="usuario-relatorios">
          <div className="usuario-relatorios-header">
            <h3>Meus relatórios</h3>
            <Link to="/relatorios" className="btn-ver-relatorios">Ver todos</Link>
          </div>

          <div className="usuario-relatorios-lista">
            {meusRelatorios.map(relatorio => (
              <div key={relatorio.id} className="usuario-relatorio-item">
                <span className="usuario-relatorio-titulo">{relatorio.titulo}</span>
                <span className="usuario-relatorio-meta">{relatorio.aeronave} · {relatorio.data}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
