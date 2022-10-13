const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, alta, sintomas} = paciente

  const handleDelete =() =>{
      confirm('¿Seguro que quiere eliminar a este paciente?')
      if (confirm){
        eliminarPaciente(paciente.id)
      }
  }

  return (
         <div className=" mt-10 bg-white rounded-md py-10 mx-5 shadow-md">
            <p className="mx-3 text-sm font-bold uppercase text-gray-700 mb-2">Mascota: 
              <span className="normal-case font-normal"> {nombre}</span>
            </p>
            <p className="mx-3 text-sm font-bold uppercase text-gray-700 mb-2">Propietario: 
              <span className="normal-case font-normal"> {propietario}</span>
            </p>
            <p className="mx-3 text-sm font-bold uppercase text-gray-700 mb-2">Email: 
              <span className="normal-case font-normal"> {email}</span>
            </p>
            <p className="mx-3 text-sm font-bold uppercase text-gray-700 mb-2">Fecha de alta: 
              <span className="normal-case font-normal"> {alta}</span>
            </p>
            <p className="mx-3 text-sm font-bold uppercase text-gray-700 mb-2">Sintomas: 
              <span className="normal-case font-normal"> {sintomas}</span>
            </p>
            <div className="flex justify-between mt-5 mx-2">
              <button
                  onClick={()=>setPaciente(paciente)}
                  type="button"
                  className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md"
                  >Editar
              </button>
              <button
                  onClick={handleDelete}
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md"
                  >Eliminar
              </button>
            </div>
        </div>
  )
}

export default Paciente