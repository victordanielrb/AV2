import { useState } from 'react'
import Layout from '../components/Layout'
import ItemRow from '../components/ItemRow'
import Modal from '../components/Modal'
import { funcionarios as inicial } from '../data/mock'
import './Page.css'

export default function FuncionariosPage() {
  const [items, setItems] = useState(inicial)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ nome: '', usuario: '', nivel: 'OPERADOR', telefone: '', endereco: '' })

  function openAdd() {
    setForm({ nome: '', usuario: '', nivel: 'OPERADOR', telefone: '', endereco: '' })
    setModal('add')
  }

  function openEdit(item) {
    setForm({ ...item })
    setModal(item)
  }

  function handleDelete(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function handleSave() {
    if (modal === 'add') {
      setItems(prev => [...prev, { ...form, id: Date.now() }])
    } else {
      setItems(prev => prev.map(i => i.id === modal.id ? { ...form, id: modal.id } : i))
    }
    setModal(null)
  }

  return (
    <Layout title="Funcionários">
      <div className="page-toolbar">
        <button className="btn-add" onClick={openAdd}>Adicionar</button>
      </div>

      <div className="list">
        {items.map(item => (
          <ItemRow
            key={item.id}
            title={item.nome}
            subtitle={`${item.nivel} · ${item.telefone}`}
            onEdit={() => openEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {modal && (
        <Modal title={modal === 'add' ? 'Adicionar Funcionário' : 'Editar Funcionário'} onClose={() => setModal(null)}>
          <div className="modal-field">
            <label>Nome</label>
            <input value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} placeholder="Nome completo" />
          </div>
          <div className="modal-field">
            <label>Usuário</label>
            <input value={form.usuario} onChange={e => setForm(f => ({ ...f, usuario: e.target.value }))} placeholder="Login" />
          </div>
          <div className="modal-field">
            <label>Nível</label>
            <select value={form.nivel} onChange={e => setForm(f => ({ ...f, nivel: e.target.value }))}>
              <option>ADMINISTRADOR</option>
              <option>ENGENHEIRO</option>
              <option>OPERADOR</option>
            </select>
          </div>
          <div className="modal-field">
            <label>Telefone</label>
            <input value={form.telefone} onChange={e => setForm(f => ({ ...f, telefone: e.target.value }))} placeholder="(11) 99999-0000" />
          </div>
          <div className="modal-field">
            <label>Endereço</label>
            <input value={form.endereco} onChange={e => setForm(f => ({ ...f, endereco: e.target.value }))} placeholder="Localização" />
          </div>
          <div className="modal-actions">
            <button className="btn-cancel" onClick={() => setModal(null)}>Cancelar</button>
            <button className="btn-save" onClick={handleSave}>Salvar</button>
          </div>
        </Modal>
      )}
    </Layout>
  )
}
