import { Button } from "flowbite-react";
import { useAuthContext } from "../context/authContext";
import {useRouter} from 'next/router'

function AddSButton() {

  const { userRol } = useAuthContext();
  const router = useRouter()

  return (
    <div className="mx-auto">
      {userRol === "1" && (
        <Button onClick={() => router.push(`/salas/new`)}>
          Añadir Sala
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
    </div>
  );
}

export default AddSButton;
