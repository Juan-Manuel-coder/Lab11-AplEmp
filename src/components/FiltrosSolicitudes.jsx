import { Button } from './Button'
import { ListFilter } from 'lucide-react'

function FiltrosSolicitudes({ filtrarSolicitudes }) {
  return (
    <div className="flex flex-wrap gap-2 my-6">
      <Button variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700" onClick={() => filtrarSolicitudes('Todas')}>
        <ListFilter className="w-4 h-4 mr-1" /> Todas
      </Button>
      <Button variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700" onClick={() => filtrarSolicitudes('pendiente')}>
        Pendientes
      </Button>
      <Button variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700" onClick={() => filtrarSolicitudes('en proceso')}>
        En proceso
      </Button>
      <Button variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700" onClick={() => filtrarSolicitudes('resuelta')}>
        Resueltas
      </Button>
    </div>
  )
}

export default FiltrosSolicitudes