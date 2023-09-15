
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

interface Pokemon {
    name: string
    url: string
}

export default function Navbar() {
    const [state, setState] = useState(false);
    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Link to={'/Pokemons'}><HomeIcon /></Link> : <Link to={'/Pokemons/info'}><InfoIcon /></Link>}
                            </ListItemIcon>
                            <Link to={text === 'Home' ? '/Pokemons' : '/Pokemons/info'}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const inputFetch = async (value: string) => {
        try {
            const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
            const data = response.data.results
            const result = data.filter((pokemon: Pokemon) => {
                return value && pokemon && pokemon.name && pokemon.name.toLocaleLowerCase().includes(value)
            })
            navigate('/Pokemons/', { replace: true, state: result })
            console.log(result)
        } catch (error) {
            console.error('Error:', error);
        }

    }

    const handleChange = (value: string) => {
        setInput(value)
        inputFetch(value)
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Pokemons
                        </Typography>
                        <div className="search-container">
                            <input
                                className="styled-input"
                                type="text"
                                placeholder="Search for Pokemon..."
                                value={input}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            <div className="search-icon">
                                <SearchIcon></SearchIcon>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}



