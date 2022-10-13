import { useState, useEffect } from "react"
import Error from './Error'


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) =>{
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(paciente).length > 0  ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return fecha + random
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if([nombre, propietario, email, alta, sintomas].includes('')){
           setError(true)
           return
        }
            setError(false)
            
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                alta,
                sintomas,
            }
            if(paciente.id) {
                // Editando el Registro
                objetoPaciente.id = paciente.id
                const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
    
                setPacientes(pacientesActualizados)
                setPaciente({})
    
            } else {
                // Nuevo registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);
            }
           

            //Restablecemos los campos del form
            setNombre('')
            setPropietario('')
            setEmail('')
            setAlta('')
            setSintomas('')
        
    }


    return (
        
        <div className="md:w-1/2 lg:w-2/5 mb-10">
            <h3 className="text-center font-bold text-3xl">Seguimiento de pacientes</h3>
            <p className="text-center text-lg mt-5">Añadir pacientes y<span className="text-green-600 font-bold"> Administrarlos</span></p>

            <form 
                onSubmit={handleSubmit}
                className="mt-10 py-10 px-5 bg-white rounded-md shadow-md ">
                {error && <Error error={"Todos los campos son obligatorios"}/>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block font-bold uppercase">
                        Nombre de la mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Ingresa el nombre de la mascota"
                        className="p-2 mt-2 rounded-md w-full border-2 placeholder-gray-400"
                        value={nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block font-bold uppercase">
                        Nombre del Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Ingresa el nombre del Propietario"
                        className="p-2 mt-2 rounded-md w-full border-2 placeholder-gray-400"
                        value={propietario}
                        onChange={(e)=> setPropietario(e.target.value)}
                       
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block font-bold uppercase">
                        Email de contacto
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto del propietario"
                        className="p-2 mt-2 rounded-md w-full border-2 placeholder-gray-400"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block font-bold uppercase">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="p-2 mt-2 rounded-md w-full border-2 placeholder-gray-400"
                        value={alta}
                        onChange={(e)=> setAlta(e.target.value)}
                        
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block font-bold uppercase">
                        Síntomas
                    </label>
                    <textarea 
                    className="p-2 mt-2 rounded-md w-full border-2 placeholder-gray-400"
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)}
                    
                    />
                </div>
                <input  
                        type="submit"
                        value={paciente.id ? 'Editar paciente':'Agregar paciente'}
                        className="bg-green-600 w-full text-white uppercase p-2 text-sm font-bold hover:bg-green-700 cursor-pointer" 
                />
            </form>

        </div>
    )
}
export default Formulario