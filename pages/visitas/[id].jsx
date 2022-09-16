import axios from "axios";
import { Card, Button } from "flowbite-react";


import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicButton = dynamic(() => import("../../components/AddSButton"), {
  ssr: false,
});

function Visita({ visita }) {
  console.log(visita);
  return (
    <div className="mt-10 ">
      <Suspense fallback={`Loading...`}>
        <DynamicButton />
      </Suspense>
      <h1 className="text-2xl font-medium text-center">Salas a recorrer:</h1>
      <div className="my-10 w-3/4 max-w-xs mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-2xl gap-x-10 gap-y-4">
      {visita.map((info, index) => (
        <Card key={index}>
          <h1 className="text-2xl text-center font-bold">SALA {index + 1}</h1>
          <p><b>Nombre:</b> {info.nombre}</p>
          <p><b>Ubicacion:</b> {info.ubicacion}</p>
          <p><b>Guia:</b> {info.guia}</p>
          <p><b>Idioma:</b> Español </p>
          <p><b>Exposicion:</b> {info.exposicion}</p>
          <p><b>Contenido:</b> {info.contenido}</p>
        </Card>
      ))}
      </div>
      <div className="w-full flex justify-center h-24">
        <Button size='xl'>¡Inscribirse!</Button>
      </div>
    </div>
  );
}

export default Visita;

export async function getStaticProps({ params }) {
  const _URL = "http://localhost:3000/api/visitas";
  const { data } = await axios.get(`${_URL}/${params.id}`);
  const visita = data;
  console.log(visita);
  return {
    props: {
      visita,
    },
  };
}

export async function getStaticPaths() {
  const _URL = "http://localhost:3000/api/visitas";
  const { data } = await axios.get(_URL);
  const visits = data;
  const paths = visits.map((visita) => ({
    params: { id: visita.id_visita.toString() },
  }));
  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
