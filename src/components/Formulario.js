import React, {Fragment, useState} from 'react'

function Formulario() {
  const [datos, setDatos] = useState({
    nombreMascota: '',
    nombreDueno: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}
const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + datos.nombreMascota + ' ' + datos.nombreDueno + ' ' + datos.fecha + ' ' + datos.hora  + ' ' + datos.sintomas)
}
  return (
    <Fragment>
            <h1>Crear mi Cita</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre de la Mascota" className="form-control" onChange={handleInputChange} name="nombreMascota"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre del dueño" className="form-control" onChange={handleInputChange} name="nombreDueño"></input>
                </div>
                <div className="col-md-3">
                    <input type="date" placeholder="Fecha" className="form-control" onChange={handleInputChange} name="fecha"></input>
                </div>
                <div className="col-md-3">
                    <input type="time" placeholder="Hora" className="form-control" onChange={handleInputChange} name="hora"></input>
                </div>
                <div className="col-md-3">
                    <textarea  className="form-control" onChange={handleInputChange} name="texto"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>
        </Fragment>
  )
}
export default Formulario