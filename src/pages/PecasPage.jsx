import { useState } from 'react'
import Layout from '../components/Layout'
import ItemCard from '../components/ItemCard'
import Modal from '../components/Modal'
import { pecas as inicial } from '../data/mock'
import './Page.css'

export default function PecasPage() {
  const [items, setItems] = useState(inicial)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ nome: '', aeronave: '', tipo: 'NACIONAL', status: 'ativo' })

  function openAdd() {
    setForm({ nome: '', aeronave: '', tipo: 'NACIONAL', status: 'ativo' })
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
    <Layout title="Peças">
      <div className="page-toolbar">
        <button className="btn-add" onClick={openAdd}>Adicionar</button>
      </div>

      <div className="grid-3">
        {items.map(item => (
          <ItemCard
            key={item.id}
            title={item.nome}
            subtitle={`${item.aeronave} · ${item.status}`}
            onEdit={() => openEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {modal && (
        <Modal title={modal === 'add' ? 'Adicionar Peça' : 'Editar Peça'} onClose={() => setModal(null)}>
          <div className="modal-field">
            <label>Nome</label>
            <input value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} placeholder="Ex: Motor CFM56" />
          </div>
          <div className="modal-field">
            <label>Aeronave</label>
            <input value={form.aeronave} onChange={e => setForm(f => ({ ...f, aeronave: e.target.value }))} placeholder="Ex: Boeing 737" />
          </div>
          <div className="modal-field">
            <label>Tipo</label>
            <select value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
              <option>NACIONAL</option>
              <option>IMPORTADA</option>
            </select>
          </div>
          <div className="modal-field">
            <label>Status</label>
            <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
              <option>ativo</option>
              <option>inativo</option>
              <option>manutenção</option>
            </select>
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
