import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const AppBarHeader = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <b>MEVCU</b> <small>Modelo de Evaluación y Validación de Casos de Uso</small>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}