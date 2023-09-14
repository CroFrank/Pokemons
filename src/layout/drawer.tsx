// import Typography from '@mui/material/Typography';

// interface DrawerProps {
//     open: boolean
// }

// export function Drawer(open: DrawerProps) {
//     return <Typography
//         variant="h6"
//         noWrap
//         component="div"
//         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//     >
//         'Pokemons'
//     </Typography>
// }
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

interface DrawerProps {
    data: boolean
}

export default function TemporaryDrawer(data: DrawerProps) {
    const data2 = data.data
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => !data2}
        // onKeyDown={toggleDrawer()}
        >
            <List>
                {['Home', 'About'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer
                open={data2}
            // onClose={toggleDrawer()}
            >
                {list()}
            </Drawer>
        </div>
    );
}
