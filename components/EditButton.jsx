import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/authContext"

function EditButton() {
  
  const { userRol } = useAuthContext();
  const [rol, setRol] = useState(userRol)

  useEffect(() => {
    setRol(userRol)
  }, [])
  
  return (
    <>
      {rol === "1" && (
        <Button color={'success'} onClick={() => router.push(`/visitas/${id}`)}>
          Editar
          <svg
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      )}

{rol === "1" && (
        <Button color={'failure'} onClick={() => router.push(`/visitas/${id}`)}>
          X
        </Button>
      )}
    </>
  );
}

export default EditButton;
