import '@/app/globals.css'
import MuiAppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

export default function Layout(
    page: ReactElement
) {

    return (
        <>
            <MuiAppBar position='absolute' className='px-4 py-2'>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Movie Mashup
                </Typography>
            </MuiAppBar>

            <div className='mt-12'>
                {page}
            </div>
        </>
    )
}
