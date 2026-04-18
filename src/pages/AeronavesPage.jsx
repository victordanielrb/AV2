import { useState } from 'react'
import Layout from '../components/Layout'
import ItemRow from '../components/ItemRow'
import Modal from '../components/Modal'
import { aeronaves as inicial } from '../data/mock'
import './Page.css'

export default function AeronavesPage() {
  const [items, setItems] = useState(inicial)
  const [modal, setModal] = useState(null) // null | 'add' | item
  const [form, setForm] = useState({ codigo: '', modelo: '', tipo: 'COMERCIAL', status: 'ativo', capacidade: '', alcance: '' })

  function openAdd() {
    setForm({ codigo: '', modelo: '', tipo: 'COMERCIAL', status: 'ativo', capacidade: '', alcance: '' })
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
      setItems(prev => [...prev, { ...form, id: Date.now(), capacidade: Number(form.capacidade), alcance: Number(form.alcance) }])
    } else {
      setItems(prev => prev.map(i => i.id === modal.id ? { ...form, id: modal.id } : i))
    }
    setModal(null)
  }

  return (
    <Layout title="Aeronaves">
      <div className="page-toolbar">
        <button className="btn-add" onClick={openAdd}>Adicionar</button>
      </div>

      <div className="list">
        {items.map(item => (
          <ItemRow
            key={item.id}
            title={`${item.codigo} — ${item.modelo}`}
            subtitle={`${item.tipo} · ${item.status}`}
            onEdit={() => openEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {modal && (
        <Modal title={modal === 'add' ? 'Adicionar Aeronave' : 'Editar Aeronave'} onClose={() => setModal(null)}>
          <div className="modal-field">
            <label>Código</label>
            <input value={form.codigo} onChange={e => setForm(f => ({ ...f, codigo: e.target.value }))} placeholder="Ex: A006" />
          </div>
          <div className="modal-field">
            <label>Modelo</label>
            <input value={form.modelo} onChange={e => setForm(f => ({ ...f, modelo: e.target.value }))} placeholder="Ex: Boeing 737" />
          </div>
          <div className="modal-field">
            <label>Tipo</label>
            <select value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
              <option>COMERCIAL</option>
              <option>MILITAR</option>
              <option>REGIONAL</option>
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
          <div className="modal-field">
            <label>Capacidade (passageiros)</label>
            <input type="number" value={form.capacidade} onChange={e => setForm(f => ({ ...f, capacidade: e.target.value }))} placeholder="180" />
          </div>
          <div className="modal-field">
            <label>Alcance (km)</label>
            <input type="number" value={form.alcance} onChange={e => setForm(f => ({ ...f, alcance: e.target.value }))} placeholder="5600" />
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
