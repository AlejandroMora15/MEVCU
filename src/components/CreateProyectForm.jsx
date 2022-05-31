import { projectValidationSchema } from '../validations/projectValidationSchema'
import { Form, Formik } from 'formik'
import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import { MyTextInput } from '../styles/MyTextInput'

const initialValues = {
    name: '',
    description: ''
}

export const CreateProyectForm = ({onSubmit, onClose, open}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Crear proyecto</DialogTitle>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={projectValidationSchema}
            >
                {() => (
                    <Form>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        fullWidth
                                        name='name'
                                        label='Nombre del proyecto'
                                    />
                                </Grid>
                                <Grid item sm={6}>
                                    <MyTextInput
                                        fullWidth
                                        name='description'
                                        label='Descripción del proyecto'
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant='outlined'
                                color='error'
                                onClick={onClose}
                            >Cancelar</Button>
                            <Button 
                                type='submit'
                                variant='contained'
                            >
                                Aceptar
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    )
}
