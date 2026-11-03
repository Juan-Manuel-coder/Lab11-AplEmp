import { Card, CardContent } from './Card'
import { Button } from './Button'
import { Select } from './Select'
import { Trash2, User, AlertCircle } from 'lucide-react'

function SolicitudItem({ solicitud, onDelete, onChangeEstado }) {
  const prioridadColor = {
    alta: 'bg-red-500/20 text-red-300 border-red-500/40',
    media: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    baja: 'bg-green-500/20 text-green-300 border-green-500/40',
  }

  const estadoColor = {
    pendiente: 'bg-gray-500/20 text-gray-300',
    'en proceso': 'bg-blue-500/20 text-blue-300',
    resuelta: 'bg-green-500/20 text-green-300',
  }

  return (
    <Card className="bg-slate-800/80 border-2 border-slate-600 mb-4 shadow-lg">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-white">{solicitud.titulo}</h3>
            <p className="text-slate-300 text-sm mt-1">{solicitud.descripcion}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <User className="w-3 h-3" /> {solicitud.solicitante}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs border ${prioridadColor[solicitud.prioridad]}`}>
                <AlertCircle className="w-3 h-3 inline mr-1" />
                {solicitud.prioridad}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${estadoColor[solicitud.estado]}`}>
                {solicitud.estado}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Select
              className="w-36 bg-slate-700 border-slate-500 text-white text-sm"
              value={solicitud.estado}
              onChange={(e) => onChangeEstado(e.target.value)}
            >
              <option value="pendiente">Pendiente</option>
              <option value="en proceso">En proceso</option>
              <option value="resuelta">Resuelta</option>
            </Select>
            <Button 
              size="sm" 
              onClick={onDelete}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold"
            >
              <Trash2 className="w-4 h-4 mr-1" /> Eliminar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SolicitudItem