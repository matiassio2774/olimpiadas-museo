import { Card, Button } from 'flowbite-react'
import { useRouter } from 'next/router'

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicButton = dynamic(() => import('../components/EditButton'), {
  ssr: false,
})

function VisitCard({ id, data }) {
  
  const router = useRouter()
  
  return (
    <Card imgSrc="/visita.jpg">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data.nombre}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {data.descripcion}
      </p>

      <div className='flex justify-between  items-center gap-2'>
        <Button onClick={() => router.push(`/visitas/${id}`)}>
          Inscribirse
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

        <Suspense fallback={`Loading...`}>
          <DynamicButton />
        </Suspense>
        

      </div>
    </Card>
  )
}

export default VisitCard
