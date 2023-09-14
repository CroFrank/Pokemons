import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '60%',
    height: 'auto',
    padding: '50px',
    // padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    fontSize: '2rem'

}));


export function Info() {
    return (
        <Stack direction="row" spacing={2} display={'flex'} justifyContent={'center'} marginTop={3}>
            <DemoPaper variant="elevation">Hi,my name is Fran and I am self taught web developer
                and this is my practice, for fun, project to test my skills and attempt to build something
                decent looking but also very not useful. We all have to start somewhere, right?
                Here you can see all 151 Pokemons
                and all you wanted to know about them but was too afraid to ask.
            </DemoPaper>
        </Stack>
    );
}