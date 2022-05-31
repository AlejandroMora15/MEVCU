import * as yup from 'yup'

export const createAcooutValidationSchema = yup.object().shape({
    email: yup.string().email('Email no válido').required('Nombre de usuario requerido'),
    password: yup.string().required('Contraseña requerida'),
    repeat_password: yup.string()
})
