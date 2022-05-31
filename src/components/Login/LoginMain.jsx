import { Grid, Paper } from '@mui/material'
import logo from '../../assets/imgs/logo.png'
import React, { useContext } from 'react'
import { LoginForm } from './LoginForm'
import { AppBarHeader } from '../shared/AppBarHeader'
import { SnackbarContext } from '../../contexts/SnackbarContext'
import { createUser, signIn } from '../../backend/core/apiUser'
import { useNavigate } from 'react-router-dom'

export const LoginMain = () => {
    const {
        showSnackbar,
        showLoading,
        hideLoading 
    } = useContext(SnackbarContext)
    const navigate = useNavigate()

    const handleLogIn = async ({email, password}) => {
        showLoading()
        const resp = await signIn(email, password)
        if(resp){
            showSnackbar('success', 'Bienvenido a MEVCU')
            navigate('/Dashboard')
        }else{
            showSnackbar('error', 'Usuario o contraseña inválidos')
        }
        hideLoading()
    }

    const handleCreateAccount = async ({email, password, repeat_password}) => {
        showLoading()
        if(repeat_password === password){
            const resp = await createUser({email, password})
            if(resp){
                showSnackbar('success', 'Creación de usuario exitoso')
            }else{
                showSnackbar('error', 'Error al crear el usuario')
            }
        }else{
            showSnackbar('error', 'Las contraseñas deben ser iguales')
        }
        hideLoading()
    }


    return (
        <div className='login-container'>
            <AppBarHeader />
            <Grid container justifyContent='center' style={{marginTop: '15vh'}}>
                <Grid item xs={5} justifyContent='center'>
                    <Paper elevation={1} style={{backgroundColor: 'hsla(0,0%,100%,.8)'}}>
                        <Grid p={2}>
                            <img src={logo} alt='MEVCU' height='100%' width='100%' />
                            <LoginForm 
                                submitCreateAccount={handleCreateAccount}
                                loggin={handleLogIn}
                            />
                        </Grid>                        
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
