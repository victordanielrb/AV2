import { useState } from 'react'
import Layout from '../components/Layout'
import ItemCard from '../components/ItemCard'
import Modal from '../components/Modal'
import { etapas as inicial } from '../data/mock'
import './Page.css'

const STATUS_LABEL = { PENDENTE: 'Pendente', ANDAMENTO: 'Em Andamento', CONCLUIDA: 'Concluída' }

export default function EtapasPage() {
  const [items, setItems] = useState(inicial)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ nome: '', aeronave: '', status: 'PENDENTE', prazo: '' })

  function openAdd() {
    setForm({ nome: '', aeronave: '', status: 'PENDENTE', prazo: '' })
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

  const groupedByAeronave = Object.entries(
    items.reduce((acc, item) => {
      const key = item.aeronave?.trim() || 'Sem aeronave'
      if (!acc[key]) acc[key] = []
      acc[key].push(item)
      return acc
    }, {})
  ).sort(([a], [b]) => a.localeCompare(b))

  function getStatusCount(groupItems, status) {
    return groupItems.filter(item => item.status === status).length
  }

  return (
    <Layout title="Etapas">
      <div className="page-toolbar">
        <button className="btn-add" onClick={openAdd}>Adicionar</button>
      </div>

      <div className="etapas-groups">
        {groupedByAeronave.map(([aeronave, groupItems]) => (
          <section key={aeronave} className="etapas-group">
            <header className="etapas-group-header">
              <div>
                <h3 className="etapas-group-title">{aeronave}</h3>
                <p className="etapas-group-subtitle">{groupItems.length} etapa(s)</p>
              </div>
              <div className="etapas-statuses">
                <span className="status-chip">Pendente: {getStatusCount(groupItems, 'PENDENTE')}</span>
                <span className="status-chip">Andamento: {getStatusCount(groupItems, 'ANDAMENTO')}</span>
                <span className="status-chip">Concluída: {getStatusCount(groupItems, 'CONCLUIDA')}</span>
              </div>
            </header>

            <div className="grid-3">
              {groupItems.map(item => (
                <ItemCard
                  key={item.id}
                  title={item.nome}
                  subtitle={`${STATUS_LABEL[item.status]} · Prazo: ${item.prazo}`}
                  onEdit={() => openEdit(item)}
                  onDelete={() => handleDelete(item.id)}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {modal && (
        <Modal title={modal === 'add' ? 'Adicionar Etapa' : 'Editar Etapa'} onClose={() => setModal(null)}>
          <div className="modal-field">
            <label>Nome</label>
            <input value={form.nome} onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} placeholder="Ex: Revisão Estrutural" />
          </div>
          <div className="modal-field">
            <label>Aeronave</label>
            <input value={form.aeronave} onChange={e => setForm(f => ({ ...f, aeronave: e.target.value }))} placeholder="Ex: Boeing 737" />
          </div>
          <div className="modal-field">
            <label>Status</label>
            <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
              <option value="PENDENTE">Pendente</option>
              <option value="ANDAMENTO">Em Andamento</option>
              <option value="CONCLUIDA">Concluída</option>
            </select>
          </div>
          <div className="modal-field">
            <label>Prazo</label>
            <input value={form.prazo} onChange={e => setForm(f => ({ ...f, prazo: e.target.value }))} placeholder="dd/mm/aaaa" />
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
