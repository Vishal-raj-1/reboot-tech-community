import { AppBar, Toolbar, Typography } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';
const Navbar = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <TerminalIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Reboot Tech Community
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;