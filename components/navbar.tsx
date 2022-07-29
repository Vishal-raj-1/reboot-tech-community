import { Toolbar, Typography } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';
const Navbar = () => {
    return (
        <Toolbar>
            <TerminalIcon sx={{ mr: 2 }} />
            <Typography variant="h6" noWrap>
                Reboot Tech Community
            </Typography>
        </Toolbar>
    )
}

export default Navbar;