import { Box, Container, Typography, Stack, Button } from "@mui/material"
import styles from '../styles/home.module.css';

const Hero = () => {
    return (
        <Box
            sx={{
                pt: 3,
                pb: 2,
            }}
        >
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    gutterBottom
                    fontWeight={'700'}
                    color="#fff"
                >
                    Reboot Tech Community
                </Typography>
                <Typography variant="h5" align="center" paragraph color="#fff">
                Tech is changing daily so reboot yourself too from time to time
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" className={styles.gradientButton}>
                        <a href="#courses">Reboot Now</a>
                    </Button>
                    {/* discord community link */}
                    <Button variant="contained" className={styles.gradientButton}>
                        <a href="https://discord.gg/WB7FVmXY">Join Community</a>
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default Hero