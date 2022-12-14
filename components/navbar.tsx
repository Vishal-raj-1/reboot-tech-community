import { Toolbar, Typography } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';
const Navbar = () => {
    return (
        <Toolbar>
            <TerminalIcon sx={{ mr: 2, color: "#fff"}}/>
            <Typography variant="h6" color="#fff" noWrap fontWeight={'700'}>
                Reboot Tech Community
            </Typography>
        </Toolbar>
    )
}

export default Navbar;