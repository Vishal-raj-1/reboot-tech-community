import { CardMedia, Grid, Typography, Container, CardContent } from '@mui/material'
import React from 'react'
import Socials from './socials'

const AboutFounder = () => {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container alignItems={'center'} justifyContent='center' spacing={2}>
                <Grid item xs={12} sm={4} textAlign='center'>
                    <CardMedia
                        component="img"
                        image="/images/vishalRajput.png"
                        alt="Vishal Rajput"
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={5}>
                    <CardContent>
                        <Typography mb={5} variant="h3" align='center'>
                            About Founder
                        </Typography>
                        <Typography mb={2} align='center'>
                            Vishal Rajput is frontend developer from India. He has worked for 5 startups in last 2 years.
                        </Typography>
                        <Typography mb={3} align='center'>
                            He has mentored 1000+ students regarding web development, data structure and algorithms, open source, interview preperation and lot more.
                        </Typography>
                        <Socials />
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutFounder
