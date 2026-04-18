import { useState } from 'react'
import Layout from '../components/Layout'
import ItemRow from '../components/ItemRow'
import Modal from '../components/Modal'
import { testes as inicial } from '../data/mock'
import './Page.css'

export default function TestesPage() {
  const [items, setItems] = useState(inicial)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ tipo: 'ELETRICO', aeronave: '', resultado: 'APROVADO', data: '' })

  function openAdd() {
    setForm({ tipo: 'ELETRICO', aeronave: '', resultado: 'APROVADO', data: '' })
    setModal('add')
  }

  function handleDelete(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function handleSave() {
    setItems(prev => [...prev, { ...form, id: Date.now() }])
    setModal(null)
  }

  return (
    <Layout title="Testes">
      <div className="page-toolbar">
        <button className="btn-add" onClick={openAdd}>Adicionar</button>
      </div>

      <div className="list">
        {items.map(item => (
          <ItemRow
            key={item.id}
            title={`${item.tipo} — ${item.aeronave}`}
            subtitle={`${item.resultado} · ${item.data}`}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>

      {modal && (
        <Modal title="Realizar Teste" onClose={() => setModal(null)}>
          <div className="modal-field">
            <label>Aeronave</label>
            <input value={form.aeronave} onChange={e => setForm(f => ({ ...f, aeronave: e.target.value }))} placeholder="Ex: Boeing 737" />
          </div>
          <div className="modal-field">
            <label>Tipo</label>
            <select value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}>
              <option>ELETRICO</option>
              <option>HIDRAULICO</option>
              <option>AERODINAMICO</option>
            </select>
          </div>
          <div className="modal-field">
            <label>Resultado</label>
            <select value={form.resultado} onChange={e => setForm(f => ({ ...f, resultado: e.target.value }))}>
              <option>APROVADO</option>
              <option>REPROVADO</option>
            </select>
          </div>
          <div className="modal-field">
            <label>Data</label>
            <input value={form.data} onChange={e => setForm(f => ({ ...f, data: e.target.value }))} placeholder="dd/mm/aaaa" />
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
