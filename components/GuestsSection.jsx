import { Button } from 'flowbite-react'
import { useRouter } from 'next/router'

function GuestsSection() {

  const router = useRouter()

  return (
    <div className='my-20 bg-slate-100 flex flex-col justify-center items-center gap-y-10'>
      <h1 className='text-center font-medium text-4xl'>¡Inscribíte en visitas guiadas!</h1>
      
      <Button size={'xl'} onClick={()=> router.push('/visitas')} >
        Ver visitas
      </Button>
    </div>
  )
}

export default GuestsSection
