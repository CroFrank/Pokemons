import { useState, useEffect } from 'react'
import { Pokemon } from "../components/Pokemon"
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box';
import { useLocation } from "react-router-dom";
import { sourceData } from '../data/sourceData'

interface PokemonProps {
    name: string
    url: string
}

export function AllPokemons() {
    const [data, setData] = useState(sourceData)
    const location = useLocation()

    useEffect(() => {
        if (location.state) {
            setData(location.state)
        } else {
            setData(sourceData)
        }
    }, [location.state])

    return <>
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "space-around" }}
            >
                {data.map((pokemon: PokemonProps) => {
                    return <Pokemon key={crypto.randomUUID()} pokemon={pokemon} />
                })}
            </Grid>
        </Box>
    </>
}