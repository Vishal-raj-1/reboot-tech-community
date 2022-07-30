import { CardMedia, Grid, Typography, Container, CardContent, Card } from '@mui/material'
import React from 'react'
import Socials from './socials'
import style from '../styles/home.module.css';

const AboutFounder = () => {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container alignItems={'center'} justifyContent='space-around' spacing={4} wrap='wrap'>
                <Grid item xs={12} md={4} textAlign='center'>
                    <CardMedia
                        component="img"
                        image="/images/vishalRajput.png"
                        alt="Vishal Rajput"
                        className={style.founderImage}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className={style.glass}>
                        <CardContent>
                            <Typography mb={3} variant="h3" align='center' color='#fff' fontWeight={'700'}>
                                About Founder
                            </Typography>
                            <Typography mb={2} align='center' className={style.subHeading}>
                                Vishal Rajput is frontend developer from India. He have worked for 5 startups in last 2 years.
                            </Typography>
                            <Typography mb={3} align='center' className={style.subHeading}>
                                He have mentored 1000+ students regarding web development, data structure and algorithms, open source, interview preperation and lot more.
                            </Typography>
                            <Socials />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutFounder
