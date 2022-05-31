import { Button, Grid, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { createProject, getProject } from '../backend/core/apiProject'
import { SnackbarContext } from '../contexts/SnackbarContext'
import { CreateProyectForm } from './CreateProyectForm'
import { MainTable } from './MainTable'
import { FilterBar } from './shared/SearchBar'

export const Dashboard = () => {
    const {
        showLoading, 
        hideLoading,
        showSnackbar
    } = useContext(SnackbarContext)
    const [showProjectForm, setShowProjectForm] = useState(false)
    const handleOpenProject = () => { setShowProjectForm(true) }
    const handleCloseProject = () => { setShowProjectForm(false) }
    const [proyectos, setProyectos] = useState([])
    const [proyectosFilter, setProyectosFilter] = useState([])

    const loadData = async () => {
        showLoading()
        const resp = await getProject()
        if(resp){
            setProyectos(resp)
            setProyectosFilter(resp)
        }else{
            showSnackbar('error', 'Error de servidor. Contacte el administrador')
            setProyectos([])
        }
        hideLoading()
    }

    const handleCreateProject = async values => {
        showLoading()
        const resp = await createProject(values)
        if(resp){
            await loadData()
            handleCloseProject()
            showSnackbar('success', 'Proyecto creado con éxito')
        }else{
            showSnackbar('error', 'Error de servidor. Contacte el administrador')
        }
        hideLoading()
    }
    
    useEffect(() => {
        async function init(){
            await loadData()
        }
        init()
    }, [])

    return (
        <Box mt={2}>
            <Paper>
                <Grid container spacing={2} p={2}>
                    <Grid item sm={9}>
                        <FilterBar
                            data={proyectos}
                            setDataFilter={setProyectosFilter}
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <Button
                            variant='contained'
                            onClick={handleOpenProject}
                            fullWidth
                        >
                            Crear proyecto
                        </Button>
                    </Grid>
                    <Grid item sm={12}>
                        <MainTable 
                            data={proyectosFilter}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <CreateProyectForm
                onSubmit={handleCreateProject}
                onClose={handleCloseProject}
                open={showProjectForm}
            />
        </Box>
    )
}
