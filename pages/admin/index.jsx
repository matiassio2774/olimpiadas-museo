import { Button } from 'flowbite-react'
import Link from 'next/link'
function Index() {

  return (
    <div className='w-full flex flex-col gap-6 justify-center items-center h-4/5'>
      <h1 className='text-2xl font-bold'>Panel de administración</h1>

      <Link href='/admin/crear_visita'>
        <Button
        outline={true}
        gradientDuoTone="purpleToBlue"
        >Crear Visita</Button>
      </Link>

      <Link href='/admin/editar_visita'>
        <Button
        outline={true}
        gradientDuoTone="purpleToBlue"
        >Editar Visita</Button>
      </Link>

      <Link href='/admin/editar_info'>
        <Button
        outline={true}
        gradientDuoTone="purpleToBlue"
        >Editar información de museo</Button>
      </Link>
    </div>
  )
}

export default Index