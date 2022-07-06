import React, {useState} from 'react'
import Formulario from '../components/Formulario' 
import ListadoCitas from '../components/ListadoCitas';
import Cita from '../components/Cita';


export default function Home() {

  const [citas, setCitas] = useState([]);
  const borrarCita = id => {
    const nuevo = citas.filter(cita => cita.id !== id);
    setCitas(nuevo);
  }

  const titulo = citas.length ? 'Adminsitra tus citas' : 'No hay citas';

  return (
    <>
        <h1>Administrador de Pacientes</h1>
          <div className='container'>
            <div className='row'>
              <div className='column one-half'>
                <Formulario citas={citas} setCitas = {setCitas}/>
              </div>
              <div className='column one-half'>
                <ListadoCitas citas={citas} borrarCita = {borrarCita}/>
              </div>
            </div>
          </div>
    </>
  )
}
