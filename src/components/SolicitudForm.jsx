import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Label } from './Label'
import { Card, CardHeader, CardTitle, CardContent } from './Card'
import { Select } from './Select'
import { Plus, Eraser, ClipboardPlus } from 'lucide-react'

function SolicitudForm({ agregarSolicitud }) {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [solicitante, setSolicitante] = useState('')
  const [prioridad, setPrioridad] = useState('baja')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!titulo.trim()) {
      setError('El título es obligatorio.')
      return
    }
    if (!descripcion.trim()) {
      setError('La descripción es obligatoria.')
      return
    }

    agregarSolicitud({
      titulo,
      descripcion,
      solicitante: solicitante || 'Anónimo',
      prioridad,
      estado: 'pendiente',
    })

    setTitulo('')
    setDescripcion('')
    setSolicitante('')
    setPrioridad('baja')
  }

  const handleLimpiar = () => {
    setTitulo('')
    setDescripcion('')
    setSolicitante('')
    setPrioridad('baja')
    setError('')
  }

  return (
    <Card className="bg-slate-800/90 border-2 border-slate-600 shadow-2xl backdrop-blur-md">
      <CardHeader>
        <CardTitle className="text-cyan-400 flex items-center gap-2 text-2xl">
          <ClipboardPlus className="w-6 h-6" /> Registrar Solicitud
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-slate-200">Título</Label>
            <Input className="bg-slate-700 border-slate-500 text-white mt-1" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título de la solicitud" />
          </div>
          <div>
            <Label className="text-slate-200">Descripción</Label>
            <Input className="bg-slate-700 border-slate-500 text-white mt-1" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del problema" />
          </div>
          <div>
            <Label className="text-slate-200">Solicitante</Label>
            <Input className="bg-slate-700 border-slate-500 text-white mt-1" value={solicitante} onChange={(e) => setSolicitante(e.target.value)} placeholder="Nombre del solicitante" />
          </div>
          <div>
            <Label className="text-slate-200">Prioridad</Label>
            <Select className="bg-slate-700 border-slate-500 text-white mt-1" value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </Select>
          </div>
          {error && <p className="text-red-400 text-sm bg-red-400/10 p-2 rounded">{error}</p>}
          <div className="flex gap-3 pt-2">
            <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold">
              <Plus className="w-4 h-4 mr-1" /> Registrar
            </Button>
            <Button type="button" variant="outline" onClick={handleLimpiar} className="border-slate-500 text-slate-300 hover:bg-slate-700">
              <Eraser className="w-4 h-4 mr-1" /> Limpiar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default SolicitudForm