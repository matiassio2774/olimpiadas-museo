import { Card, Alert } from "flowbite-react";

function F1({ page }) {
  return (
    <>
      {page === 1 ? (
        <div className="max-w-sm mx-auto">
          <Card imgSrc="/museo.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              El siguiente punto se encuentra a 20 metros.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Se encuentra en la sala principal
            </p>
          </Card>
        </div>
      ) : page === 2 ? (
        <div className="max-w-sm mx-auto">
          <Card>
            <Alert
              color="success"
            >
              <span>
                <span className="font-medium">
                🔊📳
                </span>
                {' '}(Vibracion)
              </span>
            </Alert>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ha llegado al primer punto inteligente.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            🗣 (Descripcion)<br /> Se encuentra en la Sala A: Diseños NFT.
            </p>
          </Card>
        </div>
      ) : page === 3 ? (
        <div className="max-w-sm mx-auto">
          <Card imgSrc="/museo.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              El siguiente punto se encuentra a 25 metros.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Se encuentra en la zona superior izquierda del museo.
            </p>
          </Card>
        </div>
      ) : page === 4 ? (
        <div className="max-w-sm mx-auto">
          <Card>
          <Alert
              color="success"
            >
              <span>
                <span className="font-medium">
                🔊📳
                </span>
                {' '}(Vibracion)
              </span>
            </Alert>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ¡Ha llegado al último punto inteligente!
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            🗣 (Descripcion)<br /> Se encuentra en la Sala B: Mercado y estadísticas.
            </p>
          </Card>
        </div>
      ) : null}
    </>
  );
}

export default F1;
