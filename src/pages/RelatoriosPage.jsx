import { useState } from 'react'
import Layout from '../components/Layout'
import ItemRow from '../components/ItemRow'
import { relatorios as inicial } from '../data/mock'
import './Page.css'

export default function RelatoriosPage() {
  const [items, setItems] = useState(inicial)

  function handleDelete(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <Layout title="Relatórios">
      <div className="page-toolbar">
        <button className="btn-generate">Gerar novo relatório</button>
      </div>

      <div className="list">
        {items.map(item => (
          <ItemRow
            key={item.id}
            title={item.titulo}
            subtitle={`${item.aeronave} · ${item.status}`}
            onDelete={() => handleDelete(item.id)}
            extraActions={
              <button className="btn-download">Baixar</button>
            }
          />
        ))}
      </div>
    </Layout>
  )
}
