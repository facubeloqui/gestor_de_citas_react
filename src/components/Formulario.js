import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import * as yup from 'yup'
import Button from '@mui/material/Button';


const Validacion = yup.object({
    email: yup
    .string('Ingresa tu mail')
    .email('Ingresa un email valido')
    .required('De esta no safas')
})


export class Formulario extends Component {
  render() {
    return (
      
      <div>
          <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
            justifycontent: 'center'
          }} >
            <TextField 
            helperText="Ingrese un email"
            id="email"
            label="Email"/>
            
          <Button variant='Contained' justifyContent='center' onClick={Validacion}>Enviar</Button>

          </Box>

          

          

          
      </div>
      
    )
  }
}

export default Formulario