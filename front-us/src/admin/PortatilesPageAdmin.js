import React from 'react'
import TemplateAdmin from './TemplateAdmin'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const PortatilesPageAdmin = () => {
    const title = "Portátiles"

    return(
        <TemplateAdmin title={title}>
            <center>
                <h1>{title}</h1>
            </center>
            <Stack direction="row">
                <Button variant="contained" color="warning">Agregar Nuevo</Button>
            </Stack>
        </TemplateAdmin>
    )
}

export default PortatilesPageAdmin