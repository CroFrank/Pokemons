
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import { useState, useEffect } from 'react'

interface Pokemon {
    name: string
    url: string
}

interface Type {
    type: {
        name: string
    }
}

interface Data {
    name: string
    sprites: {
        front_default: string
    }
    types: Type[]
}

export function Pokemon({ pokemon }: { pokemon: Pokemon }) {
    const [data, setData] = useState<Data>({ name: '', sprites: { front_default: '' }, types: [] })
    const fetchData = async () => {
        try {
            const response = await axios(pokemon.url);
            setData(response.data)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Card sx={{
            maxWidth: 250,
            margin: 2,
            minWidth: 200,
        }}>
            <CardMedia
                sx={{
                    height: 170,
                    marginLeft: 7
                }}
                image={data?.sprites.front_default}
                title={data?.name}
                component="span"
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {data.name ? data?.name.toLocaleUpperCase() : 'no data'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>type:</b>
                    {data.types.map((type) => {
                        return <span key={crypto.randomUUID()}> {type.type.name}</span>
                    })}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

