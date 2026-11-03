import { useState } from 'react'
import SolicitudForm from './components/SolicitudForm'
import ListaSolicitudes from './components/ListaSolicitudes'
import FiltrosSolicitudes from './components/FiltrosSolicitudes'
import { Headset } from 'lucide-react'

function App() {
  const [solicitudes, setSolicitudes] = useState([])
  const [filtro, setFiltro] = useState('Todas')

  const agregarSolicitud = (nuevaSolicitud) => {
    setSolicitudes([...solicitudes, nuevaSolicitud])
  }

  const eliminarSolicitud = (index) => {
    const nuevas = [...solicitudes]
    nuevas.splice(index, 1)
    setSolicitudes(nuevas)
  }

  const cambiarEstado = (index, nuevoEstado) => {
    const nuevas = [...solicitudes]
    nuevas[index].estado = nuevoEstado
    setSolicitudes(nuevas)
  }

  const filtrarSolicitudes = (criterio) => {
    setFiltro(criterio)
  }

  let solicitudesFiltradas = solicitudes
  if (filtro !== 'Todas') {
    solicitudesFiltradas = solicitudes.filter((sol) => sol.estado === filtro)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center gap-3">
            <Headset className="w-10 h-10 text-cyan-400" /> Soporte Técnico
          </h1>
          <p className="text-slate-400 mt-2">Gestiona las solicitudes de soporte de la empresa</p>
        </header>
        
        <SolicitudForm agregarSolicitud={agregarSolicitud} />
        <FiltrosSolicitudes filtrarSolicitudes={filtrarSolicitudes} />
        <ListaSolicitudes
          solicitudes={solicitudesFiltradas}
          onDelete={eliminarSolicitud}
          onChangeEstado={cambiarEstado}
        />
      </div>
    </div>
  )
}

export default App