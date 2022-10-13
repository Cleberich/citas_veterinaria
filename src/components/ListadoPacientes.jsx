import { useEffect } from 'react'
import Pacientes from './Pacientes'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(()=>{
    if(pacientes.length > 0){

    }
  }, [pacientes])


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
          <h2  className="text-center font-bold text-3xl">{ pacientes.length > 0 ? 'Listado de Pacientes': 'Aún no hay pacientes'}</h2>
              <p className="text-center text-lg mt-5">Administra tus
                <span className="text-green-600 font-bold"> pacientes y citas</span>
              </p>
                  { pacientes.map(paciente => {
                    return (
                         <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                         />
                    )
                  })}
        </div>
  )
}

export default ListadoPacientes