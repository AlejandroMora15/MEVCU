import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { FilterBar } from '../shared/SearchBar'
import { CasosUsoTable } from './CasosUsoTable'

export const DashboardCasosUso = () => {
    const { state } = useLocation()
    return (
        <Box mt={2}>
            <Paper>
                <Grid container spacing={2} p={2}>
                    <Grid item sm={12} textAlign='center'>
                        <Typography variant="h4">
                            {state.name}
                        </Typography>
                    </Grid>
                    <Grid item sm={9}>
                        <FilterBar
                            data={[]}
                            setDataFilter={() => {}}
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <Button
                            color='success'
                            variant='contained'
                            fullWidth
                        >
                            Crear caso de uso
                        </Button>
                    </Grid>
                    <Grid item sm={12} >
                        <CasosUsoTable />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
