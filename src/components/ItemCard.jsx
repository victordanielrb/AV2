import './ItemCard.css'

export default function ItemCard({ title, subtitle, onEdit, onDelete }) {
  return (
    <div className="item-card">
      <div className="item-card-info">
        <span className="item-card-title">{title}</span>
        <span className="item-card-subtitle">{subtitle}</span>
      </div>
      <div className="item-card-actions">
        {onEdit && <button className="btn-edit" onClick={onEdit}>Editar</button>}
        {onDelete && <button className="btn-delete" onClick={onDelete}>Excluir</button>}
      </div>
    </div>
  )
}
