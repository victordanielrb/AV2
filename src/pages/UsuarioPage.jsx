import Layout from '../components/Layout'
import './Page.css'
import './UsuarioPage.css'

export default function UsuarioPage() {
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
      </div>
    </Layout>
  )
}
