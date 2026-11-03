import SolicitudItem from './SolicitudItem'
import { Inbox } from 'lucide-react'

function ListaSolicitudes({ solicitudes, onDelete, onChangeEstado }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-2 mb-4">
        <Inbox className="w-6 h-6" /> Lista de Solicitudes
      </h2>
      {solicitudes.length === 0 ? (
        <p className="text-slate-400 text-center py-8">No hay solicitudes registradas.</p>
      ) : (
        solicitudes.map((sol, index) => (
          <SolicitudItem
            key={index}
            solicitud={sol}
            onDelete={() => onDelete(index)}
            onChangeEstado={(nuevoEstado) => onChangeEstado(index, nuevoEstado)}
          />
        ))
      )}
    </div>
  )
}

export default ListaSolicitudes