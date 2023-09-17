
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

interface Ab {
    ability: { name: string }
}

interface Type {
    type: { name: string }
}

export function ThePokemon() {
    const { state } = useLocation();

    return (
        <div className='centered-div'>
            <Card sx={{ minWidth: 350, minHeight: 450 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={state?.sprites.front_default}
                        alt="green iguana"
                        sx={{
                            margin: '17px'
                        }}
                    />
                    <CardContent sx={{
                        margin: '17px'
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {state.name.toUpperCase()}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li> <b>Height:</b> {state.height} feet</li>
                                <li> <b>Weight:</b> {state.weight} pounds</li>
                                <li> <b>Abilities:</b>
                                    <ol>{state.abilities.map((ab: Ab) => {
                                        return <li key={crypto.randomUUID()}>{ab.ability.name}</li>
                                    })} </ol>
                                </li>
                                <li> <b>Types:</b>
                                    <ol>{state.types.map((type: Type) => {
                                        return <li key={crypto.randomUUID()}> {type.type.name}</li>
                                    })}</ol>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{
                    margin: '17px'
                }}>
                    <Link to={`/Pokemons/`} >
                        <Button size="small">Back to all Pokemons</Button>
                    </Link>
                </CardActions>
            </Card>
        </div >
    );
}
