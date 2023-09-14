import axios from "axios"
import { useState, useEffect } from 'react'
import { Pokemon } from "./Pokemon"
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box';

interface Pokemon {
    name: string
    url: string
}

export default function AllPokemons() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
            setData(response.data.results)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-around" }}
        >
            {data.map((pokemon: Pokemon) => {
                return <Pokemon key={crypto.randomUUID()} pokemon={pokemon} />
            })}
        </Grid>
    </Box>
}