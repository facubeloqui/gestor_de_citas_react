import React, { Component } from 'react'
import { Formik, Field, Form } from 'formik';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';


const Validacion = yup.object({

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
            justifyContent: 'center'
          }} >
            <TextField 
            helperText="Ingrese un email"
            id="email"
            label="Email"/>

            

          </Box>
      </div>
    )
  }
}

export default Formulario