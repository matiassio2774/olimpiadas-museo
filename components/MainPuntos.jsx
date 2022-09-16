import { Button, Modal, Pagination, Card } from "flowbite-react";
import { useState } from "react";
import F1 from "./recorrido/F1";

function MainPuntos() {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  function onNext() {
    if(page < 4){
      setPage(page+1);
    }

  }
  function onPrev() {
    if(page > 1){
      setPage(page-1);
    }
  }

  console.log(page)

  return (
    <div className="my-20 bg-slate-100 flex flex-col justify-center items-center gap-y-10 transition-all">
      <h1 className="text-center font-medium text-4xl">
        Sistema de puntos inteligentes
      </h1>

      <Button onClick={() => setShow(true)} size={"xl"}>
        Iniciar recorrido
      </Button>
      <Modal show={show} onClose={() => setShow(false)} size="xl">
        <Modal.Header>Recorrido inteligente</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <F1 page={page}/>
            <div className="w-full flex justify-center gap-2 items-center">
              <Button onClick={onPrev}>Volver</Button>
              <Button onClick={onNext}>Avanzar</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MainPuntos;
