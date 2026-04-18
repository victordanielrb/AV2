import './ItemRow.css'

export default function ItemRow({ title, subtitle, onEdit, onDelete, extraActions }) {
  return (
    <div className="item-row">
      <div className="item-row-info">
        <span className="item-row-title">{title}</span>
        <span className="item-row-subtitle">{subtitle}</span>
      </div>
      <div className="item-row-actions">
        {extraActions}
        {onEdit && (
          <button className="btn-edit" onClick={onEdit}>Editar</button>
        )}
        {onDelete && (
          <button className="btn-delete" onClick={onDelete}>Excluir</button>
        )}
      </div>
    </div>
  )
}
