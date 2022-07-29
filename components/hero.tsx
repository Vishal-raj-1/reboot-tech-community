import { Box, Container, Typography, Stack, Button } from "@mui/material"

const Hero = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Reboot Tech Community
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Tech is changing daily so reboot yourself too from time to time
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">
                        <a href="#courses">Reboot Now</a>
                    </Button>
                    {/* discord community link */}
                    <Button variant="outlined">Join Community</Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default Hero