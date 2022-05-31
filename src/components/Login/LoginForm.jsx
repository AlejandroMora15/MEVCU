import { Button, Grid, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { MyTextInput } from '../../styles/MyTextInput'
import { createAcooutValidationSchema } from '../../validations/createAccountValidationSchama'

const loginInitialValues = {
    email: '',
    password: '',
    repeat_password: ''
}

export const LoginForm = ({loggin, submitCreateAccount}) => {
    const [createAccount, setCreateAccount] = useState(false)

    const handleCreateAccount = () => {
        setCreateAccount(true)
    }

    const handleShowLoggin = () => {
        setCreateAccount(false)
    }

    return (
        <Grid spacing={1} container>
            { createAccount ? 
                <CreateAccountForm 
                    submitCreateAccount={submitCreateAccount}
                    handleShowLoggin={handleShowLoggin}
                />: 
                <LogginForm 
                    loggin={loggin} 
                    handleCreateAccount={handleCreateAccount}
                />
            }
        </ Grid>
    )
}


const LogginForm = ({loggin, handleCreateAccount}) => (
    <Formik 
        initialValues={loginInitialValues}
        onSubmit={loggin}
    >
        {() => (
            <Form >
                <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <MyTextInput
                            required
                            name="email"
                            label="Usuario"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <MyTextInput
                            name="password"
                            label="Contraseña"
                            type='password'
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <Button 
                            id='login'
                            type='submit' 
                            variant='contained' 
                            fullWidth
                        >INICIAR SESIÓN</Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Button 
                            id='create_account_show'
                            variant='contained' 
                            fullWidth 
                            onClick={handleCreateAccount}
                        >CREAR CUENTA</Button>
                    </Grid>  
                </Grid>
            </Form>
        )}
    </Formik>
)

const CreateAccountForm = ({submitCreateAccount, handleShowLoggin}) => (
    <Formik
        initialValues={loginInitialValues}
        validationSchema={createAcooutValidationSchema}
        onSubmit={submitCreateAccount}
    >
        {() => (
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <MyTextInput
                            name="email"
                            label="Usuario"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextInput
                            name="password"
                            label="Contraseña"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MyTextInput
                            name="repeat_password"
                            label="Ingresa nuevamente la contraseña"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            id='create_account'
                            type='submit'
                            variant='contained'  
                            fullWidth
                        >CREAR CUENTA</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            id='cancel_create_account'
                            variant='contained' 
                            color='error' 
                            onClick={handleShowLoggin} 
                            fullWidth
                        >CANCELAR</Button>
                    </Grid>  
                </Grid>
            </Form>
        )}
    </Formik>
)
