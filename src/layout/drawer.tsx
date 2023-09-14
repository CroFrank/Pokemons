import Typography from '@mui/material/Typography';

interface DrawerProps {
    open: boolean
}

export function Drawer(open: DrawerProps) {
    return <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
        {open.open ? 'Home About' : 'Pokemons'}
    </Typography>
}