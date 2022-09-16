import { Card, TextInput, Button, Textarea, Select } from "flowbite-react";
import { useState } from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'

const URL = "http://localhost:3000/api/salas/new";

function Index() {

  const router = useRouter()

  const [nombre, setNombre] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [tamaño, setTamaño] = useState('')
  const [exposicion, setExposicion] = useState('')
  const [contenido, setContenido] = useState('')

  function handleInputNameChange(e) {
    setNombre(e.target.value)
  }

  function handleInputUbiChange(e) {
    setUbicacion(e.target.value)
  }

  function handleInputTamañoChange(e) {
    setTamaño(e.target.value)
  }

  function handleInputExpoChange(e) {
    setExposicion(e.target.value)
  }

  function handleInputContenidoChange(e) {
    setContenido(e.target.value)
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      await axios.post(URL,{
        nombre,
        ubicacion,
        tamaño,
        exposicion,
        contenido
      })
      router.push('/visitas')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="max-w-sm w-3/4 h-3/4 my-28 flex flex-col justify-center mx-auto">
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <p className="error">{""}</p>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Nombre</p>
            </div>
            <TextInput id="name" type="text" required={true} value={nombre} onChange={handleInputNameChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Ubicación</p>
            </div>
            <TextInput id="ubicacion" type="text" required={true} value={ubicacion} onChange={handleInputUbiChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Tamaño</p>
            </div>
            <TextInput id="tamaño" type="number" required={true} value={tamaño} onChange={handleInputTamañoChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Exposición</p>
            </div>
            <TextInput id="exposicion" type="text" required={true} value={exposicion} onChange={handleInputExpoChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Contenido</p>
            </div>
            <Textarea id="contenido" type="textarea" required={true} value={contenido} onChange={handleInputContenidoChange} />
          </div>
          <Button type="submit">Ingresar</Button>
        </form>
      </Card>
    </div>
  );
}

export default Index;
