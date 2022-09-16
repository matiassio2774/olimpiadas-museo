import { Card, TextInput, Button, Textarea, Select } from "flowbite-react";
import { useState, useEffect } from 'react';
import axios from 'axios'

const URL_GUIAS = "http://localhost:3000/api/guias";

function Index() {

  const [guias, setGuias] = useState();
  const [guiaVisita, setGuiaVisita] = useState()

  function handleInputGuiaChange(e){
    setGuiaVisita(e.target.value)
  }

  useEffect(() => {
    async function getAllGuias(){
      try {
        const { data } = await axios.get(URL_GUIAS)
        setGuias(data)
      } catch (error) {
        console.error(error)
      }
    }
    getAllGuias()
  }, []);

  return (
    <div className="max-w-sm w-3/4 h-3/4 my-20 flex flex-col justify-center mx-auto">
      <Card>
        <form className="flex flex-col gap-4">
          <p className="error">{""}</p>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Nombre</p>
            </div>
            <TextInput id="name" type="text" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Descripción</p>
            </div>
            <Textarea id="desc" type="textarea" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Duración (min)</p>
            </div>
            <TextInput id="duracion" type="number" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <p className="font-semibold">Limite de personas</p>
            </div>
            <TextInput id="limite" type="number" required={true} />
          </div>
          <div id="select">
          <div className="mb-2 block">
              <p className="font-semibold">Guía</p>
            </div>
            <Select
              id="guias"
              required={true}
              onChange={handleInputGuiaChange}
            >
              {guias &&
                guias.map((guia, index) => (
                  <option value={guia.nombre} key={index}>
                    {guia.nombre}
                  </option>
                ))}
            </Select>
          </div>
          <Button type="submit">Ingresar</Button>
        </form>
      </Card>
    </div>
  );
}

export default Index;
