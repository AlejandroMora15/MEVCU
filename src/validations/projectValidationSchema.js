import * as yup from 'yup'

export const projectValidationSchema = yup.object().shape({
    name: yup.string().required('Campo requerido'),
    description: yup.string().required('Campo requerida'),
})
